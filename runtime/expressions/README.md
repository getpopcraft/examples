# A weekly digest that matches the app

An app exported from PopCraft works out its numbers with expressions: a habit tracker shows `streak("Check-ins",
"habit", item_id)`, `countSince("Check-ins", 6)`, `sumSince("Check-ins", "minutes", 6)`. `@popcraft/runtime` is the
code those expressions run on, so a server job, a report or an email digest built on it shows the same numbers the
visitor sees on the page, to the day.

```bash
npm install
npm start
```

```text
Your week, Saturday, October 3

Running     3-day streak · 4 this week · 126 min (longest 41 min)
Reading     4-day streak · 4 this week · 100 min (longest 35 min)
Piano       1-day streak · 1 this week · 45 min (longest 45 min)
```

The records come from `checkins.json` here. In your app they are the visitor's records from the site's database
(`listRecords` in `@popcraft/runtime/server`), each with its `values` and when it was made (`at`, in ms). An
expression reads them through one function, `rows(collection)`.

Every function an expression can call is in `FUNCTIONS`: records (`count`, `sum`, `distinct`, `best`, `countSince`,
`countOn`, `sumSince`, `streak`), dates (`today`), and maths (`min`, `max`, `clamp`, `round`, `mix`…). `ops` holds
the operators (`ops.add`, `ops.gt`…) with PopCraft's rules for mixing text and numbers.

Docs: [exporting to Next.js](https://popcraft.app/docs/exporting/nextjs) · [@popcraft/runtime](https://www.npmjs.com/package/@popcraft/runtime)
