// One Instagram post for each event in events.json, written as .popcraft files you can open and edit in PopCraft.
// Each card is a design script run by @popcraft/kit: the same text the editor's agent and `popcraft write_design` take.
// Every card is checked (contrast, text size, safe areas, overlap) and the run fails if one has a problem.
//
//   node make-cards.mjs            → out/<slug>.popcraft

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { runDesign, toPopcraft } from '@popcraft/kit'

const events = JSON.parse(readFileSync(new URL('./events.json', import.meta.url), 'utf8'))

/** The design script for one event. Its words go in as JSON, so quotes and accents are safe. */
const card = event => `
const e = ${JSON.stringify(event)}
// Words on the text roles (text, onAccent) so any brand kit keeps them readable; accent is for shapes.
k.brand({ paper: '#F6F1E7', text: '#1B1A17', accent: '#E4572E', onAccent: '#FFFFFF' }, { name: 'Leeds Makers' })
k.textStyle('Kicker', { size: 28, fontWeight: 800, letterSpacing: 2, lineHeight: 36 })
k.textStyle('Title', { size: 112, fontWeight: 900, lineHeight: 108, letterSpacing: -3 })
k.textStyle('Detail', { size: 40, fontWeight: 600, lineHeight: 52 })
k.textStyle('Date', { size: 200, fontWeight: 900, lineHeight: 180, letterSpacing: -8 })
// The frame is a column: the name at the top, the date big in the middle, the details at the foot.
k.flowSheet(k.sheet, 0, { top: 96, right: 96, bottom: 96, left: 96 }, 'paper', 'SPACE_BETWEEN')
const head = k.stack(k.sheet, { gap: 36, width: 'FILL', name: 'Head' })
const plate = k.stack(head, { direction: 'HORIZONTAL', width: 'HUG', fill: 'accent', radius: 8, padding: { top: 14, right: 22, bottom: 14, left: 22 }, name: 'Kicker plate' })
k.text(plate, 'LEEDS MAKERS PRESENTS', { style: 'Kicker', color: 'onAccent', autoWidth: true })
k.text(head, e.title, { style: 'Title', color: 'text', width: 'FILL', name: 'Title' })
k.text(k.sheet, e.date, { style: 'Date', color: 'text', width: 'FILL', name: 'Date' })
const foot = k.stack(k.sheet, { gap: 14, width: 'FILL', name: 'Details' })
k.rect(foot, 160, 10, 'accent', { name: 'Rule' })
for (const line of [e.when, e.where, e.price]) k.text(foot, line, { style: 'Detail', color: 'text', width: 'FILL' })
`

mkdirSync(new URL('./out/', import.meta.url), { recursive: true })
let failed = 0
for (const event of events) {
  const { document, error, issues } = await runDesign(card(event), { size: 'ig-post', name: event.title })
  if (error) { console.error(`✗ ${event.slug}: line ${error.line}: ${error.message}`); failed++; continue }
  writeFileSync(new URL(`./out/${event.slug}.popcraft`, import.meta.url), toPopcraft(document))
  const problems = issues
  console.log(`${problems.length ? '!' : '✓'} out/${event.slug}.popcraft${problems.length ? ` — ${problems.map(i => `${i.kind} (${i.layer}): ${i.message}`).join("; ")}` : ''}`)
  if (problems.length) failed++
}
process.exitCode = failed ? 1 : 0
