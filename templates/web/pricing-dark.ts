// Dark SaaS pricing page for Latch (feature flags and staged rollouts), in the dark precision look. The monthly /
// yearly switch works in present mode: it is an interactive component (its knob glides between two states), and a
// click also flips the page's `billing/monthly` and `billing/yearly` booleans, which every price and the line under
// it are bound to, so all three plans change at once. Three plans (the middle one raised, each with the rollout's
// four steps lit as far as the plan goes), a comparison table of eight rows with drawn ticks, four questions, a
// closing call and a footer. On load the header and plans come in, the paid prices count up and the table fills in
// row by row. A 1440 desktop page with laptop, tablet and phone layouts.

import { Kit, preset, type Count, type Cue } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { tick } from '@popcraft/kit/templates/shared/marks'
import { cutOn } from '@popcraft/kit/templates/shared/motion'
import { buttons, nav, page } from '@popcraft/kit/templates/web/shared'
import { compactNav, footer, respond, rule, typeScale } from '@popcraft/kit/templates/saas/web-shared'
import { LATCH, WEB_STEPS, WEB_TYPE, card, chip, darkBrand, fitHeroGround, heroGround, sectionHead } from '@popcraft/kit/templates/saas/style-dark-shared'

const NAME = 'Dark SaaS pricing page'

interface Plan { name: string; pitch: string; month: number; steps: number; features: string[]; featured?: boolean; cta: string }
const PLANS: Plan[] = [
  { name: 'Hobby', pitch: 'For a side project, or a first rollout.', month: 0, steps: 1, cta: 'Start free', features: ['One project, five flags', 'One environment', 'Staged rollouts', 'Community forum'] },
  { name: 'Team', pitch: 'For a product team that deploys daily.', month: LATCH.team, steps: 3, featured: true, cta: 'Start a 14-day trial', features: ['Unlimited flags', 'Three environments', 'Guardrails and auto-rollback', 'Ten seats', '90-day audit log'] },
  { name: 'Scale', pitch: 'For a company with a security review.', month: LATCH.scale, steps: 4, cta: 'Talk to us', features: ['Everything in Team', 'Unlimited seats', 'SSO and SCIM', 'Audit log export', '99.99% uptime SLA'] },
]
/** The comparison: a feature, then what each plan gets (`yes` and `no` are drawn). */
const TABLE: readonly [string, string, string, string][] = [
  ['Flags', '5', 'Any', 'Any'],
  ['Environments', '1', '3', 'Any'],
  ['Seats', '1', '10', 'Any'],
  ['Flag checks', 'Any', 'Any', 'Any'],
  ['Guardrails', 'no', 'yes', 'yes'],
  ['Audit log', '7 d', '90 d', '1 yr'],
  ['SSO', 'no', 'no', 'yes'],
  ['Uptime SLA', 'no', '99.9%', '99.99%'],
]
const FAQ: [string, string][] = [
  ['Do you charge per flag check?', 'No. Check a flag a billion times a day and the bill is the same. Plans differ by seats, environments and how long we keep the audit log.'],
  ['What counts as a seat?', 'Anyone who can change a flag. People who only read the dashboards are free on every plan.'],
  ['What if we pass five flags on Hobby?', 'Nothing breaks. Your flags keep working; you cannot add a sixth until you archive one or move to Team.'],
  ['Can we move between monthly and yearly?', 'Any time. Moving to yearly credits what is left of the month. Moving back takes effect at renewal.'],
]
const COL = { desktop: 190, laptop: 170, tablet: 120, mobile: 56 } as const

const cues: Cue[] = [
  { layer: 'Nav', preset: 'fade-in', at: 0, params: { duration: 300 } },
  { layer: 'Headline', preset: 'words-in', at: 80, params: { duration: 420, amount: 50 } },
  { layer: 'Lead', preset: 'rise-in', at: 320, params: { duration: 450 } },
  { layer: 'Switch row', preset: 'rise-in', at: 440, params: { duration: 400 } },
  { layer: 'Plan', preset: 'rise-in', at: 520, params: { duration: 450 }, stagger: { delay: 90 } },
  { layer: 'Plan step', preset: 'wipe-in', at: 900, params: { duration: 260 }, stagger: { delay: 110 } },
  cutOn('Table row', 1300, 110),
]

