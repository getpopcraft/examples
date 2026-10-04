// Animated bar chart: a community solar co-op's year, month by month. The total counts up in the corner while
// twelve bars grow out of the baseline one after another (each bar revealed upward through a wipe mask, the Wipe
// preset with direction up), and every bar's figure counts to its value as its bar lands. The bars are the data:
// each is as tall as its month's megawatt-hours, and each figure is a counter that rests at that number, so the
// still frame is a correct chart too. 16:9, with a 4:5 cut for LinkedIn and Instagram.

import { Kit, preset, type Count, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { logoBadge, outro } from '@popcraft/kit/templates/social/shared'
import { titleSafe } from '@popcraft/kit/templates/kinetic/shared'
import { keyEverySize, sourceLine } from '@popcraft/kit/templates/data/shared'

/** Megawatt-hours generated each month of 2026 by a 480 kW rooftop array in the English Midlands. */
const MONTHS: [string, number][] = [['Jan', 14], ['Feb', 22], ['Mar', 38], ['Apr', 52], ['May', 64], ['Jun', 70], ['Jul', 72], ['Aug', 61], ['Sep', 45], ['Oct', 30], ['Nov', 17], ['Dec', 11]]
const SOURCE = 'Sunny Hill Solar Co-op · metered output, 480 kW array'
const TOTAL = MONTHS.reduce((s, [, v]) => s + v, 0)
const PLOT = 560 // px the tallest month reaches
const px = (v: number) => Math.round((v / 72) * PLOT)

const BAR_AT = 700, BAR_GAP = 80, BAR_MS = 700
const counts: Count[] = [
  { layer: 'Total', at: 500, duration: 2200, counter: { from: 0, to: TOTAL, suffix: ' MWh', separator: ',' } },
  ...MONTHS.map(([m, v], i): Count => ({ layer: `${m} value`, at: BAR_AT + i * BAR_GAP, duration: BAR_MS, counter: { from: 0, to: v } })),
]

const cues: Cue[] = [
  { layer: 'Logo', preset: 'pop-in', at: 0 },
  { layer: 'Title', preset: 'words-in', at: 100, params: { duration: 600, amount: 70 } },
  { layer: 'Total', preset: 'fade-in', at: 400 },
  { layer: 'Month', preset: 'fade-in', at: 450, params: { duration: 300 }, stagger: { delay: 30 } },
  { layer: 'Bar', preset: 'wipe-in', at: BAR_AT, params: { direction: 'up', duration: BAR_MS }, stagger: { delay: BAR_GAP } },
  { layer: MONTHS.map(([m]) => `${m} value`), preset: 'fade-in', at: BAR_AT, params: { duration: 300 }, stagger: { delay: BAR_GAP, order: 'selection' } },
  { layer: 'Source', preset: 'fade-in', at: 2600 },
  { layer: 'Bar', preset: 'wipe-out', at: 7600, params: { direction: 'up', duration: 450 }, stagger: { delay: 30 } },
  outro(['Logo', 'Title', 'Total', ...MONTHS.map(([m]) => `${m} value`), 'Month', 'Source'], 7700, { gap: 10 }),
]

export default defineTemplate({
  id: 'chart-bars',
  meta: {
    name: 'Animated bar chart',
    description: 'A solar co-op’s year as twelve bars that grow from the baseline one after another, each figure counting to its value and the total counting up — 9 seconds, 16:9 with a 4:5 cut',
    category: 'animation', tags: ['animation', 'data', 'chart', 'bar chart', 'counter', 'energy', 'report'],
    platforms: ['linkedin', 'instagram', 'youtube', 'slides'], formats: ['video', 'portrait-post', 'slide-deck'], useCases: ['stats', 'report'],
    created: '2026-09-29', updated: '2026-09-29',
  },
  motion: { cues, counts, loop: true },
  build() {
    const k = new Kit('Animated bar chart', preset('video-1080p'))
    k.brand(
      { paper: '#FFFBF2', text: '#1C2230', onPaper: '#5A6275', primary: '#F2A516', onPrimary: '#1C2230', accent: '#1C2230', badge: '#1C2230' },
      { title: 'What our roof made in 2026' },
    )
    k.textStyle('Title 72', { size: 72, fontWeight: 900, letterSpacing: -2, lineHeight: 80 })
    k.textStyle('Total 72', { size: 72, fontWeight: 900, letterSpacing: -2, lineHeight: 80, textAlign: 'RIGHT' })
    k.textStyle('Value 30', { size: 30, fontWeight: 800, lineHeight: 36, textAlign: 'CENTER' })
    k.textStyle('Month 26', { size: 26, fontWeight: 600, lineHeight: 32, textAlign: 'CENTER' })
    k.textStyle('Source 24', { size: 24, fontWeight: 500, lineHeight: 30 })
    sourceLine(k, { dot: 'primary', ink: 'onPaper', style: 'Source 24', text: SOURCE })

    const sheet = k.sheet
    k.flowSheet(sheet, 40, titleSafe(), 'paper', 'SPACE_BETWEEN', 'MIN')
    k.timeline(sheet, { duration: 9000, fps: 30 })
    const head = k.stack(sheet, { direction: 'HORIZONTAL', gap: 32, align: 'CENTER', name: 'Header' })
    logoBadge(k, head, { fill: 'badge', size: 56, name: 'Logo' })
    k.text(head, '{{brand.title}}', { style: 'Title 72', color: 'text', name: 'Title', width: 1000 })
    k.text(head, `${TOTAL} MWh`, { style: 'Total 72', color: 'text', name: 'Total', width: 'FILL' })
    const chart = k.stack(sheet, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', align: 'MAX', name: 'Chart' })
    for (const [m, v] of MONTHS) {
      const col = k.stack(chart, { width: 104, gap: 10, align: 'CENTER', name: 'Column' })
      k.text(col, String(v), { style: 'Value 30', color: 'text', name: `${m} value` })
      k.rect(col, 72, px(v), 'primary', { radius: 12, name: 'Bar' })
      k.text(col, m, { style: 'Month 26', color: 'onPaper', name: 'Month' })
    }
    k.instance(sheet, 'Source line', { Source: SOURCE }, { name: 'Source' })

    keyEverySize(k, sheet, [{
      preset: 'ig-portrait',
      adjust: (kit, id) => {
        kit.patch(id, { padding: { top: 88, right: 72, bottom: 88, left: 72 }, primaryAxisAlignItems: 'CENTER', itemSpacing: 64, counterAxisSpacing: 64 })
        // The header stacks; the twelve columns narrow to fit the 4:5 column.
        for (const h of kit.named(id, 'Header')) kit.patch(h, { layoutMode: 'VERTICAL', counterAxisAlignItems: 'MIN', itemSpacing: 20 })
        for (const t of kit.named(id, 'Title')) kit.patch(t, { layoutSizingHorizontal: 'FILL' })
        for (const t of kit.named(id, 'Total')) kit.patch(t, { textAlign: 'LEFT' })
        for (const c of kit.named(id, 'Column')) kit.patch(c, { width: 76 })
        for (const b of kit.named(id, 'Bar')) kit.patch(b, { width: 52, cornerRadius: 10 })
      },
    }], cues, counts)
    return k.finish()
  },
})
