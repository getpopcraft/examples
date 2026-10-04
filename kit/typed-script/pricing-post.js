/// <reference types="@popcraft/kit/design-script" />
// A pricing post, written with the kit's types: your editor completes `k.` and the helpers, and `npm run typecheck`
// catches a wrong option or a misspelt method before you build. W, H, NAME, TRACKS and the helpers are globals.
// Words on a card use the card's own on-colour (onCard), so a brand kit that changes the card keeps them readable.

const plans = [
  { name: 'Solo', price: '$9', note: 'One person, every feature' },
  { name: 'Team', price: '$29', note: 'Up to ten people, shared brand kits' },
  { name: 'Studio', price: '$79', note: 'Unlimited people, priority help' },
]

k.brand({ paper: '#F8FAFC', text: '#0F172A', accent: '#2563EB', onAccent: '#FFFFFF', card: '#FFFFFF', onCard: '#0F172A' }, { name: 'Sketchbook' })
k.textStyle('Title', { size: 84, fontWeight: 900, lineHeight: 84, letterSpacing: -3 })
k.textStyle('Plan', { size: 40, fontWeight: 800, lineHeight: 48 })
k.textStyle('Price', { size: 64, fontWeight: 900, lineHeight: 64, letterSpacing: -2 })
k.textStyle('Note', { size: 28, fontWeight: 500, lineHeight: 36 })

k.flowSheet(k.sheet, 32, { top: 80, right: 80, bottom: 80, left: 80 }, 'paper', 'CENTER')
k.text(k.sheet, 'Pick the plan that fits.', { style: 'Title', color: 'text', width: 'FILL', name: 'Title' })
for (const [i, p] of plans.entries()) {
  const featured = i === 1
  const row = k.stack(k.sheet, { direction: 'HORIZONTAL', align: 'CENTER', justify: 'SPACE_BETWEEN', gap: 24, width: 'FILL', fill: featured ? 'accent' : 'card', radius: 28, padding: { top: 40, right: 40, bottom: 40, left: 40 }, name: `Plan ${p.name}` })
  const words = k.stack(row, { gap: 6, width: 'FILL', name: 'Words' })
  k.text(words, p.name, { style: 'Plan', color: featured ? 'onAccent' : 'onCard', width: 'FILL' })
  k.text(words, p.note, { style: 'Note', color: featured ? 'onAccent' : 'onCard', width: 'FILL' })
  k.text(row, `${p.price}/mo`, { style: 'Price', color: featured ? 'onAccent' : 'onCard', autoWidth: true, name: 'Price' })
}
