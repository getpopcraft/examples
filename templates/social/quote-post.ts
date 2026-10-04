// Word-by-word quote (motion studio PR 8, text animation): the quote mark pops, the quote comes in word by word,
// its key word warms to the accent and swells through a text animator of its own, then the author rises in, the
// accent bar grows from its left and the handle fades up. A portrait post and a story, each laid out by hand (the
// story sets the quote a step larger and keeps clear of every vertical app's header, caption and action rail).

import { Kit, preset, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { animate, ease } from '@popcraft/kit/lib/motion/author'
import { animatorPath, withAnimator } from '@popcraft/kit/lib/motion/text-animators'
import { safePadding } from '@popcraft/kit/lib/templates/safe-areas'
import type { AnyNode, TextNode } from '@popcraft/kit/lib/document/types'

export const QUOTE = 'Well done is better than well said.'
export const QUOTE_AUTHOR = 'Benjamin Franklin'

const CUES: Cue[] = [
  { layer: 'Quote mark', preset: 'pop-in', at: 0 },
  { layer: 'Quote', preset: 'words-in', at: 300, params: { duration: 700, amount: 140, distance: 40 } },
  { layer: 'Attribution', preset: 'rise-in', at: 1900, params: { distance: 24 } },
  { layer: 'Accent bar', preset: 'scale-in', at: 2100 },
  { layer: 'Handle', preset: 'fade-in', at: 2300 },
]

const SIZES = [{ preset: 'ig-portrait', name: 'Post', quote: 'Quote 96' }, { preset: 'ig-story', name: 'Story', quote: 'Quote 108' }] as const

export default defineTemplate({
  id: 'quote-post',
  meta: {
    name: 'Word-by-word quote',
    description: 'A quote that arrives word by word, its key word warming to the accent, as a portrait post and a story',
    category: 'animation', tags: ['animation', 'quote', 'kinetic type', 'instagram'],
    platforms: ['instagram', 'tiktok'], formats: ['portrait-post', 'story'], useCases: ['quote'],
    created: '2026-09-28', updated: '2026-09-29',
  },
  motion: { cues: CUES },
  build() {
    const k = new Kit('Word-by-word quote', preset('ig-portrait'))
    k.brand({ ink: '#14110f', paper: '#f6f1e7', accent: '#e4572e', muted: '#6b645c' }, { handle: '@popcraft' })
    k.textStyle('Handle 30', { size: 30, fontWeight: 600, lineHeight: 36, letterSpacing: 1 })
    k.textStyle('Quote mark 220', { size: 220, fontWeight: 900, lineHeight: 180 })
    k.textStyle('Quote 96', { size: 96, fontWeight: 800, lineHeight: 108, letterSpacing: -2 })
    k.textStyle('Quote 108', { size: 108, fontWeight: 800, lineHeight: 120, letterSpacing: -2 })
    k.textStyle('Author 36', { size: 36, fontWeight: 600, lineHeight: 44 })

    // The attribution: a dash and the author's name, the name a TEXT property.
    k.component('Attribution', { direction: 'HORIZONTAL', width: 420, height: 44, gap: 20, align: 'CENTER', props: { Name: QUOTE_AUTHOR } }, id => {
      k.rect(id, 48, 4, 'accent', { name: 'Dash' })
      k.propText(id, 'Name', { style: 'Author 36', color: 'muted', autoWidth: true })
    })

    for (const [i, size] of SIZES.entries()) {
      const sheet = i === 0 ? k.sheet : k.addSheet(preset(size.preset), size.name)
      k.nameSheet(sheet, size.name)
      const p = preset(size.preset)
      k.flowSheet(sheet, 0, safePadding(size.preset, p.width, p.height, { top: 96, right: 96, bottom: 96, left: 96 }), 'paper', 'SPACE_BETWEEN', 'CENTER')
      k.timeline(sheet, { duration: 4500, fps: 30 })
      k.text(sheet, '{{brand.handle}}', { style: 'Handle 30', color: 'muted', align: 'CENTER', name: 'Handle' })
      const body = k.stack(sheet, { gap: 48, align: 'CENTER', name: 'Quote block' })
      k.text(body, '“', { style: 'Quote mark 220', color: 'accent', align: 'CENTER', name: 'Quote mark' })
      const quote = k.text(body, QUOTE, { style: size.quote, color: 'ink', align: 'CENTER', name: 'Quote' })
      k.instance(body, 'Attribution', { Name: QUOTE_AUTHOR })
      const bar = k.rect(sheet, 160, 10, 'accent', { name: 'Accent bar' })
      k.patch(bar, { anchorX: 0 })
      k.cues(sheet, CUES)
      // "better" (the fourth of seven words) warms to the accent and swells, holds, and settles back.
      k.apply(quote, n => animate(
        withAnimator(n as TextNode, { id: 'emphasis', name: 'Emphasis', unit: 'word', range: { start: 3 / 7, end: 4 / 7, offset: 0 }, amount: 0, order: 'forward', props: { color: k.color('accent'), scale: 1.05 } }) as AnyNode,
        animatorPath('emphasis', 'amount'), [{ t: 2000, v: 0, ease: ease.out('cubic') }, { t: 2400, v: 1, ease: ease.hold }, { t: 3900, v: 1, ease: ease.inOut('sine') }, { t: 4300, v: 0 }]))
    }
    return k.finish()
  },
})
