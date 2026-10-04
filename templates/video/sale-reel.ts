// Sale drop: a 12-second vertical promo for an end-of-season sale. The shop's badge and the SALE tag land,
// the offer pops on its red panel and swells twice while the terms and the button rise in under it, then
// everything drops away so the reel loops on its own ground. Made at 9:16 inside every vertical app's safe
// area, re-laid out for the square and 4:5 feed.

import { Kit, preset, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { feedVariants, logoBadge, outro, pill, verticalPadding } from '@popcraft/kit/templates/social/shared'

const CONTENT = ['Logo badge', 'Sale tag', 'Offer', 'What', 'Until', 'Shop button']

const cues: Cue[] = [
  { layer: 'Glow', preset: 'fade-in', at: 0, params: { duration: 900 } },
  { layer: 'Logo badge', preset: 'pop-in', at: 100 },
  { layer: 'Sale tag', preset: 'drop-in', at: 300 },
  { layer: 'Offer', preset: 'pop-in', at: 550, params: { duration: 650, amount: 0.4 } },
  { layer: ['What', 'Until'], preset: 'rise-in', at: 1100, stagger: { delay: 150 } },
  { layer: 'Shop button', preset: 'rise-in', at: 1500 },
  { layer: 'Offer', preset: 'pulse', at: 3600, params: { amount: 0.05 } },
  { layer: 'Shop button', preset: 'pulse', at: 6200 },
  { layer: 'Offer', preset: 'pulse', at: 8400, params: { amount: 0.05 } },
  outro(CONTENT, 10700, { preset: 'drop-out' }),
  { layer: 'Glow', preset: 'fade-out', at: 11300, params: { duration: 500 } },
]

export default defineTemplate({
  id: 'sale-reel',
  meta: {
    name: 'Sale drop promo',
    description: 'A 12-second vertical sale reel: the offer pops on a red panel and swells, the terms and a shop button rise in, and it all drops away to loop — 9:16 with square and 4:5 cuts',
    category: 'animation', tags: ['animation', 'sale', 'reel', 'tiktok', 'shorts', 'promo', 'retail'],
    platforms: ['instagram', 'tiktok', 'youtube', 'facebook'], formats: ['reel', 'short', 'story', 'post', 'portrait-post', 'ad'], useCases: ['sale'],
    created: '2026-09-29', updated: '2026-09-29',
  },
  motion: { cues, loop: true },
  build() {
    const k = new Kit('Sale drop promo', preset('ig-story'))
    k.brand(
      { primary: '#C81E36', onPrimary: '#FFFFFF', accent: '#FFC53D', onAccent: '#1B1B1F', paper: '#FFF8EE', text: '#1B1B1F', onText: '#FFF8EE', onPaper: '#5C5752' },
      { offer: '30% off', what: 'Every 2026 road and gravel bike in the shop', until: 'Ends Sunday, October 12' },
    )
    k.textStyle('Offer 160', { size: 160, fontWeight: 900, letterSpacing: -5, lineHeight: 160, textAlign: 'CENTER' })
    k.textStyle('Offer 132', { size: 132, fontWeight: 900, letterSpacing: -4, lineHeight: 136, textAlign: 'CENTER' })
    k.textStyle('What 60', { size: 60, fontWeight: 800, letterSpacing: -1, lineHeight: 68, textAlign: 'CENTER' })
    k.textStyle('What 44', { size: 44, fontWeight: 800, letterSpacing: -1, lineHeight: 52, textAlign: 'CENTER' })
    k.textStyle('Until 40', { size: 40, fontWeight: 500, lineHeight: 48, textAlign: 'CENTER' })
    k.textStyle('Tag 30', { size: 30, fontWeight: 800, letterSpacing: 3, lineHeight: 36 })
    k.textStyle('Button 40', { size: 40, fontWeight: 700, lineHeight: 48 })
    pill(k, 'Tag', { fill: 'accent', ink: 'onAccent', style: 'Tag 30', label: 'END-OF-SEASON SALE' })
    pill(k, 'Button', { fill: 'text', ink: 'onText', style: 'Button 40', label: 'Shop the sale', pad: [24, 56] })

    const sheet = k.sheet
    k.flowSheet(sheet, 48, verticalPadding(), 'paper', 'CENTER', 'CENTER')
    k.patch(sheet, { clipsContent: true })
    k.timeline(sheet, { duration: 12000, fps: 30 })
    k.ellipse(sheet, 900, 'accent', { name: 'Glow', opacity: 0.35, absolute: { x: 420, y: -260 } })
    logoBadge(k, sheet, { fill: 'primary', size: 72 })
    k.instance(sheet, 'Tag', { Label: 'END-OF-SEASON SALE' }, { name: 'Sale tag' })
    const panel = k.stack(sheet, { fill: 'primary', radius: 48, padding: { top: 48, right: 32, bottom: 56, left: 32 }, align: 'CENTER', name: 'Offer' })
    k.text(panel, '{{brand.offer}}', { style: 'Offer 160', color: 'onPrimary', name: 'Offer figure' })
    k.text(sheet, '{{brand.what}}', { style: 'What 60', color: 'text', name: 'What' })
    k.text(sheet, '{{brand.until}}', { style: 'Until 40', color: 'onPaper', name: 'Until' })
    k.instance(sheet, 'Button', { Label: 'Shop the sale' }, { name: 'Shop button' })

    k.cues(sheet, cues)
    k.variants(sheet, feedVariants({ post: 64, portrait: 80 }, {
      post: (kit, id) => {
        kit.patch(id, { itemSpacing: 24, counterAxisSpacing: 24 })
        for (const n of kit.named(id, 'Offer figure')) kit.restyle(n, 'Offer 132')
        for (const n of kit.named(id, 'What')) kit.restyle(n, 'What 44')
        for (const n of kit.named(id, 'Offer')) kit.patch(n, { padding: { top: 32, right: 32, bottom: 40, left: 32 } })
      },
      portrait: (kit, id) => { kit.patch(id, { itemSpacing: 32, counterAxisSpacing: 32 }) },
    }))
    return k.finish()
  },
})
