// Builds every template here (or the folders named) into what PopCraft takes:
//   <folder>/template.json   the template, for `popcraft publish` to upload to your account
//   <folder>/<id>.popcraft   the same design as a file, to open in PopCraft and look at every size
// A template whose design has a problem a person would see (unreadable text, also under a light and a dark brand kit;
// text too small; words under an app's buttons; overlap; an empty band; a loop that jumps) is not written: the run
// fails and says what to fix. The checks cannot judge composition: open the .popcraft and look before you publish.
//
//   node build.mjs                 every template folder
//   node build.mjs sale-reel       just that one

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { runDesign, toPopcraft, toTemplate } from '@popcraft/kit'

const here = new URL('.', import.meta.url).pathname
const folders = process.argv.slice(2).length ? process.argv.slice(2) : readdirSync(here).filter(f => existsSync(join(here, f, 'template.config.json')))

let failed = 0
for (const folder of folders) {
  const config = JSON.parse(readFileSync(join(here, folder, 'template.config.json'), 'utf8'))
  const script = readFileSync(join(here, folder, 'design.js'), 'utf8')
  // The size the design is made at: its first line, `// size: <PopCraft size preset>`.
  const size = /^\/\/\s*size:\s*(\S+)/.exec(script)?.[1] ?? 'ig-post'
  const { document, error, issues } = await runDesign(script, { size, name: config.name })
  if (error) { console.log(`✗ ${folder}: line ${error.line ?? '?'}: ${error.message}`); failed++; continue }
  if (issues.length) {
    console.log(`✗ ${folder}:`)
    for (const i of issues) console.log(`    ${i.size}  ${i.kind.padEnd(12)} ${i.layer}: ${i.message}`)
    failed++
    continue
  }
  const template = toTemplate(document, config)
  writeFileSync(join(here, folder, 'template.json'), JSON.stringify(template))
  writeFileSync(join(here, folder, `${config.id}.popcraft`), toPopcraft(document))
  console.log(`✓ ${folder}: ${template.payload.variants.map(v => v.sizeId).join(', ')}`)
}
process.exitCode = failed ? 1 : 0
