// SaaS store screenshots, panoramic: six App Store sheets that are one picture 7,740 px wide for Saltline, a tide and
// surf forecast. The sea is three layers of swell running through every frame, the sun sits on the seam between the
// second and third, a tide line with its high and low marks rides the top swell, and two of the four phones are cut
// by a frame edge, so each screenshot shows the start of the next and invites the swipe. Every layer is drawn from
// world coordinates, sheet by sheet: move a phone by changing its world x. The screens are drawn placeholders: drop your
// own capture on a phone's "Your screenshot" slot and hide its "Placeholder screen".

import { Kit, preset } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import type { VectorPath } from '@popcraft/kit/lib/document/types'
import { drawn, soft } from '@popcraft/kit/templates/saas/stores-shared'
import { glow as haze } from '@popcraft/kit/templates/motion3d/stage'
import { MONO, SERIF } from '@popcraft/kit/templates/shared/type'
import { box } from '@popcraft/kit/templates/shared/draw'
import { ground } from '@popcraft/kit/templates/shared/fit'
import { uiRoles, flatPhone, type ScreenSpec } from '@popcraft/kit/templates/shared/devices'

const W = 1290, H = 2796, N = 6

const SCREENS: readonly ScreenSpec[] = [
  { name: 'Today', tabs: [4, 0], blocks: [
    { kind: 'title', text: 'Praia do Norte', note: 'Today' },
    { kind: 'hero', label: 'Next high tide', figure: '6:42 am', note: '1.9 m · rising for 2 h 10 min', share: 0.64 },
    { kind: 'curve', title: 'Tide', note: 'Metres', values: [0.6, 1.1, 1.7, 1.9, 1.5, 0.9, 0.5, 0.7, 1.3, 1.8, 1.6, 1.0], mark: 3, height: 120 },
    { kind: 'tiles', items: [['Swell', '1.4 m'], ['Wind', '8 kn'], ['Water', '17°']] },
    { kind: 'rows', card: true, rows: [{ title: 'Sunrise', sub: 'First light 6:31', value: '7:02', glyph: 'sun', ink: 'accent', tile: 'onScreen' }, { title: 'Low tide', sub: '0.5 m', value: '12:58', glyph: 'drop' }] },
  ] },
  { name: 'Spots', tabs: [4, 1], blocks: [
    { kind: 'title', text: 'Near you', note: '12 spots' },
    { kind: 'chips', items: ['Now', '+3 h', '+6 h', 'Tomorrow'] },
    { kind: 'rows', card: true, rows: [
      { title: 'Praia do Norte', sub: 'Clean · 1.4 m at 11 s', value: '9.1', glyph: 'star', ink: 'accent', tile: 'onScreen' },
      { title: 'Baleal north', sub: 'Glassy · 1.1 m at 10 s', value: '8.4', glyph: 'drop' },
      { title: 'Supertubos', sub: 'Crowded · 1.6 m at 12 s', value: '7.8', glyph: 'drop' },
      { title: 'Cantinho da Baía', sub: 'Small · 0.6 m at 8 s', value: '5.2', glyph: 'moon', ink: 'onScreenMuted', tile: 'track' },
      { title: 'Lagide', sub: 'Blown out · onshore 18 kn', value: '2.9', glyph: 'bolt', ink: 'onScreenMuted', tile: 'track' },
    ] },
    { kind: 'bars', title: 'Best window today', note: '6–9 am', values: [3, 7, 9, 8, 6, 4, 3, 2, 3, 5], hi: 2, height: 90 },
    { kind: 'tiles', items: [['Crowd', 'Light'], ['Water', '17°']] },
  ] },
  { name: 'Week', tabs: [4, 2], blocks: [
    { kind: 'title', text: 'Seven days', note: 'Praia do Norte' },
    { kind: 'bars', title: 'Swell height', note: 'Metres', values: [1.4, 1.2, 0.9, 1.6, 2.3, 2.1, 1.5], hi: 4, labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], height: 130 },
    { kind: 'hero', label: 'Best day this week', figure: 'Friday', note: '2.3 m at 14 s, offshore until noon' },
    { kind: 'rows', card: true, rows: [{ title: 'Thursday', sub: 'Building all day', value: '1.6 m', glyph: 'bars' }, { title: 'Friday', sub: 'Dawn patrol', value: '2.3 m', glyph: 'star', ink: 'accent', tile: 'onScreen' }, { title: 'Saturday', sub: 'Holding, more wind', value: '2.1 m', glyph: 'bars' }] },
  ] },
  { name: 'Alerts', tabs: [4, 3], blocks: [
    { kind: 'title', text: 'Alerts', note: '3 on' },
    { kind: 'text', text: 'Saltline watches your spots and tells you the evening before they turn on.' },
    { kind: 'checks', rows: [['Praia do Norte above 2 m', true], ['Baleal glassy before work', true], ['Spring low tide for the rock pools', true], ['Water over 19°', false]] },
    { kind: 'hero', label: 'Tomorrow, 6:10 am', figure: 'It’s on.', note: 'Praia do Norte · 2.3 m, offshore', fill: 'accent', ink: 'onAccent' },
    { kind: 'button', label: 'Add an alert' },
    { kind: 'heading', text: 'Last week', note: '4 sent' },
    { kind: 'rows', card: true, rows: [{ title: 'Baleal was glassy', sub: 'Tuesday 6:40 · you went', glyph: 'check', ink: 'positive' }, { title: 'Spring low, 0.2 m', sub: 'Sunday 13:10', glyph: 'drop' }] },
  ] },
]

