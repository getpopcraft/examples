import { defineTemplate } from '@popcraft/kit/templates/build'
// AI: the assets an AI product leans on while it works — a response being written, a network thinking, a chat
// partner typing, a Generate button that invites a click, and a diagram of prompts routed to models.

import { E, lottieTemplate, roundRect, sparkle, type K, type Lot } from '@popcraft/kit/templates/lottie/lottie-kit'

const AI = { paper: '#0E1022', surface: '#1A1D3A', line: '#2E3363', accent: '#8B7CFF', glow: '#B9A8FF', spark: '#5EE6D0', onAccent: '#0E1022', white: '#FFFFFF' }

/** A sparkle mark that turns a quarter and breathes over `ms` (a quarter turn: the star looks the same again). */
function thinkingMark(l: Lot, parent: string, cx: number, cy: number, r: number, ms: number, color = 'glow') {
  const s = l.shape(parent, sparkle(cx, cy, r), color, { name: 'Sparkle' })
  l.keys(s, 'rotation', [[0, 0, E.inOut], [ms, 90]])
  l.scale(s, [[0, 1], [ms / 2, 0.82], [ms, 1]])
  return s
}

export const aiThinking = lottieTemplate({
  slug: 'thinking-shimmer', sector: 'ai', role: 'loader', size: 'spot', duration: 2000, loop: true,
  name: 'AI thinking shimmer',
  description: 'The placeholder an assistant shows while it writes: a response card whose lines shimmer left to right under a turning sparkle — a two-second seamless loop, 800×600',
  colors: AI, useCases: ['onboarding'], tags: ['skeleton', 'generating', 'shimmer', 'assistant'],
  build(l) {
    const card = l.box(l.sheet, 80, 110, 640, 380, 'Response card', { fill: 'surface', radius: 36 })
    l.circle(card, 76, 76, 36, 'line', { name: 'Badge' })
    thinkingMark(l, card, 76, 76, 22, 2000)
    const bars = [[140, 560], [194, 520], [248, 560], [302, 340]] as const
    for (const [y, w] of bars) l.rect(card, 40, y, w, 24, 'line', { radius: 12, name: 'Line' })
    // The shimmer: a light band crossing the lines, seen only through them (a mask of the four bars).
    const sheen = l.box(card, 0, 0, 640, 380, 'Shimmer')
    l.vector(sheen, bars.map(([y, w]) => ({ pts: roundRect(40, y, w, 24, 12), closed: true })), 'white', { name: 'Lines mask', mask: true })
    const band = l.box(sheen, -300, 120, 260, 220, 'Sheen')
    l.rect(band, 0, 0, 130, 220, [l.k.gradient({ from: 'glow', to: 'glow', fromOpacity: 0, toOpacity: 0.9, angle: 0 })], { name: 'Sheen in' })
    l.rect(band, 130, 0, 130, 220, [l.k.gradient({ from: 'glow', to: 'glow', fromOpacity: 0.9, toOpacity: 0, angle: 0 })], { name: 'Sheen out' })
    // Across in 1.9 s, then back to the start while it is off the lines: the loop's last frame is its first.
    l.keys(band, 'translateX', [[0, 0, E.linear], [1900, 1000, E.hold], [2000, 0]])
  },
})

