// Search, exported from PopCraft (Fieldwork storefront) as a component a Next.js Commerce store renders with its own data.
// Re-export it from PopCraft rather than editing it here: the design is the source.

import { Fragment } from 'react'
import { commerceItem, commerceWords, type CommerceItem, type Cart, type Menu, type Product } from '@popcraft/runtime/commerce'

export interface SearchPageProps {
  /** Cart; none: the design's samples. */
  cart?: Cart
  /** Products; none: the design's samples. */
  products?: Product[]
  /** Menu; none: the design's samples. */
  menu?: Menu[]
  /** What sending its search form does (a server action). */
  onSearch?: (formData: FormData) => void | Promise<void>
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

const KEYFRAMES = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');
@media (max-width: 1024px) {
  [data-pc-id="df0199b4-f3e4-4ef1-a73b-4830643fd1a8"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id="d13bcd36-6b59-47bd-b0d4-66d4dafc4751"] {
    justify-content: revert !important;
    align-items: revert !important;
    flex-direction: column !important;
    padding: 40px 40px 8px 40px !important;
  }
  [data-pc-id="49e64ce1-7fd6-4034-9f42-c2637aeb8144"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="7434c10e-f237-4a8c-b6b9-2f37c3c939f1"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="3a895ff0-8a7b-420c-8cd6-7251fc3e8d69"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="6a7ebbc5-f11e-4c90-8987-bb4059e31d41"] {
    grid-template-columns: 1fr 1fr !important;
    gap: 24px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    height: 332px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    height: 332px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    height: 332px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    height: 332px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~4288312a-573f-42f4-986a-df670f4d7966"] {
    height: 332px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~213cc024-6be3-4df4-ae01-e392398e14ee"] {
    height: 332px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~93eee42e-e7d4-4db0-ac8c-ad4c69ee757d"] {
    height: 332px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~763365bf-657e-4c1f-82f3-8590123e9061"] {
    height: 332px !important;
  }
  [data-pc-id="4dfefa6c-38f7-4310-8e8b-b2a412e300f8"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="179d10dc-1d14-4078-8163-8613d1c36358"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="3233e1fc-d6e8-4011-ba62-f3f050e6886b"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id="b07b5d83-7295-44f2-b093-86d6032def79"] {
    min-height: max(1038px, 100dvh) !important;
  }
  [data-pc-id="df0199b4-f3e4-4ef1-a73b-4830643fd1a8"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id="422056df-6c19-443a-8e27-f1dc00e1fa80"] {
    display: none !important;
  }
  [data-pc-id="44932479-f202-4698-879e-533763849b96"] {
    display: none !important;
  }
  [data-pc-id="14a3a60d-01f9-40a5-a5b7-566192922873"] {
    display: none !important;
  }
  [data-pc-id="129b6e39-7365-4c0d-b4cc-eba1516641d8"] {
    display: none !important;
  }
  [data-pc-id="f27af373-a9d8-4a60-bb7c-330a2480fd45"] {
    display: none !important;
  }
  [data-pc-id="d13bcd36-6b59-47bd-b0d4-66d4dafc4751"] {
    padding: 40px 20px 8px 20px !important;
  }
  [data-pc-id="3a895ff0-8a7b-420c-8cd6-7251fc3e8d69"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="6a7ebbc5-f11e-4c90-8987-bb4059e31d41"] {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    height: 335px !important;
  }
  [data-pc-id="e25aad78-7ecc-40c9-ac16-2901c790b919~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="9a055294-389e-49b0-9649-20594a469b59~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    height: 335px !important;
  }
  [data-pc-id="e25aad78-7ecc-40c9-ac16-2901c790b919~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="9a055294-389e-49b0-9649-20594a469b59~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    height: 335px !important;
  }
  [data-pc-id="e25aad78-7ecc-40c9-ac16-2901c790b919~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="9a055294-389e-49b0-9649-20594a469b59~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    height: 335px !important;
  }
  [data-pc-id="e25aad78-7ecc-40c9-ac16-2901c790b919~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="9a055294-389e-49b0-9649-20594a469b59~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~4288312a-573f-42f4-986a-df670f4d7966"] {
    height: 335px !important;
  }
  [data-pc-id="e25aad78-7ecc-40c9-ac16-2901c790b919~4288312a-573f-42f4-986a-df670f4d7966"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="9a055294-389e-49b0-9649-20594a469b59~4288312a-573f-42f4-986a-df670f4d7966"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~213cc024-6be3-4df4-ae01-e392398e14ee"] {
    height: 335px !important;
  }
  [data-pc-id="e25aad78-7ecc-40c9-ac16-2901c790b919~213cc024-6be3-4df4-ae01-e392398e14ee"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="9a055294-389e-49b0-9649-20594a469b59~213cc024-6be3-4df4-ae01-e392398e14ee"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~93eee42e-e7d4-4db0-ac8c-ad4c69ee757d"] {
    height: 335px !important;
  }
  [data-pc-id="e25aad78-7ecc-40c9-ac16-2901c790b919~93eee42e-e7d4-4db0-ac8c-ad4c69ee757d"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="9a055294-389e-49b0-9649-20594a469b59~93eee42e-e7d4-4db0-ac8c-ad4c69ee757d"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="950c427c-d277-4012-b4f6-5e72d23cfb12~763365bf-657e-4c1f-82f3-8590123e9061"] {
    height: 335px !important;
  }
  [data-pc-id="e25aad78-7ecc-40c9-ac16-2901c790b919~763365bf-657e-4c1f-82f3-8590123e9061"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="9a055294-389e-49b0-9649-20594a469b59~763365bf-657e-4c1f-82f3-8590123e9061"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4dfefa6c-38f7-4310-8e8b-b2a412e300f8"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-2def79-0 {
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
@keyframes timeline-2def79-1 {
  0% { transform: translate(0px, 65.5px); opacity: 0; }
  2.222% { transform: translate(0px, 65.5px); opacity: 0; }
  2.778% { transform: translate(0px, 54.03px); opacity: 0.175; }
  3.333% { transform: translate(0px, 36.76px); opacity: 0.439; }
  3.889% { transform: translate(0px, 25.01px); opacity: 0.618; }
  4.444% { transform: translate(0px, 17.02px); opacity: 0.74; }
  5% { transform: translate(0px, 11.58px); opacity: 0.823; }
  5.556% { transform: translate(0px, 7.88px); opacity: 0.88; }
  6.111% { transform: translate(0px, 5.36px); opacity: 0.918; }
  6.667% { transform: translate(0px, 3.65px); opacity: 0.944; }
  7.222% { transform: translate(0px, 2.48px); opacity: 0.962; }
  7.778% { transform: translate(0px, 1.69px); opacity: 0.974; }
  9.444% { transform: translate(0px, 0.53px); opacity: 0.992; }
  12.222% { transform: translate(0px, 0.08px); opacity: 0.999; animation-timing-function: step-end; }
  12.778% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}
@keyframes timeline-2def79-2 {
  0% { opacity: 0; }
  6.667% { opacity: 0; }
  7.222% { opacity: 0.136; }
  7.778% { opacity: 0.259; }
  8.333% { opacity: 0.37; }
  8.889% { opacity: 0.469; }
  9.444% { opacity: 0.558; }
  10% { opacity: 0.636; }
  10.556% { opacity: 0.704; }
  11.111% { opacity: 0.763; }
  11.667% { opacity: 0.813; }
  12.222% { opacity: 0.856; }
  12.778% { opacity: 0.892; }
  13.333% { opacity: 0.921; }
  14.444% { opacity: 0.963; }
  15% { opacity: 0.977; }
  16.111% { opacity: 0.993; }
  17.778% { opacity: 1; }
  100% { opacity: 1; }
}`
export function SearchPage({ cart, products, menu, onSearch }: SearchPageProps = {}) {
  return (
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(1024px, 100dvh)' }} data-pc-id="b07b5d83-7295-44f2-b093-86d6032def79">
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-2def79-0 6000ms linear 0ms 1 normal both' }} data-pc-id="df0199b4-f3e4-4ef1-a73b-4830643fd1a8" data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id="c2c47249-837c-419a-a883-3958f5c6d81e">
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="422056df-6c19-443a-8e27-f1dc00e1fa80">
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="44932479-f202-4698-879e-533763849b96">
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="14a3a60d-01f9-40a5-a5b7-566192922873">
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="129b6e39-7365-4c0d-b4cc-eba1516641d8">
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="f27af373-a9d8-4a60-bb7c-330a2480fd45">
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="509d0803-4c1b-4cbf-bf25-5bf8b43d2ba7">
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"342957b1-8684-4833-b6bf-3d15f1864700~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"b4581d74-983f-4ed9-aed3-86b410243cf4~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"be02182d-0c97-4aa5-bff4-6716848e624b~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"ebbb0d79-8efe-4d56-96ee-47b86cbffa4e~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="7c597094-c499-4a69-902b-a7f9cf440be3">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px', padding: '40px 72px 8px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-2def79-1 6000ms linear 0ms 1 normal both' }} data-pc-id="d13bcd36-6b59-47bd-b0d4-66d4dafc4751" data-motion-child="">
          <div style={{ width: '560px', display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="49e64ce1-7fd6-4034-9f42-c2637aeb8144">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="71567e05-5729-46b1-9653-a1ed7804ecd7">
              {'Shop all'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="e9496a64-80ff-4c83-8eaa-cd6777907ddd">
              {'8 pieces, made to be used every day.'}
            </p>
          </div>
          <form style={{ margin: '0', width: '440px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="7434c10e-f237-4a8c-b6b9-2f37c3c939f1" action={onSearch}>
            <div style={{ height: '50px', background: 'var(--brand-card)', borderRadius: '4px', border: '1px solid var(--brand-line)', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0px', padding: '0px 16px 0px 16px', boxSizing: 'border-box', flex: '1 1 0', minWidth: '0' }} data-pc-id="91057dcb-328d-47ec-bc3c-45fb588ca6ce">
              <input style={{ display: 'block', border: '0', padding: '0', margin: '0', background: 'none', outline: 'none', font: 'inherit', color: 'var(--brand-cardmuted)', minWidth: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', flex: '1 1 0', maxWidth: '100%' }} type="search" name="q" placeholder="Search the shop" aria-label="Search the shop" data-pc-id="bd369381-6bfc-4d90-a76a-6f3b1eb9a1fc" />
            </div>
            <button style={{ display: 'flex', border: '1.5px solid var(--brand-text)', padding: '15px 26px 15px 26px', background: 'none', font: 'inherit', color: 'inherit', textAlign: 'inherit', cursor: 'pointer', height: '54px', borderRadius: '4px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', boxSizing: 'border-box', flexShrink: '0' }} type="submit" data-pc-id="a3fbf40e-7594-490c-af04-d7fc742dff54">
              <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id="a3fbf40e-7594-490c-af04-d7fc742dff54::0224e633-fc2e-4380-860f-51a069103a8c">
                {'Search'}
              </p>
            </button>
          </form>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-2def79-2 6000ms linear 0ms 1 normal both' }} data-pc-id="3a895ff0-8a7b-420c-8cd6-7251fc3e8d69" data-motion-child="">
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '20px', padding: '0px 0px 0px 0px' }} data-pc-id="6a7ebbc5-f11e-4c90-8987-bb4059e31d41">
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"6d34b318-b727-4b06-b318-88fda001c813~" + item.id}>
                  <div style={{ height: '309px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"950c427c-d277-4012-b4f6-5e72d23cfb12~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"e25aad78-7ecc-40c9-ac16-2901c790b919~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"9a055294-389e-49b0-9649-20594a469b59~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"788bd9f2-2dfe-4993-8179-c47910f3765a~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="4dfefa6c-38f7-4310-8e8b-b2a412e300f8">
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="179d10dc-1d14-4078-8163-8613d1c36358">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="ab406869-96e9-49d5-b0aa-ab43e3df1db0">
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="ff341261-4326-45da-907e-83b88bf69400">
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="3233e1fc-d6e8-4011-ba62-f3f050e6886b">
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"b74c3c16-83d3-4afb-ae84-61ff046955bd~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