const counts: Count[] = [
  { layer: 'Team amount', at: 620, duration: 900, counter: { from: 0, to: LATCH.team, prefix: '$' } },
  { layer: 'Scale amount', at: 710, duration: 900, counter: { from: 0, to: LATCH.scale, prefix: '$' } },
]

export default defineTemplate({
  id: 'pricing-dark',
  meta: {
    name: NAME,
    description: 'A pricing page in the dark precision look whose monthly / yearly switch works in present mode: a variable toggle flips every price at once while the knob glides. Three plans with the middle one raised, a comparison table with drawn ticks, four questions, a closing call and a footer; the prices count up and the table fills in on load. Desktop to phone',
    category: 'web', tags: ['pricing', 'plans', 'toggle', 'interactive', 'variables', 'comparison table', 'faq', 'saas', 'dark', 'dark mode', 'developer tools', 'counter', 'animation', 'website', 'responsive'],
    platforms: ['web'], formats: ['page'], useCases: ['pricing', 'launch', 'comparison'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  breakpoints: true,
  motion: { cues, counts },
  build() {
    const k = new Kit(NAME, preset('web-desktop'))
    k.quantizeGeometry = true
    darkBrand(k, { tagline: 'One price per team. Not per flag.' })
    const monthly = k.variable('Billing', 'monthly', 'BOOLEAN', true)
    const yearly = k.variable('Billing', 'yearly', 'BOOLEAN', false)
    const s = typeScale(k, { ...WEB_TYPE, 'Price 56': { size: 56, fontWeight: 700, letterSpacing: -2.6, lineHeight: 58, fontFeatures: { tnum: 1 } }, 'Switch 15': { size: 15, fontWeight: 500, lineHeight: 22 }, 'Switch on 15': { size: 15, fontWeight: 700, lineHeight: 22 } })
    buttons(k, { style: s('Button 15'), pad: [11, 18], radius: 8 })
    // A plan card's own quiet button: its ink is the card's, whatever the page ground is.
    k.component('Button card', { direction: 'HORIZONTAL', width: 'HUG', radius: 8, align: 'CENTER', stroke: { color: 'edge', width: 1, align: 'INSIDE' }, padding: { top: 11, right: 18, bottom: 11, left: 18 }, props: { Label: 'Start free' } }, id => {
      k.propText(id, 'Label', { style: s('Button 15'), color: 'onCard', autoWidth: true })
    })
    // The switch: Monthly or Yearly on click, the knob gliding across, the chosen word set bold.
    k.variantSet('Billing switch', 'Billing', ['Monthly', 'Yearly'], {
      direction: 'HORIZONTAL', width: 'HUG', gap: 12, align: 'CENTER', padding: 4,
      description: 'Monthly or yearly billing: click to switch, and the knob glides across. On the pricing page the click also flips the billing variables every price is bound to.',
      props: { Left: 'Monthly', Right: 'Yearly' },
    }, (state, id) => {
      k.propText(id, 'Left', { style: s(state === 'Monthly' ? 'Switch on 15' : 'Switch 15'), color: state === 'Monthly' ? 'text' : 'onPaper', autoWidth: true })
      const track = k.stack(id, { direction: 'HORIZONTAL', width: 48, height: 26, radius: 13, padding: 3, align: 'CENTER', justify: state === 'Yearly' ? 'MAX' : 'MIN', fill: 'primary', name: 'Track' })
      k.ellipse(track, 20, 'onPrimary', { name: 'Knob' })
      k.propText(id, 'Right', { style: s(state === 'Yearly' ? 'Switch on 15' : 'Switch 15'), color: state === 'Yearly' ? 'text' : 'onPaper', autoWidth: true })
    })
    k.changeTo('Billing switch/Monthly', 'ON_CLICK', 'Billing switch/Yearly', 200, 'EASE_OUT')
    k.changeTo('Billing switch/Yearly', 'ON_CLICK', 'Billing switch/Monthly', 200, 'EASE_OUT')

    const sheet = k.sheet
    page(k, sheet, { gap: 96, top: 24 })
    k.timeline(sheet, { duration: 6000, fps: 30 })
    heroGround(k, sheet, 1440, 560)

    const top = k.stack(sheet, { gap: 64, name: 'Top' })
    nav(k, top, { links: ['Product', 'Guardrails', 'Pricing', 'Docs', 'Sign in'], cta: 'Start free', style: s('Nav 15'), brandStyle: s('Brand 19') })
    // The header in two columns: what it costs on the left, how it is billed (and the switch) on the right.
    const head = k.stack(top, { direction: 'HORIZONTAL', gap: 64, align: 'MAX', name: 'Header' })
    const title = k.stack(head, { gap: 22, name: 'Header title' })
    const tag = k.stack(title, { direction: 'HORIZONTAL', gap: 10, align: 'CENTER', name: 'Eyebrow' })
    k.rect(tag, 8, 8, 'primary', { radius: 2, name: 'Label mark' })
    k.text(tag, 'PRICING', { style: s('Label 13'), color: 'onPaper', name: 'Eyebrow words' })
    k.text(title, '{{brand.tagline}}', { style: s('Display 76'), color: 'text', name: 'Headline' })
    const billing = k.stack(head, { width: 420, gap: 22, name: 'Header billing' })
    k.text(billing, `Every plan checks a flag in ${LATCH.p99} and none of them counts how often. Pay by the year and two months are free.`, { style: s('Lead 19'), color: 'onPaper', name: 'Lead' })
    const sw = k.stack(billing, { direction: 'HORIZONTAL', gap: 14, align: 'CENTER', wrap: true, name: 'Switch row' })
    const toggle = k.instance(sw, 'Billing switch', { Left: 'Monthly', Right: 'Yearly' }, { name: 'Billing toggle' })
    k.setVariable(toggle, monthly, { toggle: true })
    k.setVariable(toggle, yearly, { toggle: true })
    chip(k, sw, 'TWO MONTHS FREE', { name: 'Saving', ink: 'onPaper' })

    // ── The plans.
    const plans = k.stack(sheet, { direction: 'HORIZONTAL', gap: 24, name: 'Plans' })
    for (const p of PLANS) {
      const c = k.stack(plans, { gap: 18, fill: p.featured ? 'raised' : 'card', radius: 14, padding: 28, stroke: { color: p.featured ? 'signal' : 'line', width: 1, align: 'INSIDE' }, name: 'Plan' })
      // The shortest card stands as tall as the two beside it (a row cannot take its height from cards that all fill it).
      if (p.features.length < 5) k.patch(c, { layoutSizingVertical: 'FILL' })
      const planHead = k.stack(c, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', align: 'CENTER', name: 'Plan head' })
      k.text(planHead, p.name, { style: s('Card title 22'), color: 'onCard', autoWidth: true, name: 'Plan name' })
      // The rollout's four steps, lit as far as the plan goes.
      const steps = k.stack(planHead, { direction: 'HORIZONTAL', width: 'HUG', gap: 4, name: 'Plan steps' })
      for (let i = 0; i < 4; i++) k.rect(steps, 22, 6, i < p.steps ? 'signal' : 'edge', { radius: 2, name: i < p.steps ? 'Plan step' : 'Plan step off' })
      k.text(c, p.pitch, { style: s('Body 16'), color: 'cardMuted', name: 'Pitch' })
      // Both prices, one over the other: each is shown by its billing variable.
      const price = k.stack(c, { name: 'Price' })
      const block = (which: 'Monthly' | 'Yearly') => {
        const b = k.stack(price, { gap: 4, name: `${which} price` })
        k.text(b, which === 'Monthly' ? `$${p.month}` : `$${p.month * 10}`, { style: s('Price 56'), color: 'onCard', name: which === 'Monthly' ? `${p.name} amount` : `${p.name} yearly amount` })
        k.text(b, !p.month ? 'free, for as long as you like' : which === 'Monthly' ? 'a month, billed monthly' : `a year: you save $${p.month * 2}`, { style: s('Mono 14'), color: 'cardMuted', name: 'Billed' })
        return b
      }
      k.bindVariable(block('Monthly'), 'visible', monthly)
      k.bindVariable(block('Yearly'), 'visible', yearly)
      k.instance(c, p.featured ? 'Button' : 'Button card', { Label: p.cta }, { name: 'Plan button' })
      rule(k, c, p.featured ? 'edge' : 'line', { name: 'Plan rule' })
      const list = k.stack(c, { gap: 10, name: 'Features' })
      for (const f of p.features) {
        const row = k.stack(list, { direction: 'HORIZONTAL', gap: 10, align: 'CENTER', name: 'Feature' })
        tick(k, row, 16, 'signal', { name: 'Feature tick', weight: 2 })
        k.text(row, f, { style: s('Body 16'), color: 'onCard', name: 'Feature label' })
      }
    }

    // ── The comparison.
    const compare = k.stack(sheet, { gap: 32, name: 'Compare' })
    sectionHead(k, compare, { label: 'COMPARE', title: 'Plan by plan.', s, name: 'Compare head' })
    const table = card(k, compare, { name: 'Table', pad: 28, gap: 0 })
    const cell = (row: string, value: string, i: number) => {
      const drawn = value === 'yes' || value === 'no'
      const c = k.stack(row, { direction: 'HORIZONTAL', width: COL.desktop, name: 'Cell', ...(drawn ? { height: 22, align: 'CENTER' as const } : {}) })
      if (value === 'yes') tick(k, c, 16, 'signal', { name: 'Cell tick', weight: 2 })
      else if (value === 'no') k.rect(c, 12, 2, 'edge', { name: 'Cell dash' })
      else k.text(c, value, { style: s('Mono 14'), color: i === 1 ? 'onCard' : 'cardMuted', name: 'Cell value' })
    }
    const headRow = k.stack(table, { direction: 'HORIZONTAL', gap: 8, align: 'CENTER', padding: { top: 0, right: 0, bottom: 14, left: 0 }, name: 'Table head' })
    k.text(headRow, 'WHAT YOU GET', { style: s('Label 13'), color: 'cardMuted', name: 'Table corner' })
    PLANS.forEach(p => { const c = k.stack(headRow, { direction: 'HORIZONTAL', width: COL.desktop, name: 'Cell' }); k.text(c, p.name.toUpperCase(), { style: s('Label 13'), color: p.featured ? 'signal' : 'cardMuted', name: 'Column name' }) })
    for (const [feature, ...values] of TABLE) {
      const line = k.stack(table, { name: 'Table row' })
      rule(k, line, 'line', { name: 'Row rule' })
      const row = k.stack(line, { direction: 'HORIZONTAL', gap: 8, align: 'CENTER', padding: { top: 13, right: 0, bottom: 13, left: 0 }, name: 'Row cells' })
      k.text(row, feature, { style: s('Body 16'), color: 'onCard', name: 'Row feature' })
      values.forEach((v, i) => cell(row, v, i))
    }

    // ── Questions.
    const faq = k.stack(sheet, { direction: 'HORIZONTAL', gap: 64, name: 'FAQ' })
    const faqHead = k.stack(faq, { width: 360, name: 'FAQ side' })
    sectionHead(k, faqHead, { label: 'QUESTIONS', title: 'Asked before buying.', s, name: 'FAQ head' })
    const qs = k.stack(faq, { name: 'FAQ list' })
    for (const [q, a] of FAQ) {
      rule(k, qs, 'line', { name: 'Question rule' })
      const item = k.stack(qs, { gap: 8, padding: { top: 20, right: 0, bottom: 24, left: 0 }, name: 'Question' })
      k.text(item, q, { style: s('Plan 18'), color: 'text', name: 'Q' })
      k.text(item, a, { style: s('Body 16'), color: 'onPaper', name: 'A' })
    }

    // ── The close, and the footer.
    const close = card(k, sheet, { name: 'Close', direction: 'HORIZONTAL', gap: 32, pad: 48, align: 'CENTER' })
    const closeWords = k.stack(close, { gap: 10, name: 'Close words' })
    k.text(closeWords, 'Start on Hobby today.', { style: s('Display 64'), color: 'onCard', name: 'Close title' })
    k.text(closeWords, 'No card. Move up when a second person needs to flip a flag.', { style: s('Body 16'), color: 'cardMuted', name: 'Close line' })
    const closeSide = k.stack(close, { width: 132, align: 'MAX', name: 'Close side' })
    k.instance(closeSide, 'Button', { Label: 'Start free' }, { name: 'Close button' })
    footer(k, sheet, {
      about: LATCH.pitch, legal: 'Prices in US dollars, before sales tax. Yearly plans are billed once, up front. © 2026 {{brand.name}}.',
      columns: [['Product', ['Rollouts', 'Guardrails', 'Audit log', 'Changelog']], ['Developers', ['Docs', 'SDKs', 'API', 'Status']], ['Company', ['Pricing', 'Security', 'Contact']]],
      brandStyle: s('Brand 19'), headStyle: s('Label 13'), linkStyle: s('Small 14'), ruleColor: 'line',
    })

    k.counts(sheet, counts)
    k.cues(sheet, cues)
    respond(k, sheet, s, {
      stack: ['Header', 'Plans', 'FAQ', 'Footer columns'],
      stackMobile: ['Close'],
      restyle: WEB_STEPS as never,
      hide: { mobile: ['Nav links'] },
      gap: { tablet: 72, mobile: 56 },
      tweak: (kit, id, size) => {
        fitHeroGround(kit, id, size === 'mobile' ? 640 : 560)
        for (const n of kit.named(id, 'Cell')) kit.patch(n, { width: COL[size] })
        if (size === 'tablet') compactNav(kit, id, ['Docs', 'Sign in'], 20)
        if (size === 'tablet' || size === 'mobile') {
          for (const n of kit.named(id, 'Plan')) kit.patch(n, { layoutSizingVertical: 'HUG' })
          for (const n of kit.named(id, 'Header')) kit.patch(n, { itemSpacing: 24 })
          for (const n of kit.named(id, 'FAQ side')) kit.patch(n, { layoutSizingHorizontal: 'FILL' })
          for (const n of kit.named(id, 'FAQ')) kit.patch(n, { itemSpacing: 28 })
          for (const n of kit.named(id, 'Top')) kit.patch(n, { itemSpacing: 44 })
        }
        if (size === 'mobile') {
          for (const n of kit.named(id, 'Table')) kit.patch(n, { padding: { top: 20, right: 16, bottom: 12, left: 16 } })
          for (const n of kit.named(id, 'Close')) kit.patch(n, { padding: { top: 28, right: 24, bottom: 28, left: 24 }, itemSpacing: 20 })
          for (const n of kit.named(id, 'Close side')) kit.patch(n, { counterAxisAlignItems: 'MIN' })
          for (const name of ['Table head', 'Row cells']) for (const n of kit.named(id, name)) kit.patch(n, { itemSpacing: 6 })
        }
      },
    })
    // Both prices are laid out while shown, at every size; then the yearly one is hidden until its variable shows
    // it, and put exactly over the monthly one (a hidden layer is out of the flow, so the layout leaves it there).
    k.finish()
    const prices = [...new Set(k.doc.pages.flatMap(p => k.named(p, 'Price')))]
    for (const price of prices) k.patch(k.node(price).childIds[1], { visible: false })
    k.finish()
    for (const price of prices) { const [m, y] = k.node(price).childIds; k.patch(y, { x: k.node(m).x, y: k.node(m).y }) }
    return k.doc
  },
})
