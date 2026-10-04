# Responsive landing page

A product landing page for Tidewell (tide tables for harbour masters): nav, a hero with a live tide panel whose line draws on, figures, features, a closing call and a footer. Made at 1440 wide with laptop, tablet and phone sizes.

## What it shows

- `web.page`, `web.nav` and `web.buttons` give the page its column, its nav and shared button components.
- The hero animates on a 6-second timeline: the panel's tide line draws on with `trim.end` and the hero rises in.
- `web.webResponsive` makes the other sizes: named rows become columns, type styles step down, the nav folds on the phone; `tweaks` changes anything else per size (here, the tide line is scaled to the phone's card).

## Make it yours

Change the copy, figures and features, the brand, and the panel's content; keep the section names so the responsive rules still find them. Then build and look:

```bash
node ../build.mjs landing-page
```

The build refuses it if a change breaks something a person would see. Open `landing-page.popcraft` in PopCraft to look at
every size before you publish (`npm run publish:account` in the folder above).
