# Sale reel cut to music

A 14-second vertical sale reel on the Countdown track: a hook, a receipt that keeps printing, the total counting down to the sale price, and a caption that changes on the beat. Made at 9:16 with square and 4:5 cuts.

## What it shows

- `beat.bed('tension', 28)` gives the track, its length and `b(n)`, the time of beat n, so every cue lands on a beat.
- `k.cues` brings layers in with presets (`words-in`, `wipe-in`, `pop-in`) at those beats; `k.counts` counts the total; `k.swaps` changes the caption.
- The words stay inside the safe area (clear of the apps' buttons); the till and its paper fill the foot, where only art may go.
- `k.variants` makes the square and 4:5 cuts, restyling the type to fit.

## Make it yours

Change the receipt's items and the total, the brand colours and the track (`beat.bed(<track>, <beats>)`; the design reference lists them). Then build and look:

```bash
node ../build.mjs sale-reel
```

The build refuses it if a change breaks something a person would see. Open `sale-reel.popcraft` in PopCraft to look at
every size before you publish (`npm run publish:account` in the folder above).
