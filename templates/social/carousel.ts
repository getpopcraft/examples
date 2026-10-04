// SaaS launch LinkedIn carousel, in the warm editorial serif look: "7 things we learned shipping to 1,000 users",
// by the founders of Fieldnote (onboarding checklists), as eight 1080 × 1350 slides for a LinkedIn document post.
// Set like the feature pages of a salmon-paper weekly: a folio line and a rule at the head of every slide, the
// lesson's number reversed out of a claret plate, the lesson in a heavy serif, and under a rule the one figure that
// taught it (a short lesson is set larger, so every slide is full). The hook carries the whole promise and a byline with a portrait slot; the fourth lesson and the last
// slide turn dark for rhythm; the last is the seventh lesson and the ask. One idea a slide, big type throughout.

import { Kit, preset } from '@popcraft/kit/templates/kit'
import { defineTemplate } from '@popcraft/kit/templates/build'
import { pill } from '@popcraft/kit/templates/social/shared'
import { MONO, SERIF } from '@popcraft/kit/templates/shared/type'
import { grain } from '@popcraft/kit/templates/shared/texture'
import { arrowPath, faceSlot } from '@popcraft/kit/templates/shared/marks'

const LESSONS: readonly { say: string; figure: string; proof: string; dark?: boolean }[] = [
  { say: 'Nobody read the onboarding. They read the first empty screen.', figure: '47%', proof: 'of new accounts activate now that the setup steps live in the empty dashboard. It was 31%.' },
  { say: 'Your fastest users are your worst testers.', figure: '212', proof: 'people quit in their first week. They taught us more than every fan we have.' },
  { say: 'The pricing page is a support page.', figure: '−52%', proof: 'pre-sale tickets, once the page answered the six questions people kept emailing.' },
  { say: 'Churn starts on day two, not in month three.', figure: '48 h', proof: 'Anyone who has not come back by then almost never does. We write on day two now.', dark: true },
  { say: 'One integration beat ten features.', figure: '38%', proof: 'of sign-ups arrive through the Slack integration. It took nine days to build.' },
  { say: 'Say no in public.', figure: '1/3', proof: 'fewer duplicate requests since the “not planned” list went on the site. Nobody left over it.' },
]
const TOTAL = LESSONS.length + 2

