// A translated copy of a PopCraft design for every language in strings.json: banner.popcraft → banner.fr.popcraft,
// banner.de.popcraft… Each copy is the same design with its words swapped, made by the popcraft command line, so the
// layouts, styles and brand stay exactly as designed and reflow around the longer or shorter words.
//
//   node translate.mjs [design.popcraft]      (default banner.popcraft; `npm run banner` makes it)

import { copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

const source = process.argv[2] ?? 'banner.popcraft'
const strings = JSON.parse(readFileSync(new URL('./strings.json', import.meta.url), 'utf8'))
const popcraft = (...args) => execFileSync('npx', ['popcraft', ...args], { encoding: 'utf8' })

for (const [lang, words] of Object.entries(strings)) {
  const out = source.replace(/\.popcraft$/, `.${lang}.popcraft`)
  copyFileSync(source, out)
  // One script, one undo step: every text layer whose words are in the table gets the translation.
  const script = `
    const words = ${JSON.stringify(words)}
    const items = Object.values(doc.nodes)
      .filter(n => n.type === 'TEXT' && words[n.characters.trim()])
      .map(n => ({ id: n.id, text: words[n.characters.trim()] }))
    if (items.length) tools.set_text({ items })
    return items.length`
  writeFileSync('.translate.js', script)
  const result = JSON.parse(popcraft('run', out, 'run_script', '--code', '@.translate.js', '--json'))
  console.log(`✓ ${out}: ${result.data.returned} text layer(s) translated`)
}