/** A phone in the panorama: where its middle is (world px), its tilt, and what it shows. */
const PHONES: readonly { cx: number; top: number; tilt: number; screen: number }[] = [
  { cx: 1290, top: 1040, tilt: -6, screen: 0 },
  { cx: 3225, top: 960, tilt: 0, screen: 1 },
  { cx: 5160, top: 1040, tilt: 6, screen: 2 },
  { cx: 7095, top: 960, tilt: 0, screen: 3 },
]
const SCALE = 2.12

const CAPTIONS: readonly (readonly [string, string, 'left' | 'right'])[] = [
  ['Tides', 'Know the tide before you leave the house.', 'left'],
  ['Spots', 'Every break near you, scored by the hour.', 'right'],
  ['Now', 'Swell, wind and water in one look.', 'left'],
  ['Week', 'Seven days out, hour by hour.', 'left'],
  ['Alerts', 'A nudge the night before your spot turns on.', 'right'],
  ['Free', 'One spot is free. Forever.', 'left'],
]

/** The tide marks along the top swell (world x), high or low, with the time and the height. */
const MARKS: readonly [number, string, string][] = [[520, 'High 6:42', '1.9 m'], [2000, 'Low 12:58', '0.5 m'], [4240, 'High 19:05', '1.8 m'], [6080, 'Low 1:14', '0.6 m']]

/** The height (px from the top) of a swell at world `x`. */
const swell = (x: number, base: number, amp: number, period: number, phase: number) => base - amp * Math.sin((x / period) * Math.PI * 2 + phase) - amp * 0.22 * Math.sin((x / period) * Math.PI * 6.2 + phase * 2)
const LAYERS = [
  { role: 'sea1', base: 1560, amp: 150, period: 3760, phase: 0.72 },
  { role: 'sea2', base: 1930, amp: 110, period: 2900, phase: 2.2 },
  { role: 'sea3', base: 2330, amp: 90, period: 2300, phase: 4.1 },
] as const

