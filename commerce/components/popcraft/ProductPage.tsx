// Product, exported from PopCraft (Fieldwork storefront) as a component a Next.js Commerce store renders with its own data.
// Re-export it from PopCraft rather than editing it here: the design is the source.

import { Fragment } from 'react'
import { commerceItem, commerceWords, type CommerceItem, type Cart, type Menu, type Product } from '@popcraft/runtime/commerce'

export interface ProductPageProps {
  /** The product this page is about; none: the design's first sample. */
  product?: Product
  /** Cart; none: the design's samples. */
  cart?: Cart
  /** Products; none: the design's samples. */
  products?: Product[]
  /** Menu; none: the design's samples. */
  menu?: Menu[]
  /** What sending its addToCart form does (a server action). */
  onAddToCart?: (formData: FormData) => void | Promise<void>
}

const SAMPLE_PRODUCT: CommerceItem = {
  "id": "dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3",
  "values": {
    "title": "Linen overshirt",
    "handle": "linen-overshirt",
    "url": "/product/linen-overshirt",
    "description": "Heavy Irish linen, horn buttons and a chest pocket that fits a notebook. Softens with every wash; wear it open over a tee or buttoned on its own.",
    "price": "£98.00",
    "max_price": "",
    "image": "/popcraft/media/b300327e9b778f6cee485a5118f6fc54.jpg",
    "image_alt": "Linen overshirt",
    "available": true,
    "variant_id": "gid://shopify/ProductVariant/1001",
    "tags": "shirts"
  }
}

const SAMPLE_CART: CommerceItem[] = [
  {
    "id": "099165ff-241c-46bb-bbde-301f5b3ed528",
    "values": {
      "count": 2,
      "subtotal": "£243.00",
      "taxes": "Calculated at checkout",
      "total": "£243.00",
      "checkout_url": ""
    }
  }
]

