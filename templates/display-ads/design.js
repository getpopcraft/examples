// size: ad-landscape
// A static display ad set: 1200×628 master with square, portrait and LinkedIn cuts, each recomposed for its shape.
k.brand({ paper: '#FFF4E8', text: '#2A1A12', primary: '#D9481F', onPrimary: '#FFFFFF', card: '#FFFFFF', onCard: '#2A1A12' }, { name: 'Crumb' })
k.textStyle('Head 64', { size: 64, fontWeight: 900, lineHeight: 64, letterSpacing: -2 })
k.textStyle('Head 88', { size: 88, fontWeight: 900, lineHeight: 86, letterSpacing: -3 })
k.textStyle('Sub 22', { size: 22, fontWeight: 500, lineHeight: 30 })
k.textStyle('Sub 28', { size: 28, fontWeight: 500, lineHeight: 36 })
k.textStyle('Button 22', { size: 22, fontWeight: 700, lineHeight: 28 })
k.textStyle('Button 30', { size: 30, fontWeight: 700, lineHeight: 36 })
k.textStyle('Price 40', { size: 40, fontWeight: 900, lineHeight: 44 })
const sheet = k.sheet
k.flowSheet(sheet, 20, { top: 64, right: 560, bottom: 64, left: 64 }, 'paper', 'CENTER')
k.text(sheet, 'Bread that keeps its books.', { style: 'Head 64', color: 'text', width: 'FILL', name: 'Headline' })
k.text(sheet, 'Orders, flour and wages for small bakeries, in one ledger.', { style: 'Sub 22', color: 'text', width: 'FILL', name: 'Sub' })
const btn = k.stack(sheet, { direction: 'HORIZONTAL', width: 'HUG', fill: 'primary', radius: 12, padding: { top: 14, right: 26, bottom: 14, left: 26 }, name: 'Button' })
k.text(btn, 'Try Crumb free', { style: 'Button 22', color: 'onPrimary', autoWidth: true, name: 'Button label' })
// The art: a loaf on a board with a price tag, drawn on the right.
k.ellipse(sheet, 520, 'card', { name: 'Plate', absolute: { x: 650, y: 54 } })
// The loaf is a stack so its score marks stay centred on it when the taller cuts resize it.
const loaf = k.stack(sheet, { direction: 'HORIZONTAL', align: 'CENTER', justify: 'CENTER', gap: 44, width: 380, height: 190, fill: 'primary', radius: 95, name: 'Loaf', absolute: { x: 720, y: 220 } })
for (let i = 0; i < 3; i++) k.patch(k.rect(loaf, 20, 110, 'card', { radius: 10, name: 'Score' }), { rotation: -24 })
const tag = k.stack(sheet, { direction: 'HORIZONTAL', width: 'HUG', fill: 'text', radius: 10, padding: { top: 10, right: 16, bottom: 10, left: 16 }, name: 'Tag', absolute: { x: 940, y: 120 } })
k.text(tag, '£9 a month', { style: 'Price 40', color: 'paper', autoWidth: true, name: 'Tag price' })
// Each tall cut puts the art on top and the words under it, with type and the button scaled up for the bigger frame.
const tall = (h) => (kit, id) => {
  kit.patch(id, { padding: { top: h - 470, right: 72, bottom: 72, left: 72 }, primaryAxisAlignItems: 'MIN' })
  kit.restyle(kit.named(id, 'Headline')[0], 'Head 88')
  kit.restyle(kit.named(id, 'Sub')[0], 'Sub 28')
  kit.restyle(kit.named(id, 'Button label')[0], 'Button 30')
  kit.patch(kit.named(id, 'Plate')[0], { x: 140, y: 60, width: h - 560, height: h - 560 })
  kit.patch(kit.named(id, 'Loaf')[0], { x: 210, y: (h - 560) / 2 - 20, width: h - 700, height: (h - 700) / 2 })
  kit.patch(kit.named(id, 'Tag')[0], { x: 640, y: 90 })
}
k.variants(sheet, [
  { preset: 'ad-square', adjust: tall(1200) },
  { preset: 'ig-portrait', adjust: tall(1350) },
  { preset: 'linkedin-post', adjust: (kit, id) => kit.patch(id, { padding: { top: 64, right: 560, bottom: 64, left: 64 } }) },
])

