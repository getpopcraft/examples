# A launch in three sizes from one script

`launch.js` is one design script that makes an Instagram post, a story and a landscape ad for a product launch. The
[`popcraft` command line](https://popcraft.app/docs/api/cli) builds it into an editable `.popcraft` file and checks
every size in the same step.

```bash
npm install
npm run build      # → launch.popcraft: the post, the story and the ad, with the design checks' verdict
npm run outline    # what is in the file: frames, layers, styles
npm run export     # PNGs of every frame into out/ (needs puppeteer: npm i -g puppeteer)
```

What it shows:

- **One script, every size.** `k.variants` copies the post to the story and the ad and adjusts each: the story keeps
  its words inside the safe area (clear of the apps' buttons) and puts the illustration below it; the ad sets the
  words on the left and the illustration on the right. Change the headline once and all three change.
- **Checked as it builds.** `write_design` answers with the checks for every size: contrast, also under a light and a
  dark brand kit, text size, safe areas, overlap, empty space. This script passes all of them.
- **Rebuild in place.** Edit `launch.js` and run `write_design` again with `--frame <id>` to rebuild the same design
  instead of adding a new one (the ids come from `npm run outline`).

Open `launch.popcraft` in PopCraft to keep editing by hand.

Docs: [command line](https://popcraft.app/docs/api/cli) · [design reference](https://popcraft.app/docs/api/design-reference) ·
[designing with an AI agent](https://popcraft.app/docs/api/agents)
