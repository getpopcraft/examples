// YouTube end screen: the last 20 seconds of a video at 1920×1080. It leaves YouTube's element slots empty, the
// two video cards and the round subscribe button (lib/templates/safe-areas.ts `youtube-end-screen`), so the
// elements you add in YouTube Studio sit on drawn placeholders and never over words. The title and labels rise
// in, the slot frames scale up one after another, and the subscribe ring pulses every five seconds. It clears
// in the last half second.

import { Kit, preset, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { outro } from '@popcraft/kit/templates/social/shared'
import { safeArea } from '@popcraft/kit/lib/templates/safe-areas'
import { CHANNEL_COLORS, CHANNEL_FIELDS } from '@popcraft/kit/templates/video/channel'

const CONTENT = ['Title', 'Watch next', 'Schedule', 'Handle', 'Slot', 'Subscribe ring']

const cues: Cue[] = [
  { layer: 'Title', preset: 'rise-in', at: 100, params: { duration: 700 } },
  { layer: 'Slot', preset: 'scale-in', at: 400, params: { duration: 700, amount: 0.85 }, stagger: { delay: 150 } },
  { layer: 'Subscribe ring', preset: 'pop-in', at: 800 },
  { layer: ['Watch next', 'Schedule', 'Handle'], preset: 'fade-in', at: 1000, stagger: { delay: 120 } },
  { layer: 'Subscribe ring', preset: 'pulse', at: 4000, params: { amount: 0.1 } },
  { layer: 'Subscribe ring', preset: 'pulse', at: 9000, params: { amount: 0.1 } },
  { layer: 'Subscribe ring', preset: 'pulse', at: 14000, params: { amount: 0.1 } },
  outro(CONTENT, 19200, { gap: 40, duration: 350 }),
]

export default defineTemplate({
  id: 'youtube-end-screen',
  meta: {
    name: 'YouTube end screen',
    description: 'A 20-second end screen at 1920×1080 that keeps YouTube’s two video slots and the subscribe button clear, with drawn placeholders for them, a thanks title and a pulsing subscribe ring',
    category: 'animation', tags: ['animation', 'youtube', 'end screen', 'outro', 'subscribe', 'video'],
    platforms: ['youtube'], formats: ['end-screen', 'outro', 'video'], useCases: ['brand-intro'],
    created: '2026-09-29', updated: '2026-09-29',
  },
  motion: { cues, loop: true },
  build() {
    const k = new Kit('YouTube end screen', preset('video-1080p'))
    k.brand(CHANNEL_COLORS, CHANNEL_FIELDS)
    k.textStyle('Title 72', { size: 72, fontWeight: 900, letterSpacing: -2, lineHeight: 80 })
    k.textStyle('Label 30', { size: 30, fontWeight: 700, letterSpacing: 2, lineHeight: 36 })
    k.textStyle('Line 34', { size: 34, fontWeight: 500, lineHeight: 42 })
    // A slot is where YouTube draws one of its elements: a frame of the exact zone, outlined, and left empty.
    k.component('Video slot', { width: 740, height: 416, fill: 'card', radius: 20, stroke: { color: 'primary', width: 4 }, props: {} }, () => {})

    const sheet = k.sheet
    k.flowSheet(sheet, 16, { top: 96, right: 150, bottom: 96, left: 150 }, 'paper', 'MIN', 'MIN')
    k.timeline(sheet, { duration: 20000, fps: 30 })
    k.text(sheet, 'Thanks for watching {{brand.name}}', { style: 'Title 72', color: 'text', name: 'Title' })
    k.text(sheet, 'WATCH NEXT', { style: 'Label 30', color: 'onPaper', name: 'Watch next' })
    const zones = safeArea('youtube-end-screen')!.zones!
    for (const z of zones.filter(z => z.label === 'Video')) k.instance(sheet, 'Video slot', {}, { name: 'Slot', absolute: { x: z.x, y: z.y } })
    const sub = zones.find(z => z.label === 'Subscribe')!
    k.stack(sheet, { width: sub.width, height: sub.height, radius: sub.width / 2, stroke: { color: 'subscribe', width: 8 }, name: 'Subscribe ring', absolute: { x: sub.x, y: sub.y } })
    // Under the slots, either side of the subscribe button.
    k.text(sheet, '{{brand.schedule}}', { style: 'Line 34', color: 'onPaper', width: 680, name: 'Schedule', absolute: { x: 150, y: 860 } })
    k.text(sheet, '{{brand.handle}}', { style: 'Line 34', color: 'text', width: 680, align: 'RIGHT', name: 'Handle', absolute: { x: 1090, y: 860 } })

    k.cues(sheet, cues)
    return k.finish()
  },
})
