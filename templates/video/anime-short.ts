// "Duel at Dusk": a 14-second action short. Two swordfighters face off on a ridge at sunset (silhouettes rimmed by the
// low sun, petals on the wind), a close-up each (Ren's glare, Akane's smirk, dialogue captions), a whip pan into the
// charge (speed lines, smeared figures), the clash (an inverted impact frame, a burst, a shake, a white flash), and the
// aftermath at dusk as the sky darkens and a cut headband falls. Six shots cut on the taiko hits of its own score.

import { defineTemplate } from '@popcraft/kit/templates/build'
import { ease } from '@popcraft/kit/lib/motion/author'
import type { Lot } from '@popcraft/kit/templates/lottie/lottie-kit'
import { into } from '@popcraft/kit/templates/scenes/shared'
import { curve, rng, type P } from '@popcraft/kit/templates/anime/draw'
import { figure, type CharacterSpec } from '@popcraft/kit/templates/anime/character'
import { caption, camera, depth, fxLayer, glow, keyParam, sky, smear, titleCard, vignette, wash, W, H } from '@popcraft/kit/templates/anime/fx'
import { buildShort, shortScenes, type ShortSpec } from '@popcraft/kit/templates/anime/shared'

const REN: CharacterSpec = { key: 'ren', name: 'Ren', hair: 'spiky', outfit: 'gakuran', accessory: 'headband' }
const AKANE: CharacterSpec = { key: 'aki', name: 'Akane', hair: 'long', outfit: 'coat', sharp: true }

/** Mountains: a jagged line across the frame at `y`, peaks up to `amp` px, filled down to the bottom. */
function range(l: Lot, parent: string, y: number, amp: number, role: string, seed: number, name: string) {
  const r = rng(seed)
  const pts: P[] = [[-80, H + 20]]
  for (let x = -80; x <= W + 80; x += 90 + r() * 80) pts.push([x, y - r() * amp])
  pts.push([W + 80, H + 20])
  return l.shape(parent, curve(pts, true, pts.map((_, i) => i), 0), role, { name })
}

/** The ridge the fighters stand on: a low hill with grass along its crest. */
function ridge(l: Lot, parent: string, y: number, role: string) {
  const id = l.shape(parent, curve([[-100, H + 40], [-100, y + 40], [400, y - 10], [960, y - 30], [1500, y - 5], [2020, y + 50], [2020, H + 40]], true, [0, 6]), role, { name: 'Ridge' })
  const r = rng(7)
  for (let x = 40; x < W; x += 34 + r() * 30) {
    const base = y - 30 + Math.pow((x - 960) / 1000, 2) * 60
    l.line(parent, [[x, base + 8], [x + 6 + r() * 10, base - 16 - r() * 18]], role, 5, { name: 'Grass' })
  }
  return id
}