export default defineTemplate({
  id: 'store-screenshots',
  meta: {
    name: 'SaaS store screenshots: panorama',
    description: 'Six App Store screenshots (1290 × 2796) that are one continuous picture: a sea of three swells, a sun on the seam between two frames, a tide line with its high and low marks, and phones cut by the frame edges so every screenshot shows the start of the next and invites the swipe. Drawn from world coordinates, sheet by sheet. Drop your own capture on each phone’s screenshot slot',
    category: 'social', tags: ['saas', 'saas store', 'app store', 'screenshots', 'panorama', 'panoramic', 'continuous', 'iphone', 'aso', 'mobile app', 'subscription app', 'listing', 'swipe'],
    platforms: ['app-store', 'ios'], formats: ['screenshot', 'gallery'], useCases: ['launch', 'brand-intro'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  sequence: true,
  build() {
    const k = new Kit('SaaS store screenshots: panorama', preset('appstore-iphone'))
    k.quantizeGeometry = true
    k.brand(
      { paper: '#F6E7D3', text: '#0B2E3A', primary: '#0E6E7E', onPrimary: '#FFFFFF', accent: '#FF7A3D', onAccent: '#2A1004',
        ...uiRoles({ screen: '#F2F6F6', surface: '#FFFFFF', onScreen: '#0B2E3A', onScreenMuted: '#4E666E', line: '#D6E2E4', track: '#DDE8EA', tile: '#DCEFF1', photo: '#BFD9DD', primary: '#0E6E7E', onPrimary: '#FFFFFF', accent: '#FF7A3D', onAccent: '#2A1004' }) },
      { name: 'Saltline' },
    )
    k.palette({ sea1: '#3FA3A8', sea2: '#16798A', sea3: '#0B4F63', foam: '#F6FBFA', onFoam: '#0B2E3A', sky: '#FFD9A8' })
    k.textStyle('Caption 132', { ...SERIF, size: 132, fontWeight: 700, letterSpacing: -4.2, lineHeight: 132 })
    k.textStyle('Kicker 34', { ...MONO, size: 34, fontWeight: 700, letterSpacing: 2.4, lineHeight: 42, textCase: 'UPPER' })
    k.textStyle('Mark 34', { size: 34, fontWeight: 800, letterSpacing: -0.6, lineHeight: 40 })
    k.textStyle('Mark note 28', { ...MONO, size: 28, fontWeight: 600, lineHeight: 34 })
    // A tide mark's flag: the tide and its height.
    k.component('Tide mark', { width: 'HUG', gap: 2, fill: 'foam', radius: 22, padding: { top: 16, right: 26, bottom: 16, left: 26 }, effects: [soft(k, 'text', 0.22, 16, 40)], description: 'A flag on the tide line: high or low, the time and the height.', props: { Label: 'High 6:42', Height: '1.9 m' } }, id => {
      k.propText(id, 'Label', { style: 'Mark 34', color: 'onFoam', autoWidth: true })
      k.propText(id, 'Height', { style: 'Mark note 28', color: 'onFoam', autoWidth: true })
    })

    let cover = ''
    for (let i = 0; i < N; i++) {
      const sheet = i === 0 ? k.sheet : k.addSheet(preset('appstore-iphone'))
      ground(k, sheet, `${i + 1} · ${CAPTIONS[i][0]}`, 'paper')
      k.patch(sheet, { x: i * (W + 120), y: 0 })
      if (!cover) cover = sheet
      const ox = i * W
      const near = (x: number, reach: number) => x > ox - reach && x < ox + W + reach

      // The sky: a warm band that deepens toward the horizon, and the sun on the seam of frames two and three.
      k.rect(sheet, W, 940, [k.gradient({ from: 'sky', to: 'sky', angle: 90, fromOpacity: 0, toOpacity: 0.85 })], { name: 'Sky', absolute: { x: 0, y: 860 } })
      if (near(2580, 900)) {
        haze(k, sheet, 'accent', 1500, 2580 - ox, 1380, 0.5, 'Sun glow')
        k.ellipse(sheet, 620, 'accent', { name: 'Sun', absolute: { x: 2580 - 310 - ox, y: 1070 } })
      }
      if (near(6400, 500)) k.ellipse(sheet, 150, k.tint('foam', 0.9), { name: 'Moon', absolute: { x: 6400 - ox, y: 880 } })
      // Gulls: small strokes, a flock drifting right across the frames.
      const gulls: VectorPath[] = []
      for (let g = 0; g < 26; g++) {
        const gx = 300 + g * 291 + ((g * 97) % 140), gy = 860 + ((g * 173) % 330), s = 16 + ((g * 31) % 18)
        if (near(gx, 60)) gulls.push({ closed: false, points: [{ x: gx - ox - s, y: gy - s * 0.4 }, { x: gx - ox - s * 0.4, y: gy - s * 0.55 }, { x: gx - ox, y: gy }, { x: gx - ox + s * 0.4, y: gy - s * 0.55 }, { x: gx - ox + s, y: gy - s * 0.4 }] })
      }
      drawn(k, sheet, gulls, 'text', { name: 'Gulls', strokeWidth: 5, opacity: 0.55 })

      // The sea: three swells, each one path from this frame's left edge to its right.
      LAYERS.forEach((L, li) => {
        const pts = []
        for (let x = -40; x <= W + 40; x += 30) pts.push({ x, y: swell(x + ox, L.base, L.amp, L.period, L.phase) })
        drawn(k, sheet, [{ closed: true, points: [...pts, { x: W + 40, y: H + 10 }, { x: -40, y: H + 10 }] }], L.role, { name: `Swell ${li + 1}` })
        // Light on the water: short dashes that follow the swell a little under its crest.
        const dashes: VectorPath[] = []
        for (let d = 0; d < 9; d++) {
          const x = ((d * 167 + li * 61 + i * 23) % 1250) + 20, y = swell(x + ox, L.base, L.amp, L.period, L.phase) + 60 + ((d * 71) % 190)
          dashes.push(box(x, y, 60 + ((d * 37) % 90), 7))
        }
        drawn(k, sheet, dashes, 'foam', { name: `Light ${li + 1}`, opacity: 0.28 - li * 0.06 })
      })
      // The sun's path on the water.
      if (near(2580, 700)) {
        const glints: VectorPath[] = []
        for (let g = 0; g < 14; g++) { const w = 420 - g * 22 + ((g * 53) % 60); glints.push(box(2580 - ox - w / 2 + ((g * 41) % 50) - 25, 1620 + g * 78, w, 12)) }
        drawn(k, sheet, glints, 'accent', { name: 'Sun path', opacity: 0.6 })
      }
      // The tide line: the top swell's crest as a stroke, with its marks.
      const L0 = LAYERS[0]
      const line = []
      for (let x = -40; x <= W + 40; x += 30) line.push({ x, y: swell(x + ox, L0.base, L0.amp, L0.period, L0.phase) })
      drawn(k, sheet, [{ closed: false, points: line }], 'foam', { name: 'Tide line', strokeWidth: 10 })
      for (const [mx, label, height] of MARKS) {
        // A mark belongs to the frame that holds its whole flag.
        if (mx - ox < 20 || mx - ox > W - 340) continue
        const my = swell(mx, L0.base, L0.amp, L0.period, L0.phase)
        k.rect(sheet, 6, 150, 'foam', { name: 'Mark stem', absolute: { x: mx - ox - 3, y: my - 150 } })
        k.ellipse(sheet, 44, 'accent', { name: 'Mark dot', stroke: { color: 'foam', width: 8, align: 'OUTSIDE' }, absolute: { x: mx - ox - 22, y: my - 22 } })
        k.instance(sheet, 'Tide mark', { Label: label, Height: height }, { name: 'Tide mark', absolute: { x: mx - ox - 3, y: my - 270 } })
      }

      // The words.
      const [kicker, caption, side] = CAPTIONS[i]
      const cw = 1010
      const words = k.stack(sheet, { width: cw, gap: 30, name: 'Caption block', absolute: { x: side === 'left' ? 96 : W - 96 - cw, y: 190 } })
      const tag = k.stack(words, { direction: 'HORIZONTAL', width: 'HUG', gap: 18, align: 'CENTER', name: 'Kicker row' })
      k.ellipse(tag, 26, 'accent', { name: 'Kicker dot' })
      k.text(tag, `${String(i + 1).padStart(2, '0')} · ${kicker}`, { style: 'Kicker 34', color: 'text', autoWidth: true, name: 'Kicker' })
      k.text(words, caption, { style: 'Caption 132', color: 'text', name: 'Caption' })

      // The phones this frame sees, whole or cut by its edge.
      for (const p of PHONES) {
        const pw = Math.round(426 * SCALE)
        if (!near(p.cx, pw / 2 + 120)) continue
        flatPhone(k, sheet, { spec: SCREENS[p.screen], scale: SCALE, x: p.cx - ox - pw / 2, y: p.top, rotation: p.tilt, name: 'Phone', shadow: { type: 'DROP_SHADOW', color: k.color('sea3', 0.5), offset: { x: 0, y: 24 }, blur: 50, spread: 0, visible: true } as never })
      }
    }
    k.setCover(cover)
    return k.finish()
  },
})
