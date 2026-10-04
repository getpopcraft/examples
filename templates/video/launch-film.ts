// SaaS film, Product Hunt launch video: thirty-two seconds for Siftwell, a tool that reads a product's feedback and
// folds the duplicates into ranked issues, in the warm editorial look (ivory paper, a bookish serif, forest green,
// marigold). Seven scenes in one composition: a cold open ("412 emails. 9 real problems.") over a heap of feedback
// slips, the problem (one bug reported forty-one ways), the product in three moves (it reads every message, folds
// duplicates into one issue, ranks by revenue at risk), the proof (a customer's words and the hours saved), and the
// end card: "Live on Product Hunt today". Over "Launch Day" (120 BPM, made in code by PopCraft, CC0): every scene
// comes on a bar line, the hook and the problem over the track's hook, the first two moves over its build, and the
// third move on the drop. Each move's window is a picture slot under a drawn screen: drop a screenshot on "Your screenshot"
// and hide "Placeholder screen". 1920×1080, with a 9:16 set and a square set of the same scenes, each its own
// composition.

import { Kit, preset, type Count, type Cue, type SceneSpec } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import type { AudioClip } from '@popcraft/kit/lib/document/types'
import { ease } from '@popcraft/kit/lib/motion/author'
import { presetPx } from '@popcraft/kit/lib/presets/page-presets'
import { logoBadge, pill, verticalPadding } from '@popcraft/kit/templates/social/shared'
import { sceneLengths, type as typeStep, withSound } from '@popcraft/kit/templates/saas/launch-video-shared'
import { into, playScenes, sceneSheets } from '@popcraft/kit/templates/scenes/shared'
import { SERIF } from '@popcraft/kit/templates/shared/type'
import { shadow } from '@popcraft/kit/templates/shared/texture'
import { bed } from '@popcraft/kit/templates/shared/beat'
import { productWindow, screenshotSlot, type WindowLook } from '@popcraft/kit/templates/shared/window'

const B = bed('launch', 64)
const { beat } = B
/** The beat each scene comes on. */
const ON = [0, 8, 16, 24, 32, 40, 50] as const

const SLIPS: readonly [sender: string, subject: string][] = [
  ['maya@loomly.io', 'Checkout button does nothing on Safari'],
  ['App Store review, two stars', 'Can’t pay. Tried three cards.'],
  ['#feedback · Jon', 'safari checkout broken again?'],
  ['priya@northfold.co', 'CSV export drops the header row'],
  ['Intercom · Luis', 'Payment page just spins'],
  ['sam@parcelhaus.de', 'Invoice shows USD, we pay in EUR'],
  ['Intercom · Aiko', 'Pay now button is dead (Safari 17)'],
  ['G2 review', 'Great tool, but checkout fails on Mac'],
  ['#feedback · Dee', 'export is missing column names'],
]
/** Where each slip lies on the heap (fractions of the room left over), and its tilt. */
const HEAP: readonly [fx: number, fy: number, turn: number][] = [[0.05, 0.02, -4], [0.95, 0, 3], [0.5, 0.2, -2], [0, 0.41, 2], [1, 0.37, -3], [0.4, 0.61, 4], [0.98, 0.73, 2], [0.03, 0.85, -3], [0.6, 1, 1]]
/** The square and 9:16 cuts' heap: six slips in two loose columns of three, none over another's words. */
const HEAP_SQUARE: readonly [fx: number, fy: number, turn: number][] = [[0, 0, -2], [1, 0.03, 2], [0.05, 0.5, 2], [0.96, 0.52, -2], [0, 1, -1], [1, 0.98, 2]]
/** The slips that are the same bug. */
const DUPES = [0, 1, 2, 4, 6] as const

