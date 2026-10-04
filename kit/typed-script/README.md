# A typed design script

`pricing-post.js` is a design script with the kit's types switched on. One line at the top does it:

```js
/// <reference types="@popcraft/kit/design-script" />
```

Then your editor completes `k.` and every helper (`web`, `beat`, `draw`, `texture`…), shows each option, and
`tsc` catches a misspelt method or a wrong option before anything is built:

```text
pricing-post.js(19,3): error TS2551: Property 'txt' does not exist on type 'Kit'. Did you mean 'text'?
```

```bash
npm install
npm run typecheck     # tsc over the script
npm run build         # builds it into pricing.popcraft with the popcraft command line, and runs the design checks
```

Open `pricing.popcraft` in PopCraft to see it and keep editing. To look at it from the terminal, render it (needs
puppeteer): `npx popcraft run pricing.popcraft vision.lookAt --out look/`.

Docs: [design reference](https://popcraft.app/docs/api/design-reference) · [command line](https://popcraft.app/docs/api/cli) ·
[@popcraft/kit](https://www.npmjs.com/package/@popcraft/kit)
