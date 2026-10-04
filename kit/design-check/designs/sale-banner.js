// size: ad-landscape
// A display ad for a sale: the offer big at the top, the code and a button along the foot, readable at a glance.
k.brand({ paper: '#FFF7ED', text: '#1C1917', accent: '#C2410C', onAccent: '#FFFFFF' }, { name: 'Bramble & Co' })
k.textStyle('Offer', { size: 132, fontWeight: 900, lineHeight: 124, letterSpacing: -5 })
k.textStyle('Body', { size: 30, fontWeight: 500, lineHeight: 40 })
k.textStyle('Button', { size: 30, fontWeight: 800, lineHeight: 36 })
k.flowSheet(k.sheet, 0, { top: 56, right: 72, bottom: 56, left: 72 }, 'paper', 'SPACE_BETWEEN')
k.text(k.sheet, '30% off everything this weekend', { style: 'Offer', color: 'text', width: 'FILL', name: 'Offer' })
const foot = k.stack(k.sheet, { direction: 'HORIZONTAL', gap: 40, align: 'CENTER', justify: 'SPACE_BETWEEN', width: 'FILL', name: 'Foot' })
k.text(foot, 'Code BRAMBLE30 at checkout. Ends Sunday at midnight.', { style: 'Body', color: 'text', width: 'FILL', name: 'Terms' })
const button = k.stack(foot, { direction: 'HORIZONTAL', width: 'HUG', fill: 'accent', radius: 999, padding: { top: 18, right: 36, bottom: 18, left: 36 }, name: 'Button' })
k.text(button, 'Shop the sale', { style: 'Button', color: 'onAccent', autoWidth: true })