const MOVES = [
  { title: 'It reads every message.', body: 'Email, Intercom, app reviews, the #feedback channel. All of it, as it lands.', url: 'siftwell.app / inbox' },
  { title: 'Folds the duplicates into one issue.', body: 'Forty-one reports of one checkout bug become a single ticket, every sender attached.', url: 'siftwell.app / issues' },
  { title: 'Ranks issues by revenue at risk.', body: 'See which fix keeps the most MRR before you plan the sprint.', url: 'siftwell.app / ranked' },
] as const
const INBOX: readonly [string, string, string][] = [
  ['maya@loomly.io', 'Checkout button does nothing on Safari', 'checkout'], ['priya@northfold.co', 'CSV export drops the header row', 'export'],
  ['Intercom · Luis', 'Payment page just spins', 'checkout'], ['sam@parcelhaus.de', 'Invoice shows USD, we pay in EUR', 'billing'],
  ['Intercom · Aiko', 'Pay now button is dead (Safari 17)', 'checkout'], ['#feedback · Dee', 'export is missing column names', 'export'],
]
const OTHERS: readonly [string, string][] = [['CSV export drops the header row', '17 reports'], ['Invoice shows the wrong currency', '12 reports'], ['Slack digest arrives twice', '6 reports'], ['Dark mode loses the chart legend', '4 reports']]
const RANKED: readonly [string, string, number][] = [['Checkout fails on Safari 17', '$4,180 MRR', 1], ['Invoice shows the wrong currency', '$1,960 MRR', 0.47], ['CSV export drops the header row', '$1,240 MRR', 0.3], ['Slack digest arrives twice', '$310 MRR', 0.08]]

const scenesFor = (suffix: string): SceneSpec[] => {
  const move = (i: number, cues: Cue[], counts?: Count[]): SceneSpec => ({
    sheet: `Move ${i + 1}${suffix}`, transition: into('PUSH_FROM_RIGHT', 420),
    cues: [
      { layer: 'Step tag', preset: 'pop-in', at: 200, params: { duration: 350 } },
      { layer: 'Move title', preset: 'words-in', at: 280, params: { duration: 600, amount: 70 } },
      { layer: 'Move body', preset: 'fade-in', at: beat(2), params: { duration: 500 } },
      { layer: 'Window', preset: 'rise-in', at: 150, params: { duration: 750 } },
      ...cues,
    ],
    ...(counts ? { counts } : {}),
  })
  return [
    { sheet: `Cold open${suffix}`, cues: [
      { layer: 'Brand row', preset: 'fade-in', at: 0, params: { duration: 300 } },
      { layer: 'Slip', preset: 'drop-in', at: 0, params: { duration: 420 }, stagger: { delay: 70 } },
      { layer: 'Hook figure', preset: 'pop-in', at: 80, params: { duration: 380 } },
      { layer: 'Hook turn', preset: 'words-in', at: beat(2), params: { duration: 500, amount: 80 } },
      { layer: 'Hook sub', preset: 'fade-in', at: beat(3.5), params: { duration: 500 } },
    ], counts: [{ layer: 'Hook figure', at: 80, duration: 900, counter: { from: 0, to: 412, suffix: ' emails.' } }] },
    { sheet: `Problem${suffix}`, transition: into('CIRCLE_WIPE', 520, { center: { x: 0.2, y: 0.5 } }), cues: [
      { layer: 'Problem title', preset: 'words-in', at: 250, params: { duration: 600, amount: 70 } },
      { layer: 'Dupe', preset: 'slide-in', at: beat(1.5), params: { duration: 480, direction: 'right' }, stagger: { delay: 130 } },
      { layer: 'Verdict', preset: 'pop-in', at: beat(4.5), params: { duration: 420 } },
      { layer: 'Verdict', preset: 'pulse', at: beat(6), params: { duration: 600, amount: 0.06 } },
    ] },
    move(0, [{ layer: 'Tag chip', preset: 'pop-in', at: beat(2.6), params: { duration: 300 }, stagger: { delay: Math.round(beat(0.8)) } }]),
    move(1, [
      { layer: 'Issue', preset: 'pop-in', at: beat(2), params: { duration: 420 } },
      { layer: 'Sender', preset: 'pop-in', at: beat(2.5), params: { duration: 260 }, stagger: { delay: 90 } },
      { layer: 'Other issue', preset: 'rise-in', at: beat(5), params: { duration: 450 }, stagger: { delay: 180 } },
    ], [{ layer: 'Merged figure', at: beat(2.5), duration: beat(3.5), counter: { from: 1, to: 41 } }]),
    move(2, [
      { layer: 'Risk bar', preset: 'wipe-in', at: beat(2), params: { duration: 700, direction: 'right' }, stagger: { delay: 220 } },
      { layer: 'Fix first', preset: 'pop-in', at: beat(5.5), params: { duration: 380 } },
      { layer: 'Fix first', preset: 'pulse', at: beat(6.5), params: { duration: 600, amount: 0.08 } },
    ]),
    { sheet: `Proof${suffix}`, transition: into('DISSOLVE', 450), cues: [
      { layer: 'Stars', preset: 'pop-in', at: 150, params: { duration: 380 } },
      { layer: 'Quote', preset: 'words-in', at: 300, params: { duration: 500, amount: 55 } },
      { layer: 'Who', preset: 'rise-in', at: beat(4), params: { duration: 550 } },
      { layer: 'Proof card', preset: 'pop-in', at: beat(2), params: { duration: 480 } },
    ], counts: [{ layer: 'Proof figure', at: beat(2.5), duration: beat(3), counter: { from: 540, to: 40, suffix: ' min' } }, { layer: 'Teams figure', at: beat(5), duration: beat(3), counter: { from: 900, to: 1280, suffix: ' teams' } }] },
    { sheet: `End card${suffix}`, transition: into('CIRCLE_WIPE', 520), cues: [
      { layer: 'Rings', preset: 'scale-in', at: 0, params: { duration: 1100 } },
      { layer: 'Launch chip', preset: 'drop-in', at: 250, params: { duration: 450 } },
      { layer: 'End logo', preset: 'pop-in', at: 350, params: { duration: 450 } },
      { layer: 'End name', preset: 'rise-in', at: 500, params: { duration: 650 } },
      { layer: 'End tagline', preset: 'fade-in', at: beat(2), params: { duration: 500 } },
      { layer: 'End button', preset: 'pop-in', at: beat(3), params: { duration: 420 } },
      { layer: 'End button', preset: 'pulse', at: beat(5), params: { duration: 600, amount: 0.06 } },
      { layer: 'End button', preset: 'pulse', at: beat(7), params: { duration: 600, amount: 0.06 } },
    ] },
  ]
}
const SIZES = [{ preset: 'video-1080p', suffix: '', comp: 'comp-ph-wide', label: '16:9' }, { preset: 'ig-story', suffix: ' · 9:16', comp: 'comp-ph-tall', label: '9:16' }, { preset: 'video-square', suffix: ' · 1:1', comp: 'comp-ph-square', label: '1:1' }] as const
const SPECS = SIZES.map(s => scenesFor(s.suffix))
const LENGTHS = sceneLengths(ON.map(b => beat(b)), B.duration, SPECS[0])
const GROUNDS = ['paper', 'primary', 'paper', 'paper', 'paper', 'paper', 'primary'] as const

