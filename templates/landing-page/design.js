// size: web-desktop
// A responsive landing page: desktop master, laptop, tablet and phone, with an animated hero that loops in 6 s.
k.brand({ paper: '#F7F5F0', text: '#17181C', onPaper: '#4D5059', primary: '#1F6F5C', onPrimary: '#FFFFFF', card: '#FFFFFF', onCard: '#17181C', cardMuted: '#5A5E68', line: '#E2DFD8' }, { name: 'Tidewell', site: 'tidewell.example' })
const t = (name, size, weight, lh, more = {}) => k.textStyle(name, { size, fontWeight: weight, lineHeight: lh, ...more })
t('Nav 16', 16, 500, 24); t('Brand 20', 20, 800, 28); t('Button 16', 16, 600, 24)
t('Display 64', 64, 800, 70, { letterSpacing: -2 }); t('Display 44', 44, 800, 50, { letterSpacing: -1.2 }); t('Display 34', 34, 800, 40, { letterSpacing: -0.8 })
t('Lead 20', 20, 400, 32); t('Lead 17', 17, 400, 27); t('Section 32', 32, 800, 40, { letterSpacing: -0.6 }); t('Section 26', 26, 800, 32)
t('Card 20', 20, 700, 28); t('Body 16', 16, 400, 25); t('Figure 44', 44, 800, 48, { fontFeatures: { tnum: 1 } }); t('Small 14', 14, 400, 21)
web.buttons(k, { style: 'Button 16' })
const sheet = k.sheet
web.page(k, sheet, { gap: 72, top: 32 })
web.nav(k, sheet, { links: ['Product', 'Pricing', 'Customers', 'Sign in'], cta: 'Start free', style: 'Nav 16', brandStyle: 'Brand 20' })

