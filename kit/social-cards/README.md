# Event cards from a spreadsheet

One Instagram post for every event in `events.json`, each written as a `.popcraft` file you can open and keep
editing in PopCraft. Swap in your own list (export a sheet as JSON) and run it again whenever the programme changes.

```bash
npm install
npm start          # → out/maker-night.popcraft, out/type-walk.popcraft, out/risograph.popcraft
```

How it works:

- Each card is a **design script**, the same code PopCraft's own templates are written in, filled with one event's
  words. `runDesign` from `@popcraft/kit` builds it in a sandbox.
- Every card is **checked**: contrast (also under a light and a dark brand kit, so it re-skins safely), text size,
  safe areas, overlap and empty space. A card with a problem fails the run and says what to fix.
- Colours are **brand roles** (`paper`, `text`, `accent`, `onAccent`), so applying a brand kit in PopCraft re-skins
  every card at once.

Open a card in PopCraft (drag the file onto the app) to change it by hand, or edit the script and run again.

Docs: [design reference](https://popcraft.app/docs/api/design-reference) · [@popcraft/kit](https://www.npmjs.com/package/@popcraft/kit)
