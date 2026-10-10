# PopCraft examples

Working examples for PopCraft's npm packages, and complete templates to start from. Each folder is a small, complete project: `npm install`, then run it.
They install the published packages from npm, and CI runs every one against the latest releases each week, so what is
here works with what you can install today.

| Package | Example | What it does |
|---|---|---|
| **Templates** | [templates](templates) | **Twenty-five templates in every format**, written as PopCraft's own are (most are the gallery's own sources): launch films, music videos, reels, 3D, anime, web pages, Lottie, email, decks, app screens. Build, check against every official rule, picture and publish them with `popcraft template` |
| [`@popcraft/kit`](https://www.npmjs.com/package/@popcraft/kit) | [kit/social-cards](kit/social-cards) | One checked Instagram post per event in a JSON file, as editable `.popcraft` files |
| | [kit/design-check](kit/design-check) | A CI gate that fails on unreadable text, text too small, words under an app's buttons and empty frames |
| | [kit/typed-script](kit/typed-script) | A design script with the kit's types: completion in your editor and a typecheck before you build |
| [`@popcraft/cli`](https://www.npmjs.com/package/@popcraft/cli) | [cli/build-a-design](cli/build-a-design) | A launch post, story and landscape ad from one script, built and checked in one command |
| | [cli/translate](cli/translate) | A translated copy of a design for every language, layouts reflowing round the new words |
| [`@popcraft/runtime`](https://www.npmjs.com/package/@popcraft/runtime) | [runtime/expressions](runtime/expressions) | A weekly digest worked out with an exported app's own expression functions, so the numbers match |
| | [runtime/site-backend](runtime/site-backend) | An exported site's forms answered from a plain Node server, kept in a JSON file |
| | [commerce](commerce) | **Next.js Commerce drawn by a PopCraft design**: Shopify's products, cart and checkout rendered by components exported from a storefront template |
| [`@popcraft/plugins`](https://www.npmjs.com/package/@popcraft/plugins) | [getpopcraft/plugins](https://github.com/getpopcraft/plugins) | Plugins, widgets, themes, brushes, shaders and templates |

Node 25 or later for the CLI examples, 24 or later for the rest.

## Docs

- [Packages](https://popcraft.app/docs/api/packages): which package is for what
- [Design reference](https://popcraft.app/docs/api/design-reference): the kit by topic, with worked examples
- [Making templates](https://popcraft.app/docs/api/templates): templates as PopCraft's own are made
- [Command line](https://popcraft.app/docs/api/cli) · [Designing with an AI agent](https://popcraft.app/docs/api/agents)
- [Exporting to Next.js](https://popcraft.app/docs/exporting/nextjs): what `@popcraft/runtime` is part of
- [Storefront components](https://popcraft.app/docs/exporting/commerce): a design as a Next.js Commerce store's pages

MIT licensed. Copy anything here into your own projects.
