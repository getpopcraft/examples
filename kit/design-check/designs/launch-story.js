// size: ig-story
// A launch story: the product name, what it does, and when it ships, kept clear of the apps' buttons (the safe area).
k.brand({ paper: '#0E1116', text: '#F3F4F6', accent: '#F5B82E', onAccent: '#0E1116' }, { name: 'Tally', site: 'tally.example' })
k.textStyle('Kicker', { size: 40, fontWeight: 800, letterSpacing: 3, lineHeight: 48 })
k.textStyle('Hook', { size: 150, fontWeight: 900, lineHeight: 140, letterSpacing: -5 })
k.textStyle('Body', { size: 52, fontWeight: 500, lineHeight: 66 })
// Words inside x 64–940 and y 250–1440: past those the apps draw their own buttons and captions.
k.flowSheet(k.sheet, 0, { top: 280, right: 160, bottom: 520, left: 80 }, 'paper', 'SPACE_BETWEEN')
const head = k.stack(k.sheet, { gap: 40, width: 'FILL', name: 'Head' })
const tag = k.stack(head, { direction: 'HORIZONTAL', width: 'HUG', fill: 'accent', radius: 10, padding: { top: 16, right: 26, bottom: 16, left: 26 }, name: 'Tag' })
k.text(tag, 'NEW · LAUNCHES MONDAY', { style: 'Kicker', color: 'onAccent', autoWidth: true })
k.text(head, '{{brand.name}}', { style: 'Hook', color: 'text', width: 'FILL', name: 'Name' })
k.text(head, 'Invoices that chase themselves, so you never send another reminder.', { style: 'Body', color: 'text', width: 'FILL', name: 'Pitch' })
const points = k.stack(k.sheet, { gap: 26, width: 'FILL', name: 'Points' })
for (const p of ['Sends the reminder on day 7, 14 and 30', 'Takes card and bank payments in the email', 'Tells you the moment you are paid']) {
  const row = k.stack(points, { direction: 'HORIZONTAL', gap: 24, align: 'CENTER', width: 'FILL', name: 'Point' })
  k.ellipse(row, 22, 'accent', { name: 'Dot' })
  k.text(row, p, { style: 'Body', color: 'text', width: 'FILL' })
}
k.text(k.sheet, '{{brand.site}}', { style: 'Body', color: 'text', width: 'FILL', name: 'Site' })
// Below the safe line no words go, but the frame is not left empty: invoices fanned up from the foot, each one paid.
for (const [i, x] of [120, 400, 680].entries()) {
  const card = k.stack(k.sheet, { width: 300, height: 360, fill: 'text', radius: 24, padding: 32, gap: 18, name: 'Invoice', absolute: { x, y: 1500 + (i % 2) * 40 } })
  k.patch(card, { rotation: (i - 1) * 6 })
  for (const w of [160, 220, 120]) k.rect(card, w, 18, 'paper', { radius: 9, name: 'Line' })
  k.ellipse(card, 72, 'accent', { name: 'Paid mark' })
}