const SAMPLE_PRODUCTS: CommerceItem[] = [
  {
    "id": "dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3",
    "values": {
      "title": "Linen overshirt",
      "handle": "linen-overshirt",
      "url": "/product/linen-overshirt",
      "description": "Heavy Irish linen, horn buttons and a chest pocket that fits a notebook. Softens with every wash; wear it open over a tee or buttoned on its own.",
      "price": "£98.00",
      "max_price": "",
      "image": "/popcraft/media/b300327e9b778f6cee485a5118f6fc54.jpg",
      "image_alt": "Linen overshirt",
      "available": true,
      "variant_id": "gid://shopify/ProductVariant/1001",
      "tags": "shirts"
    }
  },
  {
    "id": "c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca",
    "values": {
      "title": "Indigo chore jacket",
      "handle": "indigo-chore-jacket",
      "url": "/product/indigo-chore-jacket",
      "description": "Rope-dyed cotton twill with copper shank buttons and four patch pockets. Cut boxy to layer over knitwear, and dyed to fade where you wear it.",
      "price": "£145.00",
      "max_price": "",
      "image": "/popcraft/media/2b1c632a915848e9c42e1e7b03cf8946.jpg",
      "image_alt": "Indigo chore jacket",
      "available": true,
      "variant_id": "gid://shopify/ProductVariant/1002",
      "tags": "jackets"
    }
  },
  {
    "id": "e0a793a5-c70c-46b2-b6c0-d8cffb21639f",
    "values": {
      "title": "Canvas work trouser",
      "handle": "canvas-work-trouser",
      "url": "/product/canvas-work-trouser",
      "description": "A 12 oz olive duck canvas with a gusseted crotch, double knees and a tool pocket on the right leg. Breaks in, never out.",
      "price": "£110.00",
      "max_price": "",
      "image": "/popcraft/media/2b361e8e9c35d64347f40a38454c8904.jpg",
      "image_alt": "Canvas work trouser",
      "available": true,
      "variant_id": "gid://shopify/ProductVariant/1003",
      "tags": "trousers"
    }
  },
  {
    "id": "b89d93a3-3f0c-4234-a3f5-0a3f1d59338f",
    "values": {
      "title": "Fisherman jumper",
      "handle": "fisherman-jumper",
      "url": "/product/fisherman-jumper",
      "description": "Undyed British wool in a traditional cable, knitted in Leicestershire. Warm enough for a February morning on the allotment.",
      "price": "£165.00",
      "max_price": "",
      "image": "/popcraft/media/2eacf166cbac8f0e712100be50fc0ec0.jpg",
      "image_alt": "Fisherman jumper",
      "available": true,
      "variant_id": "gid://shopify/ProductVariant/1004",
      "tags": "knitwear"
    }
  },
  {
    "id": "4288312a-573f-42f4-986a-df670f4d7966",
    "values": {
      "title": "Heavyweight tee",
      "handle": "heavyweight-tee",
      "url": "/product/heavyweight-tee",
      "description": "A 280 gsm organic cotton tee with a ribbed collar that keeps its shape. The one you will reach for first.",
      "price": "£38.00",
      "max_price": "",
      "image": "/popcraft/media/4b74d25b0174afa83244c6c99a54ca4a.jpg",
      "image_alt": "Heavyweight tee",
      "available": true,
      "variant_id": "gid://shopify/ProductVariant/1005",
      "tags": "tees"
    }
  },
  {
    "id": "213cc024-6be3-4df4-ae01-e392398e14ee",
    "values": {
      "title": "Waxed field cap",
      "handle": "waxed-field-cap",
      "url": "/product/waxed-field-cap",
      "description": "Six panels of waxed cotton with a brass buckle. Shrugs off a shower; re-wax it once a year.",
      "price": "£42.00",
      "max_price": "",
      "image": "/popcraft/media/5f19fa22ae7c8d5d2c027b8939382313.jpg",
      "image_alt": "Waxed field cap",
      "available": true,
      "variant_id": "gid://shopify/ProductVariant/1006",
      "tags": "accessories"
    }
  },
  {
    "id": "93eee42e-e7d4-4db0-ac8c-ad4c69ee757d",
    "values": {
      "title": "Market tote",
      "handle": "market-tote",
      "url": "/product/market-tote",
      "description": "Undyed 18 oz canvas with bridle-leather handles riveted on. Carries a week of shopping and lasts a decade of them.",
      "price": "£55.00",
      "max_price": "",
      "image": "/popcraft/media/0bf65a0ac4c0b8adff018424e1b25e4e.jpg",
      "image_alt": "Market tote",
      "available": true,
      "variant_id": "gid://shopify/ProductVariant/1007",
      "tags": "bags"
    }
  },
  {
    "id": "763365bf-657e-4c1f-82f3-8590123e9061",
    "values": {
      "title": "Workshop boot",
      "handle": "workshop-boot",
      "url": "/product/workshop-boot",
      "description": "Full-grain tan leather on a Goodyear-welted commando sole, resoleable at our Northampton workshop.",
      "price": "£240.00",
      "max_price": "",
      "image": "/popcraft/media/3afdf66eb5dc931919b2cb7458ce1b50.jpg",
      "image_alt": "Workshop boot",
      "available": true,
      "variant_id": "gid://shopify/ProductVariant/1008",
      "tags": "footwear"
    }
  }
]

const SAMPLE_MENU: CommerceItem[] = [
  {
    "id": "eb767dcd-e2b5-4558-b8c3-b37c23ad1bb3",
    "values": {
      "title": "Shirts",
      "url": "/search/shirts"
    }
  },
  {
    "id": "d71504b6-9b58-4b15-a631-f3860fec366f",
    "values": {
      "title": "Jackets",
      "url": "/search/jackets"
    }
  },
  {
    "id": "4ac3fc0d-151e-4437-a1e3-e4e90a7d9c59",
    "values": {
      "title": "Knitwear",
      "url": "/search/knitwear"
    }
  },
  {
    "id": "7bc78cf0-91df-472c-8580-a5dde7ca2160",
    "values": {
      "title": "Repairs",
      "url": "/repairs"
    }
  }
]