export default defineTemplate({
  id: 'launch-film',
  meta: {
    name: 'SaaS film: Product Hunt launch video',
    description: 'A 32-second launch video in seven scenes: a cold-open hook over a heap of feedback, the problem, the product in three moves (each a product window with a picture slot for your screenshot), a customer’s proof, and a "Live on Product Hunt today" end card. Warm editorial serif on ivory, music, every scene cut to the beat. 1920×1080, with 9:16 and square sets of the same scenes',
    category: 'animation', tags: ['animation', 'saas', 'saas film', 'product hunt', 'launch video', 'launch', 'scenes', 'composition', 'serif', 'editorial', 'demo', 'music', 'audio', '16:9', 'end card'],
    platforms: ['product-hunt', 'youtube', 'x', 'linkedin', 'web', 'instagram', 'tiktok'], formats: ['video', 'demo', 'ad', 'reel', 'post'], useCases: ['launch', 'announcement', 'testimonial'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  motion: { scenes: SPECS[0], more: SPECS.slice(1) },
  build() {
    const k = new Kit('SaaS film: Product Hunt launch video', preset('video-1080p'))
    k.quantizeGeometry = true
    k.brand(
      { paper: '#F5F0E6', text: '#16201B', onPaper: '#1F5B45', primary: '#1F5B45', onPrimary: '#F5F0E6', card: '#FFFFFF', onCard: '#16201B', accent: '#F2A413', onAccent: '#201400' },
      { name: 'Siftwell', tagline: 'Feedback in. Priorities out.' },
    )
    k.palette({ ink: '#16201B', faint: '#50554E', rule: '#DDD5C5', side: '#F3EEE4', slip: '#FFFDF8', mint: '#DCEBE2', forest: '#1F5B45', hot: '#D8432B', hotInk: '#B93118', ring: '#3E8468', dotA: '#F2A413', dotB: '#7FB69B', dotC: '#D8432B', dotD: '#16201B' })
    const made = new Set<string>()
    const T = (name: string, px: number, o: Parameters<typeof typeStep>[4] = {}) => typeStep(k, made, name, px, o)
        k.component('Slip', { width: 500, gap: 8, fill: 'slip', radius: 18, padding: { top: 20, right: 26, bottom: 24, left: 26 }, stroke: { color: 'rule', width: 2, align: 'INSIDE' }, effects: [shadow(k, 'ink', 0.14, 14, 28)],
      description: 'One piece of feedback: who sent it, and what it says.', props: { Sender: SLIPS[0][0], Subject: SLIPS[0][1] } }, id => {
      const from = k.stack(id, { direction: 'HORIZONTAL', gap: 10, align: 'CENTER', name: 'From' })
      k.ellipse(from, 18, 'dotB', { name: 'Sender dot' })
      k.propText(from, 'Sender', { style: T('Sender', 20, { fontWeight: 500, leading: 1.3 }), color: 'faint', autoWidth: true })
      k.propText(id, 'Subject', { style: T('Slip', 28, { fontWeight: 600, leading: 1.25, tracking: -0.01 }), color: 'ink' })
    })
    pill(k, 'Step', { fill: 'primary', ink: 'onPrimary', style: T('Tag', 20, { fontWeight: 800, tracking: 0.12, leading: 1.2 }), label: 'MOVE 1 OF 3', pad: [10, 20], radius: 8 })
    pill(k, 'Launch', { fill: 'accent', ink: 'onAccent', style: T('Tag', 20, { fontWeight: 800, tracking: 0.12, leading: 1.2 }), label: 'LIVE ON PRODUCT HUNT TODAY', pad: [12, 24], radius: 8 })

    const sound: Record<string, AudioClip[]> = {}
    SIZES.forEach((size, row) => {
      const { width: W, height: H } = presetPx(preset(size.preset))
      const wide = W > H, tall = H > W
      const pad = tall ? verticalPadding() : wide ? { top: 70, right: 110, bottom: 70, left: 110 } : { top: 64, right: 64, bottom: 64, left: 64 }
      const CW = W - pad.left - pad.right, CH = H - pad.top - pad.bottom
      const hook = T('Hook', wide ? 136 : tall ? 92 : 96, { fontWeight: 700, leading: 1.02, tracking: -0.03, ...SERIF })
      const head = T('Head', wide ? 92 : tall ? 76 : 64, { fontWeight: 700, leading: 1.06, tracking: -0.025, ...SERIF })
      const body = T('Body', wide ? 36 : tall ? 32 : 28, { fontWeight: 500, leading: 1.36 })
      const brandStyle = T('Brand', wide ? 38 : 30, { fontWeight: 800, tracking: -0.02 })
      const sheets = sceneSheets(k, size.preset, SPECS[row].map(s => s.sheet), row)
      sheets.forEach((id, i) => { k.flowSheet(id, wide ? 0 : tall ? 28 : 22, pad, GROUNDS[i], 'CENTER', 'MIN'); k.timeline(id, { duration: LENGTHS[i], fps: 30 }) })
      const [open, problem, m1, m2, m3, proof, end] = sheets
      /** A scene's layout: side by side on the wide sheet, stacked on the others. */
      const split = (sheet: string, leftWidth: number, gap: number) => {
        if (!wide) return { left: sheet, right: sheet }
        const rowId = k.stack(sheet, { direction: 'HORIZONTAL', gap, align: 'CENTER', height: CH, name: 'Layout' })
        return { left: k.stack(rowId, { width: leftWidth, gap: 30, name: 'Words' }), right: k.stack(rowId, { align: 'MAX', justify: 'CENTER', height: CH, name: 'Picture' }) }
      }

      // ── Cold open: the heap of feedback, and what is really in it.
      {
        const { left, right } = split(open, 820, 50)
        const brand = k.stack(left, { direction: 'HORIZONTAL', gap: 14, align: 'CENTER', name: 'Brand row' })
        logoBadge(k, brand, { fill: 'primary', size: wide ? 38 : 30, radius: 12 })
        k.text(brand, '{{brand.name}}', { style: brandStyle, color: 'text', autoWidth: true, name: 'Brand name' })
        const words = k.stack(left, { gap: 0, name: 'Hook' })
        k.text(words, '412 emails.', { style: hook, color: 'text', name: 'Hook figure' })
        k.text(words, '9 real problems.', { style: hook, color: 'onPaper', name: 'Hook turn' })
        k.text(left, 'Most of your feedback is the same few things, said again. Siftwell finds them.', { style: body, color: 'text', name: 'Hook sub', ...(wide ? { width: 720 } : {}) })
        const SW = wide ? CW - 820 - 50 : CW, SH = wide ? 900 : tall ? 700 : 500, slipW = wide ? 500 : tall ? 356 : 456
        const heap = k.stack(right, { width: SW, height: SH, name: 'Heap' })
        const n = wide ? 9 : 6
        SLIPS.slice(0, n).forEach(([Sender, Subject], i) => {
          const [fx, fy, turn] = (wide ? HEAP : HEAP_SQUARE)[i]
          // A turned slip swings a little past its box: the heap keeps a margin inside the safe area for it.
          const edge = tall ? 28 : 10
          const y = fy * (SH - (wide ? 160 : 150))
          const slip = k.instance(heap, 'Slip', { Sender, Subject }, { name: 'Slip', width: slipW, absolute: { x: Math.round(fx * (SW - slipW - 2 * edge)) + edge, y: Math.round(y) } })
          k.patch(slip, { rotation: turn })
        })
      }

      // ── The problem: one bug, said forty-one ways.
      {
        const { left, right } = split(problem, 760, 80)
        k.text(left, 'The same bug, reported forty-one ways.', { style: hook, color: 'onPrimary', name: 'Problem title' })
        const list = k.stack(right, { gap: 14, name: 'Dupes', ...(wide ? { width: CW - 840 } : {}) })
        DUPES.slice(0, wide || tall ? 5 : 3).forEach(i => k.instance(list, 'Slip', { Sender: SLIPS[i][0], Subject: SLIPS[i][1] }, { name: 'Dupe', width: 'FILL' }))
        const verdict = k.stack(wide ? left : problem, { direction: 'HORIZONTAL', width: 'HUG', gap: 12, align: 'CENTER', fill: 'accent', radius: 10, padding: { top: 12, right: 22, bottom: 12, left: 18 }, name: 'Verdict' })
        k.ellipse(verdict, 16, 'hot', { name: 'Verdict dot' })
        k.text(verdict, 'One bug. 41 senders. 9 hours of reading.', { style: T('Verdict', wide ? 28 : 22, { fontWeight: 800, tracking: -0.01, leading: 1.25 }), color: 'onAccent', autoWidth: true, name: 'Verdict words' })
      }

      // ── The product in three moves.
      const us = wide ? 1.25 : tall ? 1 : 1.12, px = (n: number) => Math.round(n * us)
      const WIN = wide ? { width: 1030, height: 760 } : tall ? { width: CW, height: 780 } : { width: CW, height: 560 }
      const ui16 = () => T('UI', px(16), { fontWeight: 500, leading: 1.3 })
      const ui18 = () => T('UI strong', px(18), { fontWeight: 600, leading: 1.3 })
      const chip16 = () => T('Chip', px(16), { fontWeight: 800, leading: 1.25, tracking: 0.02 })
      const look: WindowLook = { fill: 'card', bar: 'side', titleStyle: ui16(), titleInk: 'faint', dots: 'rule', radius: 18, barHeight: 48, rule: 'rule', effects: [shadow(k, 'ink', 0.2, 30, 70)] }
      ;[m1, m2, m3].forEach((sheet, i) => {
        const { left, right } = split(sheet, 600, 70)
        k.instance(left, 'Step', { Label: `MOVE ${i + 1} OF 3` }, { name: 'Step tag' })
        k.text(left, MOVES[i].title, { style: head, color: 'text', name: 'Move title' })
        k.text(left, MOVES[i].body, { style: body, color: 'text', name: 'Move body' })
        const { body: screen, bodyHeight: bh } = productWindow(k, right, { ...WIN, title: MOVES[i].url, look })
        const bw = WIN.width
        screenshotSlot(k, screen, bw, bh, 'side')
        const ui = k.frame(screen, { x: 0, y: 0, width: bw, height: bh }, { name: 'Placeholder screen', fill: 'card' })
        // The sidebar.
        const sb = px(bw >= 900 ? 176 : 156), x0 = sb + px(28), mw = bw - sb - px(56), top = px(70)
        k.rect(ui, sb, bh, 'side', { name: 'Sidebar', absolute: { x: 0, y: 0 } })
        k.rect(ui, 2, bh, 'rule', { name: 'Sidebar rule', absolute: { x: sb, y: 0 } })
        k.rect(ui, sb - px(24), px(40), 'mint', { name: 'Nav selected', radius: 9, absolute: { x: px(12), y: px(18 + i * 46) } })
        ;['Inbox', 'Issues', 'Ranked', 'Sources'].forEach((label, j) => k.text(ui, label, { style: j === i ? ui18() : ui16(), color: j === i ? 'forest' : 'faint', autoWidth: true, name: 'Nav item', absolute: { x: px(26), y: px(26 + j * 46) } }))
        const title = T('UI title', px(22), { fontWeight: 700, tracking: -0.015, leading: 1.25 })
        const heading = (words: string) => k.text(ui, words, { style: title, color: 'ink', autoWidth: true, name: 'Screen title', absolute: { x: x0, y: px(22) } })
        if (i === 0) {
          heading('Inbox · 412 new')
          const rh = Math.floor((bh - top - px(10)) / INBOX.length)
          // The reader: a band that passes down the messages, tagging each as it goes.
          const scan = k.rect(ui, bw - sb - 2, rh, k.tint('accent', 0.24), { name: 'Reader', absolute: { x: sb + 2, y: top } })
          const step = beat(0.8), t0 = beat(2.2)
          k.animate(scan, 'translateY', [{ t: t0, v: 0, ease: ease.hold }, ...INBOX.slice(1).flatMap((_, r) => [{ t: Math.round(t0 + (r + 0.55) * step), v: r * rh, ease: ease.inOut('cubic') }, { t: Math.round(t0 + (r + 1) * step), v: (r + 1) * rh, ...(r < INBOX.length - 2 ? { ease: ease.hold } : {}) }])])
          k.animate(scan, 'opacity', [{ t: 0, v: 0, ease: ease.hold }, { t: beat(2), v: 0, ease: ease.out('cubic') }, { t: beat(2.4), v: 1, ease: ease.hold }, { t: Math.round(t0 + 5.6 * step), v: 1, ease: ease.out('cubic') }, { t: Math.round(t0 + 6.4 * step), v: 0 }])
          INBOX.forEach(([sender, subject, tag], r) => {
            const y = top + r * rh, mid = y + Math.round(rh / 2)
            k.rect(ui, mw, 2, 'rule', { name: 'Row rule', absolute: { x: x0, y: y + rh - 2 } })
            k.ellipse(ui, px(32), (['dotA', 'dotB', 'dotC', 'dotD'] as const)[r % 4], { name: 'Avatar', absolute: { x: x0, y: mid - px(16) } })
            k.text(ui, sender, { style: ui16(), color: 'faint', autoWidth: true, name: 'Sender name', absolute: { x: x0 + px(46), y: mid - px(24) } })
            k.text(ui, subject, { style: ui18(), color: 'ink', autoWidth: true, name: 'Subject', absolute: { x: x0 + px(46), y: mid - px(1) } })
            const chip = k.stack(ui, { width: px(112), height: px(32), justify: 'CENTER', align: 'CENTER', fill: 'mint', radius: 8, name: 'Tag chip', absolute: { x: x0 + mw - px(112), y: mid - px(16) } })
            k.text(chip, tag, { style: chip16(), color: 'forest', autoWidth: true, name: 'Tag' })
          })
        } else if (i === 1) {
          heading('Issues · 9 open')
          const others = OTHERS.slice(0, wide ? 4 : 2), oh = px(60), ih = bh - top - others.length * oh - px(26)
          const issue = k.stack(ui, { width: mw, height: ih, fill: 'mint', radius: 16, padding: { top: px(22), right: px(26), bottom: px(24), left: px(26) }, justify: 'SPACE_BETWEEN', name: 'Issue', absolute: { x: x0, y: top } })
          k.text(issue, 'Checkout fails on Safari 17', { style: T('Issue', px(26), { fontWeight: 700, tracking: -0.02, leading: 1.2 }), color: 'ink', name: 'Issue title' })
          const merged = k.stack(issue, { direction: 'HORIZONTAL', gap: 16, align: 'CENTER', name: 'Merged' })
          k.text(merged, '41', { style: T('Figure', px(80), { fontWeight: 700, leading: 1, tracking: -0.03, fontFeatures: { tnum: 1 }, ...SERIF }), color: 'forest', autoWidth: true, name: 'Merged figure' })
          k.text(merged, 'reports folded into one issue', { style: ui18(), color: 'ink', name: 'Merged label' })
          const senders = k.stack(issue, { direction: 'HORIZONTAL', gap: px(6), name: 'Senders' })
          for (let n = 0; n < Math.min(14, Math.floor((mw - px(52)) / px(40))); n++) k.ellipse(senders, px(34), (['dotA', 'dotB', 'dotC', 'dotD', 'forest'] as const)[n % 5], { name: 'Sender', stroke: { color: 'card', width: 3, align: 'OUTSIDE' } })
          others.forEach(([name, count], r) => {
            const other = k.stack(ui, { direction: 'HORIZONTAL', width: mw, height: oh - px(10), justify: 'SPACE_BETWEEN', align: 'CENTER', fill: 'side', radius: 10, padding: { top: 0, right: px(18), bottom: 0, left: px(18) }, name: 'Other issue', absolute: { x: x0, y: top + ih + px(14) + r * oh } })
            k.text(other, name, { style: ui18(), color: 'ink', autoWidth: true, name: 'Other title' })
            k.text(other, count, { style: ui16(), color: 'faint', autoWidth: true, name: 'Other count' })
          })
        } else {
          heading('Ranked by revenue at risk')
          const rh = Math.floor((bh - top - px(14)) / RANKED.length)
          RANKED.forEach(([name, mrr, share], r) => {
            const y = top + px(10) + r * rh
            k.text(ui, name, { style: ui18(), color: 'ink', autoWidth: true, name: 'Risk title', absolute: { x: x0, y } })
            k.text(ui, mrr, { style: ui18(), color: r === 0 ? 'hotInk' : 'ink', width: px(150), align: 'RIGHT', name: 'Risk figure', absolute: { x: x0 + mw - px(150), y } })
            const bar = k.stack(ui, { width: mw, height: px(22), fill: 'side', radius: px(11), clip: true, name: 'Risk bar', absolute: { x: x0, y: y + px(38) } })
            k.rect(bar, Math.round(mw * share), px(22), r === 0 ? 'hot' : 'forest', { name: 'Risk fill', radius: px(11) })
          })
          const first = k.stack(ui, { width: 'HUG', fill: 'accent', radius: 8, padding: { top: px(4), right: px(12), bottom: px(4), left: px(12) }, name: 'Fix first', absolute: { x: x0 + mw - px(150) - px(104), y: top + px(6) } })
          k.text(first, 'Fix first', { style: chip16(), color: 'onAccent', autoWidth: true, name: 'Fix first label' })
        }
      })

      // ── The proof.
      {
        const { left, right } = split(proof, 1000, 80)
        // Stacked, the proof spreads down the whole safe column: the stars at its head, the card at its foot.
        if (!wide) k.patch(proof, { primaryAxisAlignItems: 'SPACE_BETWEEN' })
        const stars = k.stack(left, { direction: 'HORIZONTAL', width: 'HUG', gap: 8, name: 'Stars' })
        for (let s = 0; s < 5; s++) k.star(stars, wide ? 48 : 34, 'accent', { name: 'Star' })
        k.text(left, '“We cut triage from nine hours a week to forty minutes. Monday’s meeting is short now.”', { style: T('Quote', wide ? 84 : tall ? 70 : 58, { fontWeight: 600, leading: 1.12, tracking: -0.02, ...SERIF }), color: 'text', name: 'Quote' })
        const who = k.stack(left, { direction: 'HORIZONTAL', gap: 20, align: 'CENTER', name: 'Who' })
        k.photo(who, wide ? 110 : 88, wide ? 110 : 88, { radius: wide ? 55 : 44, ground: 'mint', name: 'Customer photo' })
        const whoWords = k.stack(who, { gap: 2, name: 'Who words' })
        k.text(whoWords, 'Dana Whitfield', { style: T('Name', wide ? 36 : 28, { fontWeight: 800, tracking: -0.015 }), color: 'text', name: 'Who name' })
        k.text(whoWords, 'Head of Support, Parcelhaus', { style: T('Role', wide ? 28 : 22, { fontWeight: 500, leading: 1.3 }), color: 'text', name: 'Who role' })
        const card = k.stack(right, { gap: wide ? 18 : 10, fill: 'primary', radius: 28, padding: wide ? 44 : { top: 28, right: 32, bottom: 30, left: 32 }, effects: [shadow(k, 'ink', 0.22, 26, 60)], name: 'Proof card', ...(wide ? { width: CW - 1000 - 80 } : {}) })
        if (!wide) k.patch(card, { layoutSizingHorizontal: 'FILL' })
        k.text(card, '40 min', { style: T('Proof', wide ? 140 : 96, { fontWeight: 700, leading: 1, tracking: -0.04, fontFeatures: { tnum: 1 }, ...SERIF }), color: 'onPrimary', name: 'Proof figure' })
        k.text(card, 'a week on triage. It was nine hours.', { style: body, color: 'onPrimary', name: 'Proof label' })
        k.rect(card, 'FILL', 2, 'ring', { name: 'Proof rule' })
        k.text(card, '1,280 teams', { style: T('Teams', wide ? 44 : 28, { fontWeight: 800, tracking: -0.02, fontFeatures: { tnum: 1 } }), color: 'onPrimary', name: 'Teams figure' })
        k.text(card, 'plan their sprint from a Siftwell queue', { style: T('Role', wide ? 28 : 22, { fontWeight: 500, leading: 1.3 }), color: 'onPrimary', name: 'Teams label' })
      }

      // ── The end card.
      {
        k.patch(end, { counterAxisAlignItems: 'CENTER', itemSpacing: wide ? 30 : 24, counterAxisSpacing: 30 })
        const R = Math.round(Math.max(W, H) * 0.92)
        const rings = Array.from({ length: 7 }, (_, r) => { const d = R * (1 - r * 0.13); return { closed: true, points: [0, 1, 2, 3].map(q => ({ x: R / 2 + (d / 2) * [0, 1, 0, -1][q], y: R / 2 + (d / 2) * [-1, 0, 1, 0][q], handleIn: { x: R / 2 + (d / 2) * [-0.5523, 1, 0.5523, -1][q], y: R / 2 + (d / 2) * [-1, -0.5523, 1, 0.5523][q] }, handleOut: { x: R / 2 + (d / 2) * [0.5523, 1, -0.5523, -1][q], y: R / 2 + (d / 2) * [-1, 0.5523, 1, -0.5523][q] } })) } })
        k.vector(end, R, R, rings, 'ring', { name: 'Rings', strokeWidth: 4, absolute: { x: Math.round((W - R) / 2), y: Math.round((H - R) / 2) } })
        k.instance(end, 'Launch', { Label: 'LIVE ON PRODUCT HUNT TODAY' }, { name: 'Launch chip' })
        logoBadge(k, end, { fill: 'accent', size: wide ? 110 : 72, radius: wide ? 36 : 26, name: 'End logo' })
        k.text(end, '{{brand.name}}', { style: T('End', wide ? 250 : tall ? 110 : 132, { fontWeight: 700, leading: 1, tracking: -0.04, textAlign: 'CENTER', ...SERIF }), color: 'onPrimary', name: 'End name' })
        k.text(end, '{{brand.tagline}}', { style: T('Tagline', wide ? 58 : 36, { fontWeight: 500, leading: 1.25, tracking: -0.01, textAlign: 'CENTER' }), color: 'onPrimary', name: 'End tagline' })
        const button = k.stack(end, { direction: 'HORIZONTAL', width: 'HUG', gap: 14, align: 'CENTER', fill: 'card', radius: 14, padding: wide ? { top: 24, right: 40, bottom: 24, left: 32 } : { top: 18, right: 30, bottom: 18, left: 24 }, effects: [shadow(k, 'ink', 0.3, 16, 36)], name: 'End button' })
        k.vector(button, 26, 22, [{ closed: true, points: [{ x: 13, y: 0 }, { x: 26, y: 22 }, { x: 0, y: 22 }] }], 'hot', { name: 'Upvote' })
        k.text(button, 'Upvote us at siftwell.app/launch', { style: T('Button', wide ? 38 : 26, { fontWeight: 800, tracking: -0.015, leading: 1.25 }), color: 'onCard', autoWidth: true, name: 'End button label' })
      }

      // The tall cuts end where the apps draw their buttons: along that foot lie the people behind the feedback, two
      // loose rows of sender dots in the product's colours (drawing only), so no scene's lower third is bare ground.
      if (tall) sheets.slice(0, 6).forEach((id, i) => {
        const dots = ['dotA', 'dotB', 'dotC', 'dotD', 'forest'] as const
        for (let n = 0; n < 22; n++) {
          const row = n % 2, x = Math.round(-30 + (n >> 1) * 104 + row * 52 + ((n * 37 + i * 11) % 23)), y = 1560 + row * 110 + ((n * 53 + i * 7) % 41)
          k.ellipse(id, 64 - ((n * 13) % 22), dots[(n + i) % 5], { name: 'Sender crowd', opacity: i === 1 ? 0.35 : 0.55, absolute: { x, y } })
        }
      })
      playScenes(k, size.comp, `Product Hunt launch video (${size.label})`, sheets, SPECS[row], 'paper')
      sound[size.comp] = B.audio
      if (row === 0) k.setCover(open)
    })
    return withSound(k.finish(), sound)
  },
})