// Hero: words on the left, the product working on the right.
const hero = k.stack(sheet, { direction: 'HORIZONTAL', gap: 56, align: 'CENTER', name: 'Hero' })
const copy = k.stack(hero, { gap: 22, name: 'Hero copy' })
k.text(copy, 'Your tide tables, in the inbox by six.', { style: 'Display 64', color: 'text', width: 'FILL', name: 'Headline' })
k.text(copy, 'Tidewell sends every harbour master the day’s tides, swell and berths before the first boat moves. 214 harbours use it every morning.', { style: 'Lead 20', color: 'onPaper', width: 'FILL', name: 'Lead' })
const ctas = k.stack(copy, { direction: 'HORIZONTAL', gap: 14, width: 'HUG', name: 'Calls' })
k.instance(ctas, 'Button', { Label: 'Start free' }, { name: 'Primary call' })
k.instance(ctas, 'Button quiet', { Label: 'See a sample' }, { name: 'Quiet call' })
const panel = k.stack(hero, { width: 520, gap: 14, fill: 'card', radius: 18, padding: 28, stroke: { color: 'line', width: 1 }, name: 'Product' })
k.text(panel, 'TODAY · PORTHLEVEN', { style: 'Small 14', color: 'cardMuted', name: 'Panel kicker' })
for (const [time, what] of [['05:42', 'High water · 4.8 m'], ['11:58', 'Low water · 0.9 m'], ['18:07', 'High water · 4.6 m']]) {
  const row = k.stack(panel, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', width: 'FILL', padding: { top: 10, right: 0, bottom: 10, left: 0 }, name: 'Tide row' })
  k.text(row, time, { style: 'Card 20', color: 'onCard', autoWidth: true, name: 'Tide time' })
  k.text(row, what, { style: 'Body 16', color: 'cardMuted', autoWidth: true, name: 'Tide what' })
}
k.vector(panel, 464, 90, [{ closed: false, points: [{ x: 0, y: 70 }, { x: 80, y: 20 }, { x: 170, y: 72 }, { x: 260, y: 22 }, { x: 350, y: 70 }, { x: 464, y: 30 }] }], 'primary', { strokeWidth: 4, name: 'Tide line' })
k.timeline(sheet, { duration: 6000, fps: 30 })
// A hero loops: what comes in goes out again before 6 s, so the first frame and the last are the same picture.
k.cues(sheet, [
  { layer: 'Tide row', preset: 'rise-in', at: 300, stagger: { delay: 160 } },
  { layer: 'Tide row', preset: 'fade-out', at: 5300, stagger: { delay: 0 } },
])
k.animate(k.named(sheet, 'Tide line')[0], 'trim.end', [{ t: 600, v: 0, ease: ease.linear }, { t: 2400, v: 1, ease: ease.hold }, { t: 5200, v: 1, ease: ease.inOut('cubic') }, { t: 5900, v: 0 }])

// Proof, features, the offer, questions and a closing call.
const proof = k.stack(sheet, { direction: 'HORIZONTAL', gap: 24, name: 'Proof' })
for (const [figure, label] of [['214', 'harbours every morning'], ['6:00', 'tables in the inbox'], ['0', 'missed tides since 2025']]) {
  const c = k.stack(proof, { gap: 6, fill: 'card', radius: 14, padding: 24, name: 'Proof card' })
  k.text(c, figure, { style: 'Figure 44', color: 'onCard', name: 'Proof figure' })
  k.text(c, label, { style: 'Body 16', color: 'cardMuted', name: 'Proof label' })
}
const feats = k.stack(sheet, { gap: 24, name: 'Features' })
k.text(feats, 'Built for the quay, not the office', { style: 'Section 32', color: 'text', name: 'Section title' })
const grid = k.stack(feats, { direction: 'HORIZONTAL', gap: 24, name: 'Feature row' })
for (const [title, body] of [['Every berth', 'Who is in, who is due, and the draught each one needs at low water.'], ['Swell and wind', 'The morning forecast for your harbour mouth, not the county.'], ['Printed or phone', 'A one-page PDF for the board, and the same on every phone.']]) {
  const c = k.stack(grid, { gap: 10, fill: 'card', radius: 14, padding: 24, name: 'Feature' })
  k.text(c, title, { style: 'Card 20', color: 'onCard', name: 'Feature title' })
  k.text(c, body, { style: 'Body 16', color: 'cardMuted', name: 'Feature body' })
}
const close = k.stack(sheet, { gap: 18, fill: 'primary', radius: 20, padding: 48, name: 'Close' })
k.text(close, 'Free for your first harbour.', { style: 'Section 32', color: 'onPrimary', name: 'Close title' })
k.text(close, 'Set up in ten minutes. No card.', { style: 'Body 16', color: 'onPrimary', name: 'Close line' })
k.text(sheet, '© 2026 Tidewell · tidewell.example · Tide data from the national survey; check it against your charts.', { style: 'Small 14', color: 'onPaper', width: 'FILL', name: 'Footer' })

// The other sizes: rows become columns, type steps down, the nav folds on the phone.
web.webResponsive(k, sheet, {
  stack: ['Hero', 'Feature row'],
  stackMobile: ['Proof', 'Calls'],
  restyle: { 'Display 64': { laptop: 'Display 44', tablet: 'Display 44', mobile: 'Display 34' }, 'Lead 20': { mobile: 'Lead 17' }, 'Section 32': { mobile: 'Section 26' } },
  gap: { tablet: 56, mobile: 40 },
  // One function per size: a script's function is recorded before the kit runs, so it cannot test which size it is in.
  // On the phone the panel is narrower than the 464 px tide line: the line is scaled to fit it, not cut off.
  tweaks: {
    tablet: (kit, id) => kit.patch(kit.named(id, 'Product')[0], { layoutSizingHorizontal: 'FILL' }),
    mobile: (kit, id) => {
      kit.patch(kit.named(id, 'Product')[0], { layoutSizingHorizontal: 'FILL' })
      kit.patch(kit.named(id, 'Tide line')[0], { scaleX: 0.58, scaleY: 0.58, anchorX: 0, anchorY: 0 })
    },
  },
})

