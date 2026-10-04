// SaaS launch YouTube thumbnail set, in the Swiss typographic look: three 1280 × 720 thumbnails for Rivet (a CRM
// for two-person sales teams). Each is a huge three- or four-word title in tight grotesque capitals on a ruled
// grid, one word knocked out of a yellow bar, a face photo slot cut in hard beside it on an offset block, and a
// crop of the product with the thing the video is about circled and pointed at. Red for the demo, white for the
// comparison, black for the tutorial: the same grid, so a channel page reads as one series.

import { Kit, preset } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import type { VectorPath } from '@popcraft/kit/lib/document/types'
import { pill } from '@popcraft/kit/templates/social/shared'
import { MONO } from '@popcraft/kit/templates/shared/type'
import { box } from '@popcraft/kit/templates/shared/draw'
import { hardShadow } from '@popcraft/kit/templates/shared/texture'
import { pattern } from '@popcraft/kit/templates/shared/fit'
import { gridPaths, arrowPath } from '@popcraft/kit/templates/shared/marks'

interface Thumb {
  name: string; ground: string; ink: string
  /** The title's lines; `mark` is the line set on the yellow bar. */
  lines: readonly string[]; mark: number; style: string
  label: string; length: string
  /** Which side the face is on. */
  face: 'left' | 'right'
  ui: 'board' | 'table' | 'settings'
}
const THUMBS: readonly Thumb[] = [
  { name: '1 Demo', ground: 'primary', ink: 'onPrimary', lines: ['CRM in', '9 minutes'], mark: 1, style: 'Title 140', label: 'Full demo · no cuts', length: '9:04', face: 'right', ui: 'board' },
  { name: '2 Comparison', ground: 'paper', ink: 'text', lines: ['Sheets', 'vs a CRM'], mark: 0, style: 'Title 140', label: 'We ran both for 30 days', length: '14:20', face: 'left', ui: 'table' },
  { name: '3 Tutorial', ground: 'secondary', ink: 'onSecondary', lines: ['3 fixes', '2× replies'], mark: 1, style: 'Title 140', label: 'Tutorial · episode 7', length: '6:41', face: 'right', ui: 'settings' },
]
// Narrow enough that the widest title bar ends clear of it.
const FACE = { w: 370, h: 560 }
const grid = (w: number, h: number) => gridPaths(w, h, 80, 2)

/**
 * The presenter a face slot shows until a photo is dropped on it: a head with a side parting, a neck, an open collar
 * and a jacket, on a lit backdrop. Part of the photo frame's content, as `faceSlot` is: a dropped photo replaces it.
 */
