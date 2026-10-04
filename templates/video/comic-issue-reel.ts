// Comic launch reel: fifteen seconds for Backstop, which rolls a bad deploy back before a customer notices, told
// as issue no. 12 of a comic. The complaint is on screen from the first frame ("A deploy just broke checkout")
// and the first panel slams in under it: 3:07 a.m., a checkout window showing a 500, and the bug that did it. The
// camera whips across the page to the second panel (the hero, on focus lines: "Not on my watch") and down to the
// third, a full-width hit with "ROLLED BACK!" in an impact burst and the bug knocked out of frame, then pulls out
// to show the whole page. The story is also told as burned-in captions in a narrator's box, one text saying four
// lines in turn. The music is "Launch Day", the 120 BPM track PopCraft made in code (CC0), on the sheet's own audio
// lane; every slam, pop and camera move lands on one of its beats. 9:16 with 1:1 and 4:5 cuts.

import type { FrameNode } from '@popcraft/kit/lib/document/types'
import { Kit, preset, type Cue, type Swap } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { ease } from '@popcraft/kit/lib/motion/author'
import { bed } from '@popcraft/kit/templates/shared/beat'
import { background, refill } from '@popcraft/kit/templates/effects/shared'
import { feedVariants, pill, verticalPadding } from '@popcraft/kit/templates/social/shared'
import { COMIC, balloon, bandDots, benday, captionBox, comicBrand, hero, impact, inkShadow, issueBox, panel, rays, restage, stage, streaks, villain, windowCard } from '@popcraft/kit/templates/themes/comic-book-shared'
import { MONO } from '@popcraft/kit/templates/shared/type'
import { sizeOf } from '@popcraft/kit/templates/shared/fit'

/** Sheet ms of beat `n` of the loop. */
const MUSIC = bed('launch', 32)
const beat = MUSIC.beat
const DURATION = MUSIC.duration

/** The window the page is seen through, and the page: twice the window each way, so the whole page is a pull-out to half. */
const VIEW = { w: 800, h: 620 }
const PAGE = { w: VIEW.w * 2, h: VIEW.h * 2 }
const P1 = { x: 0, y: 0, w: 780, h: 600 }, P2 = { x: 820, y: 0, w: 780, h: 600 }, P3 = { x: 0, y: 640, w: 1600, h: 600 }

/** The camera looking at page point (x, y) at `zoom`: the page scales about its centre, then moves. */
const look = (x: number, y: number, zoom: number) => ({ zoom, tx: -zoom * (x - PAGE.w / 2), ty: -zoom * (y - PAGE.h / 2) })
const whip = ease.inOut('expo')
const SHOTS: { t: number; at: ReturnType<typeof look>; ease?: typeof whip }[] = [
  { t: 0, at: look(390, 300, 1), ease: ease.linear },
  { t: beat(8), at: look(390, 300, 1.08), ease: whip },
  { t: beat(9), at: look(1210, 300, 1), ease: ease.linear },
  { t: beat(16), at: look(1210, 300, 1.08), ease: whip },
  { t: beat(17), at: look(800, 940, 0.74), ease: ease.linear },
  { t: beat(23), at: look(800, 940, 0.8), ease: ease.inOut('cubic') },
  { t: beat(25), at: look(800, 620, 0.5) },
]

const swaps: Swap[] = [
  { layer: 'Caption', words: ['3:07 a.m. A deploy just broke checkout.', 'Backstop sees the error rate jump.', 'It rolls the deploy back in 9 seconds.', 'You sleep. Customers pay.'], at: beat(1), hold: 1900, stagger: 60, in: 350, out: 250, unit: 'word', rise: 24 },
]

