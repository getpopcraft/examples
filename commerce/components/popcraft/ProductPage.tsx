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
  "id": "56ed2e63-c3de-4050-a6d2-981fea395b59",
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
    "id": "d13b8d84-4170-4344-89b8-16d116885ffa",
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
    "id": "56ed2e63-c3de-4050-a6d2-981fea395b59",
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
    "id": "5e515d30-897c-4c19-b099-5870d6f5656e",
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
    "id": "07d57f26-345c-46ce-959a-7fb64f2a946e",
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
    "id": "3ee6b33b-5941-497c-a77a-c5de61dddf0a",
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
    "id": "086c362f-12f8-40d8-abb3-41c8a13286f7",
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
    "id": "ac41a306-731d-47d1-888d-93a181a62cfb",
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
    "id": "7df713f5-172b-4512-ad11-b50b46df4000",
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
    "id": "6a05e218-627d-4049-b0e8-ace81dd7df1e",
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
    "id": "00aeaa2f-c054-4811-b0c2-dba3c919c58b",
    "values": {
      "title": "Shirts",
      "url": "/search/shirts"
    }
  },
  {
    "id": "d5f1399a-3ea0-4e1e-bcce-cc226af40fb7",
    "values": {
      "title": "Jackets",
      "url": "/search/jackets"
    }
  },
  {
    "id": "38815574-c673-4c2a-8794-958a4ea28edd",
    "values": {
      "title": "Knitwear",
      "url": "/search/knitwear"
    }
  },
  {
    "id": "3f68da9d-9241-4472-8eff-7c5a69a6985f",
    "values": {
      "title": "Repairs",
      "url": "/repairs"
    }
  }
]