const spec: ShortSpec = {
  id: 'anime-short',
  title: 'Duel at Dusk',
  score: 'duel',
  ground: 'duskInk',
  colors: {
    duskInk: '#120A18', skyTop: '#2A1A52', skyMid: '#C0406A', skyLow: '#FF9F55', sun: '#FFE7A3', haze: '#7A3A6E', mountain: '#4A2150', ridge: '#1E0F24',
    rim: '#FFC870', white: '#FFFFFF', flash: '#FFF6E0', petal: '#FFC2D6', petalDeep: '#FF7FA6', steel: '#E6ECF7', star: '#FFF4D6',
    skin: '#FFE2D2', skinShade: '#EDB3A5', line: '#24142A', blush: '#FF8FA3', mouth: '#9A2842',
    renHair: '#26305E', renHairShade: '#161C3C', renHairLight: '#6878C8', renEye: '#C8343C', renEyeLight: '#FF8A5C', renOutfit: '#1E2032', renOutfitShade: '#12131E', renAccent: '#E3B342',
    akiHair: '#B8243F', akiHairShade: '#7E1630', akiHairLight: '#FF7A8E', akiEye: '#3F6FD0', akiEyeLight: '#9ED4FF', akiOutfit: '#EDE6DA', akiOutfitShade: '#BDB2C8', akiAccent: '#5B2A86',
  },
  fields: {
    title: 'Duel at Dusk', episode: 'Episode 1', hero: 'Ren', rival: 'Akane',
    line1: 'This ends tonight.', line2: 'Then show me.', tagline: 'Next time: The Crimson Blade',
  },
  characters: [REN, AKANE],
  shots: [
    {
      name: '1 · The ridge',
      cues: [
        { layer: 'Camera', preset: 'push-in', at: 0, params: { duration: 3125, amount: 0.06 } },
        { layer: 'Title card', preset: 'fade-in', at: 200, params: { duration: 400 } },
        { layer: 'Kicker', preset: 'fade-in', at: 300, params: { duration: 500 } },
        { layer: 'Title', preset: 'letters-in', at: 450, params: { duration: 700, amount: 45 } },
        { layer: 'Title card', preset: 'fade-out', at: 2500, params: { duration: 450 } },
      ],
      sfx: [{ key: 'wind', at: 0, gain: 0.8 }],
      draw(l, sheet, k) {
        const cam = camera(l, sheet)
        sky(l, cam, 'skyMid', 'skyTop', 'skyLow')
        glow(l, cam, 1350, 700, 520, 'sun', { strength: 0.75, name: 'Sun glow' })
        l.circle(cam, 1350, 720, 130, 'sun', { name: 'Sun' })
        fxLayer(l, cam, 'Sunbeams', 'Light rays', { origin: { x: 0.7, y: 0.66 }, angle: 270, spread: 3.2, rays: 22, intensity: 0.3, falloff: 1.4, speed: 0.2, color: { role: 'sun' } }, { blend: 'SCREEN' })
        const far = depth(l, cam, 'Far'), mid = depth(l, cam, 'Mid'), near = depth(l, cam, 'Near')
        range(l, far, 760, 120, 'haze', 3, 'Far range')
        range(l, mid, 850, 150, 'mountain', 5, 'Near range')
        ridge(l, near, 900, 'ridge')
        figure(l, near, REN, { pose: 'ready', x: 560, base: 882, height: 300, blade: true, ink: 'duskInk', name: 'Ren figure' })
        figure(l, near, AKANE, { pose: 'ready', x: 1380, base: 880, height: 300, flip: true, blade: true, ink: 'duskInk', lightFrom: 'right', name: 'Akane figure' })
        // The camera trucks right: each depth drifts its own distance (parallax).
        l.keys(far, 'translateX', [[0, 0, ease.linear], [3125, -18]])
        l.keys(mid, 'translateX', [[0, 0, ease.linear], [3125, -40]])
        l.keys(near, 'translateX', [[0, 0, ease.linear], [3125, -90]])
        fxLayer(l, cam, 'Petals', 'Petals', { density: 0.2, speed: 190, angle: 12, sway: 30, size: 15, spin: 1.6, colorA: { role: 'petal' }, colorB: { role: 'petalDeep' } })
        vignette(l, sheet, 'duskInk', 0.6)
        titleCard(k, sheet, { kicker: '{{brand.episode}}', title: '{{brand.title}}', plate: 'duskInk', plateOpacity: 0.55, kickerRole: 'sun', justify: 'MIN', padding: 150 })
      },
    },
    {
      name: '2 · Ren',
      cues: [
        { layer: 'Camera', preset: 'push-in', at: 0, params: { duration: 1875, amount: 0.05 } },
        { layer: 'Glint', preset: 'pop-in', at: 250, params: { duration: 220, amount: 0 } },
        { layer: 'Glint', preset: 'fade-out', at: 520, params: { duration: 260 } },
        { layer: 'Caption card', preset: 'fade-in', at: 300, params: { duration: 250 } },
        { layer: 'Speaker', preset: 'fade-in', at: 350, params: { duration: 250 } },
        { layer: 'Caption', preset: 'words-in', at: 400, params: { duration: 450, amount: 90 } },
      ],
      sfx: [{ key: 'draw', at: 120 }],
      draw(l, sheet, k) {
        const cam = camera(l, sheet)
        sky(l, cam, 'skyMid', 'skyLow', 'skyMid')
        glow(l, cam, 1500, 380, 700, 'sun', { strength: 0.8, name: 'Backlight' })
        fxLayer(l, cam, 'Focus lines', 'Focus lines', { center: { x: 0.52, y: 0.42 }, inner: 0.5, count: 120, thickness: 0.35, rate: 8, amount: 0.45, color: { role: 'flash' } }, { blend: 'SCREEN' })
        const ren = k.instance(cam, 'Ren/Fierce', { Rim: 1, Shade: 1 }, { name: 'Ren', absolute: { x: 500, y: 150 }, playback: { loop: 'loop' } })
        k.patch(ren, { scaleX: 1.4, scaleY: 1.4 })
        // A glint off the eye: a four-point star.
        l.shape(cam, [...curve([[1092, 486], [1100, 520], [1134, 528], [1100, 536], [1092, 570], [1084, 536], [1050, 528], [1084, 520]], true, [0, 2, 4, 6], 0)], 'white', { name: 'Glint' })
        fxLayer(l, cam, 'Petals', 'Petals', { density: 0.12, speed: 150, angle: 20, sway: 20, size: 26, spin: 1.2, colorA: { role: 'petal' }, colorB: { role: 'petalDeep' } })
        vignette(l, sheet, 'duskInk', 0.5)
        caption(l, sheet, '{{brand.hero}}', '{{brand.line1}}', { speakerRole: 'renAccent' })
      },
    },
    {
      name: '3 · Akane',
      cues: [
        { layer: 'Camera', preset: 'drift', at: 0, params: { duration: 2075, distance: 30, direction: 'left', amount: 0.03 } },
        { layer: 'Caption card', preset: 'fade-in', at: 200, params: { duration: 250 } },
        { layer: 'Speaker', preset: 'fade-in', at: 250, params: { duration: 250 } },
        { layer: 'Caption', preset: 'words-in', at: 300, params: { duration: 450, amount: 110 } },
        { layer: 'Caption card', preset: 'fade-out', at: 1700, params: { duration: 250 } },
      ],
      draw(l, sheet, k) {
        const cam = camera(l, sheet)
        sky(l, cam, 'haze', 'skyTop', 'skyMid')
        glow(l, cam, 360, 420, 640, 'skyLow', { strength: 0.7, name: 'Backlight' })
        const aki = k.instance(cam, 'Akane/Smile', { Rim: 0.85, Shade: 1 }, { name: 'Akane', absolute: { x: 420, y: 150 }, playback: { loop: 'loop', start: 1200 } })
        // Facing the other way: mirrored about her middle.
        k.patch(aki, { scaleX: -1.4, scaleY: 1.4 })
        fxLayer(l, cam, 'Petals', 'Petals', { density: 0.16, speed: 120, angle: 160, sway: 24, size: 22, spin: 1.4, seed: 4, colorA: { role: 'petal' }, colorB: { role: 'petalDeep' } })
        vignette(l, sheet, 'duskInk', 0.5)
        caption(l, sheet, '{{brand.rival}}', '{{brand.line2}}', { speakerRole: 'akiEyeLight' })
      },
    },
    {
      name: '4 · The charge',
      transition: into('WHIP_LEFT', 200, { interp: ease.inOut('expo') }),
      cues: [{ layer: 'Camera', preset: 'camera-shake', at: 880, params: { duration: 370, distance: 14, amount: 1 } }],
      sfx: [{ key: 'whoosh', at: 0 }, { key: 'swish', at: 650, lane: 2 }],
      draw(l, sheet) {
        const cam = camera(l, sheet)
        l.rect(cam, 0, 0, W, H, 'skyMid', { name: 'Ground colour' })
        glow(l, cam, 960, 540, 900, 'skyLow', { strength: 0.8, name: 'Heat' })
        const lines = fxLayer(l, cam, 'Speed lines', 'Speed lines', { angle: 0, count: 40, speed: 7, streak: 0.5, thickness: 0.25, density: 0.65, amount: 0.9, color: { role: 'flash' } }, { blend: 'SCREEN' })
        void lines
        const ren = figure(l, cam, REN, { pose: 'lunge', x: 700, base: 1000, height: 560, blade: true, ink: 'duskInk', name: 'Ren charging' })
        const aki = figure(l, cam, AKANE, { pose: 'lunge', x: 1220, base: 1000, height: 560, flip: true, blade: true, ink: 'duskInk', lightFrom: 'left', name: 'Akane charging' })
        // Rushing in from either side, smeared along the rush, easing as they meet.
        l.keys(ren, 'translateX', [[0, -900, ease.out('expo')], [900, -40, ease.inOut('sine')], [1250, 0]])
        l.keys(aki, 'translateX', [[0, 900, ease.out('expo')], [900, 40, ease.inOut('sine')], [1250, 0]])
        smear(l, ren, 0, [[0, 160, ease.out('cubic')], [700, 30], [1250, 0]])
        smear(l, aki, 0, [[0, 160, ease.out('cubic')], [700, 30], [1250, 0]])
        const focus = fxLayer(l, sheet, 'Focus lines', 'Focus lines', { center: { x: 0.5, y: 0.55 }, inner: 0.42, count: 160, thickness: 0.5, rate: 12, amount: 0, color: { role: 'white' } })
        keyParam(l, focus, 'amount', [[0, 0, ease.hold], [700, 0, ease.named('cubic', 'in')], [1250, 1]])
        vignette(l, sheet, 'duskInk', 0.45)
      },
    },
    {
      name: '5 · The clash',
      cues: [
        { layer: 'Camera', preset: 'camera-shake', at: 0, params: { duration: 650, distance: 34, amount: 2.5 } },
        { layer: 'Impact frame', preset: 'impact-frame', at: 0, params: { duration: 170 } },
      ],
      sfx: [{ key: 'clash', at: 0, gain: 0.6 }, { key: 'impact', at: 0, lane: 2, gain: 0.5 }],
      draw(l, sheet) {
        const cam = camera(l, sheet)
        l.rect(cam, -60, -60, W + 120, H + 120, 'duskInk', { name: 'Dark' })
        fxLayer(l, cam, 'Focus lines', 'Focus lines', { center: { x: 0.5, y: 0.5 }, inner: 0.22, count: 200, thickness: 0.55, rate: 12, amount: 0.85, color: { role: 'skyMid' } })
        const burst = fxLayer(l, cam, 'Burst', 'Impact burst', { center: { x: 0.5, y: 0.5 }, progress: 0, spikes: 26, sharpness: 0.75, rate: 12, core: { role: 'flash' }, ray: { role: 'sun' } }, { blend: 'SCREEN' })
        keyParam(l, burst, 'progress', [[0, 0.05, ease.out('expo')], [420, 1, ease.hold], [1550, 1]])
        // Two blades crossing, each a long steel sliver with an edge line; they grind as the shake plays.
        const blade = (a: number, name: string) => {
          const len = 1500, w = 34
          const c = Math.cos(a), s = Math.sin(a), nx = -s, ny = c
          const pt = (u: number, v: number): P => [960 + c * u + nx * v, 540 + s * u + ny * v]
          const id = l.shape(cam, curve([pt(-len / 2, -w / 2), pt(len / 2 - 90, -w / 2), pt(len / 2, 0), pt(len / 2 - 90, w / 2), pt(-len / 2, w / 2)], true, [0, 1, 2, 3, 4], 0), 'steel', { name, stroke: { color: 'line', width: 5 } })
          return id
        }
        const b1 = blade(-0.42, 'Blade'), b2 = blade(Math.PI + 0.42, 'Blade')
        l.keys(b1, 'rotation', [[0, -3, ease.back(1.7)], [500, 0]])
        l.keys(b2, 'rotation', [[0, 3, ease.back(1.7)], [500, 0]])
        fxLayer(l, cam, 'Sparks', 'Embers', { density: 0.5, speed: 420, angle: 250, sway: 40, size: 10, spin: 2, seed: 9, colorA: { role: 'flash' }, colorB: { role: 'sun' } }, { blend: 'SCREEN' })
        // The impact frame: a white layer that inverts everything under it for a few held frames.
        wash(l, sheet, 'Impact frame', 'white', 'DIFFERENCE', 0)
        // White to close: the flash the next shot comes out of.
        const flash = wash(l, sheet, 'Flash', 'flash', 'SCREEN', 0)
        l.keys(flash, 'opacity', [[0, 0.9, ease.out('cubic')], [320, 0, ease.hold], [1000, 0, ease.named('cubic', 'in')], [1550, 1]])
      },
    },
    {
      name: '6 · Aftermath',
      transition: into('DISSOLVE', 300),
      cues: [
        { layer: 'Camera', preset: 'pull-out', at: 0, params: { duration: 4375, amount: 0.08 } },
        { layer: 'Title card', preset: 'fade-in', at: 2400, params: { duration: 500 } },
        { layer: 'Kicker', preset: 'fade-in', at: 2500, params: { duration: 400 } },
        { layer: 'Title', preset: 'rise-in', at: 2650, params: { duration: 700 } },
        { layer: 'Tagline', preset: 'fade-in', at: 3100, params: { duration: 500 } },
      ],
      sfx: [{ key: 'wind', at: 200, gain: 0.6 }],
      draw(l, sheet, k) {
        const cam = camera(l, sheet)
        sky(l, cam, 'mountain', 'skyTop', 'skyMid')
        const stars = fxLayer(l, cam, 'Stars', 'Sparkles', { density: 0.1, speed: 4, angle: 0, sway: 2, size: 9, spin: 0.2, seed: 3, colorA: { role: 'star' }, colorB: { role: 'sun' } }, { box: [0, 0, W, 560], opacity: 0 })
        l.keys(stars, 'opacity', [[0, 0, ease.inOut('sine')], [3000, 0.8]])
        glow(l, cam, 700, 820, 420, 'skyLow', { strength: 0.7, name: 'Sun glow' })
        const sun = l.circle(cam, 700, 850, 95, 'sun', { name: 'Sun' })
        // The sun sinks behind the range: dusk falls.
        l.keys(sun, 'translateY', [[0, 0, ease.inOut('sine')], [4375, 70]])
        const far = depth(l, cam, 'Far'), near = depth(l, cam, 'Near')
        range(l, far, 840, 140, 'mountain', 11, 'Far range')
        ridge(l, near, 930, 'ridge')
        figure(l, near, REN, { pose: 'stand', x: 1260, base: 912, height: 250, ink: 'duskInk', lightFrom: 'left', name: 'Ren standing' })
        const standing = figure(l, near, AKANE, { pose: 'ready', x: 640, base: 912, height: 250, flip: true, blade: true, ink: 'duskInk', lightFrom: 'left', name: 'Akane standing' })
        const kneeling = figure(l, near, AKANE, { pose: 'kneel', x: 640, base: 912, height: 250, flip: true, blade: true, ink: 'duskInk', lightFrom: 'left', name: 'Akane kneeling' })
        // She holds, then drops to one knee: two poses, one shown at a time.
        l.keys(standing, 'opacity', [[0, 1, ease.hold], [1400, 0]])
        l.keys(kneeling, 'opacity', [[0, 0, ease.hold], [1400, 1]])
        // Ren's cut headband drifts down behind him.
        const band = l.shape(near, curve([[1300, 610], [1380, 600], [1450, 620], [1444, 636], [1380, 618], [1302, 628]], true, [0, 2, 3, 5]), 'renAccent', { name: 'Cut headband' })
        l.keys(band, 'translateY', [[0, 0, ease.inOut('sine')], [2600, 270]])
        l.keys(band, 'translateX', [[0, 0, ease.inOut('sine')], [1300, 60, ease.inOut('sine')], [2600, 10]])
        l.keys(band, 'rotation', [[0, 0, ease.inOut('sine')], [1300, 40, ease.inOut('sine')], [2600, -10]])
        fxLayer(l, cam, 'Petals', 'Petals', { density: 0.12, speed: 90, angle: 70, sway: 34, size: 14, spin: 1, seed: 6, colorA: { role: 'petal' }, colorB: { role: 'petalDeep' } })
        // Dusk: the whole picture sinks toward the sky's violet as the shot plays.
        const dusk = wash(l, cam, 'Dusk', 'skyTop', 'MULTIPLY', 0)
        l.keys(dusk, 'opacity', [[0, 0, ease.inOut('sine')], [4375, 0.45]])
        vignette(l, sheet, 'duskInk', 0.6)
        titleCard(k, sheet, { kicker: '{{brand.episode}}', title: '{{brand.title}}', tagline: '{{brand.tagline}}', plate: 'duskInk', plateOpacity: 0.6, kickerRole: 'sun', taglineRole: 'petal', justify: 'MIN', padding: 170 })
      },
    },
  ],
}

export const DUEL_SHORT = spec

export default defineTemplate({
  id: spec.id,
  meta: {
    name: 'Anime short: Duel at Dusk',
    description: 'A 14-second anime action short at 1920×1080, 30 fps: two swordfighters on a sunset ridge, close-ups with dialogue, a whip pan into the charge, an inverted impact frame on the clash and the aftermath at dusk — original characters as motion components, particles, speed lines, motion blur and a taiko score (made by PopCraft, CC0) the cuts land on',
    category: 'animation', tags: ['animation', 'anime', 'short film', 'action', 'duel', 'characters', 'scenes', 'music', 'particles', 'speed lines', 'impact frame'],
    platforms: ['youtube', 'tiktok', 'instagram', 'x'], formats: ['video', 'short', 'intro'], useCases: ['brand-intro', 'announcement'],
    created: '2026-09-30', updated: '2026-09-30',
  },
  sequence: true,
  motion: { scenes: shortScenes(spec) },
  build: () => buildShort(spec),
})
