// Logo sting — shimmer: the gold tile scales up, the wordmark fades in, and a band of light sweeps across the tile
// — a highlight layer over it whose gradient stops are keyed, travelling from one edge to the other. 4 s, for a
// brand that sells something that catches the light.

import { Kit, hex, preset, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { ease } from '@popcraft/kit/lib/motion/author'
import type { Paint } from '@popcraft/kit/lib/document/types'
import { lockup, stingVariants } from '@popcraft/kit/templates/stings/shared'

const cues: Cue[] = [
  { layer: 'Mark', preset: 'scale-in', at: 0, params: { duration: 700, amount: 0.7 } },
  { layer: 'Wordmark', preset: 'fade-in', at: 500, params: { duration: 700 } },
  { layer: 'Tagline', preset: 'rise-in', at: 900 },
]

/** The sweep: when it starts and ends (ms), and its three stops' positions at each end of the tile. */
export const SHIMMER = { from: 1400, to: 2400, start: [0, 0.1, 0.2], end: [0.8, 0.9, 1], glint: 0.7 } as const

export default defineTemplate({
  id: 'logo-sting',
  meta: {
    name: 'Logo sting — shimmer',
    description: 'A 4-second logo sting: the tile scales up and a band of light sweeps across it (keyed gradient stops) as the name fades in — square, 16:9 and 9:16',
    category: 'animation', tags: ['animation', 'logo', 'sting', 'intro', 'brand', 'shimmer', 'gradient'],
    platforms: ['youtube', 'instagram', 'tiktok', 'linkedin'], formats: ['logo-sting', 'intro', 'video', 'post', 'story'], useCases: ['brand-intro', 'launch'],
    created: '2026-09-29', updated: '2026-09-29',
  },
  motion: { cues },
  build() {
    const k = new Kit('Logo sting — shimmer', preset('video-square'))
    k.brand({ paper: '#14110B', text: '#F5E9C8', onPaper: '#C9B98F', primary: '#B8892B' }, { name: 'Aurum', tagline: 'Jewellery made to be handed down' })
    const sheet = k.sheet
    k.flowSheet(sheet, 40, 120, 'paper', 'CENTER', 'CENTER')
    k.patch(sheet, { clipsContent: true })
    k.timeline(sheet, { duration: 4000, fps: 30 })
    const { mark } = lockup(k, sheet, { ownTile: true })
    // The glint: a layer laid over the whole tile (clipped to its corners), filled with a diagonal band that is
    // clear on both sides of a pale centre. Its stops are literal (a stop cannot bind a variable); the tile under it
    // keeps its bound brand colour. The band's stops are keyed across, and the layer shows only while they travel.
    k.patch(mark, { clipsContent: true })
    const size = 220 + 2 * Math.round(220 * 0.2)
    const clear = hex('#FFFFFF', 0), light = hex('#FFFFFF', SHIMMER.glint)
    const band: Paint = { type: 'GRADIENT_LINEAR', opacity: 1, visible: true, gradientStops: [{ position: SHIMMER.start[0], color: clear }, { position: SHIMMER.start[1], color: light }, { position: SHIMMER.start[2], color: clear }], gradientHandlePositions: [{ x: 0, y: 0.2 }, { x: 1, y: 0.8 }, { x: 0.2, y: 1 }] } as Paint
    const glint = k.stack(mark, { width: size, height: size, fill: [band], radius: Math.round(220 * 0.28), name: 'Glint', absolute: { x: 0, y: 0 } })
    // At rest (outside the sweep, and in the design view) it is clear.
    k.patch(glint, { opacity: 0 })
    const { from, to } = SHIMMER
    SHIMMER.start.forEach((p, i) => k.animate(glint, `fills[#0].gradientStops[#${i}].position`, [{ t: from, v: p, ease: ease.inOut('sine') }, { t: to, v: SHIMMER.end[i] }]))
    k.animate(glint, 'opacity', [{ t: from - 150, v: 0, ease: ease.linear }, { t: from, v: 1, ease: ease.linear }, { t: to, v: 1, ease: ease.linear }, { t: to + 150, v: 0 }])
    k.cues(sheet, cues)
    k.variants(sheet, stingVariants())
    return k.finish()
  },
})
