// Word swap: a café's line whose last words keep changing — "Coffee for early starts. / late shifts. / long
// talks." One text layer says all three: its text animator (the Word swap animator in the text animator panel)
// brings each phrase in letter by letter and takes it out the same way, and a text key swaps the words while none
// of them shows. The lead line, the café's badge and its hours stay put, and the clip loops. 16:9 with 9:16.

import { Kit, preset, type Cue, type Swap } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { logoBadge, outro, pill } from '@popcraft/kit/templates/social/shared'
import { restyleAll, storyCut, titleSafe } from '@popcraft/kit/templates/kinetic/shared'

const swaps: Swap[] = [
  { layer: 'Swap', words: ['early starts.', 'late shifts.', 'long talks.'], at: 600, hold: 900, stagger: 30, in: 500, out: 350, rise: 64 },
]

const cues: Cue[] = [
  { layer: 'Logo', preset: 'pop-in', at: 0 },
  { layer: 'Lead', preset: 'rise-in', at: 150 },
  { layer: 'Hours', preset: 'fade-in', at: 900 },
  outro(['Logo', 'Lead', 'Hours'], 7100),
]

export default defineTemplate({
  id: 'kinetic-word-swap',
  meta: {
    name: 'Word swap line',
    description: 'A café’s line whose last words keep changing, letter by letter, in one text layer with a word-swap animator — 8 seconds, 16:9 with a 9:16 story cut',
    category: 'animation', tags: ['animation', 'kinetic type', 'word swap', 'letters', 'cafe', 'coffee', 'local business'],
    platforms: ['instagram', 'tiktok', 'youtube', 'facebook'], formats: ['video', 'story', 'reel', 'title-card'], useCases: ['brand-intro', 'announcement'],
    created: '2026-09-29', updated: '2026-09-29',
  },
  motion: { cues, swaps, loop: true },
  build() {
    const k = new Kit('Word swap line', preset('video-1080p'))
    k.brand(
      { paper: '#2A1E17', text: '#FBF3E8', accent: '#F4A259', card: '#3D2C22', onCard: '#FBF3E8' },
    )
    k.textStyle('Line 170', { size: 170, fontWeight: 900, letterSpacing: -5, lineHeight: 176, textAlign: 'CENTER' })
    k.textStyle('Line 128', { size: 128, fontWeight: 900, letterSpacing: -4, lineHeight: 136, textAlign: 'CENTER' })
    k.textStyle('Hours 40', { size: 40, fontWeight: 600, lineHeight: 48 })
    pill(k, 'Chip', { fill: 'card', ink: 'onCard', style: 'Hours 40', label: 'Open 6 am to 11 pm · 14 Mill Lane', pad: [16, 36] })

    const sheet = k.sheet
    k.flowSheet(sheet, 8, titleSafe(), 'paper', 'CENTER', 'CENTER')
    k.timeline(sheet, { duration: 8000, fps: 30 })
    logoBadge(k, sheet, { fill: 'card', size: 72, name: 'Logo' })
    k.stack(sheet, { height: 24, name: 'Gap' })
    k.text(sheet, 'Coffee for', { style: 'Line 170', color: 'text', name: 'Lead' })
    k.text(sheet, 'early starts.', { style: 'Line 170', color: 'accent', name: 'Swap' })
    k.stack(sheet, { height: 32, name: 'Gap' })
    k.instance(sheet, 'Chip', { Label: 'Open 6 am to 11 pm · 14 Mill Lane' }, { name: 'Hours' })

    k.swaps(sheet, swaps)
    k.cues(sheet, cues)
    k.variants(sheet, storyCut((kit, id) => restyleAll(kit, id, ['Lead', 'Swap'], 'Line 128')))
    return k.finish()
  },
})
