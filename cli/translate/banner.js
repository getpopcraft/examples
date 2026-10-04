// The English banner the translations start from (built by `npm run banner`).
k.brand({ paper: '#FEF3C7', text: '#1C1917', accent: '#B45309', onAccent: '#FFFFFF' }, { name: 'Harbour Goods' })
k.textStyle('Title', { size: 120, fontWeight: 900, lineHeight: 116, letterSpacing: -4 })
k.textStyle('Body', { size: 44, fontWeight: 600, lineHeight: 56 })
k.textStyle('Button', { size: 36, fontWeight: 800, lineHeight: 44 })
k.flowSheet(k.sheet, 28, { top: 90, right: 90, bottom: 90, left: 90 }, 'paper', 'CENTER')
// The headline shrinks to fit its line if a translation is longer (German has some very long words): the design's
// size stays 120 and only a word that would overflow is set smaller.
const title = k.text(k.sheet, 'Summer sale', { style: 'Title', color: 'text', width: 'FILL', name: 'Title' })
k.patch(title, { textFit: 'SHRINK' })
k.text(k.sheet, 'Up to 40% off the whole shop', { style: 'Body', color: 'text', width: 'FILL', name: 'Offer' })
k.text(k.sheet, 'Ends Sunday', { style: 'Body', color: 'text', width: 'FILL', name: 'When' })
const button = k.stack(k.sheet, { direction: 'HORIZONTAL', width: 'HUG', fill: 'accent', radius: 999, padding: { top: 20, right: 40, bottom: 20, left: 40 }, name: 'Button' })
k.text(button, 'Shop now', { style: 'Button', color: 'onAccent', autoWidth: true, name: 'Button label' })