const KEYFRAMES = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@media (max-width: 1024px) {
  [data-pc-id="996255cd-b965-49a2-a4e4-99f086a00109~__pcitem__"] {
    min-height: max(2076px, 100dvh) !important;
  }
  [data-pc-id="10e70f7e-d824-4198-9090-6578d0283dc9~__pcitem__"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id="03ee4c30-8384-40d8-bc8f-59754623b04b~__pcitem__"] {
    flex-direction: column !important;
    padding: 32px 40px 24px 40px !important;
  }
  [data-pc-id="22adfe89-6578-40f9-a4ae-a8c3359f7d2c~__pcitem__"] {
    width: revert !important;
    max-width: revert !important;
    height: 688px !important;
    align-self: stretch !important;
  }
  [data-pc-id="d9a47309-7bb2-4596-9028-85dc3b767366~__pcitem__"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="5df2e742-a585-4695-b772-4d4e981dcb5b~__pcitem__"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="c144ab37-0907-491d-ab63-dfce9547bbf7~__pcitem__"] {
    grid-template-columns: 1fr 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id="036f09af-578d-4977-b033-8454e96349cb~__pcitem__~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    height: 336px !important;
  }
  [data-pc-id="036f09af-578d-4977-b033-8454e96349cb~__pcitem__~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    height: 336px !important;
  }
  [data-pc-id="036f09af-578d-4977-b033-8454e96349cb~__pcitem__~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    height: 336px !important;
  }
  [data-pc-id="036f09af-578d-4977-b033-8454e96349cb~__pcitem__~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    height: 336px !important;
  }
  [data-pc-id="c742d5e4-961f-4812-8f19-14c9096b7ddb~__pcitem__"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="64c9db84-6e64-4439-86ad-d3b3039dcadc~__pcitem__"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="6dcdf9ea-8410-4be2-86b9-458d3054c244~__pcitem__"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id="996255cd-b965-49a2-a4e4-99f086a00109~__pcitem__"] {
    min-height: max(1572px, 100dvh) !important;
  }
  [data-pc-id="10e70f7e-d824-4198-9090-6578d0283dc9~__pcitem__"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id="ea68196f-8c4c-4fe9-9a77-fd27199f5ef2~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="ff2724cb-4465-47b2-9963-680df993c007~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="6984a89a-4de4-47af-9009-6a23c1b907c6~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="afef0d2f-9bae-4594-98c7-404a294685b9~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="a5cfc3df-6467-4b12-af72-0bdb6cf93ce2~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="03ee4c30-8384-40d8-bc8f-59754623b04b~__pcitem__"] {
    padding: 32px 20px 24px 20px !important;
  }
  [data-pc-id="22adfe89-6578-40f9-a4ae-a8c3359f7d2c~__pcitem__"] {
    height: 335px !important;
  }
  [data-pc-id="5df2e742-a585-4695-b772-4d4e981dcb5b~__pcitem__"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="036f09af-578d-4977-b033-8454e96349cb~__pcitem__~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    height: 159px !important;
  }
  [data-pc-id="7f8c6900-6d8d-4378-8c6b-7b05e0fc0600~__pcitem__~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="478b707e-c6e9-4381-bf3c-6488e9467994~__pcitem__~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="036f09af-578d-4977-b033-8454e96349cb~__pcitem__~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    height: 159px !important;
  }
  [data-pc-id="7f8c6900-6d8d-4378-8c6b-7b05e0fc0600~__pcitem__~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="478b707e-c6e9-4381-bf3c-6488e9467994~__pcitem__~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="036f09af-578d-4977-b033-8454e96349cb~__pcitem__~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    height: 159px !important;
  }
  [data-pc-id="7f8c6900-6d8d-4378-8c6b-7b05e0fc0600~__pcitem__~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="478b707e-c6e9-4381-bf3c-6488e9467994~__pcitem__~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="036f09af-578d-4977-b033-8454e96349cb~__pcitem__~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    height: 159px !important;
  }
  [data-pc-id="7f8c6900-6d8d-4378-8c6b-7b05e0fc0600~__pcitem__~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="478b707e-c6e9-4381-bf3c-6488e9467994~__pcitem__~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="c742d5e4-961f-4812-8f19-14c9096b7ddb~__pcitem__"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-a00109-0 {
  0% { opacity: 0; }
  0.556% { opacity: 0.187; }
  1.111% { opacity: 0.349; }
  1.667% { opacity: 0.488; }
  2.222% { opacity: 0.606; }
  2.778% { opacity: 0.704; }
  3.333% { opacity: 0.784; }
  3.889% { opacity: 0.848; }
  4.444% { opacity: 0.898; }
  5% { opacity: 0.936; }
  5.556% { opacity: 0.963; }
  6.111% { opacity: 0.981; }
  7.222% { opacity: 0.998; }
  100% { opacity: 1; }
}
@keyframes timeline-a00109-1 {
  0% { opacity: 0; }
  1.667% { opacity: 0; }
  2.222% { opacity: 0.12; }
  2.778% { opacity: 0.23; }
  3.333% { opacity: 0.33; }
  3.889% { opacity: 0.421; }
  4.444% { opacity: 0.504; }
  5% { opacity: 0.578; }
  5.556% { opacity: 0.645; }
  6.111% { opacity: 0.704; }
  6.667% { opacity: 0.756; }
  7.222% { opacity: 0.802; }
  8.333% { opacity: 0.875; }
  9.444% { opacity: 0.928; }
  10.556% { opacity: 0.963; }
  12.222% { opacity: 0.991; }
  14.444% { opacity: 1; }
  100% { opacity: 1; }
}
@keyframes timeline-a00109-2 {
  0% { transform: translate(0px, 205px); opacity: 0; }
  5% { transform: translate(0px, 205px); opacity: 0; animation-timing-function: step-end; }
  5.556% { transform: translate(0px, 139.48px); opacity: 0.32; }
  6.111% { transform: translate(0px, 94.9px); opacity: 0.537; }
  6.667% { transform: translate(0px, 64.57px); opacity: 0.685; }
  7.222% { transform: translate(0px, 43.93px); opacity: 0.786; }
  7.778% { transform: translate(0px, 29.89px); opacity: 0.854; }
  8.333% { transform: translate(0px, 20.34px); opacity: 0.901; }
  8.889% { transform: translate(0px, 13.84px); opacity: 0.932; }
  9.444% { transform: translate(0px, 9.42px); opacity: 0.954; }
  10.556% { transform: translate(0px, 4.36px); opacity: 0.979; }
  12.222% { transform: translate(0px, 1.37px); opacity: 0.993; }
  14.444% { transform: translate(0px, 0.29px); opacity: 0.999; animation-timing-function: step-end; }
  15% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}`
export function ProductPage({ product, cart, products, menu, onAddToCart }: ProductPageProps = {}) {
  const item = product ? commerceItem("commerce.product", product) : SAMPLE_PRODUCT
  return (
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(1545px, 100dvh)' }} data-pc-id={"996255cd-b965-49a2-a4e4-99f086a00109~" + item.id}>
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-a00109-0 6000ms linear 0ms 1 normal both' }} data-pc-id={"10e70f7e-d824-4198-9090-6578d0283dc9~" + item.id} data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id={"f593e2ab-5387-4171-94f6-4c29a240c867~" + item.id}>
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"ea68196f-8c4c-4fe9-9a77-fd27199f5ef2~" + item.id}>
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"ff2724cb-4465-47b2-9963-680df993c007~" + item.id}>
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"6984a89a-4de4-47af-9009-6a23c1b907c6~" + item.id}>
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"afef0d2f-9bae-4594-98c7-404a294685b9~" + item.id}>
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"a5cfc3df-6467-4b12-af72-0bdb6cf93ce2~" + item.id}>
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"7384ed5c-f87d-4208-8760-f80bce28b54f~" + item.id}>
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"48bfdf70-7ad5-48a0-9a6f-39f92d4b05b0~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"42c519c1-7939-4e36-bf1f-ee16a4b9ee4c~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"f1c79f7c-c03a-4446-9c34-551d3dcd22ff~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"9591bc47-53f5-4fa9-80c1-55f7706a5169~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"3ebd4a1d-17bb-4300-bb31-e01a971b768a~" + item.id}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '64px', padding: '32px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"03ee4c30-8384-40d8-bc8f-59754623b04b~" + item.id}>
          <div style={{ width: '726px', height: '726px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start', animation: 'timeline-a00109-1 6000ms linear 0ms 1 normal both' }} data-pc-id={"22adfe89-6578-40f9-a4ae-a8c3359f7d2c~" + item.id} data-motion-child="" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0px 0px 0px 0px', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', animation: 'timeline-a00109-2 6000ms linear 0ms 1 normal both' }} data-pc-id={"d9a47309-7bb2-4596-9028-85dc3b767366~" + item.id} data-motion-child="">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"7f09481b-4306-4334-82a8-0f893056fd83~" + item.id}>
              {commerceWords(item, "title")}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"150167f2-ea9a-4749-bf03-5a75a3e50542~" + item.id}>
              {commerceWords(item, "price")}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '112px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"ab5499de-ca61-4030-ac96-b098b410ad34~" + item.id}>
              <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"f3f7a6f3-4479-4fa6-ab88-8b0e0337b25b~" + item.id}>
                {commerceWords(item, "description")}
              </p>
            </div>
            <form style={{ margin: '0', position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"3f1cb86b-9ee8-46a0-80e6-052ebe8c19e1~" + item.id} action={onAddToCart}>
              <input style={{ display: 'block', border: '0', padding: '0', margin: '0', background: 'none', outline: 'none', font: 'inherit', color: 'var(--brand-text)', minWidth: '0', position: 'absolute', left: '0px', top: '0px', width: '1px', height: 'auto', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '400', lineHeight: 'normal', textAlign: 'left', maxWidth: '100%' }} type="hidden" name="merchandiseId" defaultValue={commerceWords(item, "variant_id")} aria-label="merchandiseId" data-pc-id={"3dfda3cb-d907-4f88-a4a5-a83ea181bb30~" + item.id} />
              <button style={{ display: 'flex', border: '0', padding: '15px 26px 15px 26px', background: 'var(--brand-primary)', font: 'inherit', color: 'inherit', textAlign: 'inherit', cursor: 'pointer', position: 'relative', borderRadius: '4px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} type="submit" data-pc-id={"7ae9ae5c-2305-4543-b2f1-c95a0b1bfe38~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onprimary)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"f89d1dc8-68d3-4972-832e-98ad6b936fd6~" + item.id}>
                  {'Add to cart'}
                </p>
              </button>
            </form>
            <div style={{ background: 'var(--brand-tint)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '8px', padding: '18px 18px 18px 18px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"9527dc4b-114a-4d70-9328-cc710f97938f~" + item.id}>
              <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"d26a4c85-0f6b-40ba-9a99-03489fad195f~" + item.id}>
                {'Free UK delivery over £75 · dispatched in 1–2 working days'}
              </p>
              <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"35a8bd46-9b78-4276-92c7-2b5cbd6f0a2f~" + item.id}>
                {'Free returns within 60 days, and repairs for life'}
              </p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"5df2e742-a585-4695-b772-4d4e981dcb5b~" + item.id}>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"367c0637-b3fb-4478-829f-e58e6a2a5c3c~" + item.id}>
            {'You may also like'}
          </p>
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '20px', padding: '0px 0px 0px 0px' }} data-pc-id={"c144ab37-0907-491d-ab63-dfce9547bbf7~" + item.id}>
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).slice(0, 4).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"50849473-9725-4f97-a5c9-4b108628c2a6~" + item.id}>
                  <div style={{ height: '309px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"036f09af-578d-4977-b033-8454e96349cb~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"7f8c6900-6d8d-4378-8c6b-7b05e0fc0600~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"478b707e-c6e9-4381-bf3c-6488e9467994~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"42c8416f-150f-49af-b52e-ed5a03cb5c22~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"c742d5e4-961f-4812-8f19-14c9096b7ddb~" + item.id}>
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id={"64c9db84-6e64-4439-86ad-d3b3039dcadc~" + item.id}>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"3210c189-cd8e-4371-b434-605dae4f1b61~" + item.id}>
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"d93bba35-86f5-41af-80b1-4f2770d8c725~" + item.id}>
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id={"6dcdf9ea-8410-4be2-86b9-458d3054c244~" + item.id}>
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"8ae45ad2-02ea-41be-b85b-aaa62a3ab53e~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
