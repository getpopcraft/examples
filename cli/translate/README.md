# Translated copies of a design

Make a design once, then a copy in every language you sell in: `banner.popcraft` becomes `banner.fr.popcraft`,
`banner.de.popcraft`, `banner.es.popcraft`, each the same design with its words swapped. Layouts, text styles and the
brand stay exactly as designed, and the layout reflows around longer or shorter words.

```bash
npm install
npm run banner       # builds the English banner from banner.js
npm run translate    # → banner.fr.popcraft, banner.de.popcraft, banner.es.popcraft
```

Use it on your own file: `node translate.mjs my-design.popcraft`, with your words in `strings.json` (the English
text of a layer → its translation, per language). Any text layer whose words are in the table is translated; the rest
is left as it is.

How it works: for each language the script copies the file and runs one `run_script` over it with the
[`popcraft` command line](https://popcraft.app/docs/api/cli). The script reads every text layer from `doc` and calls
`tools.set_text` once with all the replacements, so each copy changes in a single step.

**Long words.** German has some very long ones: "Summer sale" becomes "Sommerschlussverkauf", one word too wide for the
headline at its design size. The banner's headline is set to **shrink to fit** (`textFit: 'SHRINK'`), so a word that
would overflow is set smaller and everything else keeps its size. Do the same for the headlines of any design you
translate, or look at each copy before it ships.

Docs: [command line](https://popcraft.app/docs/api/cli) · [@popcraft/cli](https://www.npmjs.com/package/@popcraft/cli)
