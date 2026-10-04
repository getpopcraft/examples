# A design check for CI

Keep your marketing designs as code in your repository, and let CI refuse one that a person would see is wrong:

- words too faint to read, also under a light and a dark brand kit, so the design re-skins safely;
- text too small to read at the size it is posted;
- words under an app's buttons and captions (the safe areas of stories, reels and shorts);
- layers overlapping, a frame left a quarter empty, a loop that jumps where it starts again.

```bash
npm install
npm test                         # every designs/*.js, at the size its first line names
node check.mjs designs/sale-banner.js
```

Each file in `designs/` is a **design script** (the code PopCraft's own templates are written in). Its first line
says the size it is posted at (`// size: ig-story`, `// size: ad-landscape`, any PopCraft size preset); the default
is an Instagram post. A failure prints the frame, the kind of problem, the layer and what to do about it.

To use it in your own repository, copy `check.mjs` and add a step to your workflow:

```yaml
- run: npm ci && node check.mjs
```

The checks catch what can be measured; they cannot judge composition, so still look at the design. To see one,
build it into a file with the [`popcraft` command line](https://popcraft.app/docs/api/cli) and open it in PopCraft:

```bash
npx popcraft new story.popcraft && npx popcraft run story.popcraft write_design --size ig-story --script @designs/launch-story.js
```

Docs: [design reference](https://popcraft.app/docs/api/design-reference) · [@popcraft/kit](https://www.npmjs.com/package/@popcraft/kit)
