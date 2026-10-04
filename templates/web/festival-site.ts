// Presale page for KILOVOLT, a three-day electronic music festival on an airfield (40,000 people, four stages). The
// hero is the main stage at night: a light arch of concentric rings that pulse outward, truss towers, laser fans
// that sweep from the tower tops and the crown of the arch, strobes, haze and the crowd along the foot. Over it the
// name at poster size, the dates, the first names on the bill arriving one after another, and the gate: a countdown
// to the presale whose seconds tick, and the field to register for a code. Under it the presale in four steps, the
// ticket ladder stepped like stairs (early bird gone, tier one running down), the bill by day, what is on the
// airfield, how to get there, the questions, the partners, the gate again and the legal lines. Near-black, acid
// lime, magenta and cyan, in heavy capitals and a mono. A 1440 desktop page, re-laid out (motion and all) at the
// laptop, tablet and phone breakpoints.

import type { VectorPath } from '@popcraft/kit/lib/document/types'
import { Kit, preset, type Count, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { nav, page } from '@popcraft/kit/templates/web/shared'
import { typeScale } from '@popcraft/kit/templates/saas/web-shared'
import { MONO } from '@popcraft/kit/templates/shared/type'
import { line, pt3, rng } from '@popcraft/kit/templates/shared/draw'
import { bloom, glow, hardShadow } from '@popcraft/kit/templates/shared/texture'
import { LOOP, addOns, artBand, closing, countdown, drain, shape, faq, features, hero, ladder, legal, lineup, parts, partners, presaleResponsive, signup, steps, stockCount, sway, ticking, travel, type Bill, type Clock, type HeroSpec, type Look, type Stock, type Tier } from '@popcraft/kit/templates/themes/festival-presale-shared'

const NAME = 'Festival presale page: electronic weekend'
const CLOCK: Clock = { days: '12', hours: '06', minutes: '41', from: 47, to: 41 }
const STOCK: Stock = { label: 'Selling fast', from: 2351, left: 2318, total: 12000 }
const AW = 1200, AH = 800
const HERO: HeroSpec = {
  artW: AW, artH: AH, h: { desktop: 800, laptop: 780, tablet: 860, mobile: 664 },
  fit: { laptop: { s: 0.975, ax: 600, ay: 800, hx: 560, hy: 780 }, tablet: { s: 1.075, ax: 600, ay: 800, hx: 336, hy: 860 }, mobile: { s: 0.83, ax: 600, ay: 800, hx: 167.5, hy: 664 } },
  pad: { tablet: { top: 40, right: 32, bottom: 96, left: 32 }, mobile: { top: 24, right: 16, bottom: 64, left: 16 } },
}

const STEPS = [
  ['By 24 Jan', 'Register', 'Leave your email by Sunday\u00A024\u00A0January, 23:59 CET. One registration per person, and it costs nothing.'],
  ['26 Jan', 'Get your code', 'On Tuesday 26 January\u00A0we\u00A0email a personal code and a link. One code is good for one order of up to four passes.'],
  ['28 Jan · 10:00', 'Presale opens', 'Thursday 28 January at 10:00 CET. The waiting room opens at 09:30, and places in the queue are drawn at random.'],
  ['5 Feb', 'General sale', 'Whatever is left goes on general sale\u00A0on Friday 5\u00A0February at 10:00 CET, at the price of the tier it has reached.'],
] as const

const TIERS: Tier[] = [
  { tag: 'Early bird', name: 'Three-day pass', price: '€169', note: '4,000 passes. Gone in eleven minutes last November.', status: 'sold', chip: 'Sold out' },
  { tag: 'Tier 1', name: 'Three-day pass', price: '€199', note: 'On sale now to 2026 ticket holders. What is left opens to presale codes on 28 January.', status: 'selling', chip: 'On sale' },
  { tag: 'Tier 2', name: 'Three-day pass', price: '€229', note: '14,000 passes, held for\u00A0the presale. Opens the moment tier 1 is gone.', status: 'next', chip: 'Presale · 28 Jan' },
  { tag: 'Tier 3', name: 'Three-day pass', price: '€259', note: 'The last 10,000. General sale only, if the presale leaves any.', status: 'later', chip: 'General · 5 Feb' },
]
const EXTRAS = [
  ['VIP deck', '+ €140', 'A raised deck at the Mainframe stage, a fast lane at the gates, lockers and proper toilets.'],
  ['Camp Voltage', '+ €55', 'Four nights, 600 metres from the gates. Hot showers and a locker are in the price.'],
  ['Shuttle pass', '+ €24', 'All-weekend buses from Hallstrand main station, every ten minutes until 04:30.'],
] as const

const BILLS: Bill[] = [
  { label: 'Fri 9 July', note: 'Gates 14:00', heads: ['Vanta Rae'], acts: ['Dial Tone Saints', 'Marguerite Vox', 'Greyfold'], more: ['Pale Signal', 'Oblik', 'Quiet Carriage', 'Mika Sol b2b Ferro'] },
  { label: 'Sat 10 July', note: 'Gates 12:00', heads: ['HEXA/MODE'], acts: ['Sable & Ives', 'K-Lattice (live)', 'Petra Null'], more: ['Dune Protocol', 'Analog Daughters', 'Hi-Vis Choir', 'NNOVA'] },
  { label: 'Sun 11 July', note: 'Gates 12:00', heads: ['Solveig Nox'], acts: ['Lumen Kid', 'The Long Fade', 'Okta Okta'], more: ['Yara Feld', 'Night Bus 44', 'Soft Machinery Club', 'Brine'] },
]

const ON_SITE = [
  ['Four stages', 'Mainframe, Hangar 4, the Tower and the\u00A0Forest Floor: 62 hours of music between Friday afternoon and Monday sunrise.'],
  ['Light architecture', 'A 90-metre truss arch over the runway and 400 moving heads, designed for this airfield by Studio Parallax.'],
  ['Camp Voltage', 'A tent village with hot showers, lockers and a breakfast canteen. Quiet from 05:00, for the ones who sleep.'],
  ['The food hangar', 'Forty kitchens in the old maintenance hangar, half of them meat-free. Free water at every stage.'],
  ['Cashless', 'Your wristband pays. Top up in the app, and whatever is left on Monday goes back to your card.'],
  ['Access', 'Viewing platforms at every stage, an accessible campsite with charging points, and a free companion pass.'],
] as const

const ROUTES = [
  ['Train', 'Hallstrand main station is 25 minutes from the gates by shuttle. Night trains to Kessel and Brandt run until 05:00.', 'Shuttle every 10 min'],
  ['Coach', 'Festival coaches from fourteen cities, straight to Gate B, with your pass checked on board.', 'From €29 return'],
  ['Car', 'Parking in the east field, booked ahead. Bring three people and the car parks free.', '€18 a day'],
  ['Bike', 'A guarded bike park at Gate A with a repair stand and lights to borrow.', 'Free'],
] as const
const STAYS = [
  ['Camp Voltage', 'Bring your own tent. Thursday evening to Monday noon.', '+ €55'],
  ['Pre-pitched', 'A bell tent for two with real beds, already up when you arrive.', '+ €240'],
  ['Hotels', 'Rooms held in Hallstrand at festival rates until 1 April. The shuttle stops outside.', 'From €89'],
] as const

const QUESTIONS = [
  ['How many passes can I buy?', 'Four per person in the presale, six in the general sale. Every pass carries a name, and changing it is free until 1 June.'],
  ['Does registering get me a ticket?', 'No. It gets you a code and a place in the presale queue. More codes go out than there are passes, so be there at 10:00.'],
  ['Can I resell my pass?', 'Yes, at the price you paid, through the official resale. Passes sold anywhere else are cancelled and will not scan.'],
  ['Is there an age limit?', 'KILOVOLT is 18 and over. Bring photo ID: your wristband is issued against the name on the pass.'],
  ['What if I cannot go?', 'You can cancel for a full refund within 14 days of buying. After that, list the pass on the official resale.'],
  ['Is the site accessible?', 'Yes. Book what you need with your pass: platforms, the accessible campsite,\u00A0charging and a free companion pass.'],
] as const

const cues: Cue[] = [
  { layer: 'Nav', preset: 'fade-in', at: 0, params: { duration: 400 } },
  { layer: 'Hero kicker', preset: 'fade-in', at: 100, params: { duration: 500 } },
  { layer: 'Hero name', preset: 'blur-in', at: 150, params: { duration: 900, amount: 26 } },
  { layer: 'Hero date', preset: 'rise-in', at: 600, params: { duration: 600 } },
  { layer: 'Hero act', preset: 'rise-in', at: 1100, params: { duration: 500 }, stagger: { delay: 260 } },
  { layer: 'Hero gate', preset: 'rise-in', at: 800, params: { duration: 700 } },
  { layer: 'Step', preset: 'rise-in', at: 1200, params: { duration: 500 }, stagger: { delay: 140 } },
  { layer: 'Act', preset: 'fade-in', at: 1600, params: { duration: 400 }, stagger: { delay: 90 } },
]
const counts: Count[] = [ticking('Hero', CLOCK), ticking('Band', CLOCK), stockCount('Tier stock', STOCK)]

/** The top half of a ring round (cx, cy). */
const arch = (cx: number, cy: number, r: number, n = 40): VectorPath => ({ closed: false, points: Array.from({ length: n + 1 }, (_, i) => { const a = Math.PI + (Math.PI * i) / n; return pt3(cx + r * Math.cos(a), cy + r * Math.sin(a)) }) })

/** The main stage at night, in a 1200 × 800 frame. */
/** A strip of the stage for a band between sections, `h` tall from native y `top`: a low arch of rings over the runway, and the towers. */
function stripArt(k: Kit, art: string, top: number, h: number) {
  const cx = AW / 2, floor = top + h
  const runway: VectorPath[] = []
  for (let i = -12; i <= 12; i++) runway.push(line(cx + i * 10, floor - h * 0.3, cx + i * 110, floor))
  for (const f of [0.7, 0.78, 0.9]) runway.push(line(0, top + h * f, AW, top + h * f))
  k.vector(art, AW, h, runway.map(p => ({ ...p, points: p.points.map(q => ({ ...q, y: q.y - top })) })), 'violet', { name: 'Runway', strokeWidth: 1.5, opacity: 0.5, absolute: { x: 0, y: top } })
  ;[0.25, 0.42, 0.6, 0.8, 0.98].forEach((f, i) => {
    const r = h * f, role = i % 3 === 0 ? 'lime' : i % 3 === 1 ? 'cyan' : 'magenta'
    const id = k.vector(art, AW, h, [arch(cx, h * 0.7 + 0, r * 2.4)].map(p => ({ ...p, points: p.points.map(q => ({ ...q, y: h * 0.7 + (q.y - h * 0.7) * 0.28 })) })), role, { name: 'Ring', strokeWidth: i % 3 === 0 ? 4 : 2.5, opacity: 0.62, effects: [bloom(k, role, 14, 0.8)], absolute: { x: 0, y: top } })
    sway(k, id, 'opacity', 0.36, 3, -i / 5)
  })
}

function stageArt(k: Kit, art: string) {
  const cx = AW / 2, floor = 706
  // Haze: light pooled at the horizon, and a colder one high in the arch.
  const haze = glow(k, art, { x: cx, y: floor - 20, w: 1500, h: 760, role: 'magenta', alpha: 0.42, name: 'Haze' })
  sway(k, haze, 'opacity', 0.18, 2)
  glow(k, art, { x: cx, y: 250, w: 900, h: 520, role: 'violet', alpha: 0.34, name: 'High haze' })
  glow(k, art, { x: 150, y: floor, w: 520, role: 'cyan', alpha: 0.22, name: 'Side haze' })
  glow(k, art, { x: AW - 150, y: floor, w: 520, role: 'cyan', alpha: 0.22, name: 'Side haze' })
  // The runway: lines running to the vanishing point under the arch.
  const runway: VectorPath[] = []
  for (let i = -9; i <= 9; i++) runway.push(line(cx + i * 14, floor, cx + i * 150, AH))
  for (const y of [floor, floor + 12, floor + 30, floor + 58]) runway.push(line(0, y, AW, y))
  k.vector(art, AW, AH, runway, 'violet', { name: 'Runway', strokeWidth: 1.5, opacity: 0.5, absolute: { x: 0, y: 0 } })
  // The arch: rings of light, each pulsing a beat after the one inside it.
  const rings = [150, 215, 285, 360, 440, 525, 615]
  rings.forEach((r, i) => {
    const id = k.vector(art, AW, AH, [arch(cx, floor, r)], i % 3 === 0 ? 'lime' : i % 3 === 1 ? 'cyan' : 'magenta', { name: 'Ring', strokeWidth: i % 3 === 0 ? 5 : 3, opacity: 0.62, effects: [bloom(k, i % 3 === 0 ? 'lime' : i % 3 === 1 ? 'cyan' : 'magenta', 18, 0.8)], absolute: { x: 0, y: 0 } })
    sway(k, id, 'opacity', 0.36, 3, -i / rings.length)
  })
  // Spokes of the arch (the truss the rings hang on).
  const spokes: VectorPath[] = []
  for (let i = 1; i < 12; i++) { const a = Math.PI + (Math.PI * i) / 12; spokes.push(line(cx + 150 * Math.cos(a), floor + 150 * Math.sin(a), cx + 615 * Math.cos(a), floor + 615 * Math.sin(a))) }
  k.vector(art, AW, AH, spokes, 'truss', { name: 'Spokes', strokeWidth: 2, opacity: 0.9, absolute: { x: 0, y: 0 } })
  // Two truss towers, lattice and all.
  for (const x of [58, AW - 58 - 44]) {
    const lattice: VectorPath[] = [line(0, 0, 0, 560), line(44, 0, 44, 560), line(-12, 0, 56, 0)]
    for (let y = 0; y < 560; y += 40) { lattice.push(line(0, y, 44, y + 40)); lattice.push(line(44, y, 0, y + 40)) }
    k.vector(art, 44, 560, lattice, 'truss', { name: 'Tower', strokeWidth: 2.5, absolute: { x, y: 190 } })
  }
  // Laser fans: thin lines from the tower tops and the crown, sweeping.
  const fan = (ox: number, oy: number, mid: number, spread: number, n: number, role: string, amp: number, phase: number, len = 1500) => {
    const lines: VectorPath[] = Array.from({ length: n }, (_, i) => { const a = ((mid + spread * (i / (n - 1) - 0.5)) * Math.PI) / 180; return line(len, len, len + len * Math.cos(a), len + len * Math.sin(a)) })
    const id = k.vector(art, len * 2, len * 2, lines, role, { name: 'Lasers', strokeWidth: 2, opacity: 0.5, effects: [bloom(k, role, 10, 0.9)], absolute: { x: ox - len, y: oy - len } })
    sway(k, id, 'rotation', amp, 2, phase)
  }
  fan(80, 190, 40, 38, 7, 'lime', 9, 0)
  fan(AW - 80, 190, 140, 38, 7, 'lime', 9, 0.5)
  fan(cx, floor - 615, 90, 120, 9, 'magenta', 7, 0.25)
  fan(80, 190, -28, 30, 5, 'cyan', 12, 0.3)
  fan(AW - 80, 190, 208, 30, 5, 'cyan', 12, 0.8)
  // Strobes along the arch and the towers.
  const r = rng(27)
  for (let i = 0; i < 26; i++) {
    const a = Math.PI + Math.PI * r(), rr = rings[Math.floor(r() * rings.length)]
    const id = k.ellipse(art, 6 + Math.round(r() * 5), 'flash', { name: 'Strobe', effects: [bloom(k, 'flash', 14, 0.9)], absolute: { x: Math.round(cx + rr * Math.cos(a)) - 4, y: Math.round(floor + rr * Math.sin(a)) - 4 } })
    k.patch(id, { opacity: 0.55 })
    sway(k, id, 'opacity', 0.45, 3 + (i % 4) * 3, r())
  }
  // The crowd: two rows of heads and raised arms against the light.
  const crowd = (base: number, step: number, head: number, seed: number): VectorPath => {
    const q = rng(seed)
    const pts = [pt3(-20, AH + 20), pt3(-20, base)]
    for (let x = -10; x < AW + 20; x += step) {
      const y = base + (q() - 0.5) * head * 0.9, arm = q()
      if (arm > 0.78) { const up = head * (1.5 + q() * 0.8); pts.push(pt3(x - head * 0.42, y), pt3(x - head * 0.62, y - up), pt3(x - head * 0.5, y - up - head * 0.35), pt3(x - head * 0.22, y - up - head * 0.3), pt3(x - head * 0.1, y - up), pt3(x, y - head * 0.2)) }
      pts.push(pt3(x, y), pt3(x + head * 0.12, y - head * 0.75), pt3(x + head * 0.5, y - head), pt3(x + head * 0.88, y - head * 0.75), pt3(x + head, y))
    }
    pts.push(pt3(AW + 20, base), pt3(AW + 20, AH + 20))
    return { closed: true, points: pts }
  }
  k.vector(art, AW, AH, [crowd(floor + 34, 30, 20, 5)], 'crowdFar', { name: 'Crowd far', absolute: { x: 0, y: 0 } })
  const near = k.vector(art, AW, AH, [crowd(floor + 66, 44, 30, 9)], 'crowd', { name: 'Crowd', absolute: { x: 0, y: 0 } })
  sway(k, near, 'translateY', 3, 6)
}

/** The line-up panel's corner: quarter rings of the arch, pulsing, in haze. */
function cornerRings(k: Kit, panel: string) {
  const S = 430, f = k.frame(panel, { x: AW - S, y: 0, width: S, height: S }, { name: 'Panel art right' })
  glow(k, f, { x: S, y: 0, w: 760, role: 'magenta', alpha: 0.38, name: 'Corner haze' })
  ;[110, 170, 230, 290, 350, 410].forEach((r, i) => {
    const role = i % 3 === 0 ? 'lime' : i % 3 === 1 ? 'cyan' : 'magenta'
    const arc: VectorPath = { closed: false, points: Array.from({ length: 21 }, (_, j) => { const a = Math.PI / 2 + (Math.PI / 2) * (j / 20); return pt3(S + r * Math.cos(a), r * Math.sin(a)) }) }
    const id = shape(k, f, [arc], role, { name: 'Ring', strokeWidth: i % 3 === 0 ? 5 : 3, opacity: 0.6, effects: [bloom(k, role, 16, 0.8)] })
    sway(k, id, 'opacity', 0.35, 3, -i / 6)
  })
}

export default defineTemplate({
  id: 'festival-site',
  meta: {
    name: NAME,
    description: 'A ticket presale landing page for a large three-day electronic music festival. The hero is the main stage at night (a pulsing light arch, truss towers, sweeping laser fans, strobes and the crowd) under the name at poster size, with a countdown to the presale whose seconds tick and the field to register for a code. Then the presale in four steps, a stepped ticket ladder with the early bird sold out and tier one running down, VIP, camping and a payment plan, the bill by day, what is on site, travel and stay, the questions, partners and the legal lines. Near-black, acid lime and magenta, desktop to phone',
    category: 'web', tags: ['festival', 'presale', 'tickets', 'electronic music', 'rave', 'lasers', 'countdown', 'sign-up', 'ticket tiers', 'line-up', 'landing page', 'website', 'night', 'animation', 'responsive', 'event'],
    platforms: ['web'], formats: ['page'], useCases: ['presale', 'event', 'countdown', 'launch'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  breakpoints: true,
  motion: { cues, counts },
  build() {
    const k = new Kit(NAME, preset('web-desktop'))
    k.quantizeGeometry = true
    k.brand(
      { paper: '#0A0912', text: '#F3F1FA', onPaper: '#ABA7C0', primary: '#C8FF3E', onPrimary: '#0A0912', accent: '#FF2D8E', onAccent: '#14000A', card: '#161424', onCard: '#F3F1FA', cardMuted: '#ABA7C0', panel: '#221F38', onPanel: '#F3F1FA', panelMuted: '#B9B5D0', chip: '#2C2944', onChip: '#E6E3F4', stage: '#07060F', onStage: '#F3F1FA', stageMuted: '#C2BEDA' },
      { name: 'KILOVOLT' },
    )
    k.palette({ lime: '#C8FF3E', magenta: '#FF2D8E', cyan: '#39E6FF', violet: '#7B5CFF', truss: '#3B3660', flash: '#FFFFFF', crowd: '#020106', crowdFar: '#0D0A1E', gate: '#0B0A16' })
    const s = typeScale(k, {
      Nav: { ...MONO, size: 13, fontWeight: 600, letterSpacing: 0.6, lineHeight: 20, textCase: 'UPPER' },
      Brand: { size: 20, fontWeight: 900, letterSpacing: 1.5, lineHeight: 28 },
      Button: { size: 15, fontWeight: 800, letterSpacing: 0.6, lineHeight: 22, textCase: 'UPPER' },
      Kicker: { ...MONO, size: 13, fontWeight: 700, letterSpacing: 1.4, lineHeight: 18, textCase: 'UPPER' },
      Section: { size: 72, fontWeight: 900, letterSpacing: -3, lineHeight: 68, textCase: 'UPPER' },
      'Section md': { size: 52, fontWeight: 900, letterSpacing: -2, lineHeight: 50, textCase: 'UPPER' },
      'Section sm': { size: 36, fontWeight: 900, letterSpacing: -1.2, lineHeight: 36, textCase: 'UPPER' },
      Aside: { size: 18, fontWeight: 400, lineHeight: 28 },
      'Aside sm': { size: 16, fontWeight: 400, lineHeight: 25 },
      Body: { size: 16, fontWeight: 400, lineHeight: 25 },
      Small: { size: 14, fontWeight: 400, lineHeight: 21 },
      Label: { ...MONO, size: 12, fontWeight: 700, letterSpacing: 1, lineHeight: 16, textCase: 'UPPER' },
      Legal: { size: 13, fontWeight: 400, lineHeight: 20 },
      Clock: { ...MONO, size: 56, fontWeight: 800, letterSpacing: -2, lineHeight: 58, fontFeatures: { tnum: 1 } },
      'Clock sm': { ...MONO, size: 34, fontWeight: 800, letterSpacing: -1, lineHeight: 38, fontFeatures: { tnum: 1 } },
      Unit: { ...MONO, size: 12, fontWeight: 700, letterSpacing: 1.2, lineHeight: 16, textCase: 'UPPER' },
      Field: { size: 16, fontWeight: 500, lineHeight: 24 },
      'Step no': { ...MONO, size: 44, fontWeight: 800, letterSpacing: -2, lineHeight: 44 },
      'Step title': { size: 22, fontWeight: 800, letterSpacing: -0.4, lineHeight: 28 },
      Tier: { size: 24, fontWeight: 800, letterSpacing: -0.5, lineHeight: 30, textCase: 'UPPER' },
      Price: { size: 44, fontWeight: 900, letterSpacing: -1.6, lineHeight: 44, fontFeatures: { tnum: 1 } },
      'Price sm': { size: 36, fontWeight: 900, letterSpacing: -1.2, lineHeight: 38, fontFeatures: { tnum: 1 } },
      Status: { ...MONO, size: 12, fontWeight: 800, letterSpacing: 0.8, lineHeight: 16, textCase: 'UPPER' },
      'Act 1': { size: 44, fontWeight: 900, letterSpacing: -1.6, lineHeight: 46, textCase: 'UPPER' },
      'Act 1 md': { size: 64, fontWeight: 900, letterSpacing: -2.6, lineHeight: 62, textCase: 'UPPER' },
      'Act 1 sm': { size: 40, fontWeight: 900, letterSpacing: -1.4, lineHeight: 42, textCase: 'UPPER' },
      'Act 2': { size: 24, fontWeight: 800, letterSpacing: -0.5, lineHeight: 32, textCase: 'UPPER' },
      'Act 2 sm': { size: 22, fontWeight: 800, letterSpacing: -0.4, lineHeight: 30, textCase: 'UPPER' },
      'Act 3': { ...MONO, size: 14, fontWeight: 500, lineHeight: 24 },
      Day: { size: 20, fontWeight: 900, letterSpacing: 0.4, lineHeight: 26, textCase: 'UPPER' },
      Q: { size: 19, fontWeight: 800, letterSpacing: -0.2, lineHeight: 26 },
      Partner: { size: 15, fontWeight: 800, letterSpacing: 1.4, lineHeight: 20, textCase: 'UPPER' },
      'Name 200': { size: 200, fontWeight: 900, letterSpacing: -9, lineHeight: 172, textCase: 'UPPER', textAlign: 'CENTER' },
      'Name 184': { size: 184, fontWeight: 900, letterSpacing: -8, lineHeight: 160, textCase: 'UPPER', textAlign: 'CENTER' },
      'Name 112': { size: 112, fontWeight: 900, letterSpacing: -4.6, lineHeight: 100, textCase: 'UPPER', textAlign: 'CENTER' },
      'Name 58': { size: 58, fontWeight: 900, letterSpacing: -2.2, lineHeight: 54, textCase: 'UPPER', textAlign: 'CENTER' },
      'Date 26': { size: 26, fontWeight: 800, letterSpacing: 2.2, lineHeight: 34, textCase: 'UPPER', textAlign: 'CENTER' },
      'Date 16': { size: 16, fontWeight: 800, letterSpacing: 1.4, lineHeight: 22, textCase: 'UPPER', textAlign: 'CENTER' },
      'Bill 18': { ...MONO, size: 18, fontWeight: 700, letterSpacing: 0.6, lineHeight: 26, textCase: 'UPPER' },
      'Bill 14': { ...MONO, size: 14, fontWeight: 700, letterSpacing: 0.4, lineHeight: 22, textCase: 'UPPER' },
    })
    const L: Look = { s, upper: ['Kicker', 'Section', 'Label', 'Unit', 'Tier', 'Status', 'Act 1', 'Act 2', 'Day', 'Partner'], radius: 0, card: { stroke: { color: 'chip', width: 1, align: 'INSIDE' } }, pad: 26, rule: 1, chipRadius: 0, mark: (kit, f, i) => { kit.text(f, `0${i + 1}`, { style: s('Step no'), color: 'lime', autoWidth: true, name: 'Feature number' }) } }
    parts(k, L, { pad: [15, 24] })

    const sheet = k.sheet
    page(k, sheet, { gap: 112, top: 28 })
    k.timeline(sheet, { duration: LOOP, fps: 30 })
    nav(k, sheet, { links: ['Presale', 'Tickets', 'Line-up', 'Travel'], cta: 'GET A CODE', style: s('Nav'), brandStyle: s('Brand') })

    // ── The hero: the stage at night, the name, and the gate.
    const { hero: h, art } = hero(k, sheet, HERO, { align: 'CENTER', justify: 'CENTER', gap: 18, padding: { top: 40, right: 48, bottom: 104, left: 48 }, stroke: { color: 'chip', width: 1, align: 'INSIDE' } })
    stageArt(k, art)
    const kick = k.stack(h, { direction: 'HORIZONTAL', width: 'HUG', fill: k.tint('gate', 0.82), padding: { top: 5, right: 12, bottom: 5, left: 12 }, name: 'Hero kicker' })
    k.text(kick, 'THREE DAYS · FOUR STAGES · 40,000 PEOPLE', { style: s('Kicker'), color: 'onStage', autoWidth: true, name: 'Hero kicker text' })
    k.text(h, '{{brand.name}}', { style: s('Name 200'), color: 'onStage', name: 'Hero name', effects: [hardShadow(k, 'magenta', 7, 7), hardShadow(k, 'cyan', -5, -5)] })
    k.text(h, '9 – 11 JULY 2027 · NORDHAFEN AIRFIELD, HALLSTRAND', { style: s('Date 26'), color: 'onStage', name: 'Hero date' })
    const acts = k.stack(h, { direction: 'HORIZONTAL', width: 'HUG', gap: 8, align: 'CENTER', name: 'Hero acts' })
    for (const [i, a] of ['Vanta Rae', 'HEXA/MODE', 'Solveig Nox', '+ 60 more'].entries()) {
      const tag = k.stack(acts, { direction: 'HORIZONTAL', width: 'HUG', fill: i === 3 ? 'lime' : k.tint('gate', 0.82), padding: { top: 5, right: 12, bottom: 5, left: 12 }, name: 'Hero act' })
      k.text(tag, a, { style: s('Bill 18'), color: i === 3 ? 'gate' : 'onStage', autoWidth: true, name: 'Hero act name' })
    }
    const gate = k.stack(h, { direction: 'HORIZONTAL', width: 1000, gap: 28, align: 'MAX', fill: k.tint('gate', 0.88), padding: 22, stroke: { color: 'lime', width: 1.5, align: 'INSIDE' }, name: 'Hero gate' })
    const gc = k.stack(gate, { width: 420, gap: 10, name: 'Gate clock' })
    k.text(gc, 'PRESALE OPENS IN', { style: s('Kicker'), color: 'stageMuted', name: 'Gate label' })
    countdown(k, gc, L, { prefix: 'Hero', clock: CLOCK, fill: 'panel', ink: 'onPanel', muted: 'panelMuted', gap: 8, pad: [10, 4] })
    const gj = k.stack(gate, { gap: 10, name: 'Gate join' })
    k.text(gj, 'REGISTER BY SUN 24 JANUARY FOR A PRESALE CODE', { style: s('Kicker'), color: 'stageMuted', name: 'Join label' })
    signup(k, gj, L, { name: 'Hero signup', placeholder: 'you@example.com', cta: 'GET PRESALE ACCESS' })
    k.text(gj, 'One code per person, good for up to four passes. Free to register, and one email when it matters.', { style: s('Small'), color: 'stageMuted', name: 'Join note' })

    steps(k, sheet, L, { kicker: '// 01 · The presale', title: 'How the presale works', aside: 'Four dates. Miss the first and you are in the general sale with everyone else, at whatever price is left.', items: STEPS, boxed: true })
    const tix = ladder(k, sheet, L, { kicker: '// 02 · Tickets', title: 'The ladder only goes up', aside: 'Each tier is a fixed number of three-day passes. When one is gone the price moves to the next, and it never comes back down.', tiers: TIERS, variant: 'rungs', inset: 56, stock: STOCK })
    addOns(k, tix, L, { items: EXTRAS, plan: ['Pay in three', 'Put down €60 at checkout, then pay the rest in two parts on 1 March and 1 May. No interest, no fee, and the tier price you got is locked.', 'Deposit €60'] })
    lineup(k, sheet, L, { kicker: '// 03 · Line-up, first wave', title: 'Twenty-four names so far', aside: 'The second wave lands on 2 March, with the Tower and Forest Floor line-ups and the stage times in April.', bills: BILLS, variant: 'days', tba: '+ 36 more names on 2 March', sep: '·', panel: { radius: 0, stroke: { color: 'lime', width: 1.5, align: 'INSIDE' }, art: cornerRings } })
    // The page's own art between the sections, so the lower page is drawn too.
    artBand(k, sheet, { w: AW, h: 200, focus: 100, radius: 0, draw: a => stripArt(k, a, 0, 200) })
    features(k, sheet, L, { kicker: '// 04 · On the airfield', title: 'What your pass gets you', items: ON_SITE, boxed: true })
    travel(k, sheet, L, { kicker: '// 05 · Travel and stay', title: 'Getting to Nordhafen', aside: 'The airfield is 11 km north of Hallstrand. Four in five people came without a car last year.', routes: ROUTES, stays: STAYS })
    artBand(k, sheet, { w: AW, h: 160, focus: 80, radius: 0, name: 'Art band 2', draw: a => stripArt(k, a, 0, 160) })
    faq(k, sheet, L, { kicker: '// 06 · Questions', title: 'Before you register', items: QUESTIONS })
    partners(k, sheet, L, { label: 'Official partners', names: ['Ostwind Bank', 'Radio 98.4', 'Kessel Brauerei', 'Studio Parallax', 'Nordbahn', 'Volta Energy'] })
    closing(k, sheet, L, { title: 'No code, no presale.', text: 'Register by Sunday 24 January, 23:59 CET. Your code arrives on the 26th and the presale opens on Thursday 28 January at 10:00.', clock: CLOCK, placeholder: 'you@example.com', cta: 'GET PRESALE ACCESS', note: 'Free to register. One code per person.', radius: 0 })
    legal(k, sheet, L, {
      links: ['Ticket terms', 'Official resale', 'Access', 'Privacy', 'Contact'],
      lines: ['© 2026 Kilovolt Festival GmbH, Hallstrand. Passes are sold under the ticket terms: every pass is named and valid only with photo ID. 18 and over.', 'Resale is valid only through the official resale at the price paid. Passes bought elsewhere are cancelled. Line-up and times may change.'],
    })

    drain(k, sheet, 'Tier stock', STOCK)
    k.counts(sheet, counts)
    k.cues(sheet, cues)
    presaleResponsive(k, sheet, L, HERO, {
      stack: ['Hero gate'],
      restyle: { 'Name 200': { laptop: 'Name 184', tablet: 'Name 112', mobile: 'Name 58' }, 'Date 26': { mobile: 'Date 16' }, Clock: { mobile: 'Clock sm' }, 'Bill 18': { tablet: 'Bill 14', mobile: 'Bill 14' } },
      hide: { mobile: ['Hero acts', 'Join note'] },
      gap: { laptop: 96 },
      tweak: (kit, id, size) => {
        const each = (name: string, props: Record<string, unknown>) => { for (const n of kit.named(id, name)) kit.patch(n, props) }
        if (size === 'laptop') each('Hero gate', { width: 940 })
        if (size === 'tablet' || size === 'mobile') { each('Hero gate', { layoutSizingHorizontal: 'FILL', itemSpacing: 16, counterAxisAlignItems: 'MIN' }); each('Gate clock', { layoutSizingHorizontal: 'FILL' }) }
        if (size === 'mobile') { each('Hero', { itemSpacing: 12 }); each('Hero kicker', { layoutSizingHorizontal: 'FILL' }); each('Hero kicker text', { layoutSizingHorizontal: 'FILL', textAutoResize: 'HEIGHT', textAlign: 'CENTER' }); each('Hero gate', { padding: { top: 14, right: 14, bottom: 14, left: 14 }, itemSpacing: 12 })
          // The phone's stage, recomposed: the arch drawn small enough to stand whole over the name, its crown at the
          // hero's top and its feet at the dates, the strobes round it; the crowd stays at the foot under the gate.
          const s = 0.45, floor = 706, top = 296
          for (const name of ['Ring', 'Spokes', 'Strobe']) for (const n of kit.named(id, name)) {
            const q = kit.node(n) as unknown as { x: number; y: number; width: number; height: number; strokeWidth?: number }
            const cx = 600 + (q.x + q.width / 2 - 600) * s, cy = top + (q.y + q.height / 2 - floor) * s
            if (name === 'Strobe') { kit.patch(n, { x: Math.round(cx - q.width / 2), y: Math.round(cy - q.height / 2) }); continue }
            kit.patch(n, { scaleX: s, scaleY: s, x: Math.round(cx - q.width / 2), y: Math.round(cy - q.height / 2), ...(q.strokeWidth ? { strokeWidth: Math.round((q.strokeWidth * 0.8) / s * 10) / 10 } : {}) })
          }
        }
      },
    })
    return k.finish()
  },
})
