// Story ad (motion studio PR 9, scenes): a 9:16 ad in five scenes — hook, offer, picks, perk, call to action —
// each a sheet with its own timeline, sequenced by a composition whose scenes change by a circle wipe, an iris, a
// zoom-through and a push. 30 fps, 8.7 s.

import { Kit, hex, preset, type SceneSpec } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { ease } from '@popcraft/kit/lib/motion/author'
import { violetInk as shadedInk } from '@popcraft/kit/migrations/violet-ink'
import type { Effect } from '@popcraft/kit/lib/document/types'
import { into, playScenes, sceneSheets } from '@popcraft/kit/templates/scenes/shared'

const back = ease.back(1.9)
const scenes: SceneSpec[] = [
  { sheet: 'Hook', cues: [
    { layer: 'Sun', preset: 'pop-in', at: 0, params: { duration: 700, ease: back } },
    { layer: ['Summer', 'Sale'], preset: 'rise-in', at: 200, params: { duration: 700 }, stagger: { delay: 160, order: 'selection' } },
    { layer: 'When', preset: 'fade-in', at: 800, params: { duration: 500 } },
  ] },
  { sheet: 'Offer', transition: into('CIRCLE_WIPE', 700, { interp: ease.inOut('expo'), center: { x: 0.5, y: 0.3 } }), cues: [
    { layer: 'Up to', preset: 'fade-in', at: 100, params: { duration: 400 } },
    { layer: 'Percent', preset: 'pop-in', at: 250, params: { duration: 700, ease: back, amount: 0.4 } },
    { layer: 'Off', preset: 'rise-in', at: 600, params: { duration: 600, ease: ease.out('expo') } },
    { layer: 'Percent', preset: 'pulse', at: 1300, params: { duration: 800, amount: 0.05 } },
  ] },
  { sheet: 'Picks', transition: into('IRIS', 600, { center: { x: 0.5, y: 0.45 } }), cues: [
    { layer: 'Title', preset: 'rise-in', at: 100, params: { duration: 600 } },
    { layer: 'Product card', preset: 'slide-in', at: 350, params: { duration: 650, direction: 'right' }, stagger: { delay: 150, order: 'index' } },
  ] },
  { sheet: 'Perk', transition: into('ZOOM_THROUGH', 500), cues: [
    { layer: 'Badge', preset: 'pop-in', at: 150, params: { duration: 650, ease: back } },
    { layer: 'Badge', preset: 'wobble', at: 900, params: { duration: 800, amount: 8 } },
    { layer: ['Shipping', 'Over'], preset: 'rise-in', at: 450, params: { duration: 600 }, stagger: { delay: 140, order: 'selection' } },
  ] },
  { sheet: 'Call to action', transition: into('PUSH_FROM_RIGHT', 500), cues: [
    { layer: 'Headline', preset: 'rise-in', at: 100, params: { duration: 600 } },
    { layer: 'Button', preset: 'pop-in', at: 450, params: { duration: 600, ease: back } },
    { layer: 'Button', preset: 'pulse', at: 1300, params: { duration: 900, amount: 0.06 } },
    { layer: 'Handle', preset: 'fade-in', at: 800, params: { duration: 500 } },
  ] },
]
const DURATIONS = [2000, 2200, 2400, 2000, 2400]
const GROUNDS = ['paper', 'accent', 'paper', 'sky', 'primary'] as const
const GAPS = [24, 8, 64, 28, 56]

