// EMBERFALL: The Ashen Crown — a fantasy RPG's whole front end and HUD, playable in present mode. The art direction is
// an illuminated manuscript set on fire: soot and oxblood grounds, deckled parchment panels drawn as vector polygons,
// ember-gold filigree, rune glyphs drawn as strokes, ember motes drifting up every screen and candle flames that
// flicker on noise.
//
// A lantern sigil (the studio's logo glowing inside its glass) hands over to a burning horizon under the ashen crown;
// the main menu's focus is a candle whose flame slides to the line you choose; the save slots are "memories" whose
// region vignette develops out of sepia as you point at them, and choosing one loads its hero into the variables.
// Settings has working sliders (the volume candles in the preview burn as high as the volume), toggles (drifting
// embers really switch off everywhere) and key bindings the HUD listens to. In the bell-tower courtyard: F strikes
// the Hollow Bellringer (stamina drains, the wraith recoils, its bar drops with a chip trail), M casts an Emberbolt
// (mana drains, the bolt flies, the spell slot sweeps its cooldown and only casts again when it has come round),
// Q drinks a potion (it pops, health refills), H is the wraith's blow (health drains through a chip trail, the screen
// bleeds and, under 35, blood candles gutter at the edges), E loots gold. I opens the satchel (select an item, click
// the weapon or armour slot: attack and defence glide, and the next fight really hits harder / hurts less), K the skill
// tree (nodes unlock only with embers to spend and their parent lit, their lines ink in, their live value lights up
// and the stats change), J the quest log, T the ferrywoman Oriel Thane (branching choices move her trust — and her
// lantern burns brighter as she trusts you; one path gives the Ember of Vaelmoor, which appears in the satchel and the
// quest log). Escape pauses. The wraith at zero reclaims the crown; your health at zero: the embers dim.

import { Kit } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import type { AnyNode, Effect, PrototypeAction } from '@popcraft/kit/lib/document/types'
import { resolveNodeVariables } from '@popcraft/kit/lib/document/variables'
import {
  H, W, arc, arcPoints, back, bar, blurFx, box, close, drift, focusColumn, focusRow, gameKit, gameVar, glow, go, keybind, keys, label, menu, onAll, oneShot,
  overlay, poly, readout, rebindListener, screen, sector, set, shaderLayer, slider, spin, toggle, toggleComponent, when,
} from '@popcraft/kit/templates/game/shared'

type Pt = readonly [number, number]

// ── Content ──────────────────────────────────────────────────────────────────────────────────────────────

interface Item { name: string; kind: 'sword' | 'pike' | 'dagger' | 'mail' | 'coat' | 'cloak' | 'mantle' | 'flask' | 'ember' | 'map' | 'key'; slot: 'weapon' | 'armour' | 'none'; rarity: 'common' | 'rare' | 'epic' | 'legendary'; stat: number; lore: string }
const ITEMS: Item[] = [
  { name: 'Dawnbrand', kind: 'sword', slot: 'weapon', rarity: 'legendary', stat: 48, lore: 'Forged in the last sunrise before the Fall. It still remembers the light.' },
  { name: 'Hollow Pike', kind: 'pike', slot: 'weapon', rarity: 'rare', stat: 30, lore: 'A bellringer\'s pole, iron-shod, long enough to keep a wraith at arm\'s length.' },
  { name: 'Rusted Falchion', kind: 'sword', slot: 'weapon', rarity: 'common', stat: 18, lore: 'It has cut worse things than rust. Barely.' },
  { name: 'Wyrmtooth Dagger', kind: 'dagger', slot: 'weapon', rarity: 'epic', stat: 36, lore: 'Carved from a single fang. It hums whenever fire is near.' },
  { name: 'Cindermail', kind: 'mail', slot: 'armour', rarity: 'legendary', stat: 34, lore: 'Links of cooled ember that glow again wherever they are struck.' },
  { name: 'Warden\'s Coat', kind: 'coat', slot: 'armour', rarity: 'rare', stat: 22, lore: 'Boiled leather, stitched with the names of every gate it kept.' },
  { name: 'Pilgrim\'s Cloak', kind: 'cloak', slot: 'armour', rarity: 'common', stat: 10, lore: 'Grey wool that smells of road dust and other people\'s prayers.' },
  { name: 'Ashwoven Mantle', kind: 'mantle', slot: 'armour', rarity: 'epic', stat: 28, lore: 'Woven from the ash of a burned library. The words are still in it.' },
  { name: 'Vial of Heartsblood', kind: 'flask', slot: 'none', rarity: 'common', stat: 35, lore: 'Warm to the touch. Restores 35 health when drunk.' },
  { name: 'Ember of Vaelmoor', kind: 'ember', slot: 'none', rarity: 'legendary', stat: 0, lore: 'Oriel\'s daughter carried it. It opens the bell tower, and it has not cooled.' },
  { name: 'Map of the Marches', kind: 'map', slot: 'none', rarity: 'rare', stat: 0, lore: 'Every road on it ends at the bell tower. The cartographer did not.' },
  { name: 'Bell-tower Key', kind: 'key', slot: 'none', rarity: 'epic', stat: 0, lore: 'Cold iron. The teeth are shaped like little tongues.' },
]
const START_WEAPON = 2, START_ARMOUR = 6

interface Save { name: string; level: number; cls: string; region: string; time: string; gold: number; potions: number; memory: string }
const SAVES: Save[] = [
  { name: 'Seren Ashgrove', level: 14, cls: 'Ashbound Knight', region: 'The Cinder Marches', time: '12h 41m', gold: 1240, potions: 3, memory: 'The fields burned the night she left, and she did not look back.' },
  { name: 'Bram Holloway', level: 7, cls: 'Fen Warden', region: 'Vaelmoor Fen', time: '5h 02m', gold: 310, potions: 1, memory: 'The moon on the water, and the ferry lantern that never moves.' },
  { name: 'Ilse Morrow', level: 22, cls: 'Spire Scholar', region: 'The Ashen Spire', time: '31h 17m', gold: 4875, potions: 5, memory: 'Ash falling upward, and a door at the top that was already open.' },
]

interface Skill { name: string; x: number; y: number; parents: number[]; rune: number; lit: string; effect: (v: Vars) => PrototypeAction[]; desc: string }
type Vars = Record<string, { id: string; n: string }>

const CREDITS: [string, string][] = [
  ['Game direction', 'Wenna Calloway-Stroud'], ['Narrative', 'Idris Blackwood · Maren Oduya'], ['Art direction', 'Lucan Ferreira-Holt'],
  ['Illumination and interface', 'Saoirse Nakamura'], ['Systems design', 'Teodor Vasz'], ['Music', 'The Hollow Lantern Consort'],
  ['Engineering', 'Aurelio Brandt · Nkechi Obi · Pim de Waal'], ['Quality assurance', 'The Candlekeepers'], ['With thanks', 'Everyone who kept a light on for us'],
]

// ── Drawing helpers (local: the game kit stays genre-neutral) ───────────────────────────────────────────

/** A deterministic random stream (the same deckle every build). */
function rng(seed: number) { let s = seed >>> 0 || 1; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 } }

/** A deckled, chamfered sheet's outline in a w × h box: its edges bite inward a few px, its corners are cut. */
function deckle(w: number, h: number, c: number, j: number, seed: number): [number, number][] {
  const r = rng(seed)
  const out: [number, number][] = []
  const edge = (x0: number, y0: number, x1: number, y1: number, nx: number, ny: number) => {
    const n = Math.max(2, Math.round(Math.hypot(x1 - x0, y1 - y0) / 34))
    for (let i = 0; i < n; i++) { const t = i / n, d = i === 0 ? 0 : r() * j; out.push([x0 + (x1 - x0) * t + nx * d, y0 + (y1 - y0) * t + ny * d]) }
  }
  edge(c, 0, w - c, 0, 0, 1); edge(w - c, 0, w, c, 0, 0)
  edge(w, c, w, h - c, -1, 0); edge(w, h - c, w - c, h, 0, 0)
  edge(w - c, h, c, h, 0, -1); edge(c, h, 0, h - c, 0, 0)
  edge(0, h - c, 0, c, 1, 0); edge(0, c, c, 0, 0, 0)
  return out
}

/** Several open strokes as one vector layer (a rune, a flourish, reeds). */
function lines(k: Kit, parent: string, segs: readonly (readonly Pt[])[], color: string, width: number, o: { name?: string; opacity?: number; effects?: Effect[] } = {}): string {
  const all = segs.flat()
  const x0 = Math.min(...all.map(p => p[0])), y0 = Math.min(...all.map(p => p[1]))
  const w = Math.max(1, Math.max(...all.map(p => p[0])) - x0), h = Math.max(1, Math.max(...all.map(p => p[1])) - y0)
  const paths = segs.map(s => ({ closed: false, points: s.map(([x, y]) => ({ x: x - x0, y: y - y0 })) }))
  return k.vector(parent, w, h, paths, color, { name: o.name ?? 'Strokes', absolute: { x: x0, y: y0 }, strokeWidth: width, ...(o.opacity !== undefined ? { opacity: o.opacity } : {}), ...(o.effects ? { effects: o.effects } : {}) })
}

/** Rune glyphs, drawn as strokes in a 0.6 × 1 box (original marks, no alphabet). */
const RUNES: Pt[][][] = [
  [[[0.3, 0], [0.3, 1]], [[0.3, 0.18], [0.6, 0.38]], [[0.3, 0.46], [0.6, 0.66]]],
  [[[0.05, 0], [0.05, 1]], [[0.55, 0], [0.55, 1]], [[0.05, 0.3], [0.55, 0.62]]],
  [[[0.3, 0], [0.3, 1]], [[0, 0.22], [0.3, 0.5], [0.6, 0.22]]],
  [[[0, 0], [0.6, 1]], [[0.6, 0], [0, 1]], [[0.3, 0], [0.3, 0.2]]],
  [[[0.3, 0], [0.3, 1]], [[0.3, 0.28], [0, 0.52], [0.3, 0.76]]],
  [[[0.3, 0], [0.6, 0.5], [0.3, 1], [0, 0.5], [0.3, 0]], [[0.3, 0.3], [0.3, 0.7]]],
  [[[0, 1], [0.3, 0], [0.6, 1]], [[0.12, 0.62], [0.48, 0.62]]],
]
function rune(k: Kit, parent: string, x: number, y: number, size: number, idx: number, color: string, o: { width?: number; name?: string; opacity?: number; effects?: Effect[] } = {}): string {
  const segs = RUNES[idx % RUNES.length].map(s => s.map(([px, py]) => [x + px * size, y + py * size] as Pt))
  return lines(k, parent, segs, color, o.width ?? Math.max(2, size / 14), { name: o.name ?? 'Rune', opacity: o.opacity, effects: o.effects })
}

/** An ember-gold flourish: two rules, a lozenge at the centre, curls at the ends. */
function flourish(k: Kit, parent: string, cx: number, y: number, w: number, color: string, name = 'Flourish') {
  const g = box(k, parent, cx - w / 2, y - 14, w, 28, { name })
  const m = w / 2
  lines(k, g, [[[0, 14], [m - 22, 14]], [[m + 22, 14], [w, 14]], ...[0, w].map(ex => arcPoints(ex + (ex === 0 ? 8 : -8), 8, 7, ex === 0 ? Math.PI : 0, ex === 0 ? Math.PI * 2.4 : Math.PI * 1.4, 10) as Pt[])], color, 2, { name: 'Rules' })
  poly(k, g, [[m, 2], [m + 12, 14], [m, 26], [m - 12, 14]], color, { name: 'Lozenge' })
  return g
}

/** A teardrop flame: the tip at (cx, top), its round belly of radius r about (cx, cy). */
const tear = (cx: number, top: number, cy: number, r: number): Pt[] => [[cx, top], ...arcPoints(cx, cy, r, -Math.PI * 0.12, Math.PI * 1.12, 18)]

// ── Template ────────────────────────────────────────────────────────────────────────────────────────────