export default defineTemplate({
  id: 'carousel',
  meta: {
    name: 'SaaS launch lessons carousel',
    description: 'A LinkedIn document carousel in the warm editorial serif look: “7 things we learned shipping to 1,000 users” as eight 1080 × 1350 slides. A hook with a byline and portrait slot, six one-idea slides (the lesson in a heavy serif, and the one figure that taught it), and a closing slide with the ask. Set like a salmon-paper weekly, with two dark slides for rhythm',
    category: 'social', tags: ['saas', 'saas launch', 'carousel', 'linkedin', 'document post', 'lessons', 'build in public', 'editorial', 'serif', 'founder', 'tips'],
    platforms: ['linkedin', 'instagram', 'threads'], formats: ['carousel', 'portrait-post', 'document'], useCases: ['tips', 'education', 'milestone'],
    created: '2026-10-02', updated: '2026-10-02',
  },
  stableNumbers: true,
  sequence: true,
  build() {
    const k = new Kit('SaaS launch lessons carousel', preset('ig-portrait'))
    k.quantizeGeometry = true
    k.brand(
      { paper: '#FBE6D4', text: '#1E1915', onPaper: '#5A4C42', primary: '#8E1B32', onPrimary: '#FFEFE2', secondary: '#1E1915', onSecondary: '#FBE6D4', accent: '#F2B441', onAccent: '#241803' },
      { name: 'Fieldnote', author: 'Mara Lindqvist', role: 'Co-founder, Fieldnote', site: 'fieldnote.example/notes' },
    )
    k.palette({ portrait: '#E9C9B0', sitter: '#C99F82' })
    k.textStyle('Masthead 22', { size: 22, fontWeight: 800, letterSpacing: 3.5, lineHeight: 28, textCase: 'UPPER' })
    k.textStyle('Folio 22', { ...MONO, size: 22, fontWeight: 600, lineHeight: 28 })
    k.textStyle('Display 124', { ...SERIF, size: 124, fontWeight: 800, letterSpacing: -4.6, lineHeight: 114 })
    k.textStyle('Lesson 116', { ...SERIF, size: 116, fontWeight: 700, letterSpacing: -4, lineHeight: 112 })
    k.textStyle('Lesson 230', { ...SERIF, size: 230, fontWeight: 700, letterSpacing: -9, lineHeight: 200 })
    k.textStyle('Lesson 160', { ...SERIF, size: 160, fontWeight: 700, letterSpacing: -6, lineHeight: 150 })
    k.textStyle('Lesson 146', { ...SERIF, size: 146, fontWeight: 700, letterSpacing: -5.4, lineHeight: 136 })
    /** The size a lesson is set at: the fewer its words, the larger, so a short one fills its slide too. */
    // A short lesson sets bigger, so every slide's words fill down to the figure instead of leaving a quiet band.
    const lessonStyle = (say: string) => (say.length <= 20 ? 'Lesson 230' : say.length <= 36 ? 'Lesson 160' : say.length <= 44 ? 'Lesson 146' : 'Lesson 116')
    k.textStyle('Numeral 150', { ...SERIF, size: 150, fontWeight: 700, fontStyle: 'italic', letterSpacing: -6, lineHeight: 150, textAlign: 'CENTER' })
    k.textStyle('Numeral 420', { ...SERIF, size: 420, fontWeight: 700, fontStyle: 'italic', letterSpacing: -20, lineHeight: 400, textAlign: 'CENTER' })
    k.textStyle('Figure 150', { ...SERIF, size: 150, fontWeight: 800, letterSpacing: -6, lineHeight: 140 })
    k.textStyle('Proof 34', { size: 34, fontWeight: 500, letterSpacing: -0.6, lineHeight: 44 })
    k.textStyle('Kicker 30', { ...SERIF, size: 30, fontWeight: 600, fontStyle: 'italic', lineHeight: 38 })
    k.textStyle('Byline 28', { size: 28, fontWeight: 700, letterSpacing: -0.4, lineHeight: 34 })
    k.textStyle('Button 30', { size: 30, fontWeight: 800, letterSpacing: -0.5, lineHeight: 38 })
    pill(k, 'Follow', { fill: 'accent', ink: 'onAccent', style: 'Button 30', label: 'Follow for next month’s notes', pad: [20, 32], radius: 4 })

    /** A slide: the sheet as a column, its folio line and rule at the head; returns its ink roles. */
    const slide = (i: number, name: string, dark = false) => {
      const id = i === 0 ? k.sheet : k.addSheet(preset('ig-portrait'), name)
      k.nameSheet(id, name)
      const ground = dark ? 'secondary' : 'paper', ink = dark ? 'onSecondary' : 'text', soft = dark ? 'onSecondary' : 'onPaper'
      k.flowSheet(id, 0, { top: 64, right: 76, bottom: 72, left: 76 }, ground, 'SPACE_BETWEEN', 'MIN')
      k.patch(id, { clipsContent: true })
      k.rect(id, 1080, 1350, ground, { name: 'Paper', absolute: { x: 0, y: 0 }, effects: grain(0.035, 4, 3 + i) })
      // The head and the slide's subject are one column from the top, so the number plate sits at the same height
      // on every slide; what closes the slide sits at the foot.
      const upper = k.stack(id, { gap: 56, name: 'Upper' })
      const head = k.stack(upper, { gap: 18, name: 'Head' })
      const folio = k.stack(head, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', align: 'CENTER', name: 'Folio' })
      k.text(folio, '{{brand.name}} · Notes from shipping', { style: 'Masthead 22', color: ink, name: 'Masthead', width: 720 })
      k.text(folio, `${i + 1} / ${TOTAL}`, { style: 'Folio 22', color: soft, autoWidth: true, name: 'Page' })
      k.rect(head, 'FILL', 4, ink, { name: 'Head rule' })
      return { id, upper, ink, soft }
    }
    /** The foot of a slide: how far through the set it is, and the arrow that says swipe. */
    const foot = (s: { id: string; ink: string }, i: number, last = false) => {
      const row = k.stack(s.id, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', align: 'CENTER', name: 'Foot' })
      const ticks = k.stack(row, { direction: 'HORIZONTAL', width: 'HUG', gap: 10, align: 'CENTER', name: 'Progress' })
      for (let n = 0; n < TOTAL; n++) k.rect(ticks, n === i ? 56 : 18, 8, n === i ? 'primary' : s.ink, { name: 'Tick', ...(n === i ? {} : { opacity: 0.3 }) })
      if (!last) k.vector(row, 84, 44, [arrowPath(84, 44, 8)], s.ink, { name: 'Swipe' })
    }

    // ── 1. The hook ──
    {
      const s = slide(0, '1 Hook')
      // The seven, reversed out of a claret disc that runs off the sheet.
      const disc = k.stack(s.id, { width: 620, height: 620, radius: 310, fill: 'primary', align: 'CENTER', justify: 'CENTER', clip: true, name: 'Seven disc', absolute: { x: 600, y: 770 } })
      k.text(disc, '7', { style: 'Numeral 420', color: 'onPrimary', name: 'Seven', width: 400 })
      k.ellipse(s.id, 150, 'accent', { name: 'Seal', absolute: { x: 530, y: 1090 } })
      const words = k.stack(s.upper, { gap: 26, padding: { top: 84, right: 0, bottom: 0, left: 0 }, name: 'Hook words' })
      k.text(words, 'After the first 1,000 users', { style: 'Kicker 30', color: 'onPaper', name: 'Kicker' })
      k.text(words, 'Seven things we learned shipping to 1,000 users', { style: 'Display 124', color: 'text', name: 'Hook' })
      const by = k.stack(s.id, { direction: 'HORIZONTAL', gap: 22, align: 'CENTER', width: 470, name: 'Byline' })
      const portrait = k.photo(by, 108, 108, { radius: 54, ground: 'portrait', name: 'Portrait' })
      faceSlot(k, portrait, 108, 108, 'sitter')
      const who = k.stack(by, { gap: 2, name: 'Who' })
      k.text(who, '{{brand.author}}', { style: 'Byline 28', color: 'text', name: 'Author' })
      k.text(who, '{{brand.role}}', { style: 'Byline 28', color: 'onPaper', name: 'Role' })
      foot(s, 0)
    }

    // ── 2–7. One lesson a slide ──
    LESSONS.forEach((l, n) => {
      const s = slide(n + 1, `${n + 2} Lesson ${n + 1}`, l.dark)
      const body = k.stack(s.upper, { gap: 34, name: 'Lesson' })
      const plate = k.stack(body, { width: 190, height: 190, fill: 'primary', align: 'CENTER', justify: 'CENTER', name: 'Plate' })
      k.text(plate, String(n + 1), { style: 'Numeral 150', color: 'onPrimary', name: 'Number' })
      k.text(body, l.say, { style: lessonStyle(l.say), color: s.ink, name: 'Lesson words' })
      const lower = k.stack(s.id, { gap: 56, name: 'Lower' })
      const proof = k.stack(lower, { gap: 14, name: 'Proof' })
      k.rect(proof, 'FILL', 2, s.ink, { name: 'Proof rule' })
      const row = k.stack(proof, { direction: 'HORIZONTAL', gap: 34, align: 'CENTER', name: 'Proof row' })
      k.text(row, l.figure, { style: 'Figure 150', color: s.ink, autoWidth: true, name: 'Figure' })
      k.text(row, l.proof, { style: 'Proof 34', color: s.soft, name: 'Proof words' })
      foot({ id: lower, ink: s.ink }, n + 1)
    })

    // ── 8. The seventh, and the ask ──
    {
      const s = slide(TOTAL - 1, `${TOTAL} The ask`, true)
      const body = k.stack(s.upper, { gap: 34, name: 'Lesson' })
      const plate = k.stack(body, { width: 190, height: 190, fill: 'primary', align: 'CENTER', justify: 'CENTER', name: 'Plate' })
      k.text(plate, '7', { style: 'Numeral 150', color: 'onPrimary', name: 'Number' })
      k.text(body, 'Write it down while it still stings.', { style: 'Lesson 116', color: s.ink, name: 'Lesson words' })
      k.text(body, 'We publish one page of notes like these every month: what we shipped, what broke, what it cost.', { style: 'Proof 34', color: s.soft, name: 'Ask words' })
      const lower = k.stack(s.id, { gap: 56, name: 'Lower' })
      const ask = k.stack(lower, { gap: 22, name: 'Ask' })
      k.instance(ask, 'Follow', { Label: 'Follow for next month’s notes' }, { name: 'Follow button' })
      k.text(ask, '{{brand.site}}', { style: 'Folio 22', color: s.soft, name: 'Site' })
      foot({ id: lower, ink: s.ink }, TOTAL - 1, true)
    }
    k.setCover(k.named(k.pageId, '1 Hook')[0])
    return k.finish()
  },
})
