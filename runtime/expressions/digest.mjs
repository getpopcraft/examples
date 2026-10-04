// A weekly digest for a habit-tracking app exported from PopCraft: the same numbers the app's own screens show — the
// streak, this week's check-ins, the minutes — worked out here with the runtime's expression functions, so an email,
// a report or a server job never disagrees with what a visitor sees on the page.
//
//   node digest.mjs                 (the records in checkins.json; in your app they come from the site's database)

import { readFileSync } from 'node:fs'
import { FUNCTIONS, exprText } from '@popcraft/runtime'

// A visitor's records, as the site keeps them: each with its values and when it was made (ms).
const day = 86_400_000
const now = Date.now()
const checkins = JSON.parse(readFileSync(new URL('./checkins.json', import.meta.url), 'utf8'))
  .map(r => ({ values: r.values, at: now - r.daysAgo * day }))

// What an expression reads its records from: a collection by name.
const data = { rows: collection => (collection.toLowerCase() === 'check-ins' ? checkins : undefined) }
const call = (fn, ...args) => FUNCTIONS[fn](args, data)

const habits = [...new Set(checkins.map(r => r.values.habit))]
console.log(`Your week, ${exprText(call('today'))}\n`)
for (const habit of habits) {
  const streak = call('streak', 'Check-ins', 'habit', habit)
  const week = call('countSince', 'Check-ins', 6, 'habit', habit)
  const minutes = call('sumSince', 'Check-ins', 'minutes', 6, 'habit', habit)
  const best = call('best', 'Check-ins', 'minutes', 'habit', habit)
  console.log(`${habit.padEnd(10)} ${String(streak).padStart(2)}-day streak · ${week} this week · ${minutes} min (longest ${best} min)`)
}
console.log(`\n${call('count', 'Check-ins')} check-ins in all, ${call('distinct', 'Check-ins', 'habit')} habits.`)
