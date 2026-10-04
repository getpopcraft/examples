// A design gate for CI: builds every design script in designs/ with @popcraft/kit and fails when one has a problem a
// person would notice — words too faint to read (also under a light and a dark brand kit), text too small, words
// under an app's buttons, layers overlapping, a frame left half empty, or a loop that jumps where it starts again.
//
//   node check.mjs                 every designs/*.js at its size (a `// size: <preset>` first line, else ig-post)
//   node check.mjs designs/x.js    just those

import { readdirSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { runDesign } from '@popcraft/kit'

const dir = new URL('./designs/', import.meta.url).pathname
const files = process.argv.slice(2).length ? process.argv.slice(2) : readdirSync(dir).filter(f => f.endsWith('.js')).map(f => join(dir, f))

let failures = 0
for (const file of files) {
  const source = readFileSync(file, 'utf8')
  const size = /^\/\/\s*size:\s*(\S+)/.exec(source)?.[1] ?? 'ig-post'
  const { error, issues } = await runDesign(source, { size, name: basename(file, '.js') })
  if (error) {
    console.log(`✗ ${basename(file)}: line ${error.line ?? '?'}: ${error.message}`)
    failures++
  } else if (issues.length) {
    console.log(`✗ ${basename(file)} (${size}):`)
    for (const i of issues) console.log(`    ${i.size}  ${i.kind.padEnd(12)} ${i.layer}: ${i.message}`)
    failures++
  } else console.log(`✓ ${basename(file)} (${size})`)
}
console.log(failures ? `\n${failures} of ${files.length} need fixing.` : `\nAll ${files.length} pass.`)
process.exitCode = failures ? 1 : 0
