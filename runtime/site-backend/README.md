# Host an exported site on any Node server

A site exported from PopCraft sends its forms (and, with accounts, its visitors' records) to its own server at
`/_pc/…`. On PopCraft's hosting and in an exported Next.js project, `@popcraft/runtime/server` answers those requests.
This example answers them from a plain Node server, with no framework and no Postgres, keeping everything in a JSON
file, for a small site you host yourself.

```bash
npm install
npm start          # → http://localhost:8787: sign up on the page, then look in data.json
npm test           # starts the server, sends a form, and checks it was kept
```

- `server.mjs`: the whole server. `siteRequest(request, path, site)` answers the site's own requests and returns
  null for anything else, which is served from `public/` (put your exported pages there).
- `site`: what the server needs to know: which forms the site has (the ids PopCraft gave them), its database, and
  whether it has sign-in (none here).
- `file-store.mjs`: a database in one JSON file, implementing the runtime's `SiteDatabase`. To use Postgres instead,
  swap it for `neonStore` from `@popcraft/runtime/server`; nothing else changes.

The handler does the safety work for you: it limits how often one visitor can send, takes only requests from the site
itself, accepts only forms the site has, caps sizes, and drops spam caught by the form's hidden field.

Docs: [exporting to Next.js](https://popcraft.app/docs/exporting/nextjs) · [publishing](https://popcraft.app/docs/exporting/publishing) ·
[@popcraft/runtime](https://www.npmjs.com/package/@popcraft/runtime)
