// size: web-desktop
// A pricing page whose monthly/yearly switch really works: two variables, a variant set, and every price block bound.
k.brand({ paper: '#FAFAF7', text: '#1A1D24', onPaper: '#555C69', primary: '#0E7C66', onPrimary: '#FFFFFF', card: '#FFFFFF', onCard: '#1A1D24', cardMuted: '#5C6370', line: '#E3E5E8' }, { name: 'Ledgerly' })
const monthly = k.variable('Billing', 'monthly', 'BOOLEAN', true)
const yearly = k.variable('Billing', 'yearly', 'BOOLEAN', false)
const t = (name, size, weight, lh, more = {}) => k.textStyle(name, { size, fontWeight: weight, lineHeight: lh, ...more })
t('Nav 16', 16, 500, 24); t('Brand 20', 20, 800, 28); t('Button 16', 16, 600, 24); t('Display 52', 52, 800, 60, { letterSpacing: -1.5 }); t('Display 36', 36, 800, 44)
t('Switch 16', 16, 500, 24); t('Switch on 16', 16, 700, 24); t('Plan 22', 22, 800, 28); t('Price 48', 48, 800, 52, { letterSpacing: -1.5 }); t('Body 15', 15, 400, 22); t('Small 14', 14, 400, 20)
web.buttons(k, { style: 'Button 16' })
k.variantSet('Billing switch', 'Billing', ['Monthly', 'Yearly'], { direction: 'HORIZONTAL', width: 'HUG', gap: 14, align: 'CENTER', padding: 4, props: { Left: 'Monthly', Right: 'Yearly' } }, (state, id) => {
  k.propText(id, 'Left', { style: state === 'Monthly' ? 'Switch on 16' : 'Switch 16', color: state === 'Monthly' ? 'text' : 'onPaper', autoWidth: true })
  const track = k.stack(id, { direction: 'HORIZONTAL', width: 56, height: 30, radius: 15, padding: 3, align: 'CENTER', justify: state === 'Yearly' ? 'MAX' : 'MIN', fill: 'primary', name: 'Track' })
  k.ellipse(track, 24, 'card', { name: 'Knob' })
  k.propText(id, 'Right', { style: state === 'Yearly' ? 'Switch on 16' : 'Switch 16', color: state === 'Yearly' ? 'text' : 'onPaper', autoWidth: true })
})
k.changeTo('Billing switch/Monthly', 'ON_CLICK', 'Billing switch/Yearly', 240, 'EASE_IN_OUT')
k.changeTo('Billing switch/Yearly', 'ON_CLICK', 'Billing switch/Monthly', 240, 'EASE_IN_OUT')
const sheet = k.sheet
web.page(k, sheet, { gap: 56, top: 32 })
web.nav(k, sheet, { links: ['Features', 'Pricing', 'Sign in'], cta: 'Start free trial', style: 'Nav 16', brandStyle: 'Brand 20' })
const head = k.stack(sheet, { gap: 18, name: 'Header' })
k.text(head, 'Simple pricing for independent work', { style: 'Display 52', color: 'text', width: 'FILL', name: 'Headline' })
const toggle = k.instance(head, 'Billing switch', { Left: 'Monthly', Right: 'Yearly' }, { name: 'Billing toggle' })
k.setVariable(toggle, monthly, { toggle: true })
k.setVariable(toggle, yearly, { toggle: true })
const plans = k.stack(sheet, { direction: 'HORIZONTAL', gap: 24, name: 'Plans' })
for (const { name, month } of [{ name: 'Solo', month: 12 }, { name: 'Studio', month: 29 }, { name: 'Agency', month: 59 }]) {
  const card = k.stack(plans, { gap: 16, fill: 'card', radius: 18, padding: 32, stroke: { color: 'line', width: 1 }, name: 'Plan' })
  k.text(card, name, { style: 'Plan 22', color: 'onCard', name: 'Plan name' })
  const price = k.stack(card, { name: 'Price' })
  const block = (which, amount, note) => {
    const b = k.stack(price, { gap: 4, fill: 'card', name: which + ' price' })
    k.text(b, amount, { style: 'Price 48', color: 'onCard', name: 'Amount' })
    k.text(b, note, { style: 'Small 14', color: 'cardMuted', name: 'Billed' })
    return b
  }
  // Each price block shows while its variable is true: the switch flips both variables, so every price changes at once.
  k.bindVariable(block('Monthly', '$' + month, 'per month, billed monthly'), 'visible', monthly)
  k.bindVariable(block('Yearly', '$' + month * 10, 'per year: two months free'), 'visible', yearly)
  k.instance(card, 'Button', { Label: 'Choose ' + name }, { name: 'Plan call' })
}
const faq = k.stack(sheet, { gap: 18, name: 'Questions' })
k.text(faq, 'Questions', { style: 'Display 36', color: 'text', name: 'Questions title' })
for (const [q, a] of [['Can I switch plans later?', 'Yes, whenever you like; the difference is prorated to the day.'], ['Is there a trial?', 'Thirty days on any plan, and we never ask for a card up front.'], ['Do charities get a discount?', 'Registered charities get 40% off any plan.']]) {
  // A rule between rows is its own 1 px layer: a stroke on a stack draws a whole box.
  k.patch(k.rect(faq, 10, 1, 'line', { name: 'Rule' }), { layoutSizingHorizontal: 'FILL' })
  const row = k.stack(faq, { gap: 6, padding: { top: 4, right: 0, bottom: 4, left: 0 }, name: 'Question' })
  k.text(row, q, { style: 'Plan 22', color: 'text', name: 'Question text' })
  k.text(row, a, { style: 'Body 15', color: 'onPaper', name: 'Answer' })
}
k.text(sheet, 'Prices in US dollars before tax. Cancel any time.', { style: 'Small 14', color: 'onPaper', width: 'FILL', name: 'Footer' })
web.webResponsive(k, sheet, { stack: ['Plans'], restyle: { 'Display 52': { tablet: 'Display 36', mobile: 'Display 36' } }, gap: { mobile: 40 } })

