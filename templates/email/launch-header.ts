// Bento SaaS email header: a 600 × 300 animated header for Tessera's launch email, as a small bento. On the first
// frame (all Outlook shows) every word is there: the night tile with the news and its button, a white week, the
// Autoplan switch and the lime figure. Then the tiles live and come back to where they began, so the GIF loops with
// no seam: the switch flips on and off again, the now line drifts down the week and back, the figure tile and the
// button pulse once each.

import { Kit, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { ease } from '@popcraft/kit/lib/motion/author'
import { pill } from '@popcraft/kit/templates/social/shared'
import { EMAIL_FPS, HEADER } from '@popcraft/kit/templates/email/shared'
import { TESSERA, bentoBrand, calendarSlice, cellBox, fitCalendar, flip, grot, lockup, switchSlice, tile, tileLabel, type Grid } from '@popcraft/kit/templates/saas/style-bento-shared'

const NAME = 'Bento SaaS email header'
const DURATION = 6000
const G: Grid = { x: 14, y: 14, w: 572, h: 272, cols: 4, rows: 2, gap: 10 }
const CELLS = { news: { c: 0, r: 0, cw: 2, rh: 2 }, week: { c: 2, r: 0, cw: 1, rh: 2 }, sw: { c: 3, r: 0, cw: 1, rh: 1 }, stat: { c: 3, r: 1, cw: 1, rh: 1 } } as const

const cues: Cue[] = [
  { layer: 'Stat tile', preset: 'pulse', at: 2600, params: { duration: 600, amount: 0.03 } },
  { layer: 'Open button', preset: 'pulse', at: 4200, params: { duration: 400, amount: 0.05 } },
]

export default defineTemplate({
  id: 'launch-header',
  meta: {
    name: `${NAME} (animated GIF)`,
    description: 'A 600 × 300 animated header for a launch email in the bento grid look: the news and its button on a night tile, a week, the Autoplan switch and a lime figure, all on the first frame (for Outlook); then the switch flips on and back, the now line drifts down the week and back and the tiles pulse, all returning to where they began. A seamless 6-second GIF',
    category: 'email', tags: ['email', 'gif', 'animated', 'header', 'banner', 'saas', 'bento', 'bento grid', 'tiles', 'ai', 'productivity', 'launch', 'announcement', 'newsletter', 'loop'],
    platforms: ['email'], formats: ['email', 'banner'], useCases: ['announcement', 'launch', 'newsletter'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  motion: { cues },
  build() {
    const k = new Kit(NAME, HEADER)
    k.quantizeGeometry = true
    bentoBrand(k, { offer: 'Your week, planned before Monday.' })
    grot(k, 'Brand 15', 15, { weight: 700, lead: 1.2, spacing: -0.02 })
    grot(k, 'Label 12', 12, { weight: 500, lead: 1.3 })
    grot(k, 'Offer 26', 26, { weight: 700, lead: 1.06, spacing: -0.035 })
    grot(k, 'Stat 30', 30, { weight: 700, lead: 1, spacing: -0.04 })
    grot(k, 'Button 13', 13, { weight: 700, lead: 1.2 })
    pill(k, 'Button', { fill: 'primary', ink: 'onPrimary', style: 'Button 13', label: 'Try Autoplan free', pad: [8, 14] })

    const sheet = k.sheet
    k.flowSheet(sheet, 0, 0, 'paper', 'MIN', 'MIN')
    k.patch(sheet, { clipsContent: true })
    k.timeline(sheet, { duration: DURATION, fps: EMAIL_FPS })

    const news = tile(k, sheet, G, CELLS.news, { name: 'News tile', surface: 'night', pad: 18, radius: 18 })
    lockup(k, news, { size: 18, style: 'Brand 15', ink: 'onNight' })
    k.text(news, '{{brand.offer}}', { style: 'Offer 26', color: 'onNight', width: 'FILL', name: 'Offer' })
    k.instance(news, 'Button', { Label: 'Try Autoplan free' }, { name: 'Open button' })

    const wb = cellBox(G, CELLS.week)
    const week = tile(k, sheet, G, CELLS.week, { name: 'Week tile', surface: 'card', pad: 12, gap: 8, radius: 18, justify: 'MIN' })
    tileLabel(k, week, 'This week', { style: 'Label 12', surface: 'card', size: 12, name: 'Week label' })
    calendarSlice(k, week, { w: 100, h: 100, day: 'Label 12', ink: 'onCard', radius: 3, days: ['M', 'T', 'W', 'T', 'F'] })
    fitCalendar(k, week, wb.w - 24, wb.h - 24 - 16 - 8 - 16 - 12)

    const sw = tile(k, sheet, G, CELLS.sw, { name: 'Switch tile', surface: 'mint', pad: 12, radius: 18 })
    tileLabel(k, sw, TESSERA.feature, { style: 'Label 12', surface: 'mint', size: 12 })
    switchSlice(k, sw, { w: 56, ink: 'onMint' })

    const st = tile(k, sheet, G, CELLS.stat, { name: 'Stat tile', surface: 'primary', pad: 12, radius: 18 })
    tileLabel(k, st, 'Back weekly', { style: 'Label 12', surface: 'primary', size: 12 })
    k.text(st, `${TESSERA.saved} h`, { style: 'Stat 30', color: 'onPrimary', width: 'FILL', name: 'Stat figure' })

    k.cues(sheet, cues)
    flip(k, sheet, [800, 3600])
    for (const wk of k.named(sheet, 'Week')) {
      const h = k.node(wk).height
      for (const id of k.named(wk, 'Now line')) k.animate(id, 'translateY', [{ t: 0, v: 0, ease: ease.inOut('sine') }, { t: 3000, v: Math.round(h * 0.8), ease: ease.inOut('sine') }, { t: DURATION, v: 0 }])
    }
    return k.finish()
  },
})