const cues: Cue[] = [
  { layer: 'Hook', preset: 'pop-in', at: 0, params: { duration: 260, amount: 1.25 } },
  { layer: 'Head', preset: 'fade-in', at: 0, params: { duration: 250 } },
  { layer: 'Panel one', preset: 'pop-in', at: 120, params: { duration: 300, amount: 1.3 } },
  { layer: 'Narration', preset: 'pop-in', at: beat(1) - 150, params: { duration: 280 } },
  { layer: 'Bug', preset: 'pop-in', at: beat(2), params: { duration: 320 } },
  { layer: 'Bug says', preset: 'pop-in', at: beat(3), params: { duration: 260 } },
  { layer: 'Crash', preset: 'pop-in', at: beat(5), params: { duration: 240, amount: 1.6 } },
  { layer: 'Stage', preset: 'camera-shake', at: beat(5), params: { duration: 400, distance: 14 } },
  { layer: 'Panel two', preset: 'pop-in', at: beat(9), params: { duration: 300, amount: 1.3 } },
  { layer: 'Hero', preset: 'slide-in', at: beat(10), params: { duration: 420, direction: 'left' } },
  { layer: 'Hero says', preset: 'pop-in', at: beat(11), params: { duration: 260 } },
  { layer: 'Spotted', preset: 'pop-in', at: beat(13), params: { duration: 260 } },
  { layer: 'Panel three', preset: 'pop-in', at: beat(17), params: { duration: 300, amount: 1.3 } },
  { layer: 'Rolled back', preset: 'pop-in', at: beat(18), params: { duration: 260, amount: 1.7 } },
  { layer: 'Stage', preset: 'camera-shake', at: beat(18), params: { duration: 500, distance: 22 } },
  { layer: 'Restored', preset: 'pop-in', at: beat(20), params: { duration: 260 } },
  { layer: 'Rolled back', preset: 'pulse', at: beat(22), params: { duration: 600, amount: 0.06 } },
  { layer: 'Call', preset: 'pop-in', at: beat(26), params: { duration: 320 } },
  { layer: 'Site box', preset: 'pop-in', at: beat(27), params: { duration: 300 } },
  { layer: 'Call', preset: 'pulse', at: beat(29), params: { duration: 600, amount: 0.05 } },
]

/** The furniture behind the words, placed against the sheet's own size: called for the master and for every cut. */
function furnish(k: Kit, sheet: string) {
  const { w, h } = sizeOf(k, sheet)
  const pad = k.node<FrameNode>(sheet).padding
  refill(k, sheet)
  // The dots print in the margins only (on a 9:16, the bands the apps cover), clear of every word.
  bandDots(k, sheet, 'Top dots', { x: 0, y: 0, w, h: pad.top - 16 })
  bandDots(k, sheet, 'Foot dots', { x: 0, y: h - pad.bottom + 16, w, h: pad.bottom - 16 })
}

