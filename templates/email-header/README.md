# Email header GIF

An animated email header (600 × 300) for a spring sale: the offer, the dates and the code, with a lighthouse beam sweeping.

## What it shows

- Many email clients show only an animation's first frame: the whole message is on frame one, and the motion only adds to it.
- Idle behaviours (the beam's sweep) run in a loop that closes, so the GIF repeats without a jump.
- Every word is 12 px or more at the email's real size.

## Make it yours

Change the offer, the code and the dates, and the art; keep everything readable on frame one. Then build and look:

```bash
node ../build.mjs email-header
```

The build refuses it if a change breaks something a person would see. Open `email-header.popcraft` in PopCraft to look at
every size before you publish (`npm run publish:account` in the folder above).
