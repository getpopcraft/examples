// App Store preview: the 15-second portrait preview App Store Connect takes, at the iPhone size (886 × 1920) and the
// iPad size (1200 × 1600), 30 fps. Five beats of three seconds on the app's own colour: a headline at the top, and
// the phone below turning in 3D, flipping over to the next screen at every beat — welcome, home, insights, goals,
// sending money. On iPad the tablet shows the iPad app while the phone flips in front of it.
//
// One 3D scene: the phone's rig holds one phone per beat at the same place; at each beat the one in front turns
// edge-on and the next turns in from the other side (their Y turns and opacities, keyed), and the rig sways as a
// whole. The headline is one text whose words change at each beat (./stage.ts `phrases`).

import { Kit, preset, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { ease } from '@popcraft/kit/lib/motion/author'
import { key, type K } from '@popcraft/kit/templates/motion/keys'
import { appScreens } from '@popcraft/kit/templates/motion3d/ui'
import { PHONE, TABLET, devices, deviceShadow } from '@popcraft/kit/templates/motion3d/devices'
import { brand, column, glow, phrases, rig, sizes, stage, typeStep, type Size } from '@popcraft/kit/templates/motion3d/stage'

const DURATION = 15000, FPS = 30 as const, BEAT = 3000, FLIP = 700
const SIZES = ['video-app-preview-iphone', 'video-app-preview-ipad'] as const
const BEATS: readonly [screen: string, line: string][] = [
  ['Screen / Welcome', 'Money, sorted.'],
  ['Screen / Home', 'All your accounts in one place'],
  ['Screen / Insights', 'See where every dollar goes'],
  ['Screen / Goals', 'Save for the things you love'],
  ['Screen / Send', 'Split the bill in seconds'],
]
/** The beat the still shows (the second: home, with its headline). */
const STILL = 1
const CUES: Cue[] = [{ layer: 'Headline', preset: 'rise-in', at: 150, params: { duration: 700 } }]

function build(k: Kit, sheet: string, s: Size) {
  const ipad = s.preset === 'video-app-preview-ipad'
  k.nameSheet(sheet, `App Store preview · ${preset(s.preset).name}`)
  glow(k, sheet, 'accent', Math.round(900 * s.u), s.W * 0.5, s.H * 0.66, 0.3)
  const scene = stage(k, sheet, s, { duration: DURATION, fps: FPS, perspective: 2600 * s.u, ground: 'primary' })

  if (ipad) {
    const tablet = rig(k, scene, s, 'Tablet', TABLET.width, TABLET.height, s.W * 0.46, s.H * 0.61)
    k.patch(tablet, { scaleX: 0.84, scaleY: 0.84, rotateY: 14, rotateX: 4 })
    const t = k.instance(tablet, 'Tablet', {}, { name: 'iPad' })
    k.patch(t, { effects: [deviceShadow(0.35, 40, 90)] })
    key(k, tablet, 'rotateY', [...BEATS.map((_, i): K => [i * BEAT, i % 2 ? -8 : 14, ease.inOut('cubic')]), [DURATION, 10]])
  }

  // The phone: one per beat, flipping over at every beat.
  const at = ipad ? { x: s.W * 0.76, y: s.H * 0.7, scale: 0.62 } : { x: s.W / 2, y: s.H * 0.585, scale: 1.16 }
  const phoneRig = rig(k, scene, s, 'Phone', PHONE.width, PHONE.height, at.x, at.y)
  k.patch(phoneRig, { scaleX: at.scale, scaleY: at.scale, ...(ipad ? { z: 220 } : {}) })
  k.behave(phoneRig, 'rotateY', [{ kind: 'sine', amp: 9, freq: 1 / 6 }])
  k.behave(phoneRig, 'rotateX', [{ kind: 'sine', amp: 4, freq: 1 / 5, phase: 0.25 }])
  BEATS.forEach(([screen], i) => {
    const phone = k.instance(phoneRig, 'Phone', { Screen: { swap: screen } }, { name: `Beat ${i + 1}` })
    k.patch(phone, { effects: [deviceShadow(0.4, 40, 80)], ...(i === STILL ? {} : { opacity: 0 }) })
    const start = i * BEAT, end = (i + 1) * BEAT
    // Out: from facing to edge-on (turned 90°) as its beat ends; in: from edge-on the other way to facing, as the one
    // before has gone — one phone turning over.
    const inKeys: K[] = i === 0 ? [[0, 0, ease.hold]] : [[start, 90, ease.out('cubic')], [start + FLIP / 2, 0, ease.hold]]
    const outKeys: K[] = i === BEATS.length - 1 ? [] : [[end - FLIP / 2, 0, ease.named('cubic', 'in')], [end, -90, ease.hold]]
    key(k, phone, 'rotateY', [...inKeys, ...outKeys])
    const on = start, off = i === BEATS.length - 1 ? DURATION : end
    key(k, phone, 'opacity', [[0, i === 0 ? 1 : 0, ease.hold], ...(i === 0 ? [] : [[on, 1, ease.hold] as K]), ...(off < DURATION ? [[off, 0, ease.hold] as K] : [])])
  })
  // The first phone rises in from below.
  key(k, phoneRig, 'translateY', [[0, k.node(phoneRig).translateY! + Math.round(900 * s.u), ease.out('expo')], [1100, k.node(phoneRig).translateY!]])

  // The headline, on the app's colour, saying what each beat shows.
  const col = column(s, 80)
  const head = k.stack(sheet, { width: col.width, align: 'CENTER', absolute: { x: col.x, y: Math.round((ipad ? 110 : 150) * s.u) }, name: 'Headline' })
  const line = k.text(head, BEATS[STILL][1], { style: typeStep(k, s, 'display'), color: 'onPrimary', align: 'CENTER', name: 'Headline title' })
  phrases(k, line, BEATS.map(([, l], i) => [i * BEAT, l] as const), { rise: Math.round(30 * s.u) })
  k.cues(sheet, CUES)
}

export default defineTemplate({
  id: 'app-preview-3d',
  meta: {
    name: 'App Store preview',
    description: 'A 15-second App Store preview at the iPhone (886 × 1920) and iPad (1200 × 1600) sizes, 30 fps: five three-second beats, each a headline on your app\'s colour over a 3D phone that flips to the next screen. Swap in your screens or screen recordings',
    category: 'animation', tags: ['animation', '3d', 'app store', 'app preview', 'ios', 'iphone', 'ipad', 'phone', 'mockup', 'launch'],
    platforms: ['ios', 'web'], formats: ['video', 'ad'], useCases: ['launch', 'onboarding'],
    created: '2026-09-29', updated: '2026-09-29',
  },
  motion: { cues: CUES },
  build() {
    const k = new Kit('App Store preview', preset(SIZES[0]))
    brand(k, 'light')
    appScreens(k, ['Welcome', 'Home', 'Insights', 'Goals', 'Send', 'Tablet', 'Screenshot'])
    devices(k, ['Phone', 'Tablet'])
    const [cover] = sizes(k, SIZES, (sheet, s) => build(k, sheet, s))
    k.setCover(cover)
    return k.finish()
  },
})
