// The server side of a site exported from PopCraft, without Vercel or a framework: a plain Node server that answers
// the site's own requests (`/_pc/…`: its forms, and visitors' records when it has them) with @popcraft/runtime, and
// keeps everything in a JSON file. Put your exported pages in public/ and it serves them too.
//
//   node server.mjs                  → http://localhost:8787, submissions kept in data.json

import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { siteRequest } from '@popcraft/runtime/server'
import { fileStore } from './file-store.mjs'

const PORT = Number(process.env.PORT ?? 8787)
const db = fileStore(new URL('./data.json', import.meta.url).pathname)
await db.ensure()

// What this site is: its forms (by the id PopCraft gave each form), its database, and no sign-in.
const site = {
  database: async () => db,
  auth: async () => null,
  hasForm: id => ['newsletter', 'contact'].includes(id),
  collection: () => undefined,
  secure: false, // local http: the session cookie is not https-only here; leave this out in production
}

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' }
const PUBLIC = new URL('./public/', import.meta.url).pathname

/** Node's request as a web Request, which is what the runtime's handler takes (and returns a web Response). */
async function toRequest(req) {
  const chunks = []
  for await (const c of req) chunks.push(c)
  const body = chunks.length ? Buffer.concat(chunks) : undefined
  return new Request(`http://${req.headers.host}${req.url}`, { method: req.method, headers: req.headers, ...(body && req.method !== 'GET' ? { body } : {}) })
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  // The site's own requests first: forms, sign-in and records all live under /_pc/.
  const answer = await siteRequest(await toRequest(req), url.pathname, site)
  if (answer) {
    res.writeHead(answer.status, Object.fromEntries(answer.headers))
    res.end(Buffer.from(await answer.arrayBuffer()))
    return
  }
  // Anything else is a page or a file of the exported site.
  const file = normalize(join(PUBLIC, url.pathname === '/' ? 'index.html' : url.pathname))
  if (!file.startsWith(PUBLIC)) { res.writeHead(403).end(); return }
  try {
    res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' })
    res.end(await readFile(file))
  } catch { res.writeHead(404, { 'content-type': 'text/plain' }).end('Not found') }
}).listen(PORT, () => console.log(`http://localhost:${PORT}  (forms: newsletter, contact · kept in data.json)`))
