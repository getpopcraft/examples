# Mobile wallet ticket

A phone screen for a festival ticket in a wallet app: the pass card with the holder, the pass, the dates and the gate, a scannable-looking code block, and the next pass below.

## What it shows

- Laid out at the phone's real size (402 × 874), every word 13 px or more.
- The card clips its art; the code block is one vector of square cells, worked out in plain JavaScript; the status bar and the screen title are real parts of the screen.
- Brand roles for the card, the paper and every word, so a kit re-skins it.

## Make it yours

Change the holder, the pass details and the art for your event or venue. Then build and look:

```bash
node ../build.mjs wallet-ticket
```

The build refuses it if a change breaks something a person would see. Open `wallet-ticket.popcraft` in PopCraft to look at
every size before you publish (`npm run publish:account` in the folder above).
