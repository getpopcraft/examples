// A launch post built around the product itself: Tessera 2.0's Autoplan, shown with a real screenshot of its home page
// (assets/tessera-hero.jpg, rendered from ../web/landing-bento.ts). The tag drops, the headline rises word by word,
// the browser window lifts in with the page inside it, and the call to action slides up; it holds to be read, then
// leaves so the loop opens on the bare ground. Seven seconds, square, with 4:5 and 9:16 cuts.
//
// The screenshot is the template's own media: `media()` names the file, the build writes it beside template.json,
// and publishing sends it with the template, so it opens with the picture in place on any device.

import { Kit, preset, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { logoBadge, outro, pill, postVariants, verticalPadding } from '@popcraft/kit/templates/social/shared'
import { chrome } from '@popcraft/kit/templates/shared/window'
import { shadow } from '@popcraft/kit/templates/shared/texture'
import { media } from '@popcraft/kit'

const SHOT = media(new URL('./assets/tessera-hero.jpg', import.meta.url))
/** The screenshot's own proportions (1440 × 805), kept at every size. */
const SHOT_RATIO = 805 / 1440
const CONTENT = ['Tag', 'Headline', 'Window', 'Call to action']

/**
 * The screenshot as wide as a cut leaves between its side margins, at its own proportions: a narrower frame would crop
 * it. `side` is the cut's margin on each side, as its variant sets it.
 */
const fitShot = (side: number) => (k: Kit, sheetId: string) => {
  const width = 1080 - 2 * side
  k.patch(k.named(sheetId, 'Screenshot')[0], { width, height: Math.round(width * SHOT_RATIO) })
}
const cues: Cue[] = [
  { layer: 'Tag', preset: 'drop-in', at: 100 },
  { layer: 'Headline', preset: 'words-in', at: 300, params: { duration: 600 } },
  { layer: 'Window', preset: 'rise-in', at: 900, params: { duration: 700, distance: 60 } },
  { layer: 'Call to action', preset: 'rise-in', at: 1500 },
  outro(CONTENT, 5900),
]

export default defineTemplate({
  id: 'screenshot-launch',
  meta: {
    name: 'Product launch post with a screenshot',
    description: 'A launch post around a real product screenshot: a tag drops, the headline rises, a browser window lifts in with the page inside it and the call to action follows; seven seconds, square with 4:5 and 9:16 cuts',
    category: 'animation',
    tags: ['launch', 'saas', 'screenshot', 'product', 'announcement'],
    platforms: ['instagram', 'linkedin', 'x', 'threads'],
    formats: ['post', 'portrait-post', 'story'],
    useCases: ['launch', 'announcement'],
    created: '2026-10-04',
    updated: '2026-10-04',
  },
  motion: { cues, loop: true },
  stableNumbers: true,
  build() {
    const k = new Kit('Product launch post with a screenshot', preset('ig-post'))
    k.brand(
      { paper: '#EDEBE4', text: '#18181B', onPaper: '#52525B', card: '#FFFFFF', bar: '#F4F4F5', onBar: '#3F3F46', light: '#D4D4D8', primary: '#18181B', onPrimary: '#FFFFFF', accent: '#C9F04B', onAccent: '#18181B' },
      { headline: 'Autoplan books your focus time for you.', action: 'Try Autoplan free for 14 days', website: 'tessera.example' },
    )
    k.textStyle('Headline 76', { size: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 80 })
    k.textStyle('Tag 24', { size: 24, fontWeight: 800, letterSpacing: 2.4, lineHeight: 30 })
    k.textStyle('Bar 18', { size: 18, fontWeight: 500, lineHeight: 24 })
    k.textStyle('Action 28', { size: 28, fontWeight: 700, lineHeight: 34 })
    pill(k, 'Tag pill', { fill: 'accent', ink: 'onAccent', style: 'Tag 24', label: 'NEW IN TESSERA 2.0' })

    const sheet = k.sheet
    const pad = 72
    k.flowSheet(sheet, 36, pad, 'paper', 'CENTER', 'MIN')
    k.timeline(sheet, { duration: 7000, fps: 30 })
    k.instance(sheet, 'Tag pill', { Label: 'NEW IN TESSERA 2.0' }, { name: 'Tag' })
    k.text(sheet, '{{brand.headline}}', { style: 'Headline 76', color: 'text', width: 'FILL', name: 'Headline' })

    // The page in a browser window: a title bar with the address, then the screenshot at its own proportions.
    const width = 1080 - 2 * pad
    const win = k.stack(sheet, { gap: 0, width: 'FILL', fill: 'card', radius: 20, clip: true, stroke: { color: 'light', width: 1 }, effects: [shadow(k, 'text', 0.18, 24, 60)], name: 'Window' })
    chrome(k, win, { title: 'tessera.example', style: 'Bar 18', fill: 'bar', ink: 'onBar', light: 'light' })
    k.image(win, SHOT, width, Math.round(width * SHOT_RATIO), { name: 'Screenshot' })

    const cta = k.stack(sheet, { direction: 'HORIZONTAL', gap: 20, align: 'CENTER', width: 'FILL', name: 'Call to action' })
    logoBadge(k, cta, { fill: 'primary', size: 56 })
    k.text(cta, '{{brand.action}}', { style: 'Action 28', color: 'text', width: 'FILL', name: 'Action' })

    k.cues(sheet, cues)
    k.variants(sheet, postVariants({ portrait: 96 }, { portrait: fitShot(96), vertical: fitShot(Math.max(verticalPadding().left, verticalPadding().right)) }))
    return k.finish()
  },
})
