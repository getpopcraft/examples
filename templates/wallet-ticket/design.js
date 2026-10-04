// size: iphone-17
// A mobile app screen (a wallet ticket): the real layout of that screen at phone size, every word 13 px or more.
k.brand({ paper: '#F3EFE6', text: '#1D1B18', onPaper: '#5B564D', card: '#FFFDF8', onCard: '#1D1B18', cardMuted: '#6A645A', primary: '#B6461F', onPrimary: '#FFFFFF' }, { name: 'Barley Moon' })
const t = (name, size, weight, lh, more = {}) => k.textStyle(name, { size, fontWeight: weight, lineHeight: lh, ...more })
t('Status 15', 15, 600, 20); t('Title 30', 30, 800, 36, { letterSpacing: -0.6 }); t('Label 13', 13, 700, 18, { letterSpacing: 1.4 }); t('Value 18', 18, 500, 24); t('Small 14', 14, 400, 20)
const sheet = k.sheet
k.flowSheet(sheet, 18, { top: 20, right: 20, bottom: 28, left: 20 }, 'paper')
const bar = k.stack(sheet, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', name: 'Status bar' })
k.text(bar, '9:41', { style: 'Status 15', color: 'text', autoWidth: true, name: 'Clock' })
k.text(sheet, 'Wallet', { style: 'Title 30', color: 'text', name: 'Title' })
const pass = k.stack(sheet, { gap: 0, fill: 'card', radius: 22, clip: true, stroke: { color: 'text', width: 1.5 }, name: 'Pass' })
// The art strip is part of the card's flow (a free frame here would sit behind the words below it).
const art = k.stack(pass, { height: 150, fill: 'primary', clip: true, name: 'Pass art' })
k.ellipse(art, 120, 'card', { name: 'Sun', absolute: { x: 220, y: -30 }, opacity: 0.9 })
const body = k.stack(pass, { gap: 14, padding: 22, name: 'Pass body' })
for (const [label, value] of [['HOLDER', 'Robin Achterberg'], ['PASS', 'Weekend, with camping'], ['ENTRY', '22–25 July 2027'], ['GATE', 'Orchard Gate']]) {
  const f = k.stack(body, { gap: 2, name: 'Field' })
  k.text(f, label, { style: 'Label 13', color: 'cardMuted', name: 'Field label' })
  k.text(f, value, { style: 'Value 18', color: 'onCard', name: 'Field value' })
}
const qr = k.stack(body, { direction: 'HORIZONTAL', width: 'FILL', justify: 'CENTER', padding: 18, fill: 'paper', radius: 14, name: 'QR block' })
const cells = []
for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) if (((x * 7 + y * 13) % 5 < 2) || ((x < 7 || x > 13) && (y < 7 || y > 13) && (x % 6 === 0 || y % 6 === 0))) cells.push({ closed: true, points: [{ x: x * 8, y: y * 8 }, { x: x * 8 + 8, y: y * 8 }, { x: x * 8 + 8, y: y * 8 + 8 }, { x: x * 8, y: y * 8 + 8 }] })
k.vector(qr, 168, 168, cells, 'text', { name: 'QR' })
k.text(body, 'Show at the gate. The code refreshes every 30 seconds.', { style: 'Small 14', color: 'cardMuted', width: 'FILL', name: 'QR note' })
// The foot of the screen does something useful: the next pass waiting under this one, and the action.
const next = k.stack(sheet, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', align: 'CENTER', fill: 'card', radius: 16, padding: 18, name: 'Next pass' })
k.text(next, 'Car park · Field B', { style: 'Value 18', color: 'onCard', autoWidth: true, name: 'Next pass name' })
k.text(next, '1 of 2', { style: 'Small 14', color: 'cardMuted', autoWidth: true, name: 'Next pass count' })
const add = k.stack(sheet, { direction: 'HORIZONTAL', justify: 'CENTER', fill: 'primary', radius: 14, padding: 16, name: 'Add button' })
k.text(add, 'Add to calendar', { style: 'Value 18', color: 'onPrimary', autoWidth: true, name: 'Add label' })