export default defineTemplate({
  id: 'story-ad',
  meta: {
    name: 'Story ad',
    description: 'A 9:16 story ad in five scenes — hook, offer, picks, free shipping, call to action — each animated on its own timeline and sequenced by a composition: circle wipe, iris, zoom-through and push between them. 1080×1920 at 30 fps, about 9 seconds.',
    category: 'animation', tags: ['animation', 'story', 'instagram', 'tiktok', 'ad', 'sale', 'scenes', 'transitions'],
    platforms: ['instagram', 'tiktok', 'facebook'], formats: ['story', 'ad'], useCases: ['sale'],
    created: '2026-09-28', updated: '2026-09-29',
  },
  motion: { scenes },
  build() {
    const k = new Kit('Story ad', preset('ig-story'))
    // The accent headline on the paper: the accent itself reads 2.86 there, under even the large-text 3:1, and the
    // brand colours are never changed to fix contrast. Its ink is an on-colour instead: the accent shaded down until
    // it reads (templates/migrations/violet-ink.ts does the same for the library violet).
    // `text` is ink on the paper (a kit's text); `onSun` ink on the sun badge; `onAccent` on the offer.
    k.brand({ primary: '#14110F', text: '#14110F', onSun: '#14110F', onAccent: '#FFFFFF', accent: '#FF5A36', paper: '#FFF4E8', sun: '#FFC53D', sky: '#2E6BFF', onDark: '#FFFFFF', muted: '#7A6F66', onPrimary: '#7A6F66', onPaper: shadedInk(hex('#FF5A36'), hex('#FFF4E8'), 3) }, { handle: '@yourshop' })
    k.patch(k.pageId, { name: 'Story ad' })
    k.textStyle('Mega 300', { size: 300, fontWeight: 900, lineHeight: 300, letterSpacing: -8 })
    k.textStyle('Display 176', { size: 176, fontWeight: 900, lineHeight: 176, letterSpacing: -4 })
    k.textStyle('Headline 88', { size: 88, fontWeight: 800, lineHeight: 96, letterSpacing: -2 })
    k.textStyle('Title 44', { size: 44, fontWeight: 700, lineHeight: 52 })
    k.textStyle('Body 40', { size: 40, fontWeight: 500, lineHeight: 52 })
    k.textStyle('Label 36', { size: 36, fontWeight: 800, lineHeight: 44, letterSpacing: 4 })
    const shadow = (blur: number, y: number, a: number): Effect => ({ type: 'DROP_SHADOW', color: k.color('primary', a), offset: { x: 0, y }, blur, spread: 0, visible: true } as Effect)

    // Components: a product card (name, price) and the call-to-action button.
    k.component('Product card', { direction: 'HORIZONTAL', width: 760, gap: 36, align: 'CENTER', padding: { top: 28, right: 48, bottom: 28, left: 28 }, fill: 'onDark', radius: 36, effects: [shadow(40, 16, 0.12)],
      description: 'A product with its price: swatch, name, price.', props: { Name: 'Linen shirt', Price: '$39' } }, id => {
      k.ellipse(id, 112, 'sun', { name: 'Swatch' })
      const copy = k.stack(id, { width: 'HUG', gap: 4, name: 'Copy' })
      k.propText(copy, 'Name', { style: 'Title 44', color: 'primary', autoWidth: true })
      k.propText(copy, 'Price', { style: 'Body 40', color: 'muted', autoWidth: true })
    })
    k.component('Button', { direction: 'HORIZONTAL', width: 'HUG', justify: 'CENTER', align: 'CENTER', padding: { top: 36, right: 88, bottom: 36, left: 88 }, fill: 'accent', radius: 999, effects: [shadow(48, 20, 0.3)],
      description: 'The call to action.', props: { Label: 'Shop now' } }, id => {
      k.propText(id, 'Label', { style: 'Label 36', color: 'onAccent', autoWidth: true })
    })

    const sheets = sceneSheets(k, 'ig-story', scenes.map(s => s.sheet))
    sheets.forEach((id, i) => {
      k.flowSheet(id, GAPS[i], { top: 120, right: 96, bottom: 120, left: 96 }, GROUNDS[i], 'CENTER', 'CENTER')
      k.timeline(id, { duration: DURATIONS[i], fps: 30 })
    })
    const [hook, offer, picks, perk, cta] = sheets
    const text = (sheet: string, chars: string, style: string, color: string, name: string) => k.text(sheet, chars, { style, color, autoWidth: true, name })
    // Scene 1 — the hook: a sun pops up, the words rise in.
    k.ellipse(hook, 360, 'sun', { name: 'Sun' })
    text(hook, 'SUMMER', 'Display 176', 'text', 'Summer')
    text(hook, 'SALE', 'Display 176', 'onPaper', 'Sale')
    text(hook, 'This weekend only', 'Body 40', 'muted', 'When')
    // Scene 2 — the offer.
    text(offer, 'UP TO', 'Label 36', 'onAccent', 'Up to')
    text(offer, '50%', 'Mega 300', 'onAccent', 'Percent')
    text(offer, 'off everything', 'Headline 88', 'onAccent', 'Off')
    // Scene 3 — the picks.
    text(picks, 'Our summer picks', 'Headline 88', 'text', 'Title')
    const list = k.stack(picks, { width: 'HUG', gap: 36, align: 'CENTER', name: 'Picks' })
    for (const [name, price] of [['Linen shirt', '$39'], ['Straw hat', '$24'], ['Beach tote', '$45']]) k.instance(list, 'Product card', { Name: name, Price: price })
    // Scene 4 — the perk.
    const badge = k.stack(perk, { width: 480, height: 480, justify: 'CENTER', align: 'CENTER', fill: 'sun', radius: 240, name: 'Badge' })
    text(badge, 'FREE', 'Display 176', 'onSun', 'Free')
    text(perk, 'shipping', 'Headline 88', 'onDark', 'Shipping')
    text(perk, 'on every order over $50', 'Body 40', 'onDark', 'Over')
    // Scene 5 — the call to action.
    text(cta, 'Shop the sale', 'Headline 88', 'onDark', 'Headline')
    k.instance(cta, 'Button', { Label: 'Shop now' })
    text(cta, '{{brand.handle}}', 'Body 40', 'onPrimary', 'Handle')

    playScenes(k, 'comp-story', 'Story ad', sheets, scenes, 'primary')
    k.setCover(hook)
    return k.finish()
  },
})
