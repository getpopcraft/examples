# Templates

Six complete PopCraft templates, ready to build, check and publish to your account, and to base your own on. Each
folder is one template:

| Template | Sizes | What it shows |
|---|---|---|
| [sale-reel](sale-reel) | Story 9:16, post 1:1, portrait 4:5 | A 14 s reel cut to a music track's beats: cues, a counting price, word swaps for captions, art kept out of the apps' buttons |
| [landing-page](landing-page) | Desktop, laptop, tablet, phone | A responsive page with a moving hero, real sections and a sign-up; rows become columns and type steps down |
| [pricing-page](pricing-page) | Desktop, laptop, tablet, phone | A monthly / yearly switch that works: variables, a component's variants, a click that changes every price |
| [email-header](email-header) | 600 × 300 | An animated header whose whole message is on frame one, for clients that show only that |
| [display-ads](display-ads) | Landscape, square, 4:5, LinkedIn | Drawn art, and taller cuts recomposed rather than squashed |
| [wallet-ticket](wallet-ticket) | iPhone | A phone screen laid out at phone size: a clipped card, a QR block, readable type |

In each folder:

- `design.js` is the template, as a **design script**: the code PopCraft's own templates are written in. Its first
  line names the size it is made at (`// size: ig-story`); `k.variants` inside makes its other sizes.
- `template.config.json` is its listing: a stable `id` (publishing again updates the template), name, description,
  gallery category and tags.

## Build, check, publish

```bash
npm install
npm run build            # every template → <folder>/template.json and <folder>/<id>.popcraft
npm run publish:dry      # what would be uploaded
POPCRAFT_TOKEN=pop_… npm run publish:account     # upload to your account (private until you list it)
```

`build` refuses a template with a problem a person would see: words too faint to read (also under a light and a dark
brand kit, so it re-skins), text too small, words under an app's buttons, overlapping layers, an empty band, a loop
that jumps. Fix what it says and build again.

The token is a personal access token with the `marketplace:publish` scope (Account → Personal access tokens), or log
in once with `npx popcraft login`. Templates land private in your account's template gallery; list one publicly from
the gallery when you want to.

## Making one that is as good as these

The checks catch what can be measured. These templates are good because each was made in rounds of build, look and
fix, against a few rules:

1. **One idea, said visually.** The reel is a receipt that will not stop printing; the ads are a loaf on a plate.
   Decide the picture before the layout.
2. **Real words.** A real product, real prices, real dates. Placeholder text hides every layout problem.
3. **Every size designed, not squashed.** Each `k.variants` entry recomposes its size: the story keeps words inside
   the safe area and puts art below it; tall ad cuts stack art over type.
4. **Brand roles, never raw colours on words.** Words sit on `text`, `onCard`, `onPrimary`…, so applying a brand kit
   re-skins the template and it still reads. The build checks this under two very different kits.
5. **Motion that means something, and a loop that closes.** Things arrive on the beat, hold long enough to read, and
   are back where they started at the end.
6. **Look at it.** Open `<id>.popcraft` in PopCraft and look at every size and, for motion, several moments; or render
   from the terminal: `npx popcraft run sale-reel/sale-reel.popcraft vision.lookAt --out look/` (needs puppeteer).
   Name what is wrong specifically, fix it, build again.

The whole method, with the bar for each format and the traps that cost rounds:
[Designing with an AI agent](https://popcraft.app/docs/api/agents) and the
[design reference](https://popcraft.app/docs/api/design-reference). It reads the same for a person.

## Your own template

Copy a folder, give `template.config.json` a new `id`, and change `design.js`. Run `node build.mjs <folder>` while you
work, open the `.popcraft` to look, and publish when it is right.