const KEYFRAMES = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@media (max-width: 1024px) {
  [data-pc-id^="ce62996c-7e2d-44fb-8f35-aaa0aa65fca2~"] {
    min-height: max(2076px, 100dvh) !important;
  }
  [data-pc-id^="3b2726a1-d0bb-4089-b329-8099b6581b6d~"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id^="fe80d85b-18f2-4483-9a2b-f0c05f492a2b~"] {
    flex-direction: column !important;
    padding: 32px 40px 24px 40px !important;
  }
  [data-pc-id^="e61b37c3-608f-4c59-a9ad-df85fe3a83b0~"] {
    width: revert !important;
    max-width: revert !important;
    height: 688px !important;
    align-self: stretch !important;
  }
  [data-pc-id^="047d3a30-5be6-4274-aea4-9c1105dbb051~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="e521b618-7907-4f2c-9862-a8db22b53243~"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id^="53cb4205-bc9f-4336-8581-a10931dad7ae~"] {
    grid-template-columns: 1fr 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id^="8051e05f-2918-4397-b1ac-9ab9c12f56bf~"] {
    height: 336px !important;
  }
  [data-pc-id^="8051e05f-2918-4397-b1ac-9ab9c12f56bf~"] {
    height: 336px !important;
  }
  [data-pc-id^="8051e05f-2918-4397-b1ac-9ab9c12f56bf~"] {
    height: 336px !important;
  }
  [data-pc-id^="8051e05f-2918-4397-b1ac-9ab9c12f56bf~"] {
    height: 336px !important;
  }
  [data-pc-id^="62725e9c-4dff-4532-8fdc-817f1b997856~"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id^="cdf724ea-4771-4460-a2e6-938063cdf3f9~"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id^="8acc731b-5bf2-4411-b0a2-5d50d337c452~"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id^="ce62996c-7e2d-44fb-8f35-aaa0aa65fca2~"] {
    min-height: max(1572px, 100dvh) !important;
  }
  [data-pc-id^="3b2726a1-d0bb-4089-b329-8099b6581b6d~"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id^="7f3173cb-944c-4a0b-aa7c-864205e6f814~"] {
    display: none !important;
  }
  [data-pc-id^="0bad61ab-aec9-4d34-aa6e-b424850ae445~"] {
    display: none !important;
  }
  [data-pc-id^="31ce0f11-0738-44bf-b143-38aea8448cd9~"] {
    display: none !important;
  }
  [data-pc-id^="5427d98f-7a9f-4f1b-aa9c-c605ebdb40cf~"] {
    display: none !important;
  }
  [data-pc-id^="e4cbd97c-963b-45ff-969b-fe4e0551a452~"] {
    display: none !important;
  }
  [data-pc-id^="fe80d85b-18f2-4483-9a2b-f0c05f492a2b~"] {
    padding: 32px 20px 24px 20px !important;
  }
  [data-pc-id^="e61b37c3-608f-4c59-a9ad-df85fe3a83b0~"] {
    height: 335px !important;
  }
  [data-pc-id^="e521b618-7907-4f2c-9862-a8db22b53243~"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id^="8051e05f-2918-4397-b1ac-9ab9c12f56bf~"] {
    height: 159px !important;
  }
  [data-pc-id^="613f9bf8-673c-4e0e-8cee-1c735077d76b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="38f6c309-13be-4a89-8022-4f63f48e7928~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="8051e05f-2918-4397-b1ac-9ab9c12f56bf~"] {
    height: 159px !important;
  }
  [data-pc-id^="613f9bf8-673c-4e0e-8cee-1c735077d76b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="38f6c309-13be-4a89-8022-4f63f48e7928~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="8051e05f-2918-4397-b1ac-9ab9c12f56bf~"] {
    height: 159px !important;
  }
  [data-pc-id^="613f9bf8-673c-4e0e-8cee-1c735077d76b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="38f6c309-13be-4a89-8022-4f63f48e7928~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="8051e05f-2918-4397-b1ac-9ab9c12f56bf~"] {
    height: 159px !important;
  }
  [data-pc-id^="613f9bf8-673c-4e0e-8cee-1c735077d76b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="38f6c309-13be-4a89-8022-4f63f48e7928~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="62725e9c-4dff-4532-8fdc-817f1b997856~"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-65fca2-0 {
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
@keyframes timeline-65fca2-1 {
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
@keyframes timeline-65fca2-2 {
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
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(1545px, 100dvh)' }} data-pc-id={"ce62996c-7e2d-44fb-8f35-aaa0aa65fca2~" + item.id}>
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-65fca2-0 6000ms linear 0ms 1 normal both' }} data-pc-id={"3b2726a1-d0bb-4089-b329-8099b6581b6d~" + item.id} data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id={"91a89a0c-15fb-4479-8ec3-492a8c57c6ae~" + item.id}>
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"7f3173cb-944c-4a0b-aa7c-864205e6f814~" + item.id}>
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"0bad61ab-aec9-4d34-aa6e-b424850ae445~" + item.id}>
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"31ce0f11-0738-44bf-b143-38aea8448cd9~" + item.id}>
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"5427d98f-7a9f-4f1b-aa9c-c605ebdb40cf~" + item.id}>
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"e4cbd97c-963b-45ff-969b-fe4e0551a452~" + item.id}>
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"3e729a20-4cc8-4d00-bc47-a76b97e76d13~" + item.id}>
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"1b836c8d-c1c1-40a4-bcb0-8f50b22ef6aa~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"fe27b309-d062-4566-a207-4c19fa5ea07a~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"7bd5ef96-87e9-44d3-ae5b-1697c699fba3~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"6ee9144b-a5f7-4579-a592-a86b1f58b276~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"b9ef6180-bea0-4ec9-ac29-be771d63f6c5~" + item.id}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '64px', padding: '32px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"fe80d85b-18f2-4483-9a2b-f0c05f492a2b~" + item.id}>
          <div style={{ width: '726px', height: '726px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start', animation: 'timeline-65fca2-1 6000ms linear 0ms 1 normal both' }} data-pc-id={"e61b37c3-608f-4c59-a9ad-df85fe3a83b0~" + item.id} data-motion-child="" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0px 0px 0px 0px', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', animation: 'timeline-65fca2-2 6000ms linear 0ms 1 normal both' }} data-pc-id={"047d3a30-5be6-4274-aea4-9c1105dbb051~" + item.id} data-motion-child="">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"4a8f184e-09b6-4bd7-b2d8-b6ca499a5049~" + item.id}>
              {commerceWords(item, "title")}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"bdbbcb90-52d7-4ac2-ac31-c1167ccecbba~" + item.id}>
              {commerceWords(item, "price")}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '112px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"0e322e31-0fd0-47e5-b46c-1b3c5cab24b9~" + item.id}>
              <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"ba524f94-4889-449a-88b4-dbd27aff5aaf~" + item.id}>
                {commerceWords(item, "description")}
              </p>
            </div>
            <form style={{ margin: '0', position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"7a9de968-28b0-47d8-9631-66ecad744553~" + item.id} action={onAddToCart}>
              <input style={{ display: 'block', border: '0', padding: '0', margin: '0', background: 'none', outline: 'none', font: 'inherit', color: 'var(--brand-text)', minWidth: '0', position: 'absolute', left: '0px', top: '0px', width: '1px', height: 'auto', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '400', lineHeight: 'normal', textAlign: 'left', maxWidth: '100%' }} type="hidden" name="merchandiseId" defaultValue={commerceWords(item, "variant_id")} aria-label="merchandiseId" data-pc-id={"f6768548-bf0c-4153-b8d1-d5f6159f2f41~" + item.id} />
              <button style={{ display: 'flex', border: '0', padding: '15px 26px 15px 26px', background: 'var(--brand-primary)', font: 'inherit', color: 'inherit', textAlign: 'inherit', cursor: 'pointer', position: 'relative', borderRadius: '4px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} type="submit" data-pc-id={"90785368-d405-46c0-908b-5a7811e2b693~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onprimary)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"eb72089e-f905-44cf-ab54-1bb4530efc00~" + item.id}>
                  {'Add to cart'}
                </p>
              </button>
            </form>
            <div style={{ background: 'var(--brand-tint)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '8px', padding: '18px 18px 18px 18px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"87ec653c-7b72-4f5e-a0fc-6dc1b480c03b~" + item.id}>
              <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"4e21ffac-0c38-42ce-94f6-4a0ce2166b2b~" + item.id}>
                {'Free UK delivery over £75 · dispatched in 1–2 working days'}
              </p>
              <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"035de9d4-fa22-4dc6-bd9d-edb042fe444b~" + item.id}>
                {'Free returns within 60 days, and repairs for life'}
              </p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"e521b618-7907-4f2c-9862-a8db22b53243~" + item.id}>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"a4c4963e-9e4b-469b-939c-454ebaea4c9b~" + item.id}>
            {'You may also like'}
          </p>
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '20px', padding: '0px 0px 0px 0px' }} data-pc-id={"53cb4205-bc9f-4336-8581-a10931dad7ae~" + item.id}>
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).slice(0, 4).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"e80efb40-2786-4db0-b582-f2e7fd887f13~" + item.id}>
                  <div style={{ height: '309px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"8051e05f-2918-4397-b1ac-9ab9c12f56bf~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"613f9bf8-673c-4e0e-8cee-1c735077d76b~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"38f6c309-13be-4a89-8022-4f63f48e7928~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"9bbf229c-2474-4639-b350-aa8fd06341d1~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"62725e9c-4dff-4532-8fdc-817f1b997856~" + item.id}>
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id={"cdf724ea-4771-4460-a2e6-938063cdf3f9~" + item.id}>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"b66c3591-d460-466a-81e9-282ecc5b6f93~" + item.id}>
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"728383d3-740e-4c3a-828d-4c4137f673f5~" + item.id}>
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id={"8acc731b-5bf2-4411-b0a2-5d50d337c452~" + item.id}>
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"4ece4525-0218-4ccf-898b-2613d877bfa5~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