export const aiNeuralPulse = lottieTemplate({
  slug: 'neural-pulse', sector: 'ai', role: 'hero', size: 'hero', duration: 4000, loop: true, ground: 'paper',
  name: 'Neural net pulse',
  description: 'A hero loop for an AI product: signals race through a three-layer network, lighting each node they reach, over a soft glow — four seconds, seamless, 1600×900',
  colors: AI, useCases: ['launch'], tags: ['neural network', 'hero', 'background', 'machine learning'],
  build(l) {
    l.circle(l.sheet, 800, 450, 520, [l.k.gradient({ from: 'accent', to: 'accent', kind: 'RADIAL', fromOpacity: 0.28, toOpacity: 0, handles: [{ x: 0.5, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }] })], { name: 'Glow' })
    const cols = [[400, [240, 390, 510, 660]], [800, [180, 315, 450, 585, 720]], [1200, [300, 450, 600]]] as const
    const at = (c: number, i: number): [number, number] => [cols[c][0], cols[c][1][i]]
    const wires = l.box(l.sheet, 0, 0, 1600, 900, 'Wires')
    for (let c = 0; c < 2; c++) for (let a = 0; a < cols[c][1].length; a++) for (let b = 0; b < cols[c + 1][1].length; b++) {
      l.line(wires, [at(c, a), at(c + 1, b)], 'line', 3, { name: 'Wire' })
    }
    // Signals: each crosses the network once (input → hidden → output) in 1.2 s, and is gone before the loop ends.
    // Each output node is reached at most once every 1.2 s, so a node's flashes never overlap.
    const routes = [[0, 1, 0], [2, 3, 1], [1, 2, 2], [3, 4, 0], [0, 0, 1], [2, 2, 2]] as const
    const lit = new Map<string, number[]>()
    routes.forEach(([a, b, c], i) => {
      const t0 = i * 400
      const p = l.circle(l.sheet, ...at(0, a), 10, 'spark', { name: 'Signal' })
      const [x0, y0] = at(0, a), [x1, y1] = at(1, b), [x2, y2] = at(2, c)
      l.keys(p, 'translateX', [[t0, 0, E.inOut], [t0 + 600, x1 - x0, E.inOut], [t0 + 1200, x2 - x0]])
      l.keys(p, 'translateY', [[t0, 0, E.inOut], [t0 + 600, y1 - y0, E.inOut], [t0 + 1200, y2 - y0]])
      l.opacity(p, [[0, 0, E.hold], [t0, 0, E.out], [t0 + 120, 1, E.hold], [t0 + 1080, 1, E.in], [t0 + 1200, 0]])
      for (const [key, t] of [[`1:${b}`, t0 + 600], [`2:${c}`, t0 + 1200]] as const) lit.set(key, [...(lit.get(key) ?? []), t])
    })
    cols.forEach(([, ys], c) => ys.forEach((_, i) => {
      const [x, y] = at(c, i)
      const halo = l.circle(l.sheet, x, y, 30, 'accent', { name: 'Halo', opacity: 0 })
      const flashes = (lit.get(`${c}:${i}`) ?? []).sort((p, q) => p - q)
      if (flashes.length) {
        const o: K[] = [[0, 0, E.hold]], s: K[] = [[0, 0.6, E.hold]]
        for (const t of flashes) { o.push([t - 1, 0, E.out], [t + 80, 0.55, E.out], [t + 600, 0, E.hold]); s.push([t - 1, 0.6, E.out], [t + 600, 1.6, E.hold]) }
        l.opacity(halo, o)
        l.scale(halo, s)
      }
      l.circle(l.sheet, x, y, 18, 'surface', { name: 'Node', stroke: { color: c === 1 ? 'glow' : 'accent', width: 5 } })
    }))
  },
})

export const aiTyping = lottieTemplate({
  slug: 'chat-typing', sector: 'ai', role: 'loader', size: 'icon', duration: 1200, loop: true,
  name: 'Assistant typing',
  description: 'The "assistant is typing" indicator: three dots rise and brighten in turn inside a chat bubble — a 1.2-second seamless loop, 512×512',
  colors: AI, tags: ['chat', 'typing', 'indicator', 'assistant'],
  build(l) {
    // A rounded box with a tail at its lower left, as one contour.
    const box = roundRect(56, 116, 400, 240, 72)
    l.shape(l.sheet, [...box.slice(0, 5), { x: 196, y: 356 }, { x: 104, y: 420 }, ...box.slice(5)], 'surface', { name: 'Bubble' })
    for (let i = 0; i < 3; i++) {
      const d = l.circle(l.sheet, 176 + i * 80, 236, 26, 'accent', { name: 'Dot', opacity: 0.45 })
      const t = i * 160
      l.keys(d, 'translateY', [[0, 0, E.hold], [t, 0, E.out], [t + 240, -34, E.inOut], [t + 520, 0, E.hold], [1200, 0]])
      l.opacity(d, [[0, 0.45, E.hold], [t, 0.45, E.out], [t + 240, 1, E.inOut], [t + 520, 0.45, E.hold], [1200, 0.45]])
    }
  },
})

export const aiGenerateButton = lottieTemplate({
  slug: 'generate-button', sector: 'ai', role: 'micro-interaction', size: 'button', duration: 2400, loop: true,
  name: 'Generate button',
  description: 'A Generate button that invites the click: a sheen sweeps the pill while its sparkle turns and two small stars twinkle — a 2.4-second seamless loop, 480×160',
  colors: AI, tags: ['button', 'generate', 'sparkle', 'cta'],
  build(l) {
    const k = l.k
    k.textStyle('Button 44', { size: 44, fontWeight: 700, lineHeight: 52, letterSpacing: -0.5 })
    const pill = l.box(l.sheet, 40, 28, 400, 104, 'Button', { fill: 'accent', radius: 52, clip: true })
    // The sheen: a soft light band that crosses the pill once a loop, clipped to it.
    const band = l.box(pill, -200, 0, 160, 104, 'Sheen')
    l.rect(band, 0, 0, 80, 104, [k.gradient({ from: 'white', to: 'white', fromOpacity: 0, toOpacity: 0.45, angle: 0 })], { name: 'Sheen in' })
    l.rect(band, 80, 0, 80, 104, [k.gradient({ from: 'white', to: 'white', fromOpacity: 0.45, toOpacity: 0, angle: 0 })], { name: 'Sheen out' })
    l.keys(band, 'translateX', [[0, 0, E.hold], [600, 0, E.inOut], [1800, 760, E.hold], [2400, 760]])
    thinkingMark(l, pill, 78, 52, 26, 2400, 'onAccent')
    for (const [cx, cy, r, t] of [[112, 26, 9, 300], [104, 80, 7, 1300]] as const) {
      const s = l.shape(pill, sparkle(cx, cy, r), 'onAccent', { name: 'Twinkle' })
      l.scale(s, [[0, 0, E.hold], [t, 0, E.pop], [t + 400, 1, E.in], [t + 900, 0, E.hold], [2400, 0]])
    }
    k.text(pill, 'Generate', { style: 'Button 44', color: 'onAccent', autoWidth: true, name: 'Label', absolute: { x: 132, y: 26 } })
  },
})