export default defineTemplate({
  id: 'comic-issue-reel',
  meta: {
    name: 'Comic launch reel',
    description: 'A 16-second feature launch told as issue no. 12 of a comic: the complaint lands on the first frame, a panel slams in with the bug that broke checkout, the camera whips across the page to the hero on focus lines and down to a full-width hit with "ROLLED BACK!" in an impact burst, then pulls out to the whole page. Speech balloons pop, a narrator’s box carries burned-in captions, and every slam lands on a beat of a 128 BPM loop (made by PopCraft, CC0). 9:16 with 1:1 and 4:5 cuts',
    category: 'animation', tags: ['animation', 'comic book', 'panels', 'speech balloon', 'halftone', 'ben-day dots', 'speed lines', 'impact', 'launch', 'feature', 'saas', 'devtools', 'reel', 'captions', 'music', 'audio'],
    platforms: ['instagram', 'tiktok', 'youtube', 'x'], formats: ['reel', 'short', 'story', 'post', 'portrait-post'], useCases: ['launch', 'announcement', 'comic'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  motion: { cues, swaps },
  build() {
    const k = new Kit('Comic launch reel', preset('ig-story'))
    k.quantizeGeometry = true
    comicBrand(k)
    k.textStyle('Masthead 20', { ...MONO, size: 20, fontWeight: 800, letterSpacing: 1.5, lineHeight: 26, textCase: 'UPPER' })
    k.textStyle('Issue 26', { size: 26, fontWeight: 900, letterSpacing: -0.5, lineHeight: 28 })
    k.textStyle('Issue small 13', { ...MONO, size: 16, fontWeight: 800, letterSpacing: 0.5, lineHeight: 18 })
    k.textStyle('Hook 92', { size: 92, fontWeight: 900, letterSpacing: -4, lineHeight: 86 })
    k.textStyle('Hook 66', { size: 66, fontWeight: 900, letterSpacing: -2.8, lineHeight: 62 })
    k.textStyle('Balloon 38', { size: 38, fontWeight: 800, letterSpacing: -0.5, lineHeight: 42, textAlign: 'CENTER' })
    k.textStyle('Box 26', { size: 26, fontWeight: 800, letterSpacing: 0.4, lineHeight: 32 })
    k.textStyle('Window 20', { ...MONO, size: 20, fontWeight: 700, lineHeight: 26 })
    k.textStyle('Error 110', { size: 110, fontWeight: 900, letterSpacing: -5, lineHeight: 100 })
    k.textStyle('Sound 72', { size: 72, fontWeight: 900, letterSpacing: -2.5, lineHeight: 70, textAlign: 'CENTER' })
    k.textStyle('Sound 150', { size: 150, fontWeight: 900, letterSpacing: -6, lineHeight: 132, textAlign: 'CENTER' })
    k.textStyle('Caption 32', { size: 32, fontWeight: 800, lineHeight: 40 })
    k.textStyle('Caption 26', { size: 26, fontWeight: 800, lineHeight: 34 })
    k.textStyle('Button 30', { size: 30, fontWeight: 900, lineHeight: 38 })
    k.textStyle('Site 24', { ...MONO, size: 24, fontWeight: 700, lineHeight: 30 })
    pill(k, 'Button', { fill: 'primary', ink: 'onPrimary', style: 'Button 30', label: 'READ ISSUE NO. 12', pad: [18, 30], radius: 0 })

    const sheet = k.sheet
    k.nameSheet(sheet, 'Launch reel')
    k.flowSheet(sheet, 20, verticalPadding(), 'paper', 'SPACE_BETWEEN', 'MIN')
    k.patch(sheet, { clipsContent: true })
    k.timeline(sheet, { duration: DURATION, fps: 30, audio: MUSIC.audio })
    background(k, sheet, 'paper')
    benday(k, sheet, 1080, 620, { role: 'accent', dot: 30, angle: 270, from: 0.05, to: 0.8, name: 'Top dots' })
    benday(k, sheet, 1080, 520, { role: 'primary', dot: 30, angle: 90, from: 0.02, to: 0.62, name: 'Foot dots' })

    const head = k.stack(sheet, { direction: 'HORIZONTAL', gap: 16, align: 'CENTER', name: 'Head' })
    issueBox(k, head, { number: 'Issue 26', small: 'Issue small 13', price: 'OCT · FREE' })
    k.text(head, '{{brand.name}} · the auto-rollback issue', { style: 'Masthead 20', color: 'text', name: 'Masthead' })
    k.text(sheet, 'A DEPLOY JUST BROKE CHECKOUT.', { style: 'Hook 92', color: 'text', name: 'Hook', effects: inkShadow(k, 6, 'primary') })

    const row = k.stack(sheet, { align: 'CENTER', name: 'Stage row' })
    const { art } = stage(k, row, VIEW.w, VIEW.h, { clip: true, fill: 'card', stroke: { color: 'text', width: 8, align: 'INSIDE', join: 'MITER' }, effects: inkShadow(k, 12, 'text') })
    const cam = k.frame(art, { x: -VIEW.w / 2, y: -VIEW.h / 2, width: PAGE.w, height: PAGE.h }, { name: 'Camera' })

    // Panel one: 3:07 a.m., the checkout that will not take money, and the bug that did it.
    panel(k, cam, P1, 'night', p => {
      benday(k, p, P1.w, P1.h, { role: 'nightDeep', dot: 18, angle: 90, from: 0.1, to: 0.8 })
      rays(k, p, P1.w, P1.h, { cx: 560, cy: 360, role: 'nightDeep', n: 22, inner: 200, seed: 4 })
      windowCard(k, p, 330, 'checkout', body => {
        k.text(body, '500', { style: 'Error 110', color: 'primary', name: 'Error code' })
        k.text(body, 'Payment failed. Try again later.', { style: 'Window 20', color: 'onCard', name: 'Error line' })
      }, { style: 'Window 20', name: 'Checkout window', absolute: { x: 36, y: 270 }, deg: -4 })
      villain(k, p, 440, { name: 'Bug', absolute: { x: 340, y: 170 }, deg: 8 })
      captionBox(k, p, '3:07 a.m. · production', { style: 'Box 26', name: 'Clock', absolute: { x: 26, y: 26 } })
      balloon(k, p, 'I ate your checkout!', { style: 'Balloon 38', width: 330, tail: 'left', name: 'Bug says', absolute: { x: 420, y: 28 } })
      impact(k, p, 250, 190, 'Crash!', { style: 'Sound 72', fill: 'primary', ink: 'onPrimary', deg: -10, name: 'Crash', seed: 5, absolute: { x: 30, y: 96 } })
    }, { name: 'Panel one' })

    // Panel two: the hero, on focus lines.
    panel(k, cam, P2, 'sky', p => {
      rays(k, p, P2.w, P2.h, { cx: 300, cy: 330, role: 'skyDeep', n: 34, inner: 230, seed: 8 })
      benday(k, p, P2.w, 260, { role: 'dot', dot: 16, angle: 270, from: 0, to: 0.5, opacity: 0.35 })
      streaks(k, p, 360, 300, { role: 'card', n: 9, seed: 2, x: 0, y: 250 })
      hero(k, p, 520, { name: 'Hero', absolute: { x: 60, y: 96 }, deg: 6 })
      balloon(k, p, 'Not on my watch.', { style: 'Balloon 38', width: 300, tail: 'left', name: 'Hero says', absolute: { x: 452, y: 34 } })
      captionBox(k, p, 'Error rate up 40×.\nSpotted in 4 seconds.', { style: 'Box 26', width: 330, name: 'Spotted', absolute: { x: 424, y: 470 } })
    }, { name: 'Panel two' })

    // Panel three: the hit, across the whole page.
    panel(k, cam, P3, 'accent', p => {
      rays(k, p, P3.w, P3.h, { cx: 800, cy: 300, role: 'primary', n: 44, inner: 300, seed: 12, thick: 0.9 })
      benday(k, p, 520, P3.h, { role: 'primary', dot: 20, angle: 180, from: 0, to: 0.7 })
      hero(k, p, 560, { name: 'Hero hits', absolute: { x: 40, y: 40 }, deg: 14 })
      villain(k, p, 300, { name: 'Bug out', absolute: { x: 1270, y: 30 }, deg: 152 })
      streaks(k, p, 330, 200, { role: 'ink', n: 7, seed: 9, dir: -1, x: 1010, y: 190 })
      impact(k, p, 820, 500, 'Rolled back!', { style: 'Sound 150', fill: 'primary', ink: 'onPrimary', deg: -5, name: 'Rolled back', seed: 21, points: 18, depth: 0.26, shadow: 16, line: 8, absolute: { x: 420, y: 50 } })
      captionBox(k, p, 'v4.11 restored in 9 seconds. Nobody was paged.', { style: 'Box 26', width: 470, name: 'Restored', absolute: { x: 1090, y: 470 } })
    }, { name: 'Panel three' })

    // The camera: on the first panel, a whip to the second, down to the hit, and out to the whole page.
    k.patch(cam, { scaleX: 0.5, scaleY: 0.5 })
    k.animate(cam, 'scaleX', SHOTS.map(s => ({ t: s.t, v: s.at.zoom, ...(s.ease ? { ease: s.ease } : {}) })))
    k.animate(cam, 'scaleY', SHOTS.map(s => ({ t: s.t, v: s.at.zoom, ...(s.ease ? { ease: s.ease } : {}) })))
    k.animate(cam, 'translateX', SHOTS.map(s => ({ t: s.t, v: s.at.tx, ...(s.ease ? { ease: s.ease } : {}) })))
    k.animate(cam, 'translateY', SHOTS.map(s => ({ t: s.t, v: s.at.ty, ...(s.ease ? { ease: s.ease } : {}) })))

    const box = k.stack(sheet, { height: 116, justify: 'CENTER', padding: { top: 0, right: 24, bottom: 0, left: 24 }, fill: 'accent', stroke: { color: 'text', width: 5, align: 'INSIDE', join: 'MITER' }, effects: inkShadow(k, 8, 'text'), name: 'Narration' })
    k.text(box, swaps[0].words[0], { style: 'Caption 32', color: 'onAccent', name: 'Caption' })
    const foot = k.stack(sheet, { direction: 'HORIZONTAL', gap: 22, align: 'CENTER', name: 'Foot' })
    k.instance(foot, 'Button', { Label: `READ ISSUE NO. ${COMIC.issue}` }, { name: 'Call' })
    k.text(k.stack(foot, { direction: 'HORIZONTAL', width: 'HUG', fill: 'card', stroke: { color: 'text', width: 4, align: 'INSIDE', join: 'MITER' }, padding: { top: 16, right: 18, bottom: 16, left: 18 }, name: 'Site box' }), '{{brand.site}}', { style: 'Site 24', color: 'onCard', autoWidth: true, name: 'Site' })
    furnish(k, sheet)

    k.swaps(sheet, swaps)
    k.cues(sheet, cues)
    const cut = (scale: number, hook?: string, caption?: string) => (kit: Kit, id: string) => {
      restage(kit, id, VIEW.w, VIEW.h, scale)
      if (hook) for (const n of kit.named(id, 'Hook')) kit.restyle(n, hook)
      if (caption) { for (const c of kit.named(id, 'Caption')) kit.restyle(c, caption); for (const b of kit.named(id, 'Narration')) kit.patch(b, { height: 92 }) }
      furnish(kit, id)
    }
    k.variants(sheet, feedVariants({ post: 56, portrait: 72 }, { post: cut(0.92, 'Hook 66', 'Caption 26'), portrait: cut(1.17) }))
    k.setCover(sheet)
    return k.finish()
  },
})