function presenter(k: Kit, photo: string, w: number, h: number) {
  const cx = w / 2, rx = w * 0.2, ry = w * 0.235, cy = h * 0.38, top = cy + ry * 1.3
  const at = { absolute: { x: 0, y: 0 } }
  const ring = (n: number, fx: number, fy: number, from = 0, to = Math.PI * 2) => Array.from({ length: n }, (_, i) => { const a = from + ((to - from) * i) / (n - 1); return { x: cx + rx * fx * Math.sin(a), y: cy - ry * fy * Math.cos(a) } })
  k.ellipse(photo, Math.round(w * 0.92), 'slotLight', { name: 'Backdrop light', absolute: { x: Math.round(w * 0.04), y: Math.round(cy - w * 0.5) } })
  const shoulders: VectorPath = { closed: true, points: [
    { x: cx - w * 0.5, y: h }, { x: cx - w * 0.5, y: top + ry * 1.1, handleOut: { x: cx - w * 0.5, y: top + ry * 0.3 } },
    { x: cx - w * 0.2, y: top, handleIn: { x: cx - w * 0.4, y: top } }, { x: cx + w * 0.2, y: top, handleOut: { x: cx + w * 0.4, y: top } },
    { x: cx + w * 0.5, y: top + ry * 1.1, handleIn: { x: cx + w * 0.5, y: top + ry * 0.3 } }, { x: cx + w * 0.5, y: h },
  ] }
  k.vector(photo, w, h, [shoulders], 'coat', { name: 'Jacket', ...at })
  // The shirt between the lapels, and the open collar's skin above it.
  k.vector(photo, w, h, [{ closed: true, points: [{ x: cx - w * 0.15, y: top }, { x: cx + w * 0.15, y: top }, { x: cx + w * 0.045, y: h }, { x: cx - w * 0.045, y: h }] }], 'shirt', { name: 'Shirt', ...at })
  k.vector(photo, w, h, [box(cx - w * 0.085, cy + ry * 0.6, w * 0.17, ry * 0.9), { closed: true, points: [{ x: cx - w * 0.1, y: top - 1 }, { x: cx + w * 0.1, y: top - 1 }, { x: cx, y: top + w * 0.15 }] }], 'sitter', { name: 'Neck', ...at })
  k.vector(photo, w, h, [{ closed: true, points: ring(32, 1, 1) }], 'sitter', { name: 'Head', ...at })
  // Hair: over the crown and down to the ears, with a parted fringe across the forehead.
  const crown = ring(18, 1.1, 1.12, -1.95, 1.95)
  const fringe = [{ x: cx + rx * 0.9, y: cy - ry * 0.12 }, { x: cx + rx * 0.5, y: cy - ry * 0.56 }, { x: cx - rx * 0.25, y: cy - ry * 0.5 }, { x: cx - rx * 0.92, y: cy - ry * 0.04 }]
  k.vector(photo, w, h, [{ closed: true, points: [...crown, ...fringe] }], 'hair', { name: 'Hair', ...at })
}

