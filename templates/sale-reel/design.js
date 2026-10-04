// size: ig-story
// A 14 s sale reel on the Countdown track, cut on its beats. Idea: a till receipt that will not stop printing.
const music = beat.bed('tension', 28)
const b = music.beat
k.brand({ paper: '#F4F1EA', ink: '#141414', hot: '#E8361E', muted: '#6B6760' }, { name: 'Tillwise', site: 'tillwise.example' })
k.textStyle('Hook', { size: 132, fontWeight: 900, lineHeight: 120, letterSpacing: -4 })
k.textStyle('Price', { size: 220, fontWeight: 900, lineHeight: 236, letterSpacing: -8, fontFeatures: { tnum: 1 } })
k.textStyle('Line', { size: 34, fontWeight: 500, lineHeight: 44, fontFamily: 'JetBrains Mono' })
k.textStyle('Caption', { size: 44, fontWeight: 700, lineHeight: 52 })
k.textStyle('Hook small', { size: 96, fontWeight: 900, lineHeight: 90, letterSpacing: -3 })
k.textStyle('Hook square', { size: 72, fontWeight: 900, lineHeight: 70, letterSpacing: -2 })
k.textStyle('Price small', { size: 120, fontWeight: 900, lineHeight: 128, letterSpacing: -5, fontFeatures: { tnum: 1 } })
const sheet = k.sheet
// The frame itself lays out its content: a vertical stack with margins clear of the apps' buttons (the safe area).
k.flowSheet(sheet, 36, { top: 270, right: 150, bottom: 500, left: 80 }, 'paper')
k.timeline(sheet, { duration: music.duration, fps: 30, audio: music.audio })
const col = sheet
k.text(col, 'This receipt won\u2019t stop printing.', { style: 'Hook', color: 'ink', width: 'FILL', name: 'Hook' })
const slip = k.stack(col, { gap: 18, padding: 48, width: 'FILL', fill: 'paper', radius: 6, stroke: { color: 'ink', width: 3, dash: [10, 8] }, name: 'Receipt' })
for (const [item, was] of [['Counter plan', '$228.00'], ['Shop plan', '$588.00'], ['Chain plan', '$1,428.00']]) {
  const row = k.stack(slip, { direction: 'HORIZONTAL', justify: 'SPACE_BETWEEN', width: 'FILL', name: 'Item' })
  k.text(row, item, { style: 'Line', color: 'ink', autoWidth: true })
  k.text(row, was, { style: 'Line', color: 'muted', autoWidth: true, name: 'Was' })
}
k.text(slip, '$235', { style: 'Price', color: 'hot', width: 'FILL', name: 'Total' })
k.text(col, 'Cyber Monday: 60% off.', { style: 'Caption', color: 'ink', width: 'FILL', name: 'Caption' })
// The till the receipt prints from fills the foot of the frame (no words below the apps' safe line, so it is all drawing).
k.rect(sheet, W - 160, 460, 'ink', { radius: 48, name: 'Printer', absolute: { x: 80, y: H - 360 } })
k.rect(sheet, W - 300, 18, 'muted', { radius: 9, name: 'Paper slot', absolute: { x: 150, y: H - 300 } })
k.rect(sheet, W - 360, 120, 'paper', { name: 'Paper tongue', stroke: { color: 'ink', width: 3, dash: [10, 8] }, absolute: { x: 180, y: H - 420 } })
k.ellipse(sheet, 36, 'hot', { name: 'Power light', absolute: { x: W - 190, y: H - 220 } })
k.cues(sheet, [
  { layer: 'Printer', preset: 'rise-in', at: 0 },
  { layer: 'Paper tongue', preset: 'slide-in', at: b(1), params: { direction: 'down' } },
  { layer: 'Hook', preset: 'words-in', at: 0 },
  { layer: 'Receipt', preset: 'wipe-in', at: b(2), params: { direction: 'down' } },
  { layer: 'Item', preset: 'rise-in', at: b(3), stagger: { delay: b(1) } },
  { layer: 'Total', preset: 'pop-in', at: b(8) },
  { layer: 'Total', preset: 'pulse', at: b(20) },
])
k.counts(sheet, [{ layer: 'Total', at: b(8), duration: b(4), counter: { from: 588, to: 235, prefix: '$' } }])
k.swaps(sheet, [{ layer: 'Caption', words: ['Cyber Monday: 60% off.', 'Every plan reprices.', 'Ends at midnight.'], at: b(10), hold: b(4), stagger: 30, in: 300, out: 240, unit: 'word', rise: 24 }])
// Each size is recomposed, not just resized: tighter margins and smaller display type where the frame is shorter.
const recompose = (top, bottom, hook, price, gap, h) => (kit, id) => {
  kit.patch(id, { padding: { top, right: 72, bottom, left: 72 }, itemSpacing: gap })
  // The till keeps to the foot of each size: placed from that size's height, not stretched with the frame.
  kit.patch(kit.named(id, 'Printer')[0], { y: h - 210 })
  kit.patch(kit.named(id, 'Paper slot')[0], { y: h - 150 })
  kit.patch(kit.named(id, 'Paper tongue')[0], { y: h - 250, height: 100 })
  kit.patch(kit.named(id, 'Power light')[0], { y: h - 90 })
  kit.patch(kit.named(id, 'Receipt')[0], { padding: { top: 28, right: 32, bottom: 28, left: 32 }, itemSpacing: 8 })
  kit.restyle(kit.named(id, 'Hook')[0], hook)
  kit.restyle(kit.named(id, 'Total')[0], price)
}
k.variants(sheet, [{ preset: 'ig-post', adjust: recompose(56, 230, 'Hook square', 'Price small', 20, 1080) }, { preset: 'ig-portrait', adjust: recompose(96, 260, 'Hook small', 'Price', 36, 1350) }])

