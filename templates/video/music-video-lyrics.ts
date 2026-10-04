// Hip-hop lyric video: a vertical video where the lyrics land on the beat. Each line comes in word by word on its
// bar's downbeat and leaves before the next. The current line thumps with the 808. Under it, your cover art fills
// the frame, blurred and dimmed, and an equalizer in the gold runs along the bottom. The music is "Concrete Bloom",
// a 90 BPM boom-bap loop PopCraft made in code (CC0), played one and a half times. The lines are PopCraft's own words: every one
// is a text layer to rewrite. The entrances are keyed to the loop's beats (found by the same analysis the visuals
// follow), a bar a line.

import { Kit, preset, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { animate, ease } from '@popcraft/kit/lib/motion/author'
import type { AnyNode, Effect, TextNode } from '@popcraft/kit/lib/document/types'
import { animatorPath, withAnimator } from '@popcraft/kit/lib/motion/text-animators'
import { pill } from '@popcraft/kit/templates/social/shared'
import { trackInfo } from '@popcraft/kit/templates/audio/music'
import { bassKick, spectrumBars } from '@popcraft/kit/templates/music/parts'
import { onColor, songBeats, withSong } from '@popcraft/kit/templates/music/shared'

const INK = '#0E0D0C', GOLD = '#F2C14E', BONE = '#F4EFE6', RUST = '#C8553D'
/** A loop and a half: six bars, a line a bar. */
const PASSES = 1.5

/** The lyrics, a bar each (PopCraft's own words). */
export const LYRICS = [
  'Concrete in the morning',
  'Gold light on the wire',
  'Every step a drum line',
  'Every breath a choir',
  'Bloom up through the cracks',
  'Loud where it was quiet',
]

/** Each line's bar: from the downbeat that starts it (the first beat of every four) to the next one. */
export function lyricBars(): [number, number][] {
  const beats = songBeats('hiphop', PASSES)
  const bar = (4 * 60000) / trackInfo('hiphop').bpm
  const downbeats = beats.filter((_, i) => i % 4 === 0).slice(0, LYRICS.length)
  return downbeats.map((t, i) => [t, downbeats[i + 1] ?? Math.round(t + bar)])
}

/** How long a line takes to come in word by word, and to go (ms), and the ms between its words. */
export const LINE_IN = 420, LINE_OUT = 220, WORD_STAGGER = 70

export const CUES: Cue[] = [
  { layer: 'Header', preset: 'fade-in', at: 0, params: { duration: 600 } },
]

/**
 * The lyrics as one text layer, the way the text animator panel's Word swap writes it: a text key puts each line
 * in on its downbeat, and the animator brings its words in one after another (rising, fading up) and takes them out
 * just before the next bar. At rest the layer reads the first line.
 */
function lyricSwap(k: Kit, id: string) {
  const n = k.node<TextNode>(id)
  let t = withAnimator({ ...n, characters: LYRICS[0] }, { id: 'swap', name: 'Word swap', unit: 'word', range: { start: 0, end: 1, offset: 0 }, amount: 0, order: 'forward', stagger: WORD_STAGGER, props: { opacity: 0, translateY: 48 } }) as AnyNode
  const bars = lyricBars()
  t = animate(t, 'text.content', bars.map(([from], i) => ({ t: from, v: LYRICS[i], ease: ease.hold })))
  t = animate(t, animatorPath('swap', 'amount'), bars.flatMap(([from, to], i) => {
    const tail = (LYRICS[i].split(/\s+/).length - 1) * WORD_STAGGER
    const leaves = to - LINE_OUT - tail - 30
    return [
      { t: from, v: 1, ease: ease.out('expo') }, { t: from + LINE_IN, v: 0, ease: ease.hold },
      { t: leaves, v: 0, ease: ease.named('expo', 'in') }, { t: leaves + LINE_OUT, v: 1, ease: ease.hold },
    ]
  }))
  k.apply(id, () => t)
}

export default defineTemplate({
  id: 'music-video-lyrics',
  meta: {
    name: 'Hip-hop lyric video',
    description: 'A vertical lyric video where every line lands on the beat, word by word, and thumps with the 808 — over your cover art, blurred, with a gold equalizer along the bottom; the words are layers to rewrite and the visuals follow any track you drop in',
    category: 'animation', tags: ['animation', 'music', 'music video', 'lyric video', 'hip-hop', 'kinetic type', 'captions', 'audio reactive', 'equalizer', 'reel', 'tiktok'],
    platforms: ['instagram', 'tiktok', 'youtube'], formats: ['reel', 'short', 'story'], useCases: ['launch', 'quote'],
    created: '2026-09-30', updated: '2026-09-30',
  },
  motion: { cues: CUES },
  build() {
    const k = new Kit('Hip-hop lyric video', preset('ig-story'))
    k.brand({ ink: INK, accent: GOLD, text: BONE, rust: RUST, onInk: onColor(INK, [BONE]), onAccent: onColor(GOLD, [INK]) },
      { song: 'Concrete Bloom', artist: 'Lotus Grid' })
    k.textStyle('Head 34', { size: 34, fontWeight: 800, lineHeight: 40, letterSpacing: 4, textCase: 'UPPER' })
    k.textStyle('Sub 30', { size: 30, fontWeight: 500, lineHeight: 38 })
    k.textStyle('Lyric 104', { size: 104, fontWeight: 900, lineHeight: 104, letterSpacing: -3, textAlign: 'CENTER', textCase: 'UPPER' })

    k.textStyle('Tag 24', { size: 24, fontWeight: 800, lineHeight: 28, letterSpacing: 3, textCase: 'UPPER' })
    pill(k, 'Tag', { fill: 'accent', ink: 'onAccent', style: 'Tag 24', label: 'Lyric video', pad: [8, 18] })

    const sheet = k.sheet
    k.nameSheet(sheet, 'Lyrics')
    k.flowSheet(sheet, 0, { top: 0, right: 0, bottom: 0, left: 0 }, 'ink')
    k.patch(sheet, { clipsContent: true })
    withSong(k, sheet, 'hiphop', PASSES, 900)

    // The cover art, filling the frame: blurred, dimmed, breathing with the kick.
    const blur: Effect = { id: 'e1', type: 'LAYER_BLUR', radius: 36, visible: true } as Effect
    const back = k.photo(sheet, 1400, 2240, { ground: 'rust', name: 'Cover art backdrop', absolute: { x: -160, y: -160 } })
    k.patch(back, { effects: [blur] })
    bassKick(k, back, 0.025, 220)
    k.rect(sheet, 1080, 1920, 'ink', { opacity: 0.62, name: 'Dim', absolute: { x: 0, y: 0 } })

    // The header: the art, the song, the artist.
    const header = k.stack(sheet, { direction: 'HORIZONTAL', width: 876, gap: 28, align: 'CENTER', name: 'Header', absolute: { x: 64, y: 270 } })
    const art = k.photo(header, 150, 150, { radius: 18, ground: 'rust', name: 'Cover art' })
    bassKick(k, art, 0.05, 140)
    const titles = k.stack(header, { width: 690, gap: 8, name: 'Titles' })
    k.instance(titles, 'Tag', { Label: 'Lyric video' })
    k.text(titles, '{{brand.song}}', { style: 'Head 34', color: 'onInk', width: 690, name: 'Song' })
    k.text(titles, '{{brand.artist}}', { style: 'Sub 30', color: 'onInk', width: 690, name: 'Artist' })

    // The lines, one over another in the middle of the frame; each shows for its bar. The box they sit in thumps.
    const lines = k.stack(sheet, { width: 876, height: 420, justify: 'CENTER', name: 'Lyrics', absolute: { x: 64, y: 620 } })
    bassKick(k, lines, 0.04, 120)
    const lyric = k.text(lines, LYRICS[0], { style: 'Lyric 104', color: 'onInk', width: 876, name: 'Lyric' })

    const eq = k.stack(sheet, { width: 876, height: 220, name: 'Equalizer', absolute: { x: 64, y: 1200 } })
    spectrumBars(k, eq, { width: 876, height: 220, color: 'accent', count: 36, range: [0, 0.8] })

    k.cues(sheet, CUES)
    lyricSwap(k, lyric)
    k.setCover(sheet)
    return k.finish()
  },
})