export default defineTemplate({
  id: 'youtube-thumbnails',
  meta: {
    name: 'SaaS launch YouTube thumbnail set',
    description: 'Three YouTube thumbnails for a product channel in the Swiss typographic look: a demo, a comparison and a tutorial. Each has a huge three- or four-word title with one line on a yellow bar, a face photo slot cut in beside it, and a crop of the product with the point of the video circled. Red, white and black on one grid, so the channel reads as a series. 1280 × 720',
    category: 'social', tags: ['saas', 'saas launch', 'youtube', 'thumbnail', 'demo', 'tutorial', 'comparison', 'swiss', 'typographic', 'grid', 'face', 'product ui'],
    platforms: ['youtube'], formats: ['thumbnail', 'demo'], useCases: ['launch', 'education', 'comparison'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  sequence: true,
  build() {
    const k = new Kit('SaaS launch YouTube thumbnail set', preset('youtube-thumb'))
    k.quantizeGeometry = true
    k.brand(
      { paper: '#F4F2EC', text: '#0C0C0C', primary: '#E4002B', onPrimary: '#FFFFFF', secondary: '#0C0C0C', onSecondary: '#F4F2EC', accent: '#FFD400', onAccent: '#0C0C0C' },
      { name: 'Rivet' },
    )
    k.palette({ ink: '#0C0C0C', onInk: '#FFFFFF', slot: '#CFCBC1', slotLight: '#E2DED4', sitter: '#B49C86', hair: '#3F3A33', coat: '#2B2A27', shirt: '#F4F2EC', win: '#FFFFFF', winInk: '#0C0C0C', winMuted: '#5D5B55', winLine: '#DAD7CF', lane: '#F1EFE9', hot: '#E4002B' })
    k.textStyle('Title 140', { size: 140, fontWeight: 900, letterSpacing: -7.5, lineHeight: 124, textCase: 'UPPER' })
    k.textStyle('Label 24', { size: 24, fontWeight: 800, letterSpacing: 2.4, lineHeight: 30, textCase: 'UPPER' })
    k.textStyle('Length 24', { ...MONO, size: 24, fontWeight: 800, lineHeight: 28 })
    k.textStyle('UI 18', { size: 18, fontWeight: 700, letterSpacing: -0.2, lineHeight: 22 })
    k.textStyle('UI mono 16', { ...MONO, size: 16, fontWeight: 600, lineHeight: 20 })
    pill(k, 'Length', { fill: 'ink', ink: 'onInk', style: 'Length 24', label: '9:04', pad: [6, 12], radius: 0 })

    /** The product crop: a window drawn for the video's subject, with the thing to look at circled. */
    const product = (sheet: string, t: Thumb, x: number, y: number) => {
      const W = 560, H = 330
      const win = k.frame(sheet, { x, y, width: W, height: H }, { name: 'Product', fill: 'win', clip: true, stroke: { color: 'ink', width: 5, align: 'INSIDE', join: 'MITER' }, effects: [hardShadow(k, 'ink', 12, 12)] })
      k.rect(win, W, 44, 'lane', { name: 'Bar', absolute: { x: 0, y: 0 } })
      k.text(win, t.ui === 'board' ? 'rivet / pipeline' : t.ui === 'table' ? 'rivet / contacts' : 'rivet / settings / sequences', { style: 'UI mono 16', color: 'winMuted', autoWidth: true, name: 'Path', absolute: { x: 18, y: 12 } })
      k.rect(win, W, 3, 'ink', { name: 'Bar rule', absolute: { x: 0, y: 44 } })
      if (t.ui === 'board') {
        // A pipeline: three lanes of deals, the won lane's top card circled.
        ;['New', 'Talking', 'Won'].forEach((lane, i) => {
          const lx = 18 + i * 180
          k.text(win, lane, { style: 'UI 18', color: 'winInk', autoWidth: true, name: 'Lane', absolute: { x: lx, y: 62 } })
          const cards: VectorPath[] = []
          for (let c = 0; c < 3 - (i === 1 ? 1 : 0); c++) cards.push(box(0, c * 74, 164, 62))
          k.vector(win, 164, 220, cards, i === 2 ? 'accent' : 'lane', { name: 'Deals', absolute: { x: lx, y: 96 }, stroke: { color: 'ink', width: 3, align: 'INSIDE', join: 'MITER' } })
          const lines: VectorPath[] = []
          for (let c = 0; c < 3 - (i === 1 ? 1 : 0); c++) { lines.push(box(12, c * 74 + 14, 96, 8), box(12, c * 74 + 34, 60, 8)) }
          k.vector(win, 164, 220, lines, 'ink', { name: 'Deal lines', absolute: { x: lx, y: 96 } })
        })
      } else if (t.ui === 'table') {
        // A contact list: rows of bars, the "next step" column filled in for every row.
        const rules: VectorPath[] = [], cells: VectorPath[] = [], next: VectorPath[] = []
        for (let r = 0; r < 6; r++) {
          rules.push(box(0, 92 + r * 44, W, 2))
          cells.push(box(18, 64 + r * 44, 120 + (r * 37) % 60, 10), box(210, 64 + r * 44, 90 + (r * 53) % 50, 10))
          next.push(box(392, 58 + r * 44, 140, 22))
        }
        k.vector(win, W, H, rules, 'winLine', { name: 'Rules', absolute: { x: 0, y: 0 } })
        k.vector(win, W, H, cells, 'ink', { name: 'Cells', absolute: { x: 0, y: 0 } })
        k.vector(win, W, H, next, 'accent', { name: 'Next steps', absolute: { x: 0, y: 0 }, stroke: { color: 'ink', width: 3, align: 'INSIDE', join: 'MITER' } })
      } else {
        // Settings: three toggles, all on.
        ;['Send at their 9 am', 'Stop on any reply', 'Bump after 3 days'].forEach((label, i) => {
          const ty = 70 + i * 84
          k.text(win, label, { style: 'UI 18', color: 'winInk', autoWidth: true, name: 'Setting', absolute: { x: 24, y: ty + 12 } })
          k.rect(win, 96, 48, 'accent', { name: 'Toggle', radius: 24, absolute: { x: 430, y: ty }, stroke: { color: 'ink', width: 4, align: 'INSIDE' } })
          k.ellipse(win, 32, 'ink', { name: 'Knob', absolute: { x: 486, y: ty + 8 } })
          k.rect(win, W - 48, 2, 'winLine', { name: 'Setting rule', absolute: { x: 24, y: ty + 66 } })
        })
      }
      return win
    }

    const sheets = THUMBS.map((t, i) => {
      const sheet = i === 0 ? k.sheet : k.addSheet(preset('youtube-thumb'), t.name)
      k.nameSheet(sheet, t.name)
      const right = t.face === 'right'
      k.flowSheet(sheet, 0, { top: 40, right: right ? 470 : 48, bottom: 40, left: right ? 48 : 500 }, t.ground, 'MIN', 'MIN')
      k.patch(sheet, { clipsContent: true, itemSpacing: 22, counterAxisSpacing: 22 })
      pattern(k, sheet, 'Grid', t.ink, grid, 0.1)
      // The product crop, low on the title's side, running off the foot of the sheet.
      const px = right ? 250 : 660
      product(sheet, t, px, 440)
      // What to look at: a ring and an arrow in yellow, outlined in black.
      const ring = t.ui === 'board' ? { x: px + 350, y: 512, w: 220 } : t.ui === 'table' ? { x: px + 350, y: 470, w: 230 } : { x: px + 390, y: 480, w: 180 }
      k.ellipse(sheet, ring.w, [], { name: 'Ring', absolute: { x: ring.x, y: ring.y }, stroke: { color: 'accent', width: 12 }, effects: [hardShadow(k, 'ink', 4, 4)] })
      const arrow = k.vector(sheet, 170, 96, [arrowPath(170, 96, 30)], 'accent', { name: 'Arrow', absolute: { x: ring.x - 160, y: ring.y + 150 }, stroke: { color: 'ink', width: 5, join: 'MITER' } })
      k.patch(arrow, { rotation: -24 })

      // The face: a photo slot on an offset block, cut in hard at the side.
      const fx = right ? 1280 - 48 - FACE.w : 48
      k.rect(sheet, FACE.w, FACE.h, 'accent', { name: 'Face block', absolute: { x: fx + (right ? -22 : 22), y: 118 }, stroke: { color: 'ink', width: 5, align: 'INSIDE', join: 'MITER' } })
      const face = k.photo(sheet, FACE.w, FACE.h, { ground: 'slot', name: 'Face photo', absolute: { x: fx, y: 96 } })
      presenter(k, face, FACE.w, FACE.h)
      k.rect(sheet, FACE.w, FACE.h, [], { name: 'Face edge', absolute: { x: fx, y: 96 }, stroke: { color: 'ink', width: 5, align: 'INSIDE', join: 'MITER' } })
      k.instance(sheet, 'Length', { Label: t.length }, { name: 'Length', absolute: { x: fx + FACE.w - 96, y: 96 + FACE.h - 52 } })

      // The words.
      const head = k.stack(sheet, { direction: 'HORIZONTAL', gap: 16, align: 'CENTER', name: 'Label row' })
      k.logo(head, 30, 30, { placeholder: t.ground === 'paper' ? 'tile' : 'mark' })
      k.text(head, `{{brand.name}} · ${t.label}`, { style: 'Label 24', color: t.ink, name: 'Label' })
      const title = k.stack(sheet, { gap: 6, name: 'Title' })
      t.lines.forEach((line, n) => {
        if (n === t.mark) {
          const bar = k.stack(title, { width: 'HUG', fill: 'accent', padding: { top: 0, right: 18, bottom: 8, left: 14 }, stroke: { color: 'ink', width: 5, align: 'OUTSIDE', join: 'MITER' }, effects: [hardShadow(k, 'ink', 10, 10)], name: 'Title bar' })
          k.text(bar, line, { style: t.style, color: 'onAccent', autoWidth: true, name: 'Marked line' })
        } else k.text(title, line, { style: t.style, color: t.ink, name: 'Title line' })
      })
      return sheet
    })
    k.setCover(sheets[0])
    return k.finish()
  },
})