export default defineTemplate({
  id: 'game-ui',
  meta: {
    name: 'EMBERFALL — fantasy RPG UI',
    description: 'A playable fantasy RPG front end and HUD in an illuminated-manuscript-on-fire style: lantern boot, burning title, a candle-lit keyboard menu, save-slot memories that load their hero, working settings and key bindings, a HUD whose health, mana and stamina drain with chip trails as a wraith strikes, an Emberbolt with a cooldown sweep, potions, gold, compass and fogged minimap, a satchel with click-to-equip and gliding stats, a skill tree whose lines ink in, a quest log, branching dialogue with a live trust meter, pause, and the embers-dim and crown-reclaimed endings',
    category: 'game-ui', tags: ['game', 'game ui', 'hud', 'rpg', 'fantasy', 'role-playing', 'inventory', 'skill tree', 'dialogue', 'interactive', 'variables', 'keyboard', 'menus', 'present mode'],
    platforms: ['desktop'], formats: ['screen'], useCases: ['launch', 'pitch'],
    created: '2026-09-30', updated: '2026-09-30',
  },
  build() {
    const k = gameKit('EMBERFALL')
    k.brand({
      void: '#0C0706', soot: '#171010', oxblood: '#3A0E0C', blood: '#6E1812', panel: '#1F1512', line: '#5E3E24',
      parchment: '#EAD7AE', parchShade: '#CDB080', sepia: '#2A160B', sepiaSoft: '#5A391C', goldDeep: '#8E5E17',
      gold: '#E6B04A', onGold: '#1C0F03', ember: '#FF7B22', flame: '#FFD27A', wax: '#EBDDC2',
      onVoid: '#F6E8CC', dim: '#C9AE86', health: '#C9312A', mana: '#3F80E2', stamina: '#8FC152', chip: '#FAEBC8',
      wraith: '#9ED9CF', wraithEye: '#EFFFFB', danger: '#E24B30', onDanger: '#180302',
      common: '#A99B82', rare: '#4D96E8', epic: '#B46DE2', legendary: '#F4AA3A',
      scrim: '#080404', fen: '#16233A',
      primary: '#9A2A1D', onPrimary: '#FFF1DE', accent: '#E6B04A', onAccent: '#1C0F03',
    }, { title: 'Emberfall', studio: 'Hollow Lantern Games', tagline: 'Reclaim the crown before the last ember dies.' })

    // ── State ──
    const name = gameVar(k, 'Player', 'name', 'STRING', SAVES[0].name)
    const level = gameVar(k, 'Player', 'level', 'FLOAT', SAVES[0].level)
    const cls = gameVar(k, 'Player', 'calling', 'STRING', SAVES[0].cls)
    const region = gameVar(k, 'Player', 'region', 'STRING', SAVES[0].region)
    const playtime = gameVar(k, 'Player', 'playtime', 'STRING', SAVES[0].time)
    const health = gameVar(k, 'Player', 'health', 'FLOAT', 100)
    const healthLag = gameVar(k, 'Player', 'healthTrail', 'FLOAT', 100)
    const maxHealth = gameVar(k, 'Player', 'maxHealth', 'FLOAT', 100)
    const mana = gameVar(k, 'Player', 'mana', 'FLOAT', 100)
    const manaLag = gameVar(k, 'Player', 'manaTrail', 'FLOAT', 100)
    const maxMana = gameVar(k, 'Player', 'maxMana', 'FLOAT', 100)
    const stamina = gameVar(k, 'Player', 'stamina', 'FLOAT', 100)
    const staminaLag = gameVar(k, 'Player', 'staminaTrail', 'FLOAT', 100)
    const gold = gameVar(k, 'Player', 'gold', 'FLOAT', SAVES[0].gold)
    const potions = gameVar(k, 'Player', 'potions', 'FLOAT', SAVES[0].potions)
    const castAt = gameVar(k, 'Player', 'castAt', 'FLOAT', 0)
    const spellCost = gameVar(k, 'Player', 'spellCost', 'FLOAT', 25)
    const wraith = gameVar(k, 'Foe', 'wraith', 'FLOAT', 160)
    const wraithLag = gameVar(k, 'Foe', 'wraithTrail', 'FLOAT', 160)
    const maxWraith = gameVar(k, 'Foe', 'maxWraith', 'FLOAT', 160)
    const weapon = gameVar(k, 'Gear', 'weapon', 'FLOAT', START_WEAPON)
    const armour = gameVar(k, 'Gear', 'armour', 'FLOAT', START_ARMOUR)
    const weaponAtk = gameVar(k, 'Gear', 'weaponAttack', 'FLOAT', ITEMS[START_WEAPON].stat)
    const armourDef = gameVar(k, 'Gear', 'armourDefence', 'FLOAT', ITEMS[START_ARMOUR].stat)
    const invFocus = gameVar(k, 'Gear', 'selected', 'FLOAT', START_WEAPON)
    const points = gameVar(k, 'Skills', 'embers', 'FLOAT', 3)
    const skillFocus = gameVar(k, 'Skills', 'focus', 'FLOAT', 1)
    const bonusAtk = gameVar(k, 'Skills', 'bonusAttack', 'FLOAT', 0)
    const bonusDef = gameVar(k, 'Skills', 'bonusDefence', 'FLOAT', 0)
    const bonusSpell = gameVar(k, 'Skills', 'bonusSpell', 'FLOAT', 0)
    const strikeCost = gameVar(k, 'Skills', 'strikeCost', 'FLOAT', 20)
    const questTab = gameVar(k, 'Quest', 'tab', 'FLOAT', 0)
    const hasEmber = gameVar(k, 'Quest', 'hasEmber', 'FLOAT', 0)
    const metOriel = gameVar(k, 'Quest', 'metOriel', 'FLOAT', 0)
    const stage = gameVar(k, 'Talk', 'stage', 'FLOAT', 0)
    const trust = gameVar(k, 'Talk', 'trust', 'FLOAT', 40)
    const talkFocus = gameVar(k, 'Talk', 'focus', 'FLOAT', 0)
    const menuFocus = gameVar(k, 'UI', 'menuFocus', 'FLOAT', 0)
    const slotFocus = gameVar(k, 'UI', 'slotFocus', 'FLOAT', 0)
    const pauseFocus = gameVar(k, 'UI', 'pauseFocus', 'FLOAT', 0)
    const endFocus = gameVar(k, 'UI', 'endFocus', 'FLOAT', 0)
    const setFocus = gameVar(k, 'UI', 'settingsFocus', 'FLOAT', 0)
    const rebind = gameVar(k, 'UI', 'rebinding', 'STRING', '')
    const master = gameVar(k, 'Settings', 'masterVolume', 'FLOAT', 80)
    const music = gameVar(k, 'Settings', 'musicVolume', 'FLOAT', 60)
    const voices = gameVar(k, 'Settings', 'voiceVolume', 'FLOAT', 70)
    const textSpeed = gameVar(k, 'Settings', 'textSpeed', 'FLOAT', 3)
    const subs = gameVar(k, 'Settings', 'subtitles', 'FLOAT', 1)
    const embersOn = gameVar(k, 'Settings', 'embers', 'FLOAT', 1)
    const keyStrike = gameVar(k, 'Keys', 'strike', 'STRING', 'F')
    const keySpell = gameVar(k, 'Keys', 'spell', 'STRING', 'M')
    const keyPotion = gameVar(k, 'Keys', 'potion', 'STRING', 'Q')
    const skills = [1, 0, 0, 0, 0, 0, 0].map((v, i) => gameVar(k, 'Skills', `node${i}`, 'FLOAT', v))
    const V: Vars = { maxMana, mana, maxHealth, health, bonusAtk, bonusDef, bonusSpell, strikeCost }

    // ── Type: Source Serif 4 for the manuscript, Inter for the small numerals ──
    const serif = { fontFamily: 'Source Serif 4' }
    k.textStyle('Studio 30', { size: 30, fontWeight: 600, letterSpacing: 12, lineHeight: 40, textCase: 'UPPER', ...serif })
    k.textStyle('Title 150', { size: 150, fontWeight: 900, letterSpacing: 10, lineHeight: 150, textCase: 'UPPER', ...serif })
    k.textStyle('Subtitle 44', { size: 44, fontWeight: 400, letterSpacing: 4, lineHeight: 54, fontStyle: 'italic', ...serif })
    k.textStyle('Tagline 28', { size: 28, fontWeight: 400, lineHeight: 38, fontStyle: 'italic', ...serif })
    k.textStyle('Prompt 24', { size: 24, fontWeight: 600, letterSpacing: 12, lineHeight: 32, textCase: 'UPPER', ...serif })
    k.textStyle('Menu 44', { size: 44, fontWeight: 700, letterSpacing: 6, lineHeight: 52, textCase: 'UPPER', ...serif })
    k.textStyle('Hint 18', { size: 18, fontWeight: 600, letterSpacing: 3, lineHeight: 24, textCase: 'UPPER' })
    k.textStyle('Heading 60', { size: 60, fontWeight: 800, letterSpacing: 10, lineHeight: 68, textCase: 'UPPER', ...serif })
    k.textStyle('Label 26', { size: 26, fontWeight: 600, lineHeight: 34, ...serif })
    k.textStyle('Value 26', { size: 26, fontWeight: 700, lineHeight: 34 })
    k.textStyle('Cap 20', { size: 20, fontWeight: 700, letterSpacing: 2, lineHeight: 26, textAlign: 'CENTER' })
    k.textStyle('Small 18', { size: 18, fontWeight: 600, letterSpacing: 2, lineHeight: 24, textCase: 'UPPER' })
    k.textStyle('Tiny 16', { size: 16, fontWeight: 700, letterSpacing: 2, lineHeight: 20, textCase: 'UPPER' })
    k.textStyle('Body 24', { size: 24, fontWeight: 400, lineHeight: 36, ...serif })
    k.textStyle('Lore 24', { size: 24, fontWeight: 400, lineHeight: 34, fontStyle: 'italic', ...serif })
    k.textStyle('Numeral 40', { size: 40, fontWeight: 800, lineHeight: 48 })
    k.textStyle('Stat 64', { size: 64, fontWeight: 800, lineHeight: 72 })
    k.textStyle('Dialogue 32', { size: 32, fontWeight: 400, lineHeight: 46, ...serif })
    k.textStyle('Speaker 34', { size: 34, fontWeight: 700, letterSpacing: 8, lineHeight: 42, textCase: 'UPPER', ...serif })
    k.textStyle('Choice 26', { size: 26, fontWeight: 500, lineHeight: 34, ...serif })
    k.textStyle('Item 38', { size: 38, fontWeight: 700, lineHeight: 44, ...serif })
    k.textStyle('Banner 110', { size: 110, fontWeight: 800, letterSpacing: 4, lineHeight: 118, fontStyle: 'italic', textAlign: 'CENTER', ...serif })
    k.textStyle('Credit role 18', { size: 18, fontWeight: 600, letterSpacing: 5, lineHeight: 24, textCase: 'UPPER', textAlign: 'CENTER' })
    k.textStyle('Credit name 34', { size: 34, fontWeight: 600, lineHeight: 42, textAlign: 'CENTER', ...serif })

    // ── Art helpers bound to this kit ──
    /** A sheet of parchment: deckled vector edges, an aged rim, a filigree rule inside, lozenges at the corners. */
    const parchment = (parent: string, x: number, y: number, w: number, h: number, o: { name?: string; seed?: number; burn?: string } = {}) => {
      const b = box(k, parent, x, y, w, h, { name: o.name ?? 'Parchment' })
      const edge = deckle(w, h, 20, 5, o.seed ?? (x * 7 + y * 13 + w))
      poly(k, b, edge, 'parchment', { name: 'Sheet', effects: [glow(k, 'scrim', 36, 0.85)] })
      poly(k, b, edge, [k.gradient({ from: 'parchShade', to: 'parchShade', kind: 'RADIAL', fromOpacity: 0, toOpacity: 0.75, handles: [{ x: 0.5, y: 0.5 }, { x: 1.05, y: 0.5 }, { x: 0.5, y: 1.1 }] })], { name: 'Aged rim' })
      const c = 30, i = 14
      poly(k, b, [[i + c, i], [w - i - c, i], [w - i, i + c], [w - i, h - i - c], [w - i - c, h - i], [i + c, h - i], [i, h - i - c], [i, i + c]], 'goldDeep', { name: 'Filigree', stroke: 2, closed: true })
      for (const [cx, cy] of [[i + 8, i + 8], [w - i - 8, i + 8], [w - i - 8, h - i - 8], [i + 8, h - i - 8]] as const) poly(k, b, [[cx, cy - 8], [cx + 8, cy], [cx, cy + 8], [cx - 8, cy]], 'goldDeep', { name: 'Corner lozenge' })
      if (o.burn) {
        // The legendary burn: the deckled edge smoulders, flickering on noise, shown while `burn` holds.
        const burn = poly(k, b, edge, 'ember', { name: 'Burning edge', stroke: 6, closed: true, effects: [glow(k, 'ember', 36)] })
        k.behave(burn, 'opacity', [{ kind: 'noise', amp: 0.35, freq: 3, seed: 5 }])
        k.bindExpression(burn, 'visible', o.burn)
        const char = poly(k, b, edge, 'soot', { name: 'Char', stroke: 12, closed: true, opacity: 0.75 })
        k.bindExpression(char, 'visible', o.burn)
      }
      return b
    }
    /** A candle: wax, a wick, a flame that flickers on noise, a halo. Returns the group and the flame's wrapper. */
    const candle = (parent: string, x: number, y: number, o: { h: number; wax?: string; name?: string; seed?: number; halo?: number }) => {
      const g = box(k, parent, x, y, 60, 70 + o.h, { name: o.name ?? 'Candle' })
      const halo = k.ellipse(g, o.halo ?? 200, [k.gradient({ from: 'flame', to: 'ember', kind: 'RADIAL', fromOpacity: 0.55, toOpacity: 0, handles: [{ x: 0.5, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }] })], { name: 'Halo', absolute: { x: 30 - (o.halo ?? 200) / 2, y: 40 - (o.halo ?? 200) / 2 } })
      k.behave(halo, 'opacity', [{ kind: 'noise', amp: 0.25, freq: 2.2, seed: (o.seed ?? 1) + 11 }])
      const wrap = box(k, g, 0, 0, 60, 66, { name: 'Flame' })
      const outer = poly(k, wrap, tear(30, 2, 44, 16), 'ember', { name: 'Flame outer', effects: [glow(k, 'ember', 26)] })
      poly(k, wrap, tear(30, 22, 48, 9), 'flame', { name: 'Flame core' })
      k.patch(wrap, { anchorX: 0.5, anchorY: 1 } as never)
      k.patch(outer, { anchorX: 0.5, anchorY: 1 } as never)
      k.behave(outer, 'scaleY', [{ kind: 'noise', amp: 0.16, freq: 3.2, seed: o.seed ?? 1 }])
      k.behave(outer, 'scaleX', [{ kind: 'noise', amp: 0.07, freq: 4.1, seed: (o.seed ?? 1) + 3 }])
      k.rect(g, 3, 10, 'soot', { name: 'Wick', absolute: { x: 28.5, y: 60 } })
      k.rect(g, 36, o.h, o.wax ?? 'wax', { name: 'Wax', radius: 4, absolute: { x: 12, y: 68 } })
      poly(k, g, [[12, 68], [48, 68], [48, 92], [43, 92], [41, 78], [36, 80], [34, 104], [29, 104], [27, 80], [20, 82], [18, 96], [12, 96]], o.wax ?? 'wax', { name: 'Drips' })
      return { g, flame: wrap }
    }
    /** Embers rising for ever: small glowing motes on a wrap-around climb, swaying and flickering (Settings can turn them off). */
    const embers = (parent: string, count: number, area: { x: number; y: number; w: number; h: number }, seed: number) => {
      const g = box(k, parent, area.x, area.y, area.w, area.h, { name: 'Ember motes' })
      const r = rng(seed)
      for (let i = 0; i < count; i++) {
        const s = 3 + Math.round(r() * 6)
        const m = k.ellipse(g, s, r() > 0.4 ? 'ember' : 'flame', { name: 'Mote', absolute: { x: Math.round(r() * (area.w - 10)), y: area.h - 10 }, effects: [glow(k, 'ember', 10 + s, 0.9)] })
        const climb = area.h - 20
        k.behave(m, 'translateY', [{ kind: 'spin', rate: -(26 + r() * 50) }, { kind: 'mod', period: climb, offset: -climb + Math.round(r() * climb * 0.9) }])
        k.behave(m, 'translateX', [{ kind: 'sine', amp: 10 + r() * 22, freq: 0.15 + r() * 0.3, phase: r() }])
        k.behave(m, 'opacity', [{ kind: 'sine', amp: 0.35, freq: 0.4 + r() * 1.2, phase: r() }])
      }
      k.bindExpression(g, 'visible', `${embersOn.n} == 1`)
      return g
    }
    /** A burning horizon: the glow, a ridge of soot hills, flames licking along it. */
    const horizon = (parent: string, y: number, seed: number, glowH = 320) => {
      k.rect(parent, W, H - y + glowH, [k.gradient({ from: 'ember', to: 'oxblood', angle: 270, fromOpacity: 0.85, toOpacity: 0 })], { name: 'Fire glow', absolute: { x: 0, y: y - glowH } })
      const r = rng(seed)
      const ridge: Pt[] = [[0, H]]
      for (let x = 0; x <= W; x += 60) ridge.push([x, y + 30 + Math.round(r() * 60 - (Math.sin(x / 300) * 30))])
      ridge.push([W, H])
      const top = 200, g = box(k, parent, 0, y - top, W, H - y + top, { name: 'Burning ridge' })
      // Tongues of fire standing behind the ridge: tall, thin, each licking on its own noise; a darker rank behind.
      for (const [rank, count, color, tall] of [[0, 18, 'blood', 1.25], [1, 24, 'ember', 1], [2, 16, 'flame', 0.6]] as const) {
        for (let i = 0; i < count; i++) {
          const fx = Math.round((i + r() * 0.8) * (W / count)), base = top + 75, rr = 10 + r() * (rank === 2 ? 8 : 16)
          const f = poly(k, g, tear(fx, base - (70 + r() * 110) * tall, base, rr), color, { name: 'Horizon flame', opacity: rank === 0 ? 0.9 : 0.95, effects: rank === 1 ? [glow(k, 'ember', 24)] : undefined })
          k.patch(f, { anchorX: 0.5, anchorY: 1 } as never)
          k.behave(f, 'scaleY', [{ kind: 'noise', amp: 0.28, freq: 1.2 + r() * 1.5, seed: seed + rank * 40 + i }])
          k.behave(f, 'scaleX', [{ kind: 'noise', amp: 0.12, freq: 1.8 + r(), seed: seed + rank * 40 + i + 17 }])
        }
      }
      poly(k, g, ridge.map(([x, yy]) => [x, yy - (y - top)] as Pt), 'soot', { name: 'Ridge' })
    }
    const hintBar = (id: string, text: string) => {
      const b = box(k, id, 0, H - 64, W, 64, { name: 'Hint bar', fill: k.tint('scrim', 0.88), direction: 'HORIZONTAL', align: 'CENTER', padding: { top: 0, right: 64, bottom: 0, left: 64 } })
      k.text(b, text, { style: 'Hint 18', color: 'dim', autoWidth: true, name: 'Hints' })
    }
    const heading = (id: string, text: string, x = 120, y = 70) => {
      label(k, id, text, 'Heading 60', 'onVoid', x, y, { name: 'Screen title' })
      lines(k, id, [[[x, y + 82], [x + 180, y + 82]]], 'gold', 3, { name: 'Title rule' })
      poly(k, id, [[x + 190, y + 76], [x + 196, y + 82], [x + 190, y + 88], [x + 184, y + 82]], 'gold', { name: 'Title lozenge' })
    }
    /** A hero's portrait medallion: an oval of gold and oxblood, a bust (hood, helm or braid). */
    const portrait = (parent: string, x: number, y: number, size: number, look: number, nameIt = 'Portrait') => {
      const g = box(k, parent, x, y, size, size * 1.2, { name: nameIt })
      const s = size / 100
      k.rect(g, size, size * 1.2, 'oxblood', { name: 'Oval', radius: size / 2, stroke: { color: 'gold', width: 4 }, absolute: { x: 0, y: 0 } })
      const P = (pts: Pt[]) => pts.map(([px, py]) => [px * s, py * s] as Pt)
      const bust: Pt[][] = [
        [[50, 22], [70, 34], [76, 62], [68, 78], [92, 100], [100, 120], [0, 120], [8, 100], [32, 78], [24, 62], [30, 34]],
        [[50, 24], [72, 36], [74, 66], [64, 80], [92, 98], [100, 120], [0, 120], [8, 98], [36, 80], [26, 66], [28, 36], [50, 14], [56, 26]],
        [[50, 26], [68, 34], [72, 60], [80, 96], [96, 104], [100, 120], [0, 120], [4, 104], [20, 96], [28, 60], [32, 34]],
      ]
      poly(k, g, P(bust[look % 3]), 'parchShade', { name: 'Bust' })
      poly(k, g, P(look % 3 === 1 ? [[34, 50], [66, 50], [64, 56], [36, 56]] : [[40, 44], [60, 44], [64, 62], [50, 72], [36, 62]]), look % 3 === 1 ? 'ember' : 'soot', { name: 'Face shadow', effects: look % 3 === 1 ? [glow(k, 'ember', 10)] : undefined })
      return g
    }
    /** An item's icon in a 100 × 100 box at (x, y), scaled by s. */
    const icon = (parent: string, kind: Item['kind'], x: number, y: number, s: number, color: string, nameIt = 'Icon') => {
      const g = box(k, parent, x, y, 100 * s, 100 * s, { name: nameIt })
      const P = (pts: Pt[]) => pts.map(([px, py]) => [px * s, py * s] as Pt)
      const shapes: Record<Item['kind'], Pt[][]> = {
        sword: [[[70, 8], [78, 16], [36, 62], [28, 56]], [[18, 58], [42, 82], [36, 88], [12, 64]], [[24, 70], [30, 76], [16, 92], [10, 86]]],
        pike: [[[80, 4], [92, 16], [80, 26], [72, 22], [70, 14]], [[74, 20], [80, 26], [14, 92], [8, 86]]],
        dagger: [[[62, 22], [70, 30], [44, 62], [38, 56]], [[30, 54], [46, 70], [40, 76], [24, 60]], [[32, 66], [38, 72], [24, 86], [18, 80]]],
        mail: [[[26, 14], [42, 20], [58, 20], [74, 14], [90, 30], [80, 44], [76, 40], [76, 90], [24, 90], [24, 40], [20, 44], [10, 30]]],
        coat: [[[30, 10], [50, 22], [70, 10], [86, 24], [80, 96], [56, 96], [50, 40], [44, 96], [20, 96], [14, 24]]],
        cloak: [[[50, 6], [66, 18], [70, 34], [90, 94], [10, 94], [30, 34], [34, 18]]],
        mantle: [[[50, 20], [84, 30], [94, 58], [74, 50], [66, 84], [34, 84], [26, 50], [6, 58], [16, 30]]],
        flask: [[[42, 8], [58, 8], [58, 32], [80, 54], [80, 76], [66, 92], [34, 92], [20, 76], [20, 54], [42, 32]]],
        ember: [[[50, 6], [80, 42], [50, 94], [20, 42]]],
        map: [[[14, 22], [86, 22], [86, 78], [14, 78]]],
        key: [[[14, 34], [38, 34], [38, 58], [14, 58]], [[38, 42], [92, 42], [92, 50], [38, 50]], [[70, 50], [78, 50], [78, 66], [70, 66]], [[82, 50], [90, 50], [90, 62], [82, 62]]],
      }
      shapes[kind].forEach((pts, i) => poly(k, g, P(pts), color, { name: i ? 'Icon part' : 'Icon body', effects: kind === 'ember' ? [glow(k, 'ember', 18)] : undefined }))
      if (kind === 'map') lines(k, g, [P([[26, 38], [46, 50], [60, 36], [76, 58]]), P([[22, 64], [40, 60]])], 'soot', 3 * s, { name: 'Roads' })
      if (kind === 'flask') poly(k, g, P([[24, 60], [76, 60], [76, 76], [64, 88], [36, 88], [24, 76]]), 'health', { name: 'Heartsblood' })
      if (kind === 'ember') poly(k, g, P([[50, 30], [64, 46], [50, 74], [36, 46]]), 'flame', { name: 'Ember core' })
      return g
    }

    // ── Components ──
    k.variantSet('Seal button', 'State', ['Idle', 'Hover', 'Pressed'], { direction: 'HORIZONTAL', width: 'HUG', gap: 14, align: 'CENTER', padding: { top: 14, right: 30, bottom: 14, left: 30 }, radius: 4, props: { Label: 'Back' }, description: 'A gilt-edged manuscript button: hover gilds it, pressing kindles it.' },
      (state, id) => {
        k.propText(id, 'Label', { style: 'Hint 18', color: state === 'Idle' ? 'onVoid' : 'onGold', autoWidth: true })
      }, state => ({ fill: state === 'Idle' ? k.tint('panel', 0.94) : state === 'Hover' ? 'gold' : 'ember', stroke: { color: 'gold', width: 2, align: 'INSIDE' } }))
    k.changeTo('Seal button/Idle', 'ON_HOVER', 'Seal button/Hover', 120)
    k.changeTo('Seal button/Hover', 'ON_PRESS', 'Seal button/Pressed', 60)
    toggleComponent(k, { track: 'line', on: 'gold', knob: 'onVoid', stateStyle: 'Small 18', ink: 'onVoid' })

    // The wound: the screen bleeds at its edges, replayed on every blow.
    oneShot(k, 'Wound flash', { width: W, height: H, duration: 520, description: 'Full-screen wound: change to Hit on every blow taken.' }, (state, id) => {
      const f = k.rect(id, W, H, [k.gradient({ from: 'health', to: 'blood', kind: 'RADIAL', fromOpacity: 0, toOpacity: 0.9, handles: [{ x: 0.5, y: 0.5 }, { x: 1.05, y: 0.5 }, { x: 0.5, y: 1.1 }] })], { name: 'Flash', absolute: { x: 0, y: 0 }, opacity: 0 })
      if (state === 'Hit') keys(k, f, 'opacity', [{ t: 0, v: 1, ease: { kind: 'ease', name: 'expo-out' } }, { t: 500, v: 0 }])
    })

    // The Hollow Bellringer: Idle hovers (on its instance), Strike lunges at you, Hurt recoils and flashes white.
    k.variantSet('Wraith', 'State', ['Idle', 'Strike', 'Hurt'], { width: 400, height: 470, description: 'The Hollow Bellringer: change to Strike when it hits you, Hurt when you hit it (each replays).' }, (state, id) => {
      const body = box(k, id, 0, 0, 400, 470, { name: 'Wraith body' })
      const robe: Pt[] = [[200, 20], [262, 44], [292, 112], [302, 190], [340, 262], [362, 342], [384, 424], [352, 404], [332, 452], [302, 408], [272, 462], [242, 414], [200, 458], [164, 412], [130, 462], [100, 404], [70, 450], [46, 400], [18, 424], [40, 342], [60, 262], [98, 190], [108, 112], [138, 44]]
      k.ellipse(body, 380, [k.gradient({ from: 'wraith', to: 'wraith', kind: 'RADIAL', fromOpacity: 0.28, toOpacity: 0, handles: [{ x: 0.5, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }] })], { name: 'Wraith aura', absolute: { x: 10, y: 40 } })
      poly(k, body, robe, k.tint('wraith', 0.5), { name: 'Robe', effects: [glow(k, 'wraith', 36, 0.7)] })
      poly(k, body, robe, 'wraith', { name: 'Robe edge', stroke: 2, closed: true, opacity: 0.8 })
      poly(k, body, [[104, 206], [36, 262], [14, 300], [44, 292], [64, 306], [124, 252]], k.tint('wraith', 0.6), { name: 'Arm reaching' })
      poly(k, body, [[296, 206], [352, 250], [376, 236], [372, 270], [288, 262]], k.tint('wraith', 0.6), { name: 'Arm holding' })
      poly(k, body, [[364, 236], [396, 300], [336, 300]], 'goldDeep', { name: 'Hand bell', effects: [glow(k, 'gold', 12, 0.6)] })
      k.ellipse(body, 12, 'gold', { name: 'Bell clapper', absolute: { x: 360, y: 298 } })
      poly(k, body, [[200, 62], [242, 84], [252, 142], [226, 188], [174, 188], [148, 142], [158, 84]], 'void', { name: 'Hood hollow' })
      const eyes = [k.ellipse(body, 16, 'wraithEye', { name: 'Eye', absolute: { x: 172, y: 118 }, effects: [glow(k, 'wraith', 18)] }), k.ellipse(body, 16, 'wraithEye', { name: 'Eye', absolute: { x: 212, y: 118 }, effects: [glow(k, 'wraith', 18)] })]
      const hurt = poly(k, body, robe, 'chip', { name: 'Hurt glow', opacity: 0 })
      if (state === 'Strike') {
        keys(k, body, 'scaleX', [{ t: 0, v: 1, ease: { kind: 'ease', name: 'expo-out' } }, { t: 180, v: 1.34, ease: { kind: 'ease', name: 'cubic-in-out' } }, { t: 660, v: 1 }])
        keys(k, body, 'scaleY', [{ t: 0, v: 1, ease: { kind: 'ease', name: 'expo-out' } }, { t: 180, v: 1.34, ease: { kind: 'ease', name: 'cubic-in-out' } }, { t: 660, v: 1 }])
        keys(k, body, 'translateY', [{ t: 0, v: 0, ease: { kind: 'ease', name: 'expo-out' } }, { t: 180, v: 70, ease: { kind: 'ease', name: 'cubic-in-out' } }, { t: 660, v: 0 }])
        for (const e of eyes) { keys(k, e, 'scaleX', [{ t: 0, v: 1 }, { t: 120, v: 1.8 }, { t: 600, v: 1 }]); keys(k, e, 'scaleY', [{ t: 0, v: 1 }, { t: 120, v: 1.8 }, { t: 600, v: 1 }]) }
      }
      if (state === 'Hurt') {
        keys(k, body, 'translateX', [{ t: 0, v: 0 }, { t: 60, v: -22 }, { t: 140, v: 16 }, { t: 220, v: -9 }, { t: 300, v: 4 }, { t: 400, v: 0 }])
        keys(k, hurt, 'opacity', [{ t: 0, v: 0.85, ease: { kind: 'ease', name: 'cubic-out' } }, { t: 420, v: 0 }])
      }
    }, state => (state === 'Idle' ? {} : { timeline: { duration: state === 'Strike' ? 700 : 450 } }))

    // The Emberbolt: an orb flies from your hand to the wraith and bursts.
    oneShot(k, 'Emberbolt', { width: W, height: H, state: 'Cast', duration: 900, description: 'The Emberbolt spell: change to Cast when it is cast.' }, (state, id) => {
      const orb = k.ellipse(id, 64, 'flame', { name: 'Orb', absolute: { x: 928, y: 930 }, opacity: 0, effects: [glow(k, 'ember', 48)] })
      const trail = k.ellipse(id, 40, 'ember', { name: 'Orb trail', absolute: { x: 940, y: 960 }, opacity: 0, effects: [glow(k, 'ember', 30)] })
      const burst = k.ellipse(id, 260, [], { name: 'Burst', stroke: { color: 'flame', width: 8 }, absolute: { x: 830, y: 330 }, opacity: 0, effects: [glow(k, 'ember', 40)] })
      if (state === 'Cast') {
        keys(k, orb, 'opacity', [{ t: 0, v: 1, ease: { kind: 'hold' } }, { t: 420, v: 1, ease: { kind: 'linear' } }, { t: 460, v: 0 }])
        keys(k, orb, 'translateY', [{ t: 0, v: 0, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 420, v: -530 }])
        keys(k, trail, 'opacity', [{ t: 0, v: 0.8, ease: { kind: 'hold' } }, { t: 440, v: 0.8, ease: { kind: 'linear' } }, { t: 480, v: 0 }])
        keys(k, trail, 'translateY', [{ t: 0, v: 0, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 460, v: -520 }])
        keys(k, burst, 'opacity', [{ t: 0, v: 0, ease: { kind: 'hold' } }, { t: 420, v: 1, ease: { kind: 'ease', name: 'cubic-out' } }, { t: 880, v: 0 }])
        keys(k, burst, 'scaleX', [{ t: 0, v: 0.2, ease: { kind: 'hold' } }, { t: 420, v: 0.2, ease: { kind: 'ease', name: 'expo-out' } }, { t: 880, v: 1.6 }])
        keys(k, burst, 'scaleY', [{ t: 0, v: 0.2, ease: { kind: 'hold' } }, { t: 420, v: 0.2, ease: { kind: 'ease', name: 'expo-out' } }, { t: 880, v: 1.6 }])
      }
    })

    // The spell slot's cooldown: twelve wedges of shadow that clear one by one, round the clock, then a ready flare.
    const COOLDOWN = 3000
    oneShot(k, 'Spell slot', { width: 124, height: 124, state: 'Cooldown', duration: COOLDOWN + 300, description: 'The Emberbolt slot: change to Cooldown on a cast; the shadow sweeps away over the cooldown.' }, (state, id) => {
      k.rect(id, 124, 124, 'panel', { name: 'Slot', radius: 12, stroke: { color: 'gold', width: 2 }, absolute: { x: 0, y: 0 } })
      poly(k, id, tear(62, 18, 72, 26), 'ember', { name: 'Bolt flame', effects: [glow(k, 'ember', 22)] })
      rune(k, id, 50, 52, 36, 5, 'flame', { width: 4, name: 'Bolt rune' })
      for (let i = 0; i < 12; i++) {
        const a0 = -Math.PI / 2 + (i * Math.PI) / 6, a1 = a0 + Math.PI / 6 + 0.01
        const w = sector(k, id, 62, 62, 60, 0, a0, a1, 'scrim', { name: 'Shadow wedge', opacity: 0 })
        if (state === 'Cooldown') keys(k, w, 'opacity', [{ t: 0, v: 0.8, ease: { kind: 'hold' } }, { t: (COOLDOWN * (i + 1)) / 12, v: 0 }])
      }
      const ready = k.rect(id, 124, 124, [], { name: 'Ready flare', radius: 12, stroke: { color: 'flame', width: 5 }, absolute: { x: 0, y: 0 }, opacity: 0, effects: [glow(k, 'ember', 24)] })
      if (state === 'Cooldown') keys(k, ready, 'opacity', [{ t: 0, v: 0, ease: { kind: 'hold' } }, { t: COOLDOWN - 40, v: 0, ease: { kind: 'ease', name: 'cubic-out' } }, { t: COOLDOWN + 40, v: 1, ease: { kind: 'ease', name: 'cubic-in' } }, { t: COOLDOWN + 300, v: 0 }])
    })

    // A potion: the flask pops and "+35" rises from it.
    oneShot(k, 'Heal bloom', { width: 220, height: 260, state: 'Pop', duration: 1100, description: 'A potion drunk: the flask pops and the health it gave rises away.' }, (state, id) => {
      if (state !== 'Pop') return
      const ring = k.ellipse(id, 150, [], { name: 'Bloom ring', stroke: { color: 'health', width: 6 }, absolute: { x: 35, y: 90 }, effects: [glow(k, 'health', 24)] })
      const words = box(k, id, 20, 40, 180, 56, { name: 'Heal words', fill: 'health', radius: 28, align: 'CENTER', justify: 'CENTER' })
      k.text(words, '+35 HEALTH', { style: 'Cap 20', color: 'onVoid', autoWidth: true, name: 'Heal amount' })
      keys(k, ring, 'opacity', [{ t: 0, v: 1, ease: { kind: 'ease', name: 'cubic-out' } }, { t: 600, v: 0 }])
      keys(k, ring, 'scaleX', [{ t: 0, v: 0.3, ease: { kind: 'ease', name: 'back-out', param: 2 } }, { t: 500, v: 1.3 }])
      keys(k, ring, 'scaleY', [{ t: 0, v: 0.3, ease: { kind: 'ease', name: 'back-out', param: 2 } }, { t: 500, v: 1.3 }])
      keys(k, words, 'opacity', [{ t: 0, v: 0, ease: { kind: 'ease', name: 'back-out', param: 2 } }, { t: 160, v: 1, ease: { kind: 'hold' } }, { t: 800, v: 1, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 1080, v: 0 }])
      keys(k, words, 'scaleX', [{ t: 0, v: 0.5, ease: { kind: 'ease', name: 'back-out', param: 2.4 } }, { t: 260, v: 1 }])
      keys(k, words, 'scaleY', [{ t: 0, v: 0.5, ease: { kind: 'ease', name: 'back-out', param: 2.4 } }, { t: 260, v: 1 }])
      keys(k, words, 'translateY', [{ t: 300, v: 0, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 1080, v: -60 }])
    })

    // Loot: coins leap and "+35 GOLD" floats up.
    oneShot(k, 'Coin pop', { width: 300, height: 120, state: 'Loot', duration: 1200, description: 'Gold looted: coins leap and the amount floats away.' }, (state, id) => {
      if (state !== 'Loot') return
      const words = box(k, id, 40, 50, 220, 52, { name: 'Loot words', fill: 'gold', radius: 26, align: 'CENTER', justify: 'CENTER' })
      k.text(words, '+35 GOLD', { style: 'Cap 20', color: 'onGold', autoWidth: true, name: 'Loot amount' })
      keys(k, words, 'opacity', [{ t: 0, v: 0, ease: { kind: 'ease', name: 'cubic-out' } }, { t: 140, v: 1, ease: { kind: 'hold' } }, { t: 900, v: 1, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 1180, v: 0 }])
      keys(k, words, 'translateY', [{ t: 0, v: 30, ease: { kind: 'ease', name: 'back-out', param: 2 } }, { t: 320, v: 0, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 1180, v: -50 }])
      ;[[30, 0.1], [140, 0.0], [250, 0.2]].forEach(([x, d], i) => {
        const c = k.ellipse(id, 22, 'gold', { name: 'Coin', stroke: { color: 'goldDeep', width: 3 }, absolute: { x, y: 80 }, effects: [glow(k, 'gold', 10)] })
        const t0 = d * 1000
        keys(k, c, 'translateY', [{ t: t0, v: 0, ease: { kind: 'ease', name: 'cubic-out' } }, { t: t0 + 260, v: -70 - i * 14, ease: { kind: 'ease', name: 'cubic-in' } }, { t: t0 + 560, v: 0 }])
        keys(k, c, 'opacity', [{ t: 0, v: 1, ease: { kind: 'hold' } }, { t: 900, v: 1, ease: { kind: 'linear' } }, { t: 1100, v: 0 }])
      })
    })

    // ── Screens ──
    const boot = screen(k, 'Boot', { ground: 'void', first: true, duration: 3800 })
    const title = screen(k, 'Title', { ground: 'void' })
    const main = screen(k, 'Main menu', { ground: 'void' })
    const slots = screen(k, 'Save slots', { ground: 'soot' })
    const settings = screen(k, 'Settings', { ground: 'soot' })
    const credits = screen(k, 'Credits', { ground: 'void', duration: 14000 })
    const hud = screen(k, 'World HUD', { ground: 'void' })
    const inventory = screen(k, 'Inventory', { ground: 'soot' })
    const tree = screen(k, 'Skill tree', { ground: 'void' })
    const quests = screen(k, 'Quest log', { ground: 'soot' })
    const talk = screen(k, 'Dialogue', { ground: 'void' })
    const pause = screen(k, 'Pause', { ground: 'void', fills: k.tint('scrim', 0.8) })
    const over = screen(k, 'Game over', { ground: 'void', duration: 5000 })
    const victory = screen(k, 'Victory', { ground: 'oxblood' })
    k.flowStart(boot, 'Play EMBERFALL')

    const freshFight: PrototypeAction[] = [
      set(health.id, { expression: maxHealth.n }), set(healthLag.id, { expression: maxHealth.n }),
      set(mana.id, { expression: maxMana.n }), set(manaLag.id, { expression: maxMana.n }),
      set(stamina.id, { value: 100 }), set(staminaLag.id, { value: 100 }),
      set(wraith.id, { expression: maxWraith.n }), set(wraithLag.id, { expression: maxWraith.n }), set(castAt.id, { value: 0 }),
    ]
    const loadSave = (i: number): PrototypeAction[] => [
      set(name.id, { value: SAVES[i].name }), set(level.id, { value: SAVES[i].level }), set(cls.id, { value: SAVES[i].cls }),
      set(region.id, { value: SAVES[i].region }), set(playtime.id, { value: SAVES[i].time }),
      set(gold.id, { value: SAVES[i].gold }), set(potions.id, { value: SAVES[i].potions }), set(slotFocus.id, { value: i }), ...freshFight,
    ]
    const newJourney: PrototypeAction[] = [
      set(name.id, { value: 'Wren of the Ashes' }), set(level.id, { value: 1 }), set(cls.id, { value: 'Unkindled' }), set(region.id, { value: 'The Cinder Marches' }), set(playtime.id, { value: '0h 00m' }),
      set(gold.id, { value: 0 }), set(potions.id, { value: 3 }), set(maxHealth.id, { value: 100 }), set(maxMana.id, { value: 100 }),
      set(weapon.id, { value: START_WEAPON }), set(armour.id, { value: START_ARMOUR }), set(weaponAtk.id, { value: ITEMS[START_WEAPON].stat }), set(armourDef.id, { value: ITEMS[START_ARMOUR].stat }),
      set(points.id, { value: 3 }), ...skills.slice(1).map(s => set(s.id, { value: 0 })), set(bonusAtk.id, { value: 0 }), set(bonusDef.id, { value: 0 }), set(bonusSpell.id, { value: 0 }), set(strikeCost.id, { value: 20 }),
      set(hasEmber.id, { value: 0 }), set(metOriel.id, { value: 0 }), set(stage.id, { value: 0 }), set(trust.id, { value: 40 }), ...freshFight,
    ]
    const toWorld = go(hud, 'DISSOLVE', { duration: 700 })

    // Boot: the studio's lantern — its logo glowing inside the glass — and the studio's name.
    {
      k.rect(boot, W, H, [k.gradient({ from: 'oxblood', to: 'void', kind: 'RADIAL', fromOpacity: 0.9, toOpacity: 0, handles: [{ x: 0.5, y: 0.4 }, { x: 1, y: 0.4 }, { x: 0.5, y: 1 }] })], { name: 'Lantern light', absolute: { x: 0, y: 0 } })
      const lamp = box(k, boot, 810, 150, 300, 420, { name: 'Lantern sigil' })
      const glowDisc = k.ellipse(lamp, 300, [k.gradient({ from: 'flame', to: 'ember', kind: 'RADIAL', fromOpacity: 0.55, toOpacity: 0, handles: [{ x: 0.5, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }] })], { name: 'Glass glow', absolute: { x: 0, y: 100 } })
      k.behave(glowDisc, 'opacity', [{ kind: 'noise', amp: 0.3, freq: 2.5, seed: 4 }])
      k.ellipse(lamp, 60, [], { name: 'Ring', stroke: { color: 'gold', width: 6 }, absolute: { x: 120, y: 0 } })
      poly(k, lamp, [[110, 60], [190, 60], [230, 110], [70, 110]], 'goldDeep', { name: 'Cap' })
      poly(k, lamp, [[80, 110], [220, 110], [240, 330], [60, 330]], k.tint('ember', 0.18), { name: 'Glass' })
      lines(k, lamp, [[[80, 110], [60, 330]], [[220, 110], [240, 330]], [[150, 110], [150, 150]], [[150, 300], [150, 330]], [[70, 220], [230, 220]]], 'gold', 5, { name: 'Frame' })
      poly(k, lamp, [[50, 330], [250, 330], [226, 372], [74, 372]], 'goldDeep', { name: 'Base' })
      k.logo(lamp, 110, 110, { absolute: { x: 95, y: 165 } })
      for (const [x, i] of [[640, 0], [1230, 3]] as const) rune(k, boot, x, 330, 60, i, 'gold', { width: 4, name: 'Sigil rune', opacity: 0.8 })
      label(k, boot, '{{brand.studio}}', 'Studio 30', 'onVoid', 360, 640, { w: 1200, align: 'CENTER', name: 'Studio' })
      flourish(k, boot, 960, 720, 420, 'gold', 'Studio flourish')
      label(k, boot, 'presents a tale in ash and gold', 'Tagline 28', 'dim', 360, 760, { w: 1200, align: 'CENTER', name: 'Presents' })
      embers(boot, 18, { x: 700, y: 200, w: 520, h: 600 }, 3)
      k.cues(boot, [
        { layer: 'Lantern sigil', preset: 'scale-in', at: 0 },
        { layer: 'Studio', preset: 'letters-in', at: 500 },
        { layer: 'Studio flourish', preset: 'wipe-in', at: 1200 },
        { layer: 'Presents', preset: 'fade-in', at: 1600 },
      ])
      k.link(boot, title, 'DISSOLVE', { trigger: 'AFTER_TIMEOUT', delay: 3600, duration: 800 })
      k.link(boot, title, 'DISSOLVE', { key: '*', duration: 500 })
      k.link(boot, title, 'DISSOLVE', { duration: 500 })
    }

    // Title: the ashen crown over a burning horizon, embers rising, the prompt breathing.
    {
      shaderLayer(k, title, 'Mesh gradient', { speed: 0.25, spread: 0.5, colorA: k.color('ember'), colorB: k.color('blood'), colorC: k.color('oxblood'), base: k.color('void') }, { name: 'Smoke sky', y: 720, h: 360, opacity: 0.8 })
      k.rect(title, W, 720, 'void', { name: 'Night', absolute: { x: 0, y: 0 } })
      k.rect(title, W, 220, [k.gradient({ from: 'void', to: 'void', angle: 90, fromOpacity: 1, toOpacity: 0 })], { name: 'Smoke fade', absolute: { x: 0, y: 718 } })
      horizon(title, 860, 21, 200)
      const crown = box(k, title, 660, 70, 600, 260, { name: 'Ashen crown' })
      const cpts: Pt[] = [[40, 250], [40, 110], [110, 170], [170, 60], [240, 150], [300, 10], [360, 150], [430, 60], [490, 170], [560, 110], [560, 250]]
      poly(k, crown, cpts, 'soot', { name: 'Crown', effects: [glow(k, 'ember', 50, 0.8)] })
      poly(k, crown, cpts, 'ember', { name: 'Crown rim', stroke: 3, closed: true, effects: [glow(k, 'ember', 14)] })
      poly(k, crown, [[40, 206], [560, 206], [560, 222], [40, 222]], 'goldDeep', { name: 'Crown band' })
      lines(k, crown, [[[300, 40], [284, 110], [312, 150], [290, 220]]], 'flame', 3, { name: 'Crack of fire', effects: [glow(k, 'ember', 12)] })
      for (const [x, y] of [[170, 52], [300, 2], [430, 52]] as const) k.ellipse(crown, 18, 'ember', { name: 'Crown point', absolute: { x: x - 9, y: y - 9 }, effects: [glow(k, 'ember', 16)] })
      drift(k, crown, 'translateY', 6, 0.2)
      const lock = k.stack(title, { name: 'Title lockup', width: 1500, gap: 6, align: 'CENTER', absolute: { x: 210, y: 350 } })
      k.text(lock, '{{brand.title}}', { style: 'Title 150', color: 'onVoid', align: 'CENTER', name: 'Title' })
      k.text(lock, 'The Ashen Crown', { style: 'Subtitle 44', color: 'gold', align: 'CENTER', name: 'Subtitle' })
      k.text(lock, '{{brand.tagline}}', { style: 'Tagline 28', color: 'dim', align: 'CENTER', name: 'Tagline' })
      embers(title, 34, { x: 0, y: 300, w: W, h: 760 }, 9)
      const plate = box(k, title, 660, 900, 600, 56, { name: 'Prompt plate', fill: k.tint('scrim', 0.82), radius: 28, align: 'CENTER', justify: 'CENTER' })
      const prompt = k.text(plate, 'Press any key', { style: 'Prompt 24', color: 'flame', autoWidth: true, name: 'Prompt' })
      drift(k, prompt, 'opacity', 0.3, 0.6)
      for (const [x, i] of [[610, 2], [1290, 4]] as const) rune(k, title, x, 908, 40, i, 'gold', { width: 3, name: 'Prompt rune' })
      k.cues(title, [{ layer: 'Title lockup', preset: 'blur-in', at: 200 }, { layer: 'Ashen crown', preset: 'rise-in', at: 0 }, { layer: 'Prompt plate', preset: 'fade-in', at: 1300 }])
      k.link(title, main, 'DISSOLVE', { key: '*', duration: 450 })
      k.link(title, main, 'DISSOLVE', { duration: 450 })
    }

    // Main menu: the candle slides to the chosen line; the last hero's page on the right.
    {
      k.rect(main, W, H, [k.gradient({ from: 'oxblood', to: 'void', kind: 'RADIAL', fromOpacity: 0.9, toOpacity: 0, handles: [{ x: 0.75, y: 0.45 }, { x: 1.3, y: 0.45 }, { x: 0.75, y: 1.1 }] })], { name: 'Hearth light', absolute: { x: 0, y: 0 } })
      horizon(main, 960, 5, 150)
      embers(main, 22, { x: 0, y: 380, w: W, h: 640 }, 12)
      const ringG = box(k, main, 1180, 160, 640, 640, { name: 'Rune wheel' })
      const wheel = arc(k, ringG, 320, 320, 300, 0, Math.PI * 2, 'goldDeep', 2, { name: 'Wheel ring', opacity: 0.6 })
      k.patch(wheel, { anchorX: 0.5, anchorY: 0.5 } as never); spin(k, wheel, 6)
      for (let i = 0; i < 12; i++) {
        const a = (i * Math.PI) / 6
        rune(k, ringG, 320 + Math.cos(a) * 300 - 9, 320 + Math.sin(a) * 300 - 15, 30, i, 'goldDeep', { width: 3, name: 'Wheel rune', opacity: 0.7 })
      }
      label(k, main, '{{brand.title}}', 'Heading 60', 'onVoid', 140, 90, { w: 900, name: 'Wordmark' })
      flourish(k, main, 320, 196, 360, 'gold', 'Wordmark flourish')
      const MX = 190, MY = 290, PITCH = 88
      menu(k, main, [
        { label: 'Continue', hint: 'Bell tower', actions: [toWorld] },
        { label: 'New journey', hint: 'A fresh hero', actions: [...newJourney, toWorld] },
        { label: 'Load', actions: [go(slots, 'PUSH_FROM_RIGHT', { duration: 380 })] },
        { label: 'Settings', actions: [go(settings, 'PUSH_FROM_RIGHT', { duration: 380 })] },
        { label: 'Credits', actions: [go(credits, 'DISSOLVE', { duration: 500 })] },
        { label: 'Quit', actions: [go(title, 'DISSOLVE', { duration: 450 })] },
      ], { focus: menuFocus, x: MX, y: MY, width: 820, pitch: PITCH, style: 'Menu 44', color: 'onVoid', plate: [k.gradient({ from: 'ember', to: 'ember', angle: 0, fromOpacity: 0.34, toOpacity: 0 })], hintStyle: 'Hint 18', nudge: 18 })
      // The focus is a candle: its flame slides to the chosen line.
      const c = candle(main, MX - 76, MY - 44, { h: 40, name: 'Focus candle', seed: 2, halo: 170 })
      k.bindExpression(c.g, 'y', `${MY - 44} + ${menuFocus.n} * ${PITCH}`)
      // The last hero, on a page of their own.
      const page = parchment(main, 1240, 260, 520, 520, { name: 'Hero page', seed: 17 })
      portrait(page, 190, 50, 140, 0, 'Hero portrait')
      readout(k, page, name.n, SAVES[0].name, 'Item 38', 'sepia', 40, 240, { w: 440, align: 'CENTER', name: 'Hero name' })
      readout(k, page, `"Level " + ${level.n} + "  ·  " + ${cls.n}`, `Level ${SAVES[0].level}  ·  ${SAVES[0].cls}`, 'Small 18', 'sepiaSoft', 40, 296, { w: 440, align: 'CENTER', name: 'Hero calling' })
      flourish(k, page, 260, 346, 240, 'goldDeep', 'Page flourish')
      readout(k, page, region.n, SAVES[0].region, 'Lore 24', 'sepia', 40, 372, { w: 440, align: 'CENTER', name: 'Hero region' })
      readout(k, page, `${playtime.n} + " in the ash  ·  " + group(${gold.n}) + " gold"`, `${SAVES[0].time} in the ash  ·  1,240 gold`, 'Small 18', 'sepiaSoft', 40, 420, { w: 440, align: 'CENTER', name: 'Hero record' })
      hintBar(main, '↑ ↓  CHOOSE      ENTER  CONFIRM      MOUSE  POINT AND CLICK')
      k.cues(main, [{ layer: 'Menu item', preset: 'slide-in', at: 0, params: { direction: 'left' }, stagger: { delay: 70 } }, { layer: 'Hero page', preset: 'rise-in', at: 250 }])
    }

    // Save slots: three memories; the one you point at develops out of sepia; choosing it loads its hero.
    {
      k.rect(slots, W, H, [k.gradient({ from: 'oxblood', to: 'void', angle: 90, fromOpacity: 0.7, toOpacity: 0.2 })], { name: 'Wash', absolute: { x: 0, y: 0 } })
      heading(slots, 'Choose a memory')
      label(k, slots, 'Each save is a memory of the road. Choose one, and the fire remembers you.', 'Lore 24', 'dim', 124, 176, { w: 1300, name: 'Screen lead' })
      const f = slotFocus.n
      const vignette = (parent: string, i: number) => {
        const v = box(k, parent, 30, 30, 460, 240, { name: 'Memory vignette', clip: true, radius: 4 })
        if (i === 0) {
          k.rect(v, 460, 240, [k.gradient({ from: 'ember', to: 'oxblood', angle: 270, fromOpacity: 1, toOpacity: 1 })], { name: 'Sky', absolute: { x: 0, y: 0 } })
          poly(k, v, [[0, 240], [0, 150], [90, 130], [200, 160], [320, 120], [460, 150], [460, 240]], 'soot', { name: 'Fields' })
          for (let j = 0; j < 7; j++) { const fl = poly(k, v, tear(30 + j * 66, 110 + (j % 2) * 16, 150 + (j % 2) * 10, 12), 'flame', { name: 'Field fire', effects: [glow(k, 'ember', 16)] }); k.patch(fl, { anchorX: 0.5, anchorY: 1 } as never); k.behave(fl, 'scaleY', [{ kind: 'noise', amp: 0.3, freq: 2, seed: j + 30 }]) }
          lines(k, v, [[[360, 240], [360, 110], [340, 80]], [[360, 150], [396, 116], [410, 100]], [[360, 130], [330, 110]]], 'void', 6, { name: 'Dead tree' })
        } else if (i === 1) {
          k.rect(v, 460, 240, 'fen', { name: 'Sky', absolute: { x: 0, y: 0 } })
          k.ellipse(v, 70, 'parchment', { name: 'Moon', absolute: { x: 320, y: 30 }, effects: [glow(k, 'parchment', 30, 0.6)] })
          k.rect(v, 460, 90, k.tint('mana', 0.35), { name: 'Water', absolute: { x: 0, y: 150 } })
          const shine = k.rect(v, 50, 6, 'parchment', { name: 'Moon path', radius: 3, absolute: { x: 330, y: 176 }, opacity: 0.7 })
          drift(k, shine, 'scaleX', 0.3, 0.5)
          lines(k, v, [[[40, 240], [44, 130]], [[60, 240], [70, 120]], [[80, 240], [76, 140]], [[410, 240], [404, 146]], [[430, 240], [440, 136]]], 'void', 4, { name: 'Reeds' })
          poly(k, v, [[150, 160], [270, 160], [250, 176], [170, 176]], 'void', { name: 'Ferry' })
          const lamp = k.ellipse(v, 12, 'flame', { name: 'Ferry lantern', absolute: { x: 250, y: 136 }, effects: [glow(k, 'ember', 18)] })
          k.behave(lamp, 'opacity', [{ kind: 'noise', amp: 0.3, freq: 2, seed: 41 }])
        } else {
          k.rect(v, 460, 240, [k.gradient({ from: 'blood', to: 'void', angle: 270, fromOpacity: 1, toOpacity: 1 })], { name: 'Sky', absolute: { x: 0, y: 0 } })
          poly(k, v, [[200, 240], [214, 60], [230, 10], [246, 60], [260, 240]], 'void', { name: 'Spire', effects: [glow(k, 'ember', 20, 0.5)] })
          k.rect(v, 8, 14, 'flame', { name: 'Spire window', absolute: { x: 226, y: 90 }, effects: [glow(k, 'ember', 12)] })
          poly(k, v, [[0, 240], [0, 200], [140, 180], [320, 196], [460, 176], [460, 240]], 'soot', { name: 'Ash dunes' })
          const ash = box(k, v, 0, 0, 460, 240, { name: 'Falling ash' })
          for (let j = 0; j < 10; j++) { const a = k.ellipse(ash, 4, 'parchShade', { name: 'Ash', absolute: { x: 20 + j * 44, y: 230 } }); k.behave(a, 'translateY', [{ kind: 'spin', rate: -(30 + j * 4) }, { kind: 'mod', period: 230, offset: -230 + j * 20 }]) }
        }
        // The memory develops: a sepia wash that clears as the slot is pointed at.
        const wash = k.rect(v, 460, 240, 'sepia', { name: 'Sepia', absolute: { x: 0, y: 0 } })
        k.bindExpression(wash, 'opacity', `0.78 - 0.72 * max(0, 1 - abs(${f} - ${i}))`)
        return v
      }
      const choose = (i: number) => [...loadSave(i), toWorld]
      SAVES.forEach((s, i) => {
        const x = 120 + i * 580
        const card = box(k, slots, x, 250, 520, 660, { name: 'Save slot' })
        const ring = k.rect(card, 540, 680, [], { name: 'Slot glow', radius: 10, stroke: { color: 'flame', width: 4 }, absolute: { x: -10, y: -10 }, effects: [glow(k, 'ember', 30)] })
        k.bindExpression(ring, 'opacity', `max(0, 1 - abs(${f} - ${i}))`)
        const p = parchment(card, 0, 0, 520, 660, { name: 'Slot page', seed: 50 + i * 9 })
        vignette(p, i)
        portrait(p, 40, 214, 100, i, 'Slot portrait')
        label(k, p, s.name, 'Item 38', 'sepia', 160, 290, { w: 330, name: 'Slot hero' })
        label(k, p, `Lv ${s.level} · ${s.cls}`, 'Small 18', 'sepiaSoft', 160, 340, { w: 340, name: 'Slot calling' })
        label(k, p, s.region, 'Label 26', 'sepia', 40, 400, { w: 440, name: 'Slot region' })
        label(k, p, `${s.time}  ·  ${s.gold.toLocaleString('en-US')} gold  ·  ${s.potions} potions`, 'Small 18', 'sepiaSoft', 40, 442, { w: 440, name: 'Slot record' })
        flourish(k, p, 260, 492, 300, 'goldDeep', 'Slot flourish')
        label(k, p, `“${s.memory}”`, 'Lore 24', 'sepia', 40, 516, { w: 440, name: 'Slot memory' })
        label(k, p, `Memory ${['I', 'II', 'III'][i]}`, 'Tiny 16', 'sepiaSoft', 40, 614, { w: 440, align: 'RIGHT', name: 'Slot number' })
        onAll(k, card, [set(slotFocus.id, { value: i, glide: 160 })], { trigger: 'MOUSE_ENTER' })
        onAll(k, card, choose(i))
      })
      for (const key of ['ArrowRight', 'd']) k.on(slots, set(slotFocus.id, { expression: `(round(${f}) + 1) % 3`, glide: 160 }), { key })
      for (const key of ['ArrowLeft', 'a']) k.on(slots, set(slotFocus.id, { expression: `(round(${f}) + 2) % 3`, glide: 160 }), { key })
      const pick = when(SAVES.map((_, i) => ({ if: `round(${f}) == ${i}`, then: choose(i) })))
      for (const key of ['Enter', ' ']) k.on(slots, pick, { key })
      k.on(slots, back(), { key: 'Escape' })
      const b = k.instance(slots, 'Seal button', { Label: 'Back  ESC' }, { name: 'Back', absolute: { x: 1620, y: 940 } })
      k.on(b, back())
      hintBar(slots, 'LEFT RIGHT  CHOOSE A MEMORY      ENTER  LOAD      ESC  BACK')
      k.cues(slots, [{ layer: 'Save slot', preset: 'rise-in', at: 0, stagger: { delay: 120 } }])
    }

    // Settings: sliders, toggles and key bindings, walked with the keyboard; the preview's candles burn as loud as the sound.
    {
      k.rect(settings, W, H, [k.gradient({ from: 'oxblood', to: 'void', angle: 0, fromOpacity: 0.5, toOpacity: 0.1 })], { name: 'Wash', absolute: { x: 0, y: 0 } })
      heading(settings, 'Settings', 120, 60)
      embers(settings, 12, { x: 1200, y: 400, w: 700, h: 600 }, 44)
      const col = box(k, settings, 120, 190, 1060, 720, { name: 'Settings list' })
      focusColumn(k, settings, { focus: setFocus, count: 9, x: 100, y: 186, w: 1100, pitch: 80, plate: k.tint('ember', 0.2), guard: `${rebind.n} == ""`, escape: [back()], radius: 6 })
      const common = { labelStyle: 'Label 26', ink: 'onVoid' }
      const sl = { ...common, valueStyle: 'Value 26', track: 'line', fill: 'gold', knob: 'flame' }
      const at = (i: number) => ({ x: 0, y: i * 80, width: 1060, focus: { n: setFocus.n, index: i } })
      const rows = [
        slider(k, col, { ...sl, ...at(0), label: 'Master volume', variable: master, suffix: '%' }),
        slider(k, col, { ...sl, ...at(1), label: 'Music', variable: music, suffix: '%' }),
        slider(k, col, { ...sl, ...at(2), label: 'Voices', variable: voices, suffix: '%' }),
        slider(k, col, { ...sl, ...at(3), label: 'Text speed', variable: textSpeed, min: 1, max: 5, step: 1 }),
        toggle(k, col, { ...common, ...at(4), label: 'Subtitles', variable: subs }),
        toggle(k, col, { ...common, ...at(5), label: 'Drifting embers', variable: embersOn }),
      ]
      const kb = { ...common, capStyle: 'Cap 20', cap: 'panel', onCap: 'flame', listening: 'ember', rebind }
      rows.push(keybind(k, col, { ...kb, ...at(6), action: 'Strike', slot: 'strike', variable: keyStrike }))
      rows.push(keybind(k, col, { ...kb, ...at(7), action: 'Cast Emberbolt', slot: 'spell', variable: keySpell }))
      rows.push(keybind(k, col, { ...kb, ...at(8), action: 'Drink a potion', slot: 'potion', variable: keyPotion }))
      rows.forEach((r, i) => focusRow(k, r, setFocus, i))
      rebindListener(k, settings, rebind, [{ slot: 'strike', variable: keyStrike }, { slot: 'spell', variable: keySpell }, { slot: 'potion', variable: keyPotion }])
      // The preview: three candles whose flames stand as tall as the volumes, and a line read at the text speed.
      const pv = parchment(settings, 1290, 190, 520, 680, { name: 'Preview page', seed: 77 })
      label(k, pv, 'Candles of sound', 'Small 18', 'sepiaSoft', 40, 40, { w: 440, align: 'CENTER', name: 'Preview title' })
      ;([['Master', master], ['Music', music], ['Voices', voices]] as const).forEach(([nm, v], i) => {
        const c = candle(pv, 90 + i * 140, 90, { h: 120, seed: 20 + i, halo: 150 })
        k.bindExpression(c.flame, 'scaleX', `0.4 + ${v.n} / 100 * 0.8`)
        k.bindExpression(c.flame, 'scaleY', `0.3 + ${v.n} / 100 * 1.1`)
        label(k, pv, nm, 'Tiny 16', 'sepia', 60 + i * 140, 300, { w: 120, align: 'CENTER', name: 'Candle name' })
      })
      flourish(k, pv, 260, 350, 300, 'goldDeep', 'Preview flourish')
      readout(k, pv, `"Text speed: " + (${textSpeed.n} < 1.5 ? "Solemn" : ${textSpeed.n} < 2.5 ? "Measured" : ${textSpeed.n} < 3.5 ? "Brisk" : ${textSpeed.n} < 4.5 ? "Swift" : "At once")`, 'Text speed: Brisk', 'Small 18', 'sepiaSoft', 40, 380, { w: 440, name: 'Speed word' })
      label(k, pv, '“The river keeps what it is owed, crownseeker.”', 'Lore 24', 'sepia', 40, 420, { w: 440, name: 'Sample line' })
      const quill = box(k, pv, 40, 530, 440, 10, { name: 'Speed track', fill: 'parchShade', radius: 5, clip: true })
      const qf = k.rect(quill, 440, 10, 'goldDeep', { name: 'Speed fill', radius: 5, absolute: { x: 0, y: 0 } })
      k.bindExpression(qf, 'width', `${textSpeed.n} / 5 * 440`)
      readout(k, pv, `${subs.n} == 1 ? "Subtitles are shown" : "Subtitles are hidden"`, 'Subtitles are shown', 'Small 18', 'sepiaSoft', 40, 570, { w: 440, name: 'Subtitle note' })
      readout(k, pv, `${embersOn.n} == 1 ? "Embers drift on every page" : "The embers have settled"`, 'Embers drift on every page', 'Small 18', 'sepiaSoft', 40, 604, { w: 440, name: 'Ember note' })
      const b = k.instance(settings, 'Seal button', { Label: 'Back  ESC' }, { name: 'Back', absolute: { x: 1620, y: 910 } })
      k.on(b, back())
      hintBar(settings, '↑ ↓  ROW      LEFT RIGHT  ADJUST      ENTER  TOGGLE / REBIND      ESC  BACK')
    }

    // Credits: the names roll up a long parchment; any key or click goes back.
    {
      k.rect(credits, W, H, [k.gradient({ from: 'oxblood', to: 'void', kind: 'RADIAL', fromOpacity: 0.8, toOpacity: 0, handles: [{ x: 0.5, y: 0.5 }, { x: 1.1, y: 0.5 }, { x: 0.5, y: 1.2 }] })], { name: 'Glow', absolute: { x: 0, y: 0 } })
      const scroll = parchment(credits, 560, 40, 800, 1000, { name: 'Credits scroll', seed: 91 })
      const roll = box(k, scroll, 60, 60, 680, 820, { name: 'Credits window', clip: true })
      label(k, scroll, 'A {{brand.studio}} tale', 'Credit role 18', 'sepiaSoft', 60, 910, { w: 680, align: 'CENTER', name: 'Sign-off' })
      const list = k.stack(roll, { name: 'Credits roll', width: 680, gap: 22, align: 'CENTER', absolute: { x: 0, y: 0 } })
      k.text(list, 'Credits', { style: 'Heading 60', color: 'sepia', align: 'CENTER', name: 'Roll title' })
      for (const [role, who] of CREDITS) {
        const g = k.stack(list, { gap: 4, align: 'CENTER', name: 'Credit' })
        k.text(g, role, { style: 'Credit role 18', color: 'sepiaSoft', align: 'CENTER', name: 'Role' })
        k.text(g, who, { style: 'Credit name 34', color: 'sepia', align: 'CENTER', name: 'Name' })
      }
      keys(k, list, 'translateY', [{ t: 0, v: 820, ease: { kind: 'linear' } }, { t: 13600, v: -960 }])
      embers(credits, 20, { x: 0, y: 200, w: W, h: 880 }, 61)
      k.link(credits, main, 'DISSOLVE', { key: '*', duration: 400 })
      k.link(credits, main, 'DISSOLVE', { duration: 400 })
    }

    // ── The World HUD: the bell-tower courtyard ──
    {
      const scene = box(k, hud, 0, 0, W, H, { name: 'Courtyard' })
      k.rect(scene, W, H, [k.gradient({ from: 'oxblood', to: 'void', angle: 270, fromOpacity: 0.9, toOpacity: 0 })], { name: 'Sky', absolute: { x: 0, y: 0 } })
      k.rect(scene, W, 420, [k.gradient({ from: 'ember', to: 'ember', angle: 270, fromOpacity: 0.55, toOpacity: 0 })], { name: 'Far fires', absolute: { x: 0, y: 380 } })
      poly(k, scene, [[0, 700], [0, 560], [220, 520], [420, 580], [640, 530], [900, 590], [1180, 540], [1460, 600], [1700, 530], [W, 580], [W, 700]], 'soot', { name: 'Far walls' })
      poly(k, scene, [[1180, 700], [1190, 250], [1230, 170], [1270, 90], [1310, 170], [1350, 250], [1360, 700]], 'void', { name: 'Bell tower' })
      poly(k, scene, [[1245, 270], [1295, 270], [1300, 330], [1240, 330]], 'goldDeep', { name: 'Tower bell', effects: [glow(k, 'gold', 20, 0.5)] })
      poly(k, scene, [[0, H], [0, 690], [W, 690], [W, H]], 'panel', { name: 'Flagstones' })
      lines(k, scene, [[[0, 760], [W, 760]], [[0, 860], [W, 860]], [[0, 990], [W, 990]], ...[-600, -300, 0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400].map(x => [[960 + (x - 960) * 0.3, 690], [x, H]] as Pt[])], 'line', 2, { name: 'Flag seams', opacity: 0.8 })
      candle(scene, 250, 520, { h: 110, wax: 'goldDeep', name: 'Brazier', seed: 7, halo: 260 })
      const mist = k.ellipse(scene, 900, k.tint('wraith', 0.07), { name: 'Grave mist', absolute: { x: 520, y: 560 }, effects: [blurFx(60)] })
      drift(k, mist, 'translateX', 60, 0.05)

      // The wraith: hovers on its instance; reacts to the keys itself.
      const foe = k.instance(hud, 'Wraith', {}, { name: 'Hollow Bellringer', absolute: { x: 760, y: 230 } })
      drift(k, foe, 'translateY', 14, 0.35)
      drift(k, foe, 'translateX', 22, 0.12)
      embers(hud, 26, { x: 0, y: 300, w: W, h: 760 }, 77)
      const bolt = k.instance(hud, 'Emberbolt', {}, { name: 'Emberbolt', absolute: { x: 0, y: 0 } })
      const flash = k.instance(hud, 'Wound flash', {}, { name: 'Wound flash', absolute: { x: 0, y: 0 } })

      // Low health: the blood-candle vignette — red at the edges, two candles of blood guttering.
      const low = box(k, hud, 0, 0, W, H, { name: 'Low health' })
      const edge = k.gradient({ from: 'health', to: 'blood', kind: 'RADIAL', fromOpacity: 0, toOpacity: 0.75, handles: [{ x: 0.5, y: 0.5 }, { x: 1.02, y: 0.5 }, { x: 0.5, y: 1.1 }] })
      const stops = (edge as { gradientStops: { position: number; color: unknown }[] }).gradientStops
      ;(edge as { gradientStops: unknown[] }).gradientStops = [stops[0], { position: 0.6, color: stops[0].color }, stops[1]]
      const vig = k.rect(low, W, H, [edge], { name: 'Vignette', absolute: { x: 0, y: 0 } })
      drift(k, vig, 'opacity', 0.25, 0.9)
      candle(low, 60, 700, { h: 260, wax: 'blood', name: 'Blood candle', seed: 13, halo: 240 })
      candle(low, 1800, 700, { h: 260, wax: 'blood', name: 'Blood candle', seed: 17, halo: 240 })
      k.bindExpression(low, 'visible', `${health.n} < 35`)
      const crit = box(k, hud, 560, 790, 800, 56, { name: 'Critical warning', fill: 'danger', radius: 28, align: 'CENTER', justify: 'CENTER' })
      k.text(crit, 'Your ember gutters — drink, or fall', { style: 'Small 18', color: 'onDanger', autoWidth: true, name: 'Critical words' })
      k.bindExpression(crit, 'visible', `${health.n} < 35 && ${health.n} > 0`)
      drift(k, crit, 'opacity', 0.3, 1.6)

      // Top left: the hero, and health / mana / stamina with chip trails.
      const vit = box(k, hud, 40, 36, 680, 200, { name: 'Vitals', fill: k.tint('scrim', 0.72), radius: 8, stroke: { color: 'line', width: 2 } })
      portrait(vit, 20, 16, 140, 0, 'Hero medallion')
      const lvl = box(k, vit, 110, 140, 50, 50, { name: 'Level seal', radius: 25, fill: 'gold', align: 'CENTER', justify: 'CENTER' })
      readout(k, lvl, `${level.n}`, String(SAVES[0].level), 'Cap 20', 'onGold', 0, 12, { w: 50, align: 'CENTER', name: 'Level' })
      readout(k, vit, name.n, SAVES[0].name, 'Label 26', 'onVoid', 186, 14, { w: 470, name: 'Hero name' })
      bar(k, vit, { x: 186, y: 60, w: 400, h: 28, value: health.n, max: maxHealth.n, back: 'oxblood', fill: [k.gradient({ from: 'blood', to: 'health', angle: 0 })], chip: { expression: healthLag.n, color: 'chip' }, radius: 4, name: 'Health bar' })
      readout(k, vit, `round(${health.n})`, '100', 'Value 26', 'onVoid', 596, 57, { w: 70, align: 'RIGHT', name: 'Health value' })
      bar(k, vit, { x: 186, y: 100, w: 400, h: 20, value: mana.n, max: maxMana.n, back: 'fen', fill: 'mana', chip: { expression: manaLag.n, color: 'chip' }, radius: 4, name: 'Mana bar' })
      readout(k, vit, `round(${mana.n})`, '100', 'Small 18', 'onVoid', 596, 98, { w: 70, align: 'RIGHT', name: 'Mana value' })
      bar(k, vit, { x: 186, y: 132, w: 400, h: 14, value: stamina.n, max: '100', back: 'panel', fill: 'stamina', chip: { expression: staminaLag.n, color: 'chip' }, radius: 4, name: 'Stamina bar' })
      readout(k, vit, `round(${stamina.n})`, '100', 'Small 18', 'onVoid', 596, 126, { w: 70, align: 'RIGHT', name: 'Stamina value' })
      readout(k, vit, region.n, SAVES[0].region, 'Small 18', 'dim', 186, 162, { w: 470, name: 'Region' })
      const legend = box(k, hud, 40, 250, 680, 64, { name: 'Controls', fill: k.tint('scrim', 0.72), radius: 8, padding: { top: 8, right: 16, bottom: 8, left: 16 } })
      readout(k, legend, `${keyStrike.n} + " STRIKE · " + ${keySpell.n} + " EMBERBOLT · " + ${keyPotion.n} + " POTION · H THE WRAITH STRIKES · E LOOT · I SATCHEL · K SKILLS · J QUESTS · T TALK · ESC PAUSE"`, 'F STRIKE · M EMBERBOLT · Q POTION · H THE WRAITH STRIKES · E LOOT · I SATCHEL · K SKILLS · J QUESTS · T TALK · ESC PAUSE', 'Tiny 16', 'dim', 16, 8, { w: 648, name: 'Legend' })

      // Top centre: the compass ribbon and the Bellringer's bar.
      const compass = box(k, hud, 780, 30, 600, 56, { name: 'Compass', clip: true, fill: k.tint('scrim', 0.72), radius: 6, stroke: { color: 'goldDeep', width: 2 } })
      const ribbon = box(k, compass, -300, 0, 1240, 56, { name: 'Ribbon' })
      label(k, ribbon, 'W  ·  ·  NW  ·  ·  N  ·  ·  NE  ·  ·  E  ·  ·  SE  ·  ·  S  ·  ·  SW', 'Small 18', 'onVoid', 60, 16, { name: 'Headings' })
      poly(k, ribbon, [[640, 8], [650, 18], [640, 28], [630, 18]], 'flame', { name: 'Quest mark', effects: [glow(k, 'ember', 12)] })
      drift(k, ribbon, 'translateX', 90, 0.06)
      poly(k, compass, [[292, 0], [308, 0], [300, 12]], 'gold', { name: 'Heading needle' })
      label(k, hud, 'Hollow Bellringer', 'Speaker 34', 'onVoid', 780, 100, { w: 600, align: 'CENTER', name: 'Foe name' })
      bar(k, hud, { x: 780, y: 152, w: 600, h: 18, value: wraith.n, max: maxWraith.n, back: k.tint('scrim', 0.8) as never, fill: [k.gradient({ from: 'wraith', to: 'wraithEye', angle: 0 })], chip: { expression: wraithLag.n, color: 'ember' }, radius: 9, name: 'Foe bar' })
      for (const x of [760, 1388]) poly(k, hud, [[x + 6, 150], [x + 18, 161], [x + 6, 172], [x - 6, 161]], 'gold', { name: 'Bar lozenge' })

      // Top right: the minimap under fog, the quest tracker.
      const map = box(k, hud, 1620, 110, 260, 260, { name: 'Minimap', clip: true, radius: 130, fill: 'parchShade' })
      lines(k, map, [[[0, 180], [80, 150], [130, 120], [200, 110], [260, 70]], [[130, 120], [140, 40], [170, 0]]], 'sepiaSoft', 6, { name: 'Roads' })
      lines(k, map, [[[0, 60], [60, 90], [100, 180], [160, 220], [260, 230]]], 'mana', 10, { name: 'River', opacity: 0.7 })
      poly(k, map, [[184, 70], [196, 50], [208, 70], [208, 96], [184, 96]], 'sepia', { name: 'Tower mark' })
      const qm = poly(k, map, [[196, 30], [206, 40], [196, 50], [186, 40]], 'ember', { name: 'Quest marker', effects: [glow(k, 'ember', 12)] })
      drift(k, qm, 'opacity', 0.3, 1.2)
      poly(k, map, [[130, 116], [142, 146], [130, 138], [118, 146]], 'blood', { name: 'You' })
      ;[[-60, -40, 1], [150, 170, 2], [-80, 160, 3], [170, -70, 4]].forEach(([x, y, s]) => {
        const fog = k.ellipse(map, 200, k.tint('void', 0.85), { name: 'Fog', absolute: { x, y }, effects: [blurFx(34)] })
        k.behave(fog, 'translateX', [{ kind: 'noise', amp: 18, freq: 0.2, seed: s }])
        k.behave(fog, 'translateY', [{ kind: 'noise', amp: 14, freq: 0.17, seed: s + 9 }])
      })
      k.ellipse(map, 260, [k.gradient({ from: 'void', to: 'void', kind: 'RADIAL', fromOpacity: 0, toOpacity: 0.9, handles: [{ x: 0.5, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }] })], { name: 'Fog rim', absolute: { x: 0, y: 0 } })
      k.ellipse(hud, 276, [], { name: 'Map ring', stroke: { color: 'gold', width: 4 }, absolute: { x: 1612, y: 102 } })
      label(k, hud, 'N', 'Tiny 16', 'onVoid', 1744, 88, { name: 'Map north' })
      const qt = box(k, hud, 1400, 400, 480, 196, { name: 'Quest tracker', fill: k.tint('scrim', 0.72), radius: 8, stroke: { color: 'line', width: 2 }, padding: 20, gap: 8 })
      k.text(qt, 'The Ashen Crown', { style: 'Label 26', color: 'gold', name: 'Quest name' })
      readout(k, qt, `"Silence the Bellringer  —  " + round(100 - ${wraith.n} / ${maxWraith.n} * 100) + "%"`, 'Silence the Bellringer  —  0%', 'Body 24', 'onVoid', 20, 60, { w: 440, name: 'Quest step' })
      readout(k, qt, `${hasEmber.n} == 1 ? "Carry the Ember of Vaelmoor to the tower" : "Seek the ferrywoman at Vaelmoor  (T)"`, 'Seek the ferrywoman at Vaelmoor  (T)', 'Lore 24', 'dim', 20, 100, { w: 440, name: 'Quest side' })
      for (const nm of ['Quest step', 'Quest side']) for (const id of k.named(qt, nm)) k.patch(id, { layoutPositioning: 'AUTO' })

      // Bottom left: gold.
      const coinPop = k.instance(hud, 'Coin pop', {}, { name: 'Coin pop', absolute: { x: 40, y: 830 } })
      const purse = box(k, hud, 40, 950, 330, 80, { name: 'Purse', fill: k.tint('scrim', 0.72), radius: 8, stroke: { color: 'line', width: 2 } })
      k.ellipse(purse, 44, 'gold', { name: 'Coin', stroke: { color: 'goldDeep', width: 4 }, absolute: { x: 20, y: 18 }, effects: [glow(k, 'gold', 14, 0.6)] })
      rune(k, purse, 36, 28, 22, 6, 'goldDeep', { width: 3, name: 'Coin rune' })
      readout(k, purse, `group(${gold.n})`, '1,240', 'Numeral 40', 'gold', 80, 14, { w: 170, name: 'Gold' })
      label(k, purse, 'gold', 'Tiny 16', 'dim', 254, 32, { name: 'Gold label' })

      // Bottom right: the hotbar — strike, the Emberbolt with its cooldown, the potion.
      const hb = box(k, hud, 1190, 880, 690, 170, { name: 'Hotbar', fill: k.tint('scrim', 0.72), radius: 8, stroke: { color: 'line', width: 2 } })
      const slotAt = [24, 170, 316]
      const strikeSlot = box(k, hb, slotAt[0], 34, 124, 124, { name: 'Strike slot', radius: 12, fill: 'panel', stroke: { color: 'gold', width: 2 } })
      icon(strikeSlot, 'sword', 12, 12, 1, 'parchment', 'Strike icon')
      const spellSlot = k.instance(hb, 'Spell slot', {}, { name: 'Spell slot', absolute: { x: slotAt[1], y: 34 } })
      const potSlot = box(k, hb, slotAt[2], 34, 124, 124, { name: 'Potion slot', radius: 12, fill: 'panel', stroke: { color: 'gold', width: 2 } })
      icon(potSlot, 'flask', 12, 12, 1, 'parchShade', 'Potion icon')
      readout(k, potSlot, `"× " + ${potions.n}`, `× ${SAVES[0].potions}`, 'Small 18', 'onVoid', 60, 96, { w: 56, align: 'RIGHT', name: 'Potion count' })
      ;([keyStrike, keySpell, keyPotion] as const).forEach((kv, i) => {
        const cap = box(k, hb, slotAt[i] + 32, 4, 60, 26, { name: 'Key cap', radius: 4, fill: 'gold', align: 'CENTER', justify: 'CENTER' })
        readout(k, cap, kv.n, String(k.doc.variables![kv.id].valuesByMode['Mode 1']), 'Tiny 16', 'onGold', 0, 3, { w: 60, align: 'CENTER', name: 'Key' })
      })
      readout(k, hb, `"STRIKE  " + ${strikeCost.n} + " STAMINA"`, 'STRIKE  20 STAMINA', 'Tiny 16', 'dim', 462, 40, { w: 210, name: 'Strike note' })
      readout(k, hb, `"BOLT  " + (30 + ${bonusSpell.n}) + " DAMAGE"`, 'BOLT  30 DAMAGE', 'Tiny 16', 'dim', 462, 72, { w: 210, name: 'Bolt note' })
      const dry = label(k, hb, 'Mana spent', 'Tiny 16', 'danger', 462, 104, { w: 210, name: 'Mana warning' })
      k.bindExpression(dry, 'visible', `${mana.n} < ${spellCost.n}`)
      const heal = k.instance(hud, 'Heal bloom', {}, { name: 'Heal bloom', absolute: { x: 1458, y: 690 } })

      // What the keys do: a logic layer, last in the screen, after every piece has reacted to the state it found.
      const logic = box(k, hud, 0, 0, 1, 1, { name: 'Game logic' })
      const K = (v: { n: string }) => `upper($key) == ${v.n}`
      const canStrike = `${K(keyStrike)} && ${stamina.n} >= ${strikeCost.n}`
      const canCast = `${K(keySpell)} && ${mana.n} >= ${spellCost.n} && now() - ${castAt.n} >= ${COOLDOWN}`
      const canDrink = `${K(keyPotion)} && ${potions.n} > 0`
      const blow = 'upper($key) == "H"'
      const won = when([{ if: `${wraith.n} <= 0`, then: [go(victory, 'DISSOLVE', { duration: 900 })] }])
      k.on(logic, when([
        { if: canStrike, then: [
          set(stamina.id, { expression: `max(0, ${stamina.n} - ${strikeCost.n})`, glide: 240 }), set(staminaLag.id, { expression: stamina.n, glide: 900, easing: 'EASE_IN_OUT' }),
          set(wraith.id, { expression: `max(0, ${wraith.n} - (${weaponAtk.n} + ${bonusAtk.n}))`, glide: 260 }), set(wraithLag.id, { expression: wraith.n, glide: 1100, easing: 'EASE_IN_OUT' }), won,
        ] },
        { if: canCast, then: [
          set(mana.id, { expression: `max(0, ${mana.n} - ${spellCost.n})`, glide: 300 }), set(manaLag.id, { expression: mana.n, glide: 1000, easing: 'EASE_IN_OUT' }), set(castAt.id, { expression: 'now()' }),
          set(stamina.id, { expression: `min(100, ${stamina.n} + 10)`, glide: 400 }), set(staminaLag.id, { expression: stamina.n }),
          set(wraith.id, { expression: `max(0, ${wraith.n} - (30 + ${bonusSpell.n}))`, glide: 400 }), set(wraithLag.id, { expression: wraith.n, glide: 1200, easing: 'EASE_IN_OUT' }), won,
        ] },
        { if: canDrink, then: [
          set(potions.id, { expression: `${potions.n} - 1` }),
          set(health.id, { expression: `min(${maxHealth.n}, ${health.n} + 35)`, glide: 600 }), set(healthLag.id, { expression: health.n }),
          set(stamina.id, { expression: `min(100, ${stamina.n} + 25)`, glide: 600 }), set(staminaLag.id, { expression: stamina.n }),
        ] },
        { if: blow, then: [
          set(health.id, { expression: `max(0, ${health.n} - max(6, 30 - round((${armourDef.n} + ${bonusDef.n}) / 2)))`, glide: 220 }),
          set(healthLag.id, { expression: health.n, glide: 1100, easing: 'EASE_IN_OUT' }),
          when([{ if: `${health.n} <= 0`, then: [go(over, 'DISSOLVE', { duration: 900 })] }]),
        ] },
        { if: 'upper($key) == "E"', then: [set(gold.id, { expression: `${gold.n} + 35`, glide: 700 })] },
        { if: 'upper($key) == "I"', then: [go(inventory, 'PUSH_FROM_BOTTOM', { duration: 380 })] },
        { if: 'upper($key) == "K"', then: [go(tree, 'DISSOLVE', { duration: 450 })] },
        { if: 'upper($key) == "J"', then: [go(quests, 'PUSH_FROM_RIGHT', { duration: 380 })] },
        { if: 'upper($key) == "T"', then: [set(talkFocus.id, { value: 0 }), set(metOriel.id, { value: 1 }), go(talk, 'DISSOLVE', { duration: 600 })] },
      ]), { key: '*' })
      k.on(logic, overlay(pause), { key: 'Escape' })
      // Each piece reacts for itself.
      k.on(foe, when([{ if: canStrike, then: [k.changeAction('Wraith/Hurt', 0)] }, { if: canCast, then: [k.changeAction('Wraith/Hurt', 0)] }, { if: blow, then: [k.changeAction('Wraith/Strike', 0)] }]), { key: '*' })
      k.on(bolt, when([{ if: canCast, then: [k.changeAction('Emberbolt/Cast', 0)] }]), { key: '*' })
      k.on(flash, when([{ if: blow, then: [k.changeAction('Wound flash/Hit', 0)] }]), { key: '*' })
      k.on(spellSlot, when([{ if: canCast, then: [k.changeAction('Spell slot/Cooldown', 0)] }]), { key: '*' })
      k.on(heal, when([{ if: canDrink, then: [k.changeAction('Heal bloom/Pop', 0)] }]), { key: '*' })
      k.on(coinPop, when([{ if: 'upper($key) == "E"', then: [k.changeAction('Coin pop/Loot', 0)] }]), { key: '*' })
      k.cues(hud, [{ layer: 'Vitals', preset: 'slide-in', at: 0, params: { direction: 'left' } }, { layer: 'Hotbar', preset: 'slide-in', at: 100, params: { direction: 'right' } }, { layer: 'Quest tracker', preset: 'fade-in', at: 300 }])
    }

    // ── Inventory: the satchel. Select an item, then click the weapon or armour slot (or press Enter) to equip it ──
    {
      k.rect(inventory, W, H, [k.gradient({ from: 'oxblood', to: 'void', angle: 90, fromOpacity: 0.6, toOpacity: 0.15 })], { name: 'Wash', absolute: { x: 0, y: 0 } })
      heading(inventory, 'Satchel', 120, 50)
      const f = invFocus.n
      const near = (i: number) => `max(0, 1 - abs(${f} - ${i}))`
      const GX = 120, GY = 200, CELL = 170, GAP = 18
      const equip = (i: number): PrototypeAction[] => ITEMS[i].slot === 'weapon' ? [set(weapon.id, { value: i }), set(weaponAtk.id, { value: ITEMS[i].stat, glide: 600 })]
        : ITEMS[i].slot === 'armour' ? [set(armour.id, { value: i }), set(armourDef.id, { value: ITEMS[i].stat, glide: 600 })] : []
      ITEMS.forEach((it, i) => {
        const x = GX + (i % 4) * (CELL + GAP), y = GY + Math.floor(i / 4) * (CELL + GAP)
        const cell = box(k, inventory, x, y, CELL, CELL, { name: 'Item cell', fill: 'panel', radius: 8, clip: true, stroke: { color: it.rarity, width: 3 } })
        k.rect(cell, CELL, CELL, [k.gradient({ from: it.rarity, to: it.rarity, kind: 'RADIAL', fromOpacity: 0.35, toOpacity: 0, handles: [{ x: 0.5, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }] })], { name: 'Rarity glow', absolute: { x: 0, y: 0 } })
        const art = icon(cell, it.kind, 30, 26, 1.1, it.rarity, 'Item icon')
        if (it.kind === 'ember') {
          k.bindExpression(art, 'visible', `${hasEmber.n} == 1`)
          const empty = box(k, cell, 35, 66, 100, 36, { name: 'Empty note', fill: k.tint('scrim', 0.92), radius: 18, align: 'CENTER', justify: 'CENTER' })
          k.text(empty, 'Empty', { style: 'Tiny 16', color: 'onVoid', autoWidth: true, name: 'Empty' })
          k.bindExpression(empty, 'visible', `${hasEmber.n} == 0`)
        }
        if (it.rarity === 'legendary') {
          // The legendary shimmer: a band of light sweeps across the cell, again and again.
          const band = poly(k, cell, [[0, 0], [40, 0], [-20, CELL], [-60, CELL]], [k.gradient({ from: 'flame', to: 'flame', angle: 0, fromOpacity: 0, toOpacity: 0.55 })], { name: 'Shimmer' })
          k.behave(band, 'translateX', [{ kind: 'spin', rate: 320 }, { kind: 'mod', period: 900, offset: -250 }])
          if (it.kind === 'ember') k.bindExpression(band, 'visible', `${hasEmber.n} == 1`)
        }
        const ring = k.rect(cell, CELL, CELL, [], { name: 'Selected ring', radius: 8, stroke: { color: 'flame', width: 5 }, absolute: { x: 0, y: 0 } })
        k.bindExpression(ring, 'opacity', near(i))
        if (it.slot !== 'none') {
          const worn = box(k, cell, 8, 134, 92, 28, { name: 'Worn badge', fill: 'gold', radius: 4, align: 'CENTER', justify: 'CENTER' })
          k.text(worn, 'WORN', { style: 'Tiny 16', color: 'onGold', autoWidth: true, name: 'Worn' })
          k.bindExpression(worn, 'visible', `${it.slot === 'weapon' ? weapon.n : armour.n} == ${i}`)
        }
        if (it.kind === 'flask') readout(k, cell, `"× " + ${potions.n}`, '× 3', 'Small 18', 'onVoid', 100, 136, { w: 60, align: 'RIGHT', name: 'Stack' })
        k.on(cell, set(invFocus.id, { value: i, glide: 140 }))
      })
      const move = (d: number) => set(invFocus.id, { expression: `(round(${f}) + ${d + 12}) % 12`, glide: 140 })
      for (const key of ['ArrowRight', 'd']) k.on(inventory, move(1), { key })
      for (const key of ['ArrowLeft', 'a']) k.on(inventory, move(-1), { key })
      for (const key of ['ArrowDown', 's']) k.on(inventory, move(4), { key })
      for (const key of ['ArrowUp', 'w']) k.on(inventory, move(-4), { key })
      k.on(inventory, when(ITEMS.map((it, i) => ({ if: `round(${f}) == ${i}`, then: equip(i) })).filter((_, i) => ITEMS[i].slot !== 'none')), { key: 'Enter' })
      k.on(inventory, back(), { key: 'Escape' })
      k.on(inventory, when([{ if: 'upper($key) == "I"', then: [back()] }]), { key: '*' })

      // The paper doll: the weapon and armour slots (click one to equip the selected item there), and the stats.
      const doll = box(k, inventory, 900, 200, 420, 740, { name: 'Equipped', fill: k.tint('scrim', 0.7), radius: 8, stroke: { color: 'line', width: 2 } })
      const slotBox = (y: number, title: string, which: 'weapon' | 'armour') => {
        const s = box(k, doll, 24, y, 372, 170, { name: `${title} slot`, fill: 'panel', radius: 8, stroke: { color: 'gold', width: 2 } })
        label(k, s, title, 'Small 18', 'gold', 20, 16, { name: 'Slot title' })
        const v = which === 'weapon' ? weapon : armour
        ITEMS.forEach((it, i) => { if (it.slot === which) { const ic = icon(s, it.kind, 20, 52, 0.95, it.rarity, 'Worn icon'); k.bindExpression(ic, 'visible', `${v.n} == ${i}`) } })
        readout(k, s, ITEMS.map((it, i) => (it.slot === which ? `${v.n} == ${i} ? "${it.name.replace(/"/g, '')}"` : '')).filter(Boolean).join(' : ') + ' : ""', ITEMS[which === 'weapon' ? START_WEAPON : START_ARMOUR].name, 'Label 26', 'onVoid', 130, 60, { w: 230, name: 'Worn name' })
        readout(k, s, `"Click to wear the selected " + "${which}"`, `Click to wear the selected ${which}`, 'Tiny 16', 'dim', 130, 124, { w: 230, name: 'Slot hint' })
        k.on(s, when(ITEMS.map((it, i) => ({ if: `round(${f}) == ${i}`, then: equip(i) })).filter((_, i) => ITEMS[i].slot === which)))
      }
      slotBox(24, 'Weapon', 'weapon')
      slotBox(214, 'Armour', 'armour')
      label(k, doll, 'Attack', 'Label 26', 'onVoid', 24, 414, { name: 'Stat name' })
      readout(k, doll, `round(${weaponAtk.n} + ${bonusAtk.n})`, '18', 'Stat 64', 'flame', 220, 396, { w: 176, align: 'RIGHT', name: 'Attack' })
      bar(k, doll, { x: 24, y: 476, w: 372, h: 12, value: `${weaponAtk.n} + ${bonusAtk.n}`, max: '60', back: 'line', fill: [k.gradient({ from: 'ember', to: 'flame', angle: 0 })], radius: 6, name: 'Attack bar' })
      label(k, doll, 'Defence', 'Label 26', 'onVoid', 24, 524, { name: 'Stat name' })
      readout(k, doll, `round(${armourDef.n} + ${bonusDef.n})`, '10', 'Stat 64', 'flame', 220, 506, { w: 176, align: 'RIGHT', name: 'Defence' })
      bar(k, doll, { x: 24, y: 586, w: 372, h: 12, value: `${armourDef.n} + ${bonusDef.n}`, max: '60', back: 'line', fill: [k.gradient({ from: 'goldDeep', to: 'gold', angle: 0 })], radius: 6, name: 'Defence bar' })
      readout(k, doll, `"Each blow takes " + max(6, 30 - round((${armourDef.n} + ${bonusDef.n}) / 2)) + " health"`, 'Each blow takes 25 health', 'Small 18', 'dim', 24, 630, { w: 372, name: 'Blow note' })
      readout(k, doll, `"Gold  " + group(${gold.n})`, 'Gold  1,240', 'Small 18', 'gold', 24, 690, { w: 372, name: 'Purse note' })

      // The tooltip: a parchment page for the selected item; a legendary one burns in at its edges.
      const legendary = ITEMS.map((it, i) => (it.rarity === 'legendary' ? i : -1)).filter(i => i >= 0)
      const burnIf = `(${legendary.map(i => `round(${f}) == ${i}`).join(' || ')})${' && (round(' + f + ') != 9 || ' + hasEmber.n + ' == 1)'}`
      const tip = parchment(inventory, 1360, 200, 460, 740, { name: 'Tooltip', seed: 33, burn: burnIf })
      const pick = (fn: (it: Item, i: number) => string) => ITEMS.map((it, i) => `round(${f}) == ${i} ? "${fn(it, i).replace(/"/g, '')}"`).join(' : ') + ' : ""'
      const nameExpr = ITEMS.map((it, i) => (i === 9 ? `round(${f}) == 9 ? (${hasEmber.n} == 1 ? "${it.name}" : "An empty pocket")` : `round(${f}) == ${i} ? "${it.name.replace(/"/g, '')}"`)).join(' : ') + ' : ""'
      readout(k, tip, nameExpr, ITEMS[START_WEAPON].name, 'Item 38', 'sepia', 40, 44, { w: 380, name: 'Tip name' })
      readout(k, tip, pick(it => `${it.rarity}  ·  ${it.slot === 'none' ? (it.kind === 'flask' ? 'draught' : 'relic') : it.slot}`), 'common  ·  weapon', 'Small 18', 'sepiaSoft', 40, 150, { w: 380, name: 'Tip rarity' })
      flourish(k, tip, 230, 200, 300, 'goldDeep', 'Tip flourish')
      readout(k, tip, pick(it => (it.slot === 'weapon' ? `ATTACK ${it.stat}` : it.slot === 'armour' ? `DEFENCE ${it.stat}` : it.kind === 'flask' ? 'HEALS 35' : 'QUEST RELIC')), 'ATTACK 18', 'Numeral 40', 'sepia', 40, 226, { w: 380, name: 'Tip stat' })
      readout(k, tip, ITEMS.map((it, i) => `round(${f}) == ${i} ? ${it.slot === 'weapon' ? `"If worn: attack " + (${it.stat} + ${bonusAtk.n}) + " (now " + round(${weaponAtk.n} + ${bonusAtk.n}) + ")"` : it.slot === 'armour' ? `"If worn: defence " + (${it.stat} + ${bonusDef.n}) + " (now " + round(${armourDef.n} + ${bonusDef.n}) + ")"` : '"Carried, not worn"'}`).join(' : ') + ' : ""', 'If worn: attack 18 (now 18)', 'Small 18', 'sepiaSoft', 40, 290, { w: 380, name: 'Tip compare' })
      readout(k, tip, ITEMS.map((it, i) => (i === 9 ? `round(${f}) == 9 ? (${hasEmber.n} == 1 ? "${it.lore}" : "Something belongs here. The ferrywoman at Vaelmoor may know.")` : `round(${f}) == ${i} ? "${it.lore.replace(/"/g, '')}"`)).join(' : ') + ' : ""', ITEMS[START_WEAPON].lore, 'Lore 24', 'sepia', 40, 350, { w: 380, name: 'Tip lore' })
      readout(k, tip, pick(it => (it.slot === 'none' ? 'Cannot be worn' : `Wear it: the ${it.slot} slot`)), 'Wear it: the weapon slot', 'Tiny 16', 'sepiaSoft', 40, 650, { w: 380, name: 'Tip action' })
      const b = k.instance(inventory, 'Seal button', { Label: 'Close  I' }, { name: 'Close', absolute: { x: 120, y: 900 } })
      k.on(b, back())
      hintBar(inventory, 'ARROWS  SELECT      ENTER  WEAR      CLICK A SLOT  EQUIP THE SELECTED ITEM      I / ESC  CLOSE')
      k.cues(inventory, [{ layer: 'Item cell', preset: 'pop-in', at: 0, stagger: { delay: 40 } }, { layer: 'Tooltip', preset: 'slide-in', at: 200, params: { direction: 'right' } }])
    }

    // ── Skill tree: embers to spend; a node lights only when its parent is lit; its line inks in ──
    {
      k.rect(tree, W, H, [k.gradient({ from: 'oxblood', to: 'void', kind: 'RADIAL', fromOpacity: 0.85, toOpacity: 0, handles: [{ x: 0.5, y: 0.5 }, { x: 1.05, y: 0.5 }, { x: 0.5, y: 1.1 }] })], { name: 'Glow', absolute: { x: 0, y: 0 } })
      heading(tree, 'The Kindling', 120, 50)
      embers(tree, 20, { x: 0, y: 300, w: W, h: 700 }, 88)
      const SK: Skill[] = [
        { name: 'Kindle', x: 960, y: 230, parents: [], rune: 5, lit: '"The first spark"', effect: () => [], desc: 'Where every ember-knight begins. Already burning.' },
        { name: 'Cinder Lash', x: 700, y: 430, parents: [0], rune: 0, lit: `"Emberbolt " + (30 + ${bonusSpell.n}) + " dmg"`, effect: v => [set(v.bonusSpell.id, { expression: `${v.bonusSpell.n} + 10`, glide: 600 })], desc: 'Your Emberbolt strikes 10 harder.' },
        { name: 'Ash Skin', x: 1220, y: 430, parents: [0], rune: 1, lit: `"Defence +" + round(${bonusDef.n})`, effect: v => [set(v.bonusDef.id, { expression: `${v.bonusDef.n} + 6`, glide: 600 })], desc: 'Ash hardens on you: +6 defence against every blow.' },
        { name: 'Pyre Heart', x: 560, y: 640, parents: [1], rune: 2, lit: `"Mana " + round(${maxMana.n})`, effect: v => [set(v.maxMana.id, { expression: `${v.maxMana.n} + 20`, glide: 600 }), set(v.mana.id, { expression: `${v.mana.n} + 20`, glide: 600 })], desc: 'A deeper well: +20 mana.' },
        { name: 'Emberstep', x: 850, y: 640, parents: [1], rune: 3, lit: `"Strike costs " + round(${strikeCost.n})`, effect: v => [set(v.strikeCost.id, { value: 12, glide: 600 })], desc: 'Strikes cost 12 stamina instead of 20.' },
        { name: 'Bellward', x: 1220, y: 640, parents: [2], rune: 4, lit: `"Health " + round(${maxHealth.n})`, effect: v => [set(v.maxHealth.id, { expression: `${v.maxHealth.n} + 20`, glide: 600 }), set(v.health.id, { expression: `${v.health.n} + 20`, glide: 600 })], desc: 'The bell cannot deafen you: +20 health.' },
        { name: 'Crown of Embers', x: 960, y: 830, parents: [3, 5], rune: 6, lit: `"Attack +" + round(${bonusAtk.n})`, effect: v => [set(v.bonusAtk.id, { expression: `${v.bonusAtk.n} + 12`, glide: 600 })], desc: 'Needs Pyre Heart and Bellward. +12 attack.' },
      ]
      const f = skillFocus.n
      const lit = (i: number) => `${skills[i].n} >= 1`
      const canUnlock = (i: number) => [`${points.n} > 0`, `${skills[i].n} < 1`, ...SK[i].parents.map(lit)].join(' && ')
      const unlock = (i: number) => when([{ if: canUnlock(i), then: [set(skills[i].id, { value: 1, glide: 700, easing: 'EASE_IN_OUT' }), set(points.id, { expression: `${points.n} - 1` }), ...SK[i].effect(V)] }])
      const lineLayer = box(k, tree, 0, 0, W, H, { name: 'Ink lines' })
      SK.forEach((s, i) => s.parents.forEach(p => {
        const a = SK[p]
        poly(k, lineLayer, [[a.x, a.y], [s.x, s.y]], 'line', { name: 'Ghost line', stroke: 3 })
        const ink = poly(k, lineLayer, [[a.x, a.y], [s.x, s.y]], 'gold', { name: 'Ink line', stroke: 6, effects: [glow(k, 'ember', 14)] })
        const bb = k.node(ink)
        k.patch(ink, { anchorX: bb.width > 1 ? (a.x - bb.x) / bb.width : 0.5, anchorY: bb.height > 1 ? (a.y - bb.y) / bb.height : 0.5 } as never)
        k.bindExpression(ink, 'scaleX', `clamp(${skills[i].n}, 0, 1)`)
        k.bindExpression(ink, 'scaleY', `clamp(${skills[i].n}, 0, 1)`)
      }))
      SK.forEach((s, i) => {
        const node = box(k, tree, s.x - 80, s.y - 70, 160, 140, { name: 'Skill node' })
        const ready = k.ellipse(node, 132, [], { name: 'Ready ring', stroke: { color: 'gold', width: 3 }, absolute: { x: 14, y: 4 } })
        k.bindExpression(ready, 'visible', canUnlock(i))
        drift(k, ready, 'opacity', 0.35, 1)
        k.ellipse(node, 112, 'panel', { name: 'Seal', stroke: { color: 'line', width: 3 }, absolute: { x: 24, y: 14 } })
        const glowSeal = k.ellipse(node, 112, [k.gradient({ from: 'flame', to: 'ember', kind: 'RADIAL', fromOpacity: 1, toOpacity: 1, handles: [{ x: 0.5, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }] })], { name: 'Lit seal', absolute: { x: 24, y: 14 }, effects: [glow(k, 'ember', 30)] })
        k.bindExpression(glowSeal, 'opacity', `clamp(${skills[i].n}, 0, 1)`)
        rune(k, node, 64, 44, 52, s.rune, 'soot', { width: 5, name: 'Seal rune' })
        const focusRing = k.ellipse(node, 140, [], { name: 'Focus ring', stroke: { color: 'flame', width: 4 }, absolute: { x: 10, y: 0 } })
        k.bindExpression(focusRing, 'opacity', `max(0, 1 - abs(${f} - ${i}))`)
        label(k, tree, s.name, 'Label 26', 'onVoid', s.x - 150, s.y + 74, { w: 300, align: 'CENTER', name: 'Skill name' })
        readout(k, tree, `${lit(i)} ? ${s.lit} : (${canUnlock(i)} ? "Ready to kindle" : "Locked")`, i === 0 ? 'The first spark' : 'Locked', 'Small 18', 'gold', s.x - 150, s.y + 110, { w: 300, align: 'CENTER', name: 'Skill value' })
        onAll(k, node, [set(skillFocus.id, { value: i, glide: 140 })], { trigger: 'MOUSE_ENTER' })
        onAll(k, node, [set(skillFocus.id, { value: i, glide: 140 }), unlock(i)])
      })
      for (const key of ['ArrowRight', 'ArrowDown', 'd', 's']) k.on(tree, set(skillFocus.id, { expression: `(round(${f}) + 1) % 7`, glide: 140 }), { key })
      for (const key of ['ArrowLeft', 'ArrowUp', 'a', 'w']) k.on(tree, set(skillFocus.id, { expression: `(round(${f}) + 6) % 7`, glide: 140 }), { key })
      k.on(tree, when(SK.map((_, i) => ({ if: `round(${f}) == ${i}`, then: [unlock(i)] }))), { key: 'Enter' })
      k.on(tree, back(), { key: 'Escape' })
      k.on(tree, when([{ if: 'upper($key) == "K"', then: [back()] }]), { key: '*' })
      // The embers to spend, and the focused skill's page.
      const purse = box(k, tree, 120, 200, 320, 200, { name: 'Embers', fill: k.tint('scrim', 0.72), radius: 8, stroke: { color: 'line', width: 2 } })
      label(k, purse, 'Embers to spend', 'Small 18', 'dim', 24, 20, { name: 'Embers label' })
      readout(k, purse, `${points.n}`, '3', 'Stat 64', 'flame', 24, 50, { w: 120, name: 'Points' })
      for (let i = 0; i < 3; i++) { const e = poly(k, purse, tear(170 + i * 44, 70, 100, 14), 'ember', { name: 'Ember pip', effects: [glow(k, 'ember', 14)] }); k.bindExpression(e, 'visible', `${points.n} > ${i}`) }
      readout(k, purse, `"Attack " + round(${weaponAtk.n} + ${bonusAtk.n}) + "  ·  Defence " + round(${armourDef.n} + ${bonusDef.n})`, 'Attack 18  ·  Defence 10', 'Tiny 16', 'dim', 24, 140, { w: 280, name: 'Stat line' })
      const page = parchment(tree, 1440, 200, 380, 420, { name: 'Skill page', seed: 12 })
      readout(k, page, SK.map((s, i) => `round(${f}) == ${i} ? "${s.name}"`).join(' : ') + ' : ""', SK[1].name, 'Item 38', 'sepia', 36, 40, { w: 308, name: 'Skill title' })
      flourish(k, page, 190, 110, 240, 'goldDeep', 'Skill flourish')
      readout(k, page, SK.map((s, i) => `round(${f}) == ${i} ? "${s.desc}"`).join(' : ') + ' : ""', SK[1].desc, 'Lore 24', 'sepia', 36, 136, { w: 308, name: 'Skill text' })
      readout(k, page, SK.map((_, i) => `round(${f}) == ${i} ? (${lit(i)} ? "Kindled" : ${canUnlock(i)} ? "ENTER or click to kindle" : ${points.n} < 1 ? "No embers left to spend" : "Its parent must burn first")`).join(' : ') + ' : ""', 'ENTER or click to kindle', 'Tiny 16', 'sepiaSoft', 36, 350, { w: 308, name: 'Skill status' })
      const b = k.instance(tree, 'Seal button', { Label: 'Close  K' }, { name: 'Close', absolute: { x: 1660, y: 920 } })
      k.on(b, back())
      hintBar(tree, 'ARROWS  CHOOSE      ENTER / CLICK  KINDLE A SKILL      K / ESC  CLOSE')
    }

    // ── Quest log: Active and Completed tabs, switched by a variable ──
    {
      k.rect(quests, W, H, [k.gradient({ from: 'oxblood', to: 'void', angle: 90, fromOpacity: 0.6, toOpacity: 0.1 })], { name: 'Wash', absolute: { x: 0, y: 0 } })
      heading(quests, 'Quest log', 120, 50)
      const t = questTab.n
      ;(['Active', 'Completed'] as const).forEach((nm, i) => {
        const tab = box(k, quests, 120 + i * 260, 190, 240, 60, { name: 'Tab', radius: 6, stroke: { color: 'gold', width: 2 }, align: 'CENTER', justify: 'CENTER' })
        const plate = k.rect(tab, 240, 60, 'gold', { name: 'Tab plate', radius: 6, absolute: { x: 0, y: 0 } })
        k.bindExpression(plate, 'opacity', `max(0, 1 - abs(${t} - ${i}))`)
        const on = k.text(tab, nm, { style: 'Hint 18', color: 'onGold', autoWidth: true, name: 'Tab word on' })
        k.bindExpression(on, 'visible', `round(${t}) == ${i}`)
        const off = k.text(tab, nm, { style: 'Hint 18', color: 'onVoid', autoWidth: true, name: 'Tab word' })
        k.bindExpression(off, 'visible', `round(${t}) != ${i}`)
        k.on(tab, set(questTab.id, { value: i, glide: 200 }))
      })
      for (const key of ['ArrowLeft', 'ArrowRight', 'a', 'd', 'Tab']) k.on(quests, set(questTab.id, { expression: `1 - round(${t})`, glide: 200 }), { key })
      k.on(quests, back(), { key: 'Escape' })
      k.on(quests, when([{ if: 'upper($key) == "J"', then: [back()] }]), { key: '*' })
      const check = (parent: string, x: number, y: number, done: string) => {
        k.rect(parent, 26, 26, [], { name: 'Box', radius: 3, stroke: { color: 'sepiaSoft', width: 2 }, absolute: { x, y } })
        if (done === 'false') return
        const m = poly(k, parent, [[x + 4, y + 13], [x + 11, y + 21], [x + 24, y + 3]], 'blood', { name: 'Tick', stroke: 4 })
        if (done !== 'true') k.bindExpression(m, 'visible', done)
      }
      const active = box(k, quests, 120, 290, 1680, 640, { name: 'Active quests' })
      k.bindExpression(active, 'visible', `round(${t}) == 0`)
      const card = (parent: string, x: number, title: string, giver: string, steps: [string, string, string?][], seed: number, seal?: boolean) => {
        const p = parchment(parent, x, 0, 540, 620, { name: 'Quest card', seed })
        label(k, p, title, 'Item 38', 'sepia', 40, 40, { w: 460, name: 'Quest title' })
        label(k, p, giver, 'Small 18', 'sepiaSoft', 40, 136, { w: 460, name: 'Quest giver' })
        flourish(k, p, 270, 186, 320, 'goldDeep', 'Quest flourish')
        steps.forEach(([text, done, live], j) => {
          check(p, 40, 222 + j * 96, done)
          if (live) readout(k, p, live, text, 'Body 24', 'sepia', 84, 216 + j * 96, { w: 420, name: 'Quest objective' })
          else label(k, p, text, 'Body 24', 'sepia', 84, 216 + j * 96, { w: 420, name: 'Quest objective' })
        })
        if (seal) {
          k.ellipse(p, 96, 'blood', { name: 'Wax seal', absolute: { x: 404, y: 494 }, effects: [glow(k, 'scrim', 10, 0.6)] })
          rune(k, p, 437, 516, 50, 5, 'wax', { width: 4, name: 'Seal mark' })
        }
        return p
      }
      card(active, 0, 'The Ashen Crown', 'Main quest', [
        ['Reach the bell tower courtyard', 'true'],
        ['Silence the Bellringer 160/160', `${wraith.n} <= 0`, `"Silence the Bellringer " + round(${wraith.n}) + "/" + ${maxWraith.n}`],
        ['Lift the crown from the ash', `${wraith.n} <= 0`],
      ], 101)
      card(active, 570, 'Ferry for the Drowned', 'From Oriel Thane', [
        ['Speak with the ferrywoman at Vaelmoor', `${metOriel.n} == 1`],
        ['Earn her trust 40/60', `${trust.n} >= 60`, `"Earn her trust " + round(${trust.n}) + "/60"`],
        ['Receive the Ember of Vaelmoor', `${hasEmber.n} == 1`],
      ], 102)
      card(active, 1140, 'A Bell Without a Tongue', 'Found in the belfry', [
        ['Find the bell-tower key', 'true'],
        ['Learn why the bell still rings', `${stage.n} == 4`],
        ['Ring it once, for the dead', 'false'],
      ], 103)
      const done = box(k, quests, 120, 290, 1680, 640, { name: 'Completed quests' })
      k.bindExpression(done, 'visible', `round(${t}) == 1`)
      card(done, 0, 'Kindling', 'Prologue', [['Wake in the ash', 'true'], ['Light the first brazier', 'true'], ['Take up the falchion', 'true']], 104, true)
      card(done, 570, 'The Pilgrim\'s Toll', 'From Brother Aldous', [['Carry the pilgrims to the gate', 'true'], ['Pay their toll in silver', 'true'], ['Keep the cloak they gave you', 'true']], 105, true)
      card(done, 1140, 'Salt for the Graves', 'From the sexton', [['Gather salt from the marsh', 'true'], ['Walk the graves at dusk', 'true'], ['Say every name aloud', 'true']], 106, true)
      const b = k.instance(quests, 'Seal button', { Label: 'Close  J' }, { name: 'Close', absolute: { x: 1660, y: 190 } })
      k.on(b, back())
      hintBar(quests, 'LEFT RIGHT  ACTIVE / COMPLETED      J / ESC  CLOSE')
    }

    // ── Dialogue: Oriel Thane, the ferrywoman. Every choice moves her trust, and her lantern burns with it ──
    {
      const s = stage.n, tr = trust.n
      k.rect(talk, W, 620, [k.gradient({ from: 'fen', to: 'void', angle: 90, fromOpacity: 1, toOpacity: 0.3 })], { name: 'Night sky', absolute: { x: 0, y: 0 } })
      k.ellipse(talk, 150, 'parchment', { name: 'Moon', absolute: { x: 180, y: 70 }, effects: [glow(k, 'parchment', 60, 0.5)] })
      k.rect(talk, W, 460, [k.gradient({ from: 'fen', to: 'void', angle: 90, fromOpacity: 0.9, toOpacity: 1 })], { name: 'River', absolute: { x: 0, y: 620 } })
      for (let i = 0; i < 6; i++) { const r = k.rect(talk, 120 - i * 12, 6, 'parchment', { name: 'Moon on water', radius: 3, absolute: { x: 200 + (i % 2) * 20, y: 650 + i * 22 }, opacity: 0.5 - i * 0.06 }); drift(k, r, 'scaleX', 0.3, 0.3 + i * 0.1, i * 0.2) }
      poly(k, talk, [[0, 640], [0, 560], [260, 540], [520, 600], [700, 620]], 'soot', { name: 'Far bank' })
      lines(k, talk, [[[80, 640], [86, 500]], [[110, 640], [124, 480]], [[140, 640], [134, 520]], [[1800, 640], [1790, 500]], [[1830, 640], [1846, 470]]], 'void', 5, { name: 'Reeds' })
      // Oriel on her ferry: hooded, a lantern on a pole — its halo grows as she trusts you.
      const ferry = box(k, talk, 560, 250, 800, 420, { name: 'Ferry' })
      poly(k, ferry, [[40, 340], [760, 340], [700, 400], [100, 400]], 'soot', { name: 'Hull' })
      lines(k, ferry, [[[620, 340], [560, 40]]], 'soot', 8, { name: 'Pole' })
      const halo = k.ellipse(ferry, 360, [k.gradient({ from: 'flame', to: 'ember', kind: 'RADIAL', fromOpacity: 0.7, toOpacity: 0, handles: [{ x: 0.5, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 1 }] })], { name: 'Lantern halo', absolute: { x: 380, y: -140 } })
      k.bindExpression(halo, 'opacity', `0.25 + ${tr} / 100 * 0.75`)
      k.bindExpression(halo, 'scaleX', `0.6 + ${tr} / 100 * 0.7`)
      k.bindExpression(halo, 'scaleY', `0.6 + ${tr} / 100 * 0.7`)
      const lampFlame = poly(k, ferry, tear(560, 14, 46, 14), 'flame', { name: 'Lantern flame', effects: [glow(k, 'ember', 24)] })
      k.patch(lampFlame, { anchorX: 0.5, anchorY: 1 } as never)
      k.behave(lampFlame, 'scaleY', [{ kind: 'noise', amp: 0.2, freq: 3, seed: 8 }])
      k.rect(ferry, 36, 50, [], { name: 'Lantern cage', stroke: { color: 'goldDeep', width: 4 }, absolute: { x: 542, y: 12 } })
      const oriel: Pt[] = [[300, 340], [310, 180], [340, 110], [380, 90], [420, 110], [446, 180], [470, 340]]
      poly(k, ferry, oriel, 'void', { name: 'Oriel' })
      poly(k, ferry, oriel, 'ember', { name: 'Oriel rim light', stroke: 2, closed: true, opacity: 0.7, effects: [glow(k, 'ember', 16)] })
      poly(k, ferry, [[350, 150], [410, 150], [404, 190], [356, 190]], 'panel', { name: 'Oriel hood hollow' })
      k.ellipse(ferry, 8, 'flame', { name: 'Oriel eye', absolute: { x: 366, y: 164 } })
      k.ellipse(ferry, 8, 'flame', { name: 'Oriel eye', absolute: { x: 388, y: 164 } })
      lines(k, ferry, [[[440, 220], [560, 180]]], 'void', 14, { name: 'Oriel arm' })
      drift(k, ferry, 'translateY', 6, 0.25); drift(k, ferry, 'rotation', 0.6, 0.18)
      embers(talk, 10, { x: 900, y: 0, w: 400, h: 420 }, 101)

      // The trust meter.
      const meter = box(k, talk, 1300, 40, 300, 150, { name: 'Trust', fill: k.tint('scrim', 0.75), radius: 8, stroke: { color: 'line', width: 2 } })
      label(k, meter, 'Oriel\'s trust', 'Small 18', 'dim', 20, 16, { name: 'Trust label' })
      readout(k, meter, `${tr} < 25 ? "Hostile" : ${tr} < 50 ? "Wary" : ${tr} < 75 ? "Warming" : "Trusted"`, 'Wary', 'Label 26', 'flame', 20, 44, { w: 180, name: 'Trust word' })
      readout(k, meter, `round(${tr})`, '40', 'Value 26', 'onVoid', 200, 44, { w: 80, align: 'RIGHT', name: 'Trust value' })
      box(k, meter, 20, 100, 260, 14, { name: 'Trust track', radius: 7, fill: [k.gradient({ from: 'danger', to: 'gold', angle: 0 })] })
      const mark = poly(k, meter, [[13, 118], [27, 118], [20, 132]], 'onVoid', { name: 'Trust marker' })
      k.bindExpression(mark, 'x', `13 + ${tr} / 100 * 260`)

      // The dialogue page: her line, and your choices.
      const pg = parchment(talk, 160, 640, 1600, 400, { name: 'Dialogue page', seed: 211 })
      const plate = box(k, talk, 200, 606, 420, 64, { name: 'Speaker plate', fill: 'oxblood', radius: 6, stroke: { color: 'gold', width: 2 }, align: 'CENTER', justify: 'CENTER' })
      k.text(plate, 'Oriel Thane', { style: 'Speaker 34', color: 'onVoid', autoWidth: true, name: 'Speaker' })
      const LINES = [
        'You smell of the fire, crownseeker. The river carries no one across the burning for free.',
        'Coin. It is always coin. Very well — but the Bellringer will hear the oars.',
        'You carried them all this way... Take this. It was my daughter\'s. The Ember of Vaelmoor opens the bell tower.',
        'Then row alone, and drown alone. The river keeps what it is owed.',
        'The Bellringer was the old king\'s own. It rings for the crown still. Strike while the bell is silent.',
      ]
      const line = readout(k, pg, LINES.map((l, i) => `${s} == ${i} ? "${l}"`).join(' : ') + ' : ""', LINES[0], 'Dialogue 32', 'sepia', 60, 70, { w: 1480, name: 'Oriel line' })
      k.bindExpression(line, 'visible', `${subs.n} == 1`)
      const hushed = label(k, pg, 'Oriel speaks, low and slow. (Subtitles are off.)', 'Lore 24', 'sepiaSoft', 60, 80, { w: 1480, name: 'Subtitles off' })
      k.bindExpression(hushed, 'visible', `${subs.n} == 0`)
      interface Choice { text: string; trust: number; to: number | 'leave'; give?: boolean }
      const CHOICES: Choice[][] = [
        [{ text: 'I can pay the toll in coin.', trust: 10, to: 1 }, { text: 'I carry the ashes of Vaelmoor. Let me give them to the water.', trust: 25, to: 2, give: true }, { text: 'Row the boat, old woman, or I take the oars.', trust: -25, to: 3 }],
        [{ text: 'Tell me of the Bellringer.', trust: 5, to: 4 }, { text: 'Then let it hear. Row.', trust: 0, to: 'leave' }],
        [{ text: 'I will bring it back to you, Oriel.', trust: 15, to: 4 }, { text: 'Farewell.', trust: 0, to: 'leave' }],
        [{ text: 'Forgive me. The fire has made me cruel.', trust: 15, to: 0 }, { text: 'Leave her to the river.', trust: 0, to: 'leave' }],
        [{ text: 'Farewell, ferrywoman.', trust: 0, to: 'leave' }],
      ]
      const count = `(${CHOICES.map((c, i) => `${s} == ${i} ? ${c.length}`).join(' : ')} : 1)`
      const act = (c: Choice): PrototypeAction[] => [
        ...(c.trust ? [set(trust.id, { expression: `clamp(${tr} + ${c.trust}, 0, 100)`, glide: 700, easing: 'EASE_IN_OUT' })] : []),
        ...(c.give ? [set(hasEmber.id, { value: 1, glide: 600 })] : []),
        set(talkFocus.id, { value: 0, glide: 120 }),
        ...(c.to === 'leave' ? [set(stage.id, { expression: `${hasEmber.n} == 1 ? 4 : 0` }), back()] : [set(stage.id, { value: c.to })]),
      ]
      const rowAct = (r: number) => when(CHOICES.map((cs, st) => (cs[r] ? { if: `${s} == ${st}`, then: act(cs[r]) } : null)).filter((b): b is { if: string; then: PrototypeAction[] } => !!b))
      for (let r = 0; r < 3; r++) {
        const row = box(k, pg, 60, 196 + r * 60, 1480, 54, { name: 'Choice' })
        const pl = k.rect(row, 1480, 54, k.tint('ember', 0.28), { name: 'Choice plate', radius: 6, absolute: { x: 0, y: 0 } })
        k.bindExpression(pl, 'opacity', `max(0, 1 - abs(${talkFocus.n} - ${r}))`)
        const num = box(k, row, 10, 9, 36, 36, { name: 'Choice number', radius: 18, fill: 'goldDeep', align: 'CENTER', justify: 'CENTER' })
        k.text(num, String(r + 1), { style: 'Cap 20', color: 'onVoid', autoWidth: true, name: 'Number' })
        readout(k, row, CHOICES.map((cs, st) => `${s} == ${st} ? "${cs[r]?.text ?? ''}"`).join(' : ') + ' : ""', CHOICES[0][r].text, 'Choice 26', 'sepia', 64, 10, { w: 1380, name: 'Choice words' })
        k.bindExpression(row, 'visible', `${count} > ${r}`)
        k.on(row, set(talkFocus.id, { value: r, glide: 120 }), { trigger: 'MOUSE_ENTER' })
        k.on(row, rowAct(r))
      }
      for (const key of ['ArrowDown', 's']) k.on(talk, set(talkFocus.id, { expression: `(round(${talkFocus.n}) + 1) % ${count}`, glide: 120 }), { key })
      for (const key of ['ArrowUp', 'w']) k.on(talk, set(talkFocus.id, { expression: `(round(${talkFocus.n}) + ${count} - 1) % ${count}`, glide: 120 }), { key })
      k.on(talk, when([0, 1, 2].map(r => ({ if: `round(${talkFocus.n}) == ${r} && ${count} > ${r}`, then: [rowAct(r)] }))), { key: 'Enter' })
      for (let r = 0; r < 3; r++) k.on(talk, when([{ if: `${count} > ${r}`, then: [rowAct(r)] }]), { key: String(r + 1) })
      k.on(talk, back(), { key: 'Escape' })
      // The gift: the Ember of Vaelmoor pops in when it is given (its presence glides, so it grows as it arrives).
      const gift = box(k, talk, 1640, 250, 240, 290, { name: 'Gift' })
      const gp = parchment(gift, 0, 0, 240, 290, { name: 'Gift page', seed: 5 })
      icon(gp, 'ember', 60, 40, 1.2, 'legendary', 'Gift icon')
      label(k, gp, 'Received', 'Tiny 16', 'sepiaSoft', 20, 180, { w: 200, align: 'CENTER', name: 'Gift label' })
      label(k, gp, 'Ember of Vaelmoor', 'Label 26', 'sepia', 20, 206, { w: 200, align: 'CENTER', name: 'Gift name' })
      k.bindExpression(gift, 'visible', `${hasEmber.n} > 0`)
      k.bindExpression(gift, 'scaleX', `0.5 + ${hasEmber.n} * 0.5`)
      k.bindExpression(gift, 'scaleY', `0.5 + ${hasEmber.n} * 0.5`)
      k.bindExpression(gift, 'opacity', `${hasEmber.n}`)
      label(k, talk, '1 2 3  OR  ↑ ↓ ENTER  CHOOSE      ESC  LEAVE', 'Hint 18', 'dim', 160, 1046, { w: 1600, align: 'CENTER', name: 'Talk hints' })
      k.cues(talk, [{ layer: 'Dialogue page', preset: 'rise-in', at: 0 }, { layer: 'Speaker plate', preset: 'slide-in', at: 250, params: { direction: 'left' } }])
    }

    // ── Pause: over the courtyard, which keeps idling behind the scrim ──
    {
      const pg = parchment(pause, 610, 150, 700, 780, { name: 'Pause page', seed: 303 })
      label(k, pg, 'Paused', 'Heading 60', 'sepia', 0, 50, { w: 700, align: 'CENTER', name: 'Screen title' })
      flourish(k, pg, 350, 140, 360, 'goldDeep', 'Pause flourish')
      menu(k, pg, [
        { label: 'Resume', actions: [close()] },
        { label: 'Satchel', actions: [go(inventory, 'DISSOLVE', { duration: 300 })] },
        { label: 'Skills', actions: [go(tree, 'DISSOLVE', { duration: 300 })] },
        { label: 'Quest log', actions: [go(quests, 'DISSOLVE', { duration: 300 })] },
        { label: 'Settings', actions: [go(settings, 'DISSOLVE', { duration: 300 })] },
        { label: 'Abandon journey', actions: [go(main, 'DISSOLVE', { duration: 450 })] },
      ], { focus: pauseFocus, x: 70, y: 180, width: 560, pitch: 80, style: 'Menu 44', color: 'sepia', plate: k.tint('gold', 0.55), marker: { color: 'blood' }, escape: [close()], radius: 6 })
      readout(k, pg, `${name.n} + "  ·  " + ${playtime.n} + "  ·  " + group(${gold.n}) + " gold"`, `${SAVES[0].name}  ·  ${SAVES[0].time}  ·  1,240 gold`, 'Small 18', 'sepiaSoft', 40, 690, { w: 620, align: 'CENTER', name: 'Run stats' })
    }

    // ── Game over: the embers dim — one candle gutters out ──
    {
      k.rect(over, W, H, [k.gradient({ from: 'blood', to: 'void', kind: 'RADIAL', fromOpacity: 0.5, toOpacity: 0, handles: [{ x: 0.5, y: 0.35 }, { x: 1, y: 0.35 }, { x: 0.5, y: 0.9 }] })], { name: 'Last light', absolute: { x: 0, y: 0 } })
      const c = candle(over, 930, 90, { h: 150, name: 'Last candle', seed: 31, halo: 320 })
      keys(k, c.flame, 'scaleY', [{ t: 0, v: 1, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 1800, v: 0.5, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 2600, v: 0.05 }])
      keys(k, c.flame, 'opacity', [{ t: 0, v: 1, ease: { kind: 'hold' } }, { t: 2300, v: 1, ease: { kind: 'linear' } }, { t: 2700, v: 0 }])
      const haloId = k.named(c.g, 'Halo')[0]
      keys(k, haloId, 'scaleX', [{ t: 0, v: 1, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 2600, v: 0.1 }])
      keys(k, haloId, 'scaleY', [{ t: 0, v: 1, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 2600, v: 0.1 }])
      const smoke = box(k, over, 900, 0, 120, 160, { name: 'Smoke' })
      for (let i = 0; i < 3; i++) {
        const w = lines(k, smoke, [[[60, 150], [50 + i * 6, 120], [70 - i * 4, 90], [54, 60], [66 + i * 3, 30]]], 'dim', 5, { name: 'Smoke wisp', opacity: 0, effects: [blurFx(3)] })
        keys(k, w, 'opacity', [{ t: 2600 + i * 200, v: 0, ease: { kind: 'ease', name: 'cubic-out' } }, { t: 3000 + i * 200, v: 0.85, ease: { kind: 'ease', name: 'cubic-in' } }, { t: 4600, v: 0 }])
        keys(k, w, 'translateY', [{ t: 2600 + i * 200, v: 20, ease: { kind: 'linear' } }, { t: 4600, v: -60 }])
      }
      label(k, over, 'The embers dim', 'Banner 110', 'onVoid', 160, 420, { w: 1600, align: 'CENTER', name: 'Over title' })
      readout(k, over, `${name.n} + " fell in the bell-tower courtyard. The crown waits in the ash."`, `${SAVES[0].name} fell in the bell-tower courtyard. The crown waits in the ash.`, 'Lore 24', 'dim', 260, 560, { w: 1400, align: 'CENTER', name: 'Over line' })
      menu(k, over, [
        { label: 'Rekindle', hint: 'At the last brazier', actions: [...freshFight, go(hud, 'DISSOLVE', { duration: 700 })] },
        { label: 'Return to the hearth', actions: [go(main, 'DISSOLVE', { duration: 500 })] },
      ], { focus: endFocus, x: 560, y: 680, width: 800, pitch: 88, style: 'Menu 44', color: 'onVoid', plate: k.tint('blood', 0.6), marker: { color: 'ember' }, hintStyle: 'Hint 18', radius: 6 })
      k.cues(over, [{ layer: 'Over title', preset: 'blur-in', at: 600 }, { layer: 'Over line', preset: 'fade-in', at: 1400 }])
    }

    // ── Victory: the crown reclaimed, and what it cost ──
    {
      k.rect(victory, W, H, [k.gradient({ from: 'gold', to: 'oxblood', kind: 'RADIAL', fromOpacity: 0.3, toOpacity: 0, handles: [{ x: 0.5, y: 0.25 }, { x: 1.05, y: 0.25 }, { x: 0.5, y: 0.9 }] })], { name: 'Dawn', absolute: { x: 0, y: 0 } })
      const rays = box(k, victory, 660, -60, 600, 600, { name: 'Rays' })
      for (let i = 0; i < 12; i++) { const a = (i * Math.PI) / 6; if (Math.sin(a + 0.08) > 0.05) continue; sector(k, rays, 300, 300, 300, 60, a, a + 0.16, k.tint('flame', 0.22), { name: 'Ray' }) }
      k.patch(rays, { anchorX: 0.5, anchorY: 0.5 } as never)
      spin(k, rays, 8)
      embers(victory, 30, { x: 0, y: 200, w: W, h: 880 }, 505)
      const crown = box(k, victory, 710, 110, 500, 240, { name: 'Crown reclaimed' })
      const cpts: Pt[] = [[20, 220], [20, 90], [90, 150], [150, 40], [210, 130], [250, 0], [290, 130], [350, 40], [410, 150], [480, 90], [480, 220]]
      poly(k, crown, cpts, [k.gradient({ from: 'flame', to: 'goldDeep', angle: 90 })], { name: 'Crown', effects: [glow(k, 'gold', 50, 0.9)] })
      poly(k, crown, [[20, 180], [480, 180], [480, 200], [20, 200]], 'blood', { name: 'Crown band' })
      for (const x of [110, 250, 390]) poly(k, crown, [[x, 178], [x + 12, 190], [x, 202], [x - 12, 190]], 'legendary', { name: 'Crown gem' })
      drift(k, crown, 'translateY', 8, 0.3)
      const lock = k.stack(victory, { name: 'Victory lockup', width: 1600, gap: 8, align: 'CENTER', absolute: { x: 160, y: 370 } })
      k.text(lock, 'The crown reclaimed', { style: 'Banner 110', color: 'onVoid', align: 'CENTER', name: 'Victory title' })
      const vl = k.text(lock, 'The bell is silent. The Bellringer rests.', { style: 'Lore 24', color: 'dim', align: 'CENTER', name: 'Victory line' })
      k.bindExpression(vl, 'characters', `"The bell is silent. " + ${name.n} + " lifts the Ashen Crown from the cinders."`)
      const tally = parchment(victory, 310, 600, 1300, 280, { name: 'Tally', seed: 404 })
      ;([
        ['Health kept', `round(${health.n}) + " / " + ${maxHealth.n}`, '100 / 100'],
        ['Gold carried', `group(${gold.n})`, '1,240'],
        ['Potions left', `${potions.n}`, '3'],
        ['Oriel\'s trust', `round(${trust.n})`, '40'],
      ] as const).forEach(([nm, e, rest], i) => {
        label(k, tally, nm, 'Small 18', 'sepiaSoft', 60 + i * 300, 60, { w: 260, name: 'Tally name' })
        readout(k, tally, e, rest, 'Stat 64', 'sepia', 60 + i * 300, 96, { w: 260, name: 'Tally value' })
      })
      readout(k, tally, `"Renown:  " + (${health.n} >= 80 ? "Crownbearer" : ${health.n} >= 50 ? "Ember Knight" : ${health.n} >= 25 ? "Ashwalker" : "Survivor")`, 'Renown:  Crownbearer', 'Label 26', 'blood', 60, 200, { w: 1180, align: 'CENTER', name: 'Renown' })
      const cont = k.instance(victory, 'Seal button', { Label: 'Return to the hearth  ENTER' }, { name: 'Continue', absolute: { x: 780, y: 920 } })
      k.on(cont, go(main, 'DISSOLVE', { duration: 500 }))
      k.link(victory, main, 'DISSOLVE', { key: 'Enter', duration: 500 })
      k.cues(victory, [{ layer: 'Crown reclaimed', preset: 'rise-in', at: 0 }, { layer: 'Victory lockup', preset: 'blur-in', at: 400 }, { layer: 'Tally', preset: 'rise-in', at: 900 }])
    }

    // A layer shown by a live value starts as that value says (hidden text is hidden in the file, not only in play).
    for (const n of Object.values(k.doc.nodes) as (AnyNode & { boundExpressions?: Record<string, string> })[]) {
      if (n.boundExpressions?.visible === undefined) continue
      const r = resolveNodeVariables(n, k.doc.variables, k.doc.variableCollections)
      k.patch(n.id, { visible: r.visible !== false })
    }
    return k.finish()
  },
})
