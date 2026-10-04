// Builds every template here (or the folders named) into what PopCraft takes:
//   <folder>/template.json   the template, for `popcraft publish` to upload to your account
//   <folder>/<id>.popcraft   the same design as a file, to open in PopCraft and look at every size
// A template whose design has a problem a person would see (unreadable text, also under a light and a dark brand kit;
// text too small; words under an app's buttons; overlap; an empty band; a loop that jumps) is not written: the run
// fails and says what to fix. Then the checks PopCraft's own templates are held to (`checkTemplate`): measured with
// real type every text holds its lines, a web page changes on a tablet and a phone, and everything in it can be edited.
// The checks cannot judge composition: open the .popcraft and look before you publish.
//
// Your own images and sounds go in <folder>/assets/. Each is copied to <folder>/media/<hash> and the script sees it as
// MEDIA['<file name>'] (a media://<hash> reference, for an image fill or a timeline's audio). `popcraft pictures`
// draws with them and `popcraft publish` uploads them with the template.
//
//   node build.mjs                 every template folder
//   node build.mjs sale-reel       just that one

import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { checkTemplate, mediaHash, runDesign, toPopcraft, toTemplate } from '@popcraft/kit'

const here = new URL('.', import.meta.url).pathname
const folders = process.argv.slice(2).length ? process.argv.slice(2) : readdirSync(here).filter(f => existsSync(join(here, f, 'template.config.json')))

let failed = 0
for (const folder of folders) {
  const config = JSON.parse(readFileSync(join(here, folder, 'template.config.json'), 'utf8'))
  const script = readFileSync(join(here, folder, 'design.js'), 'utf8')
  // The size the design is made at: its first line, `// size: <PopCraft size preset>`.
  const size = /^\/\/\s*size:\s*(\S+)/.exec(script)?.[1] ?? 'ig-post'
  // Its own media, by file name: copied to media/<hash>, and given to the script as MEDIA.
  const media = {}
  const assets = join(here, folder, 'assets')
  if (existsSync(assets)) {
    mkdirSync(join(here, folder, 'media'), { recursive: true })
    for (const name of readdirSync(assets).filter(n => !n.startsWith('.'))) {
      const hash = mediaHash(new Uint8Array(readFileSync(join(assets, name))))
      copyFileSync(join(assets, name), join(here, folder, 'media', hash))
      media[name] = `media://${hash}`
    }
  }
  // On the script's first line, so the line numbers in its errors stay its own.
  const { document, error, issues } = await runDesign(`const MEDIA = ${JSON.stringify(media)}; ${script}`, { size, name: config.name })
  if (error) { console.log(`✗ ${folder}: line ${error.line ?? '?'}: ${error.message}`); failed++; continue }
  if (issues.length) {
    console.log(`✗ ${folder}:`)
    for (const i of issues) console.log(`    ${i.size}  ${i.kind.padEnd(12)} ${i.layer}: ${i.message}`)
    failed++
    continue
  }
  // The listing is checked here: an id, a category for the design's kind, platforms, formats and use cases the gallery knows.
  let template
  try { template = toTemplate(document, config) } catch (e) { console.log(`✗ ${folder}: ${e.message}`); failed++; continue }
  const problems = await checkTemplate(template)
  if (problems.length) {
    console.log(`✗ ${folder}:`)
    for (const i of problems) console.log(`    ${(i.size ?? '').padEnd(12)} ${i.check.padEnd(12)} ${i.layer ? `${i.layer}: ` : ''}${i.message}`)
    failed++
    continue
  }
  writeFileSync(join(here, folder, 'template.json'), JSON.stringify(template))
  writeFileSync(join(here, folder, `${config.id}.popcraft`), toPopcraft(document))
  console.log(`✓ ${folder}: ${template.payload.variants.map(v => v.sizeId).join(', ')}`)
}
process.exitCode = failed ? 1 : 0
