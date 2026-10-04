// A site's database in one JSON file: everything @popcraft/runtime's server asks of a database (its `SiteDatabase`),
// for a small site that would rather not run Postgres. Swap in `neonStore` from @popcraft/runtime/server, or your own
// store, without touching anything else.

import { randomUUID } from 'node:crypto'
import { existsSync, readFileSync, renameSync, writeFileSync } from 'node:fs'

export function fileStore(path) {
  const read = () => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : { submissions: [], records: [] })
  // Written to a temporary file and moved into place, so a crash mid-write never leaves half a file.
  const write = data => { writeFileSync(`${path}.tmp`, JSON.stringify(data, null, 2)); renameSync(`${path}.tmp`, path) }
  const newestFirst = (a, b) => b.createdAt.localeCompare(a.createdAt)
  return {
    async ensure() { if (!existsSync(path)) write(read()) },
    async saveSubmission(form, data) { const d = read(); d.submissions.push({ id: randomUUID(), form, data, createdAt: new Date().toISOString() }); write(d) },
    async submissions({ form, limit }) { return read().submissions.filter(s => !form || s.form === form).sort(newestFirst).slice(0, limit) },
    async records(collection, owner, limit) { return read().records.filter(r => r.collection === collection && r.owner === owner).sort(newestFirst).slice(0, limit).map(({ id, data, createdAt }) => ({ id, data, createdAt })) },
    async sharedRecords(collection, limit) { return read().records.filter(r => r.collection === collection).sort(newestFirst).slice(0, limit).map(({ id, data, createdAt, owner }) => ({ id, data, createdAt, owner })) },
    async countRecords(collection, owner) { return read().records.filter(r => r.collection === collection && r.owner === owner).length },
    async saveRecord(collection, owner, data, id) {
      const d = read()
      if (id) {
        const r = d.records.find(x => x.id === id && x.collection === collection && x.owner === owner)
        if (!r) return null
        r.data = data; write(d); return { id: r.id, data: r.data, createdAt: r.createdAt }
      }
      const r = { id: randomUUID(), collection, owner, data, createdAt: new Date().toISOString() }
      d.records.push(r); write(d)
      return { id: r.id, data: r.data, createdAt: r.createdAt }
    },
    async deleteOwner(owner) { const d = read(); d.records = d.records.filter(r => r.owner !== owner); write(d) },
    async deleteRecord(collection, owner, id) { const d = read(); const n = d.records.length; d.records = d.records.filter(r => !(r.id === id && r.collection === collection && r.owner === owner)); write(d); return d.records.length < n },
  }
}
