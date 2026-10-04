# Display ad set

A display ad for Crumb (bookkeeping for bakeries): the line, a sentence, a button, and a scored loaf on a plate with its price. Landscape, square, 4:5 and LinkedIn.

## What it shows

- A static design: most ad placements do not play motion.
- The art is drawn with shapes and brand roles, so a brand kit recolours it.
- The taller cuts are recomposed in their `adjust`: art on top, type and button below, sized for the cut.

## Make it yours

Change the product, the line and the price tag, and redraw the art for your product. Then build and look:

```bash
node ../build.mjs display-ads
```

The build refuses it if a change breaks something a person would see. Open `display-ads.popcraft` in PopCraft to look at
every size before you publish (`npm run publish:account` in the folder above).
