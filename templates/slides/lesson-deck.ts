// Education deck: a Year 7 science lesson on photosynthesis. It runs the lesson's objectives → what a plant needs
// (one click each, so the class can call them out first) → the word equation → where in the leaf it happens →
// numbers to remember → a check question that reveals its answer on a click → the homework.

import { defineDeck } from '@popcraft/kit/templates/slides/deck'

export default defineDeck({
  id: 'lesson-deck',
  meta: {
    name: 'Lesson deck',
    description: 'An eight-slide 16:9 science lesson — objectives, ideas that build one per click, an equation, steps, key numbers, a check question and the homework',
    category: 'presentation', tags: ['education', 'lesson', 'school', 'science', 'classroom', 'deck', 'builds'],
    platforms: ['slides'], formats: ['slide-deck'], useCases: ['education'],
    created: '2026-09-29', updated: '2026-09-29',
  },
  colors: { primary: '#1B4332', onPrimary: '#FFFFFF', accent: '#B5471B', onAccent: '#FFFFFF', paper: '#F8FAF5', text: '#1B2B22', onPaper: '#4B5A50', tint: '#D8F3DC', onTint: '#1B4332' },
  fields: { company: 'Ashgrove School · Science', title: 'How plants make their food', lead: 'Year 7 · Photosynthesis · Lesson 3 of 6' },
  slides: [
    { kind: 'title', name: 'Title slide', kicker: 'YEAR 7 SCIENCE', title: '{{brand.title}}', lead: '{{brand.lead}}' },
    { kind: 'agenda', name: 'Today', heading: 'Today you will', items: ['Name the four things a plant needs to make food', 'Write the word equation for photosynthesis', 'Say where in the leaf it happens', 'Get ready to test a leaf for starch'] },
    { kind: 'points', name: 'What a plant needs', heading: 'What a plant needs', points: ['Light — from the Sun, or a lamp in the lab', 'Water — drawn up from the roots', 'Carbon dioxide — taken in through tiny holes in the leaf', 'Chlorophyll — the green pigment that captures light'] },
    { kind: 'panels', name: 'The equation', heading: 'The word equation', filled: true, panels: [{ title: 'What goes in', body: 'carbon dioxide + water, with energy from light' }, { title: 'What comes out', body: 'glucose + oxygen' }] },
    { kind: 'steps', name: 'Inside the leaf', heading: 'Inside the leaf', steps: [{ title: 'Stomata', body: 'Tiny pores let carbon dioxide in' }, { title: 'Veins', body: 'Bring water up from the roots' }, { title: 'Chloroplasts', body: 'Capture light and make glucose' }, { title: 'Out', body: 'Oxygen leaves through the stomata' }] },
    { kind: 'stats', name: 'Numbers', heading: 'Numbers to remember', stats: [{ figure: '8 min', label: 'for sunlight to travel from the Sun to the leaf' }, { figure: '6', label: 'molecules of carbon dioxide for every glucose' }, { figure: '4', label: 'things a plant needs to make its food' }] },
    { kind: 'check', name: 'Check', kicker: 'CHECK', question: 'The oxygen a plant gives off: where does it come from?', answer: 'From water. The plant splits water molecules and lets the oxygen go.' },
    { kind: 'closing', name: 'Homework', title: 'Homework: label a leaf', line: 'Workbook page 42, due Thursday' },
  ],
})