export const aiModelRouting = lottieTemplate({
  slug: 'model-routing', sector: 'ai', role: 'explainer', size: 'hero', duration: 6000, loop: true, ground: 'paper',
  name: 'Model routing',
  description: 'A feature explainer for a model router: each prompt travels to the hub, which picks the model that fits and lights it — three requests to three models in a six-second seamless loop, 1600×900',
  colors: AI, useCases: ['pitch'], tags: ['diagram', 'router', 'llm', 'explainer'],
  build(l) {
    const prompt = l.box(l.sheet, 150, 330, 330, 240, 'Prompt', { fill: 'surface', radius: 28 })
    for (const [y, w] of [[60, 240], [110, 200], [160, 250]] as const) l.rect(prompt, 40, y, w, 22, 'line', { radius: 11, name: 'Prompt line' })
    const hub = [800, 450] as const
    const models = [[1250, 210], [1250, 450], [1250, 690]] as const
    l.line(l.sheet, [[480, 450], [hub[0] - 90, 450]], 'line', 6, { name: 'Wire in' })
    for (const [x, y] of models) l.line(l.sheet, [[hub[0] + 90, 450], [x - 160, y]], 'line', 6, { name: 'Wire out' })
    const ping = l.ring(l.sheet, hub[0], hub[1], 90, 'glow', 6, { name: 'Hub ping', opacity: 0 })
    l.circle(l.sheet, hub[0], hub[1], 90, 'surface', { name: 'Hub', stroke: { color: 'accent', width: 6 } })
    const mark = l.shape(l.sheet, sparkle(hub[0], hub[1], 44), 'glow', { name: 'Hub mark' })
    l.keys(mark, 'rotation', [[0, 0, E.inOut], [2000, 90, E.inOut], [4000, 180, E.inOut], [6000, 270]])
    const cards = models.map(([x, y], i) => {
      const c = l.box(l.sheet, x - 160, y - 80, 320, 160, 'Model', { fill: 'surface', radius: 28 })
      l.rect(c, 0, 0, 320, 160, 'line', { radius: 28, name: 'Model lit', opacity: 0 })
      l.circle(c, 70, 80, 34, ['accent', 'spark', 'glow'][i], { name: 'Model mark' })
      l.rect(c, 130, 56, 150, 20, 'line', { radius: 10, name: 'Model line' })
      l.rect(c, 130, 88, 100, 16, 'line', { radius: 8, name: 'Model line' })
      return c
    })
    const pingO: K[] = [[0, 0, E.hold]], pingS: K[] = [[0, 1, E.hold]]
    models.forEach(([x, y], i) => {
      const t0 = i * 2000
      // The request: prompt → hub (0.7 s), a beat in the hub, hub → the chosen model (0.6 s); gone before the next one.
      const p = l.circle(l.sheet, 480, 450, 14, 'spark', { name: 'Request' })
      l.keys(p, 'translateX', [[t0, 0, E.inOut], [t0 + 700, hub[0] - 480, E.hold], [t0 + 900, hub[0] - 480, E.inOut], [t0 + 1500, x - 160 - 480]])
      l.keys(p, 'translateY', [[t0 + 900, 0, E.inOut], [t0 + 1500, y - 450]])
      l.opacity(p, [[0, 0, E.hold], [t0, 0, E.out], [t0 + 150, 1, E.hold], [t0 + 1400, 1, E.in], [t0 + 1550, 0]])
      pingO.push([t0 + 700, 0, E.out], [t0 + 760, 0.9, E.out], [t0 + 1300, 0, E.hold])
      pingS.push([t0 + 700, 1, E.out], [t0 + 1300, 1.7, E.hold])
      // The chosen model lights up while it answers, then dims for the next request.
      l.opacity(l.k.named(cards[i], 'Model lit')[0], [[0, 0, E.hold], [t0 + 1450, 0, E.out], [t0 + 1650, 1, E.inOut], [t0 + 1950, 0, E.hold], [6000, 0]])
      l.scale(cards[i], [[0, 1, E.hold], [t0 + 1450, 1, E.pop], [t0 + 1700, 1.05, E.inOut], [t0 + 1950, 1, E.hold], [6000, 1]])
    })
    pingO.push([6000, 0]); pingS.push([6000, 1])
    l.opacity(ping, pingO)
    l.scale(ping, pingS)
  },
})

export const AI_PACK = [aiThinking, aiNeuralPulse, aiTyping, aiGenerateButton, aiModelRouting]

export default defineTemplate({ ...aiGenerateButton, id: 'lottie-generate-button' })
