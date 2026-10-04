// size: email-header
// An email header GIF, 600×300: the whole message reads on the first frame (many mail apps show only that), and the
// loop returns exactly to where it began.
k.brand({ paper: '#101820', text: '#F4F1EA', onPaper: '#C9C4B8', primary: '#F2B33D', onPrimary: '#101820' }, { name: 'Harbourline' })
k.textStyle('Head 40', { size: 40, fontWeight: 800, lineHeight: 44, letterSpacing: -1 })
k.textStyle('Sub 18', { size: 18, fontWeight: 500, lineHeight: 24 })
k.textStyle('Code 16', { size: 16, fontWeight: 700, lineHeight: 20, fontFamily: 'JetBrains Mono' })
const sheet = k.sheet
k.flowSheet(sheet, 14, { top: 44, right: 230, bottom: 40, left: 40 }, 'paper')
k.timeline(sheet, { duration: 6000, fps: 30 })
k.text(sheet, 'Spring sale: 40% off a year.', { style: 'Head 40', color: 'text', width: 'FILL', name: 'Headline' })
k.text(sheet, 'Every plan, until Sunday 23:59 BST.', { style: 'Sub 18', color: 'onPaper', width: 'FILL', name: 'Line' })
const chip = k.stack(sheet, { direction: 'HORIZONTAL', width: 'HUG', fill: 'primary', radius: 8, padding: { top: 8, right: 14, bottom: 8, left: 14 }, name: 'Code chip' })
k.text(chip, 'CODE SPRING40', { style: 'Code 16', color: 'onPrimary', autoWidth: true, name: 'Code' })
// A lighthouse at the right: its lamp pulses and its beam sweeps, both a whole number of cycles in 6 s, so the loop closes.
k.rect(sheet, 46, 170, 'text', { radius: 6, name: 'Tower', absolute: { x: 470, y: 120 } })
k.rect(sheet, 70, 26, 'onPaper', { radius: 4, name: 'Gallery', absolute: { x: 458, y: 108 } })
const lamp = k.ellipse(sheet, 34, 'primary', { name: 'Lamp', absolute: { x: 476, y: 70 } })
const beam = k.vector(sheet, 160, 40, [{ closed: true, points: [{ x: 0, y: 20 }, { x: 160, y: 0 }, { x: 160, y: 40 }] }], 'primary', { name: 'Beam', opacity: 0.35, absolute: { x: 330, y: 67 } })
k.behave(lamp, 'opacity', [{ kind: 'sine', amp: 0.25, freq: 1 }])
k.behave(beam, 'opacity', [{ kind: 'sine', amp: 0.2, freq: 0.5 }])

