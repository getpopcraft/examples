// A product launch in three sizes from one script: an Instagram post, a story (words kept clear of the apps' buttons)
// and a landscape ad. `k.variants` makes the other sizes from the post and adjusts each, so a change here changes all three.
k.brand({ paper: '#ECFDF5', text: '#052E2B', accent: '#047857', onAccent: '#FFFFFF' }, { name: 'Fieldnote', site: 'fieldnote.example' })
k.textStyle('Kicker', { size: 30, fontWeight: 800, letterSpacing: 2, lineHeight: 38 })
k.textStyle('Hook', { size: 104, fontWeight: 900, lineHeight: 100, letterSpacing: -3 })
k.textStyle('Body', { size: 38, fontWeight: 500, lineHeight: 50 })
k.textStyle('Button', { size: 32, fontWeight: 800, lineHeight: 40 })
// The other sizes' type, named up front: the story reads from further away, the landscape ad has little height.
k.textStyle('Hook story', { size: 124, fontWeight: 900, lineHeight: 118, letterSpacing: -4 })
k.textStyle('Body story', { size: 46, fontWeight: 500, lineHeight: 60 })
k.textStyle('Hook wide', { size: 60, fontWeight: 900, lineHeight: 60, letterSpacing: -2 })
k.textStyle('Body wide', { size: 26, fontWeight: 500, lineHeight: 34 })
k.flowSheet(k.sheet, 30, { top: 96, right: 96, bottom: 96, left: 96 }, 'paper')
const tag = k.stack(k.sheet, { direction: 'HORIZONTAL', width: 'HUG', fill: 'accent', radius: 8, padding: { top: 12, right: 20, bottom: 12, left: 20 }, name: 'Tag' })
k.text(tag, 'NOW ON IOS AND ANDROID', { style: 'Kicker', color: 'onAccent', autoWidth: true })
k.text(k.sheet, 'Field notes that file themselves.', { style: 'Hook', color: 'text', width: 'FILL', name: 'Hook' })
// The product between the headline and the pitch: a notebook page being filed, growing to fill each size's height.
const art = k.stack(k.sheet, { direction: 'HORIZONTAL', gap: 28, align: 'CENTER', width: 'FILL', fill: 'accent', radius: 28, padding: 36, name: 'Art' })
k.patch(art, { layoutGrow: 1 })
const page = k.stack(art, { gap: 16, width: 'FILL', fill: 'paper', radius: 16, padding: 28, name: 'Note page' })
for (const w of [260, 340, 200, 300]) k.rect(page, w, 16, 'accent', { radius: 8, name: 'Handwriting' })
const folder = k.stack(art, { gap: 12, width: 'HUG', align: 'CENTER', name: 'Filed' })
k.ellipse(folder, 88, 'onAccent', { name: 'Filed mark' })
k.text(k.sheet, 'Snap a page, say what it is, and it lands in the right project with the date and place.', { style: 'Body', color: 'text', width: 'FILL', name: 'Pitch' })
const button = k.stack(k.sheet, { direction: 'HORIZONTAL', width: 'HUG', fill: 'accent', radius: 999, padding: { top: 20, right: 40, bottom: 20, left: 40 }, name: 'Button' })
k.text(button, 'Get {{brand.name}}', { style: 'Button', color: 'onAccent', autoWidth: true })

k.variants(k.sheet, [
  // The story: words inside x 64–940 and y 250–1440, where the apps draw nothing of their own; the notebook, a picture,
  // goes below that line, under the words.
  { preset: 'ig-story', adjust: (kit, id) => {
    kit.patch(id, { padding: { top: 280, right: 160, bottom: 520, left: 80 }, primaryAxisAlignItems: 'SPACE_BETWEEN' })
    kit.restyle(kit.named(id, 'Hook')[0], 'Hook story')
    kit.restyle(kit.named(id, 'Pitch')[0], 'Body story')
    kit.patch(kit.named(id, 'Art')[0], { layoutPositioning: 'ABSOLUTE', layoutGrow: 0, layoutSizingHorizontal: 'FIXED', layoutSizingVertical: 'FIXED', x: 80, y: 1480, width: 920, height: 400 })
  } },
  // The landscape ad: the words on the left half, the notebook filling the right.
  { preset: 'ad-landscape', adjust: (kit, id) => {
    kit.patch(id, { padding: { top: 56, right: 620, bottom: 56, left: 64 }, itemSpacing: 18, primaryAxisAlignItems: 'CENTER' })
    kit.restyle(kit.named(id, 'Hook')[0], 'Hook wide')
    kit.restyle(kit.named(id, 'Pitch')[0], 'Body wide')
    kit.patch(kit.named(id, 'Art')[0], { layoutPositioning: 'ABSOLUTE', layoutGrow: 0, layoutSizingHorizontal: 'FIXED', layoutSizingVertical: 'FIXED', x: 640, y: 56, width: 500, height: 516 })
  } },
])
