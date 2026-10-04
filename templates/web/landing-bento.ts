// Bento SaaS landing page for Tessera (the AI workspace that plans your week from your meetings, docs and inbox),
// in the bento grid look: a warm-grey page of rounded tiles in white, mint, sand, sky, rose, one dark night tile
// and one acid-lime accent, never three cards alike in a row. The hero is the product as a small bento of its own,
// working on the page timeline: in the night tile the ask sits in a lime bubble and Tessera's reply types itself out
// behind a caret, then its chips pop; the week beside it fills with blocks; the lime tile counts to 6.5 hours back.
// Under it: a band of customers' names running on white tiles; the features as an uneven bento (Autoplan with the
// week's focus blocks dropping in, follow-ups ticked one by one, meeting notes, a focus switch that flips, an inbox
// whose count falls from 38 to 6); the results, a twelve-week line that draws itself beside two counting figures; a
// customer's words beside a photo slot; three plans; a closing night tile; and a footer with real columns. A 1440
// desktop page, re-laid out (motion and all) at the laptop, tablet and phone breakpoints.

import { Kit, preset, type Count, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { buttons, nav, type Breakpoint } from '@popcraft/kit/templates/web/shared'
import { portraitSlot } from '@popcraft/kit/templates/saas/video-shared'
import { CONTENT, compactNav, footer, respond, typeScale } from '@popcraft/kit/templates/saas/web-shared'
import {
  TESSERA, WEB_STEPS, WEB_TYPE, assemble, avatarSlice, bentoBrand, bentoRow, calendarSlice, chartSlice, chatSlice, drawChart, fillWeek, fitAvatars, fitCalendar, fitChart,
  flip, logoBand, switchSlice, tileLabel, typeOut, webTile,
} from '@popcraft/kit/templates/saas/style-bento-shared'

const NAME = 'Bento SaaS landing page'
const DURATION = 6000
const CUSTOMERS = ['Parcelwise', 'Northwind Studio', 'Lumen Health', 'Oakline Legal', 'Brightfold', 'Kestrel Labs', 'Harbor & Pine'] as const
const FOLLOW = ['Dana: revised launch checklist', 'Priya: Q4 hiring plan notes', 'Marco: pricing page feedback', 'Ops: vendor renewal, due Fri'] as const
const NOTES = ['Launch moves to Thursday 10:00', 'Dana owns the checklist', 'Pricing copy needs legal by Wed'] as const
/** The side column's width beside a filling tile, and the hero's. */
const SIDE = 384, HERO_SIDE = 280, PAD = 32, HPAD = 24

const cues: Cue[] = [
  assemble(['Hero chat', 'Hero week', 'Hero stat'], 0, 90, 600),
  typeOut('Reply', 500, 2100),
  { layer: 'Chip', preset: 'pop-in', at: 2700, stagger: { delay: 120, order: 'selection' }, params: { duration: 450, amount: 0.7 } },
  { layer: 'Check', preset: 'pop-in', at: 1200, stagger: { delay: 300, order: 'selection' }, params: { duration: 420, amount: 0.6 } },
  { layer: 'Note row', preset: 'slide-in', at: 900, stagger: { delay: 220, order: 'selection' }, params: { direction: 'left', duration: 450 } },
]

const counts: Count[] = [
  { layer: 'Hero figure', at: 900, duration: 2000, counter: { from: 0, to: TESSERA.saved, decimals: 1, suffix: ' h' } },
  { layer: 'Inbox figure', at: 1000, duration: 2400, counter: { from: 38, to: 6 } },
  { layer: 'Result figure', at: 1200, duration: 2400, counter: { from: 0, to: TESSERA.saved, decimals: 1, suffix: ' h' } },
  { layer: 'Teams figure', at: 1200, duration: 2400, counter: { from: 0, to: 41000, separator: ',' } },
]

export default defineTemplate({
  id: 'landing-bento',
  meta: {
    name: NAME,
    description: 'A full landing page in the bento grid look for an AI workspace: rounded tiles in an uneven grid on a warm grey page, one lime accent. The hero is the product as a small bento working on the page timeline (a reply typing itself out behind a caret, a week filling with blocks, a figure counting to 6.5 hours back); under it a running band of customers, the features as an uneven bento with live tiles (focus blocks dropping in, follow-ups ticked, a switch that flips, an inbox count falling), a twelve-week line that draws beside counting figures, a customer quote with a photo slot, three plans, a closing tile and a footer. Desktop to phone',
    category: 'web', tags: ['landing page', 'saas', 'bento', 'bento grid', 'tiles', 'dashboard', 'ai', 'productivity', 'calendar', 'hero', 'chart', 'counter', 'marquee', 'testimonial', 'pricing', 'animation', 'website', 'responsive'],
    platforms: ['web'], formats: ['page'], useCases: ['launch', 'brand-intro'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  breakpoints: true,
  motion: { cues, counts },
  build() {
    const k = new Kit(NAME, preset('web-desktop'))
    k.quantizeGeometry = true
    bentoBrand(k, { tagline: 'Your week, planned before Monday.' })
    const s = typeScale(k, { ...WEB_TYPE })
    buttons(k, { style: s('Button 16'), pad: [14, 24], radius: 999 })

    const sheet = k.sheet
    k.flowSheet(sheet, 112, { top: 28, right: 120, bottom: 56, left: 120 }, 'paper', 'MIN', 'MIN')
    k.patch(sheet, { layoutSizingVertical: 'HUG', minHeight: 1024, clipsContent: true })
    k.timeline(sheet, { duration: DURATION, fps: 30 })
    k.patch(sheet, { height: 6000 })

    // ── The top: the nav, and the hero: the words beside the product as a small bento, working.
    const top = k.stack(sheet, { gap: 56, name: 'Top' })
    nav(k, top, { links: ['Product', 'Pricing', 'Customers', 'Changelog', 'Sign in'], cta: 'Start free', style: s('Nav 15'), brandStyle: s('Brand 20') })
    const hero = k.stack(top, { direction: 'HORIZONTAL', gap: 24, align: 'CENTER', name: 'Hero' })
    const copy = k.stack(hero, { width: 488, gap: 26, name: 'Copy' })
    const tag = k.stack(copy, { direction: 'HORIZONTAL', width: 'HUG', gap: 10, align: 'CENTER', fill: 'card', radius: 999, padding: { top: 7, right: 14, bottom: 7, left: 8 }, name: 'Tag' })
    const tagNew = k.stack(tag, { direction: 'HORIZONTAL', width: 'HUG', fill: 'primary', radius: 999, padding: { top: 3, right: 10, bottom: 3, left: 10 }, name: 'Tag new' })
    k.text(tagNew, 'New', { style: s('Ui 13'), color: 'onPrimary', autoWidth: true, name: 'Tag new words' })
    k.text(tag, `${TESSERA.name} ${TESSERA.version}: ${TESSERA.feature}`, { style: s('Ui 13'), color: 'onCard', autoWidth: true, name: 'Tag words' })
    k.text(copy, '{{brand.tagline}}', { style: s('Display 64'), color: 'text', name: 'Headline' })
    k.text(copy, 'Tessera reads your meetings, docs and inbox, then books your focus time, drafts the follow-ups and moves what can wait. You open Monday to a week that already makes sense.', { style: s('Lead 20'), color: 'onPaper', name: 'Lead' })
    const ctas = k.stack(copy, { direction: 'HORIZONTAL', gap: 12, wrap: true, name: 'Ctas' })
    k.instance(ctas, 'Button', { Label: 'Start free' }, { name: 'CTA primary' })
    k.instance(ctas, 'Button quiet', { Label: 'Watch the 2-minute tour' }, { name: 'CTA quiet' })
    k.text(copy, TESSERA.trial, { style: s('Small 13'), color: 'onPaper', name: 'Terms' })

    const board = k.stack(hero, { direction: 'HORIZONTAL', gap: 20, height: 560, name: 'Hero board' })
    const chat = webTile(k, board, { surface: 'night', pad: HPAD, gap: 18, justify: 'MIN', name: 'Hero chat' })
    tileLabel(k, chat, `${TESSERA.name} ${TESSERA.version}`, { style: s('Label 14'), surface: 'night', size: 14, right: TESSERA.feature, name: 'Chat label' })
    const reply = chatSlice(k, chat, { prompt: 'Plan around Thursday\'s launch.', reply: TESSERA.reply, chips: [`${TESSERA.focus} focus blocks`, `${TESSERA.followUps} follow-ups`, '1:1 moved to Fri'], ask: s('Ui 15'), body: s('Reply 20'), chip: s('Ui 13'), bubbleRadius: 18 })
    k.rect(k.node(reply).parentId!, 3, 24, 'primary', { name: 'Caret', absolute: { x: 0, y: 0 } })
    // The composer at the tile's foot, waiting for the next ask.
    const comp = k.stack(chat, { direction: 'HORIZONTAL', gap: 10, align: 'CENTER', justify: 'SPACE_BETWEEN', fill: k.tint('onNight', 0.1), radius: 18, padding: { top: 10, right: 10, bottom: 10, left: 16 }, name: 'Composer' })
    k.text(comp, 'Ask Tessera to move, book or draft', { style: s('Ui 13'), color: 'nightMuted', width: 'FILL', name: 'Composer words' })
    k.ellipse(comp, 30, 'primary', { name: 'Composer send' })
    k.patch(k.node(reply).parentId!, { layoutSizingVertical: 'FILL' })
    const side = k.stack(board, { width: HERO_SIDE, gap: 20, name: 'Hero side' })
    k.patch(side, { layoutSizingVertical: 'FILL' })
    const week = webTile(k, side, { surface: 'card', pad: HPAD, gap: 12, justify: 'MIN', name: 'Hero week' })
    tileLabel(k, week, 'This week', { style: s('Label 14'), surface: 'card', size: 14, right: `${TESSERA.focus} focus`, name: 'Week label' })
    calendarSlice(k, week, { w: HERO_SIDE - 2 * HPAD, h: 230, day: s('Ui 13'), ink: 'onCard', radius: 6 })
    const stat = k.stack(side, { height: 190, fill: 'primary', radius: 28, padding: HPAD, justify: 'SPACE_BETWEEN', name: 'Hero stat' })
    tileLabel(k, stat, 'Back each week', { style: s('Label 14'), surface: 'primary', size: 14 })
    const statB = k.stack(stat, { gap: 4, name: 'Hero stat body' })
    k.text(statB, `${TESSERA.saved} h`, { style: s('Figure 80'), color: 'onPrimary', width: 230, name: 'Hero figure' })
    k.text(statB, 'per person, on average', { style: s('Small 13'), color: 'onPrimary', name: 'Hero figure line' })

    // ── Who plans with it: their names running on white tiles.
    const band = k.stack(sheet, { gap: 18, name: 'Band' })
    k.text(band, `Planning the weeks of ${TESSERA.teams} teams`, { style: s('Label 14'), color: 'onPaper', name: 'Band label' })
    logoBand(k, band, { names: CUSTOMERS, item: 216, height: 64, style: s('Title 20'), duration: DURATION })

    // ── The features, as an uneven bento of live tiles.
    const feat = k.stack(sheet, { gap: 32, name: 'Features' })
    head(k, feat, s, 'What it does', 'One workspace for the whole week.', 'Five things Tessera does before you ask, each one a tile you can open.')
    const rowA = bentoRow(k, feat, { height: 440, name: 'Feature row' })
    const auto = webTile(k, rowA, { surface: 'card', pad: PAD, justify: 'SPACE_BETWEEN', name: 'Autoplan tile' })
    tileWords(k, auto, s, 'card', 'Autoplan', 'Focus time, booked into the gaps', 'It reads the week you have and protects the hours you need, around every meeting you cannot move.')
    calendarSlice(k, auto, { w: 100, h: 200, day: s('Ui 13'), ink: 'onCard', radius: 8 })
    const fol = webTile(k, rowA, { surface: 'rose', width: SIDE, pad: PAD, justify: 'MIN', gap: 14, name: 'Follow tile' })
    tileWords(k, fol, s, 'rose', 'Follow-ups', `${TESSERA.followUps} drafted from Monday's calls`, '')
    for (const f of FOLLOW) {
      const row = k.stack(fol, { direction: 'HORIZONTAL', gap: 12, align: 'CENTER', name: 'Follow row' })
      const check = k.stack(row, { width: 26, height: 26, radius: 13, fill: 'night', justify: 'CENTER', align: 'CENTER', name: 'Check' })
      k.vector(check, 13, 9, [{ closed: false, points: [{ x: 1, y: 4.5 }, { x: 4.5, y: 8 }, { x: 12, y: 1 }] }], [], { name: 'Tick', stroke: { color: 'primary', width: 2.5, cap: 'ROUND', join: 'ROUND' } })
      k.text(row, f, { style: s('Ui 15'), color: 'onRose', width: 'FILL', name: 'Follow words' })
    }
    k.instance(fol, 'Button', { Label: 'Send all' }, { name: 'Send all' })

    const rowB = bentoRow(k, feat, { height: 320, name: 'Feature row' })
    const notes = webTile(k, rowB, { surface: 'sky', width: SIDE, pad: PAD, justify: 'MIN', gap: 14, name: 'Notes tile' })
    tileWords(k, notes, s, 'sky', 'Meeting notes', 'Decisions, not transcripts', '')
    for (const n of NOTES) {
      const row = k.stack(notes, { direction: 'HORIZONTAL', gap: 12, align: 'CENTER', fill: k.tint('card', 0.6), radius: 14, padding: { top: 10, right: 14, bottom: 10, left: 14 }, name: 'Note row' })
      k.rect(row, 8, 8, 'onSky', { radius: 4, name: 'Note dot' })
      k.text(row, n, { style: s('Ui 15'), color: 'onSky', width: 'FILL', name: 'Note words' })
    }
    const focus = webTile(k, rowB, { surface: 'mint', width: 280, pad: PAD, name: 'Focus tile' })
    tileWords(k, focus, s, 'mint', 'Focus mode', 'Do not disturb, on cue', '')
    switchSlice(k, focus, { w: 112, ink: 'onMint' })
    k.text(focus, 'Slack and email hold until 11:30', { style: s('Ui 15'), color: 'onMint', name: 'Focus line' })
    const inbox = webTile(k, rowB, { surface: 'sand', pad: PAD, name: 'Inbox tile' })
    tileWords(k, inbox, s, 'sand', 'Inbox', 'Triaged by what needs you', 'Receipts, newsletters and FYIs are filed. What is left asks for a decision.')
    const ib = k.stack(inbox, { direction: 'HORIZONTAL', gap: 14, align: 'MAX', name: 'Inbox count' })
    k.text(ib, '6', { style: s('Figure 80'), color: 'onSand', width: 110, name: 'Inbox figure' })
    k.text(ib, 'threads need you today, of 38', { style: s('Ui 15'), color: 'onSand', width: 'FILL', name: 'Inbox line' })

    // ── The results: twelve weeks of focus hours drawing, beside two figures.
    const res = k.stack(sheet, { gap: 32, name: 'Results' })
    head(k, res, s, 'Results', 'Six and a half hours back, every week.', 'Measured across teams on Pro in their first twelve weeks: the line is the average person\'s focus hours.')
    const rowC = bentoRow(k, res, { height: 420, name: 'Results row' })
    const ct = webTile(k, rowC, { surface: 'night', pad: PAD, name: 'Chart tile' })
    tileLabel(k, ct, 'Focus hours a week, per person', { style: s('Label 14'), surface: 'night', size: 14, right: '12 weeks', name: 'Chart label' })
    chartSlice(k, ct, { w: 100, h: 230, ink: 'onNight', weight: 5 })
    const axis = k.stack(ct, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', name: 'Chart axis' })
    for (const a of ['Week 1', 'Tessera on', 'Week 12']) k.text(axis, a, { style: s('Small 13'), color: 'nightMuted', autoWidth: true, name: 'Axis label' })
    const figs = k.stack(rowC, { width: SIDE, gap: 20, name: 'Result figures' })
    k.patch(figs, { layoutSizingVertical: 'FILL' })
    const f1 = webTile(k, figs, { surface: 'primary', pad: PAD, name: 'Result tile' })
    tileLabel(k, f1, 'Back each week', { style: s('Label 14'), surface: 'primary', size: 14 })
    k.text(f1, `${TESSERA.saved} h`, { style: s('Figure 80'), color: 'onPrimary', width: 260, name: 'Result figure' })
    const f2 = webTile(k, figs, { surface: 'card', pad: PAD, name: 'Teams tile' })
    tileLabel(k, f2, 'Teams on Tessera', { style: s('Label 14'), surface: 'card', size: 14 })
    const tRow = k.stack(f2, { direction: 'HORIZONTAL', gap: 16, align: 'CENTER', justify: 'SPACE_BETWEEN', name: 'Teams row' })
    k.text(tRow, TESSERA.teams, { style: s('Figure 56'), color: 'onCard', width: 190, name: 'Teams figure' })
    avatarSlice(k, tRow, { d: 44, n: 4, ring: 'card', overlap: 0.34 })

    // ── A customer, beside a photo slot.
    const rowQ = bentoRow(k, sheet, { height: 380, name: 'Quote row' })
    const ph = webTile(k, rowQ, { surface: 'sand', width: SIDE, pad: 0, justify: 'MIN', name: 'Photo tile' })
    portraitSlot(k, ph, SIDE, 380, { radius: 0, ground: 'sand', skin: 'skin', top: 'night', halo: 'primary', name: 'Portrait', photo: 'Customer photo' })
    const q = webTile(k, rowQ, { surface: 'card', pad: 40, name: 'Quote tile' })
    k.text(q, '"Tessera moved 31 meetings in our first week and nobody had to ask. Our engineers got Thursday afternoons back, and the follow-ups go out before we are back at our desks."', { style: s('Quote 32'), color: 'onCard', name: 'Quote words' })
    const who = k.stack(q, { gap: 2, name: 'Quote who' })
    k.text(who, 'Ines Moreau', { style: s('Title 20'), color: 'onCard', name: 'Quote name' })
    k.text(who, 'Head of Operations, Parcelwise (140 people)', { style: s('Body 15'), color: 'muted', name: 'Quote role' })

    // ── Three plans.
    const plans = k.stack(sheet, { gap: 32, name: 'Plans' })
    head(k, plans, s, 'Pricing', 'Start free. Pay when it plans for your team.', `${TESSERA.trial} Billed per seat; yearly saves 20%.`)
    const rowP = bentoRow(k, plans, { height: 300, name: 'Plan row' })
    for (const [name, price, per, what, surface] of [
      ['Free', '$0', 'for one person', 'Plans your week, 3 calendars, notes for 10 meetings a month', 'card'],
      ['Pro', `$${TESSERA.pro}`, `a seat a month, $${TESSERA.proYear} yearly`, 'Autoplan, unlimited notes, follow-ups, focus mode', 'primary'],
      ['Business', `$${TESSERA.business}`, `a seat a month, $${TESSERA.businessYear} yearly`, 'Team planning, SSO, admin controls, data residency', 'night'],
    ] as const) {
      const p = webTile(k, rowP, { surface, pad: PAD, name: 'Plan tile' })
      const ink = surface === 'primary' ? 'onPrimary' : surface === 'night' ? 'onNight' : 'onCard'
      const quiet = surface === 'primary' ? 'onPrimary' : surface === 'night' ? 'nightMuted' : 'muted'
      k.text(p, name, { style: s('Title 24'), color: ink, name: 'Plan name' })
      const pr = k.stack(p, { gap: 4, name: 'Plan price box' })
      k.text(pr, price, { style: s('Price 56'), color: ink, name: 'Plan price' })
      k.text(pr, per, { style: s('Small 13'), color: quiet, name: 'Plan per' })
      k.text(p, what, { style: s('Body 15'), color: quiet, name: 'Plan what' })
    }
    k.instance(plans, 'Button quiet', { Label: 'Compare every plan' }, { name: 'Plans link' })

    // ── The close: one night tile.
    const close = k.stack(sheet, { direction: 'HORIZONTAL', gap: 32, align: 'CENTER', justify: 'SPACE_BETWEEN', fill: 'night', radius: 32, padding: 56, name: 'Close' })
    const cWords = k.stack(close, { gap: 20, name: 'Close words' })
    k.text(cWords, 'Get your Thursdays back.', { style: s('Section 44'), color: 'onNight', name: 'Close title' })
    k.text(cWords, 'Connect a calendar and an inbox. Your first plan is ready in about two minutes.', { style: s('Lead 20'), color: 'nightMuted', name: 'Close line' })
    k.instance(cWords, 'Button', { Label: 'Start free' }, { name: 'Close button' })
    avatarSlice(k, close, { d: 72, n: 5, ring: 'night', overlap: 0.3, name: 'Close team' })

    footer(k, sheet, {
      about: TESSERA.pitch, legal: '© 2026 {{brand.name}} Labs. Tessera never trains on your meetings, docs or mail.',
      columns: [['Product', ['Autoplan', 'Notes', 'Follow-ups', 'Focus mode']], ['Company', ['Customers', 'Pricing', 'Careers', 'Contact']], ['Help', ['Docs', 'Status', 'Security']]],
      brandStyle: s('Brand 20'), headStyle: s('Ui 13'), linkStyle: s('Small 13'), ruleColor: 'text',
    })

    k.counts(sheet, counts)
    k.cues(sheet, cues)
    fit(k, sheet, 'desktop')
    fillWeek(k, sheet, 300, 90)
    flip(k, sheet, [1800])
    drawChart(k, sheet, 600, 3000)

    respond(k, sheet, s, {
      stack: ['Hero', 'Feature row', 'Results row', 'Quote row', 'Plan row', 'Close', 'Footer columns'],
      stackMobile: ['Hero board'],
      restyle: { ...WEB_STEPS } as never,
      hide: { mobile: ['Nav links', 'Close team', 'CTA quiet'] },
      gap: { tablet: 96, mobile: 72 },
      typing: [{ text: 'Reply', caret: 'Caret', at: 500, duration: 2100 }],
      tweak: (kit, id, size) => {
        const narrow = size === 'tablet' || size === 'mobile'
        for (const n of kit.named(id, 'Copy')) kit.patch(n, narrow ? { layoutSizingHorizontal: 'FILL' } : { width: size === 'laptop' ? 440 : 488 })
        if (narrow) {
          // Stacked, each tile is as tall as what is in it.
          for (const name of ['Feature row', 'Results row', 'Quote row', 'Plan row', 'Result figures']) for (const n of kit.named(id, name)) kit.patch(n, { layoutSizingVertical: 'HUG' })
          for (const name of ['Autoplan tile', 'Follow tile', 'Notes tile', 'Focus tile', 'Inbox tile', 'Chart tile', 'Result tile', 'Teams tile', 'Quote tile', 'Plan tile']) for (const n of kit.named(id, name)) kit.patch(n, { layoutSizingVertical: 'HUG', primaryAxisAlignItems: 'MIN', itemSpacing: 18 })
          for (const n of kit.named(id, 'Photo tile')) kit.patch(n, { layoutSizingVertical: 'HUG' })
          for (const n of kit.named(id, 'Hero board')) kit.patch(n, { layoutSizingHorizontal: 'FILL' })
          for (const n of kit.named(id, 'Close')) kit.patch(n, { padding: { top: 40, right: 32, bottom: 40, left: 32 } })
        }
        if (size === 'tablet') compactNav(kit, id, ['Changelog', 'Sign in'], 20)
        if (size === 'mobile') {
          for (const c of kit.named(id, 'Chart label')) for (const n of kit.named(c, 'Label right')) kit.patch(n, { visible: false })
          for (const n of kit.named(id, 'Hero board')) kit.patch(n, { layoutSizingVertical: 'HUG' })
          for (const n of kit.named(id, 'Hero chat')) kit.patch(n, { layoutSizingVertical: 'HUG' })
          // The stat tile hugs its words on the phone, so its figure sits under its label, not a gap below it.
          for (const n of kit.named(id, 'Hero stat')) kit.patch(n, { layoutSizingVertical: 'HUG', primaryAxisAlignItems: 'MIN', itemSpacing: 18 })
          for (const bar of kit.named(id, 'Nav')) for (const n of kit.named(bar, 'Brand name')) kit.patch(n, { visible: true })
          for (const c of kit.named(id, 'Hero chat')) for (const n of kit.named(c, 'Thread')) kit.patch(n, { layoutSizingVertical: 'HUG' })
          for (const n of kit.named(id, 'Hero side')) kit.patch(n, { layoutSizingVertical: 'HUG', layoutSizingHorizontal: 'FILL' })
          for (const n of kit.named(id, 'Hero week')) kit.patch(n, { layoutSizingVertical: 'HUG' })
        }
        fit(kit, id, size)
      },
    })
    return k.finish()
  },
})

/** The product drawings of a page at `size`, each at the width its tile gives it there. */
function fit(k: Kit, root: string, size: Breakpoint) {
  const cw = CONTENT[size], narrow = size === 'tablet' || size === 'mobile', pad = size === 'mobile' ? 24 : PAD
  const wide = narrow ? cw - 2 * pad : cw - SIDE - 20 - 2 * PAD
  const heroSide = size === 'mobile' ? cw : HERO_SIDE
  for (const t of k.named(root, 'Hero week')) fitCalendar(k, t, heroSide - 2 * HPAD, size === 'mobile' ? 200 : 230)
  for (const t of k.named(root, 'Autoplan tile')) fitCalendar(k, t, wide, size === 'mobile' ? 180 : 200)
  for (const t of k.named(root, 'Chart tile')) fitChart(k, t, wide, size === 'mobile' ? 160 : 230)
  if (narrow) for (const name of ['Autoplan tile', 'Follow tile', 'Notes tile', 'Focus tile', 'Inbox tile', 'Chart tile', 'Result tile', 'Teams tile', 'Plan tile']) for (const n of k.named(root, name)) k.patch(n, { padding: { top: pad, right: pad, bottom: pad, left: pad } })
  if (narrow) for (const t of k.named(root, 'Photo tile')) for (const p of k.named(t, 'Portrait')) {
    const w = cw, h = size === 'mobile' ? 300 : 360
    k.patch(p, { width: w, height: h, layoutSizingHorizontal: 'FIXED', layoutSizingVertical: 'FIXED' })
    for (const c of k.node(p).childIds) k.patch(c, { width: w, height: h })
  }
  if (size === 'mobile') fitAvatars(k, root, 36, 0.34)
}

/** A section's head: a quiet kicker, the title, and a line under it. */
function head(k: Kit, parent: string, s: (n: string) => string, kicker: string, title: string, line: string) {
  const h = k.stack(parent, { gap: 12, name: 'Section head' })
  k.text(h, kicker, { style: s('Label 14'), color: 'onPaper', name: 'Section kicker' })
  k.text(h, title, { style: s('Section 44'), color: 'text', name: 'Section title' })
  k.text(h, line, { style: s('Lead 20'), color: 'onPaper', name: 'Section line' })
}

/** A tile's words: its label, a title, and (if any) a line. */
function tileWords(k: Kit, parent: string, s: (n: string) => string, surface: 'card' | 'rose' | 'sky' | 'mint' | 'sand', label: string, title: string, body: string) {
  const w = k.stack(parent, { gap: 8, name: 'Tile words' })
  tileLabel(k, w, label, { style: s('Label 14'), surface, size: 14 })
  const ink = { card: 'onCard', rose: 'onRose', sky: 'onSky', mint: 'onMint', sand: 'onSand' }[surface]
  k.text(w, title, { style: s('Title 24'), color: ink, name: 'Tile title' })
  if (body) k.text(w, body, { style: s('Body 15'), color: 'muted', name: 'Tile body' })
}
