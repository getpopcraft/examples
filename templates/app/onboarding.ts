// Onboarding carousel for a language-learning app: three screens — five minutes a day, speak from the first
// lesson, keep a streak — that move into each other with smart animate. The illustration's shapes carry the same
// names on every screen (Sun, Card A, Card B, Badge), so going to the next screen glides each one to its new place,
// size and colour, and the page dots stretch to the new screen. Continue, a swipe, or Skip moves on; each screen's
// words rise in as it arrives. iPhone screens with their Android copies, wired the same way.

import { Kit, preset, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import type { FrameNode } from '@popcraft/kit/lib/document/types'
import { androidVariant, screen, statusBar } from '@popcraft/kit/templates/app/shared'

interface Slide { name: string; title: string; body: string; word: string; badge: string; sun: [number, number, number]; a: [number, number, number, number, number]; b: [number, number, number, number, number]; badgeAt: [number, number] }
// Card boxes are [x, y, width, height, rotation] inside the 354 × 340 scene.
const SLIDES: Slide[] = [
  { name: 'Five minutes', title: 'Five minutes a day is enough', body: 'Short lessons that fit a coffee break. Parla picks up where you left off, on any device.', word: '¡Hola!', badge: '5 min',
    sun: [236, 30, 88], a: [62, 96, 230, 150, -6], b: [150, 190, 150, 96, 8], badgeAt: [36, 228] },
  { name: 'Speak', title: 'Speak from your first lesson', body: 'Say it out loud and get gentle feedback on every word, from a voice trained on native speakers.', word: 'Bonjour', badge: '98%',
    sun: [24, 40, 64], a: [40, 70, 190, 120, 4], b: [140, 170, 190, 120, -5], badgeAt: [250, 60] },
  { name: 'Streak', title: 'Keep your streak going', body: 'A nudge at the time you choose, and a streak that forgives a missed day now and then.', word: 'Ciao', badge: '12 days',
    sun: [120, 18, 120], a: [48, 150, 258, 140, 0], b: [96, 110, 162, 64, 0], badgeAt: [124, 44] },
]
const words: Cue[] = [
  { layer: 'Title', preset: 'rise-in', at: 150 },
  { layer: 'Body', preset: 'rise-in', at: 300 },
]

export default defineTemplate({
  id: 'onboarding',
  meta: {
    name: 'Onboarding carousel',
    description: 'Three onboarding screens that glide into each other with smart animate — the illustration’s shapes move to their next places and the page dots stretch — wired for iPhone and Android',
    category: 'app', tags: ['animation', 'onboarding', 'carousel', 'smart animate', 'prototype flow', 'app', 'mobile', 'ios', 'android'],
    platforms: ['ios', 'android'], formats: ['screen'], useCases: ['onboarding', 'launch'],
    created: '2026-09-29', updated: '2026-09-29',
  },
  breakpoints: true,
  motion: { cues: words },
  build() {
    const k = new Kit('Onboarding carousel', preset('iphone-17'))
    k.brand({ paper: '#FFF9F2', text: '#23180F', onPaper: '#5F5146', primary: '#C2410C', onPrimary: '#FFFFFF', scene: '#FCE9D8', sun: '#F7B538', cardA: '#FFFFFF', cardB: '#2C3E64', onCardA: '#23180F', badge: '#23180F', onBadge: '#FFF9F2', dotOff: '#E8D9CA' }, { name: 'Parla' })
    k.textStyle('Status 15', { size: 15, fontWeight: 600, lineHeight: 20 })
    k.textStyle('Skip 16', { size: 16, fontWeight: 600, lineHeight: 22 })
    k.textStyle('Title 32', { size: 32, fontWeight: 800, letterSpacing: -0.8, lineHeight: 38 })
    k.textStyle('Body 17', { size: 17, fontWeight: 400, lineHeight: 26 })
    k.textStyle('Word 34', { size: 34, fontWeight: 800, letterSpacing: -0.6, lineHeight: 40, textAlign: 'CENTER' })
    k.textStyle('Badge 15', { size: 15, fontWeight: 700, lineHeight: 20 })
    k.textStyle('Button 17', { size: 17, fontWeight: 700, lineHeight: 24 })
    k.component('Button', { direction: 'HORIZONTAL', width: 'HUG', fill: 'primary', radius: 14, align: 'CENTER', padding: { top: 16, right: 28, bottom: 16, left: 28 }, props: { Label: 'Continue' } }, id => {
      k.propText(id, 'Label', { style: 'Button 17', color: 'onPrimary', autoWidth: true })
    })

    const screens: string[] = []
    SLIDES.forEach((s, i) => {
      const id = i === 0 ? k.sheet : k.addScreen(s.name)
      k.nameSheet(id, s.name)
      screens.push(id)
      screen(k, id, { gap: 24 })
      k.timeline(id, { duration: 4000, fps: 30 })
      statusBar(k, id, { style: 'Status 15' })
      const top = k.stack(id, { direction: 'HORIZONTAL', justify: 'MAX', height: 24, name: 'Top' })
      if (i < SLIDES.length - 1) k.text(top, 'Skip', { style: 'Skip 16', color: 'onPaper', autoWidth: true, name: 'Skip' })
      // The scene: the same four shapes on every screen, somewhere else each time.
      const scene = k.stack(id, { height: 340, radius: 28, fill: 'scene', clip: true, name: 'Scene' })
      k.ellipse(scene, s.sun[2], 'sun', { name: 'Sun', absolute: { x: s.sun[0], y: s.sun[1] } })
      const box = (name: string, [x, y, w, h, r]: Slide['a'], fill: string, word?: string) => {
        const c = k.stack(scene, { width: w, height: h, radius: 20, fill, align: 'CENTER', justify: 'CENTER', name, absolute: { x, y } })
        k.patch(c, { rotation: r })
        if (word) k.text(c, word, { style: 'Word 34', color: 'onCardA', autoWidth: true, name: 'Word' })
        return c
      }
      box('Card B', s.b, 'cardB')
      box('Card A', s.a, 'cardA', s.word)
      const badge = k.stack(scene, { direction: 'HORIZONTAL', width: 'HUG', fill: 'badge', radius: 999, padding: { top: 8, right: 14, bottom: 8, left: 14 }, name: 'Badge', absolute: { x: s.badgeAt[0], y: s.badgeAt[1] } })
      k.text(badge, s.badge, { style: 'Badge 15', color: 'onBadge', autoWidth: true, name: 'Badge text' })

      const copy = k.stack(id, { gap: 12, name: 'Copy' })
      k.text(copy, s.title, { style: 'Title 32', color: 'text', name: 'Title' })
      k.text(copy, s.body, { style: 'Body 17', color: 'onPaper', name: 'Body' })
      const foot = k.stack(id, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', align: 'CENTER', padding: { top: 8, right: 0, bottom: 8, left: 0 }, name: 'Footer' })
      const dots = k.stack(foot, { direction: 'HORIZONTAL', width: 'HUG', gap: 6, align: 'CENTER', name: 'Dots' })
      SLIDES.forEach((_, j) => k.rect(dots, j === i ? 24 : 8, 8, j === i ? 'primary' : 'dotOff', { radius: 4, name: `Dot ${j + 1}` }))
      k.instance(foot, 'Button', { Label: i === SLIDES.length - 1 ? 'Get started' : 'Continue' }, { name: 'Next' })
      k.cues(id, words)
    })
    // The footer sits at the bottom of the phone.
    for (const id of screens) k.patch(id, { primaryAxisAlignItems: 'SPACE_BETWEEN' })

    // Android copies, a row below the iPhone screens.
    const androids = screens.map((id, i) => k.variants(id, [androidVariant(SLIDES[i].name)])[0])
    const iphone = k.node<FrameNode>(screens[0])
    androids.forEach((id, i) => k.patch(id, { x: k.node(screens[i]).x, y: iphone.height + 200 }))

    // The flow: Continue (or a swipe) glides to the next screen; Skip jumps to the last.
    for (const set of [screens, androids]) {
      set.forEach((id, i) => {
        const next = set[i + 1]
        if (!next) return
        k.link(k.named(id, 'Next')[0], next, 'SMART_ANIMATE', { duration: 500 })
        k.link(id, next, 'SMART_ANIMATE', { duration: 500, trigger: 'ON_DRAG' })
        for (const skip of k.named(id, 'Skip')) k.link(skip, set[set.length - 1], 'SMART_ANIMATE', { duration: 500 })
      })
    }
    k.flowStart(screens[0], 'Onboarding (iPhone)')
    k.flowStart(androids[0], 'Onboarding (Android)')
    return k.finish()
  },
})
