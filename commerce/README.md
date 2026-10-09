# Next.js Commerce, drawn by a PopCraft design

[Next.js Commerce](https://github.com/vercel/commerce) with its pages rendered by components exported from
[PopCraft](https://popcraft.app). The store does what Next.js Commerce does — Shopify's Storefront API, the cart
cookie, server actions, checkout, search, revalidation — and the design is PopCraft's: the **Fieldwork** storefront
template, its layout at every width, its type, colours and motion.

A designer changes the shop in PopCraft; `npm run design:sync` exports it again, and the store renders the new design
with its own products. No component is rewritten by hand.

## How it fits together

| Path | What it is |
| --- | --- |
| `design/fieldwork.popcraft` | The design: open it in PopCraft (**Import as new file**), change it, save it back here |
| `design/media/` | Its pictures (the hero, the story, the sample products), by content hash |
| `components/popcraft/` | The design exported as components: `HomePage`, `SearchPage`, `ProductPage`, `CartPage` |
| `public/popcraft/` | The pictures they draw |
| `app/` | Next.js Commerce's routes, each fetching from Shopify and rendering a PopCraft component |
| `app/actions.ts` | The design's forms (add to cart, remove, checkout, search) as server actions over Next.js Commerce's cart |
| `lib/shopify/`, `components/cart/actions.ts` | Next.js Commerce's Shopify client and cart actions, unchanged |
| `lib/popcraft.ts` | What every page passes: the visitor's cart (an empty one when there is none) and the menu |

A page is Next.js Commerce's data handed to a component:

```tsx
export default async function Product(props: { params: Promise<{ handle: string }> }) {
  const product = await getProduct((await props.params).handle);
  if (!product) return notFound();
  const [related, frame] = await Promise.all([getProductRecommendations(product.id), storeFrame()]);
  return <ProductPage product={product} products={related} onAddToCart={addToCart} {...frame} />;
}
```

The components take Next.js Commerce's own types (`Product`, `Cart`, `CartItem`, `Menu`) from
`@popcraft/runtime/commerce`, so nothing is mapped by hand. See
[Storefront components](https://popcraft.app/docs/exporting/commerce) for how a design is bound.

## Run it

You need a Shopify store with the Headless channel (or the Storefront API) and Node 24 or later.

```bash
cp .env.example .env.local   # your store's domain and Storefront access token
npm install
npm run dev
```

| Variable | What it is |
| --- | --- |
| `SHOPIFY_STORE_DOMAIN` | `your-store.myshopify.com` |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | From the Headless channel or a custom app with Storefront API access |
| `SHOPIFY_REVALIDATION_SECRET` | Any secret: Shopify's webhooks call `/api/revalidate?secret=…` when products change |
| `SITE_NAME`, `COMPANY_NAME` | The store's name in titles and the footer |

The footer draws Shopify's menu with the handle `next-js-frontend-footer-menu`, as Next.js Commerce does. Deploy it like
any Next.js app; on Vercel, add the variables to the project.

## Change the design

1. Open `design/fieldwork.popcraft` in PopCraft, or start from another storefront template (**New file › Web ›
   Kiln storefront**) and save it here.
2. Change anything: the layout, type, colours, motion, copy. Keep the lists and forms bound (Collections, Repeat and
   the forms' **Sending it**): they are how the store's data gets in.
3. Export again:

```bash
npm run design:sync   # popcraft components design/fieldwork.popcraft --out .
```

Product pictures, titles and prices come from Shopify; what the design draws itself (the hero, the story) comes from
`design/media`.

## What stays Next.js Commerce's

Variant selection, the cart's optimistic updates, sorting and filtering, and checkout are the store's. The design's add
to cart sends the first available variant; a store that sells options renders Next.js Commerce's variant selector
beside the component.

Next.js Commerce is MIT licensed (`license.md`).
