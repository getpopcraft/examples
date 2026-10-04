# Pricing page with a working switch

A pricing page for Ledgerly with a monthly / yearly switch that works: flip it and every plan's price and billing line change. Desktop, laptop, tablet and phone.

## What it shows

- A variable holds the billing period; every price and billing line is bound to it (`bindVariable`).
- The switch is a component with two variants; a click changes the variant and sets the variable, so the whole page follows.
- The plan cards become a column on the tablet and phone.

## Make it yours

Change the plans and prices (both periods), the questions, and the brand. Then build and look:

```bash
node ../build.mjs pricing-page
```

The build refuses it if a change breaks something a person would see. Open `pricing-page.popcraft` in PopCraft to look at
every size before you publish (`npm run publish:account` in the folder above).
