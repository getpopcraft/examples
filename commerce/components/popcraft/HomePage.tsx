// Home, exported from PopCraft (Fieldwork storefront) as a component a Next.js Commerce store renders with its own data.
// Re-export it from PopCraft rather than editing it here: the design is the source.

import { Fragment } from 'react'
import { commerceItem, commerceWords, type CommerceItem, type Cart, type Menu, type Product } from '@popcraft/runtime/commerce'

export interface HomePageProps {
  /** Cart; none: the design's samples. */
  cart?: Cart
  /** Products; none: the design's samples. */
  products?: Product[]
  /** Menu; none: the design's samples. */
  menu?: Menu[]
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
  [data-pc-id="31f3f78e-4fa6-479c-9547-cac8fafe96c1"] {
    min-height: max(3898px, 100dvh) !important;
  }
  [data-pc-id="78590c2c-a2bb-44f6-aa6e-c9ea9d07b7e7"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id="cbeab31d-09db-4593-ac4e-0e4a95425d8e"] {
    flex-direction: column !important;
    padding: 32px 40px 24px 40px !important;
  }
  [data-pc-id="d6441c59-d277-44c9-9ca1-04dd8900b480"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="df06466c-7342-4a3d-a410-5b43eb177380"] {
    font-size: 40px !important;
    line-height: 46px !important;
    letter-spacing: -1.2px !important;
  }
  [data-pc-id="a5ce40fa-4e11-476d-9e3e-442844db7ae1"] {
    width: revert !important;
    max-width: revert !important;
    height: 454px !important;
    align-self: stretch !important;
  }
  [data-pc-id="5b67e0dd-45a3-44cb-8d68-a9b686624d70"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="9b34e4b9-da21-4b93-887a-1b4329f7f264"] {
    grid-template-columns: 1fr 1fr !important;
  }
  [data-pc-id^="79bbafe8-90f3-4ff3-abdf-683310c0aee2~"] {
    height: 332px !important;
  }
  [data-pc-id^="79bbafe8-90f3-4ff3-abdf-683310c0aee2~"] {
    height: 332px !important;
  }
  [data-pc-id^="79bbafe8-90f3-4ff3-abdf-683310c0aee2~"] {
    height: 332px !important;
  }
  [data-pc-id="02f47334-df4b-4162-9b4e-74938268de6c"] {
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="c983f3b4-980f-40a0-b982-4afdb4b8528e"] {
    width: revert !important;
    max-width: revert !important;
    height: 454px !important;
    align-self: stretch !important;
  }
  [data-pc-id="9f72910c-78d3-4c5d-bdad-bf942ee24bb1"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="baeb1a38-384a-40ec-be68-efd9724e13e1"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="3a2e015b-08b8-496a-ba25-cbe6a9e432a0"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="9deee492-01ec-4082-89bd-5f8460585f45"] {
    grid-template-columns: 1fr 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id^="a389db05-9cb2-40cc-9108-435a890e7324~"] {
    height: 336px !important;
  }
  [data-pc-id^="a389db05-9cb2-40cc-9108-435a890e7324~"] {
    height: 336px !important;
  }
  [data-pc-id^="a389db05-9cb2-40cc-9108-435a890e7324~"] {
    height: 336px !important;
  }
  [data-pc-id^="a389db05-9cb2-40cc-9108-435a890e7324~"] {
    height: 336px !important;
  }
  [data-pc-id="315a1257-62c4-47a0-b6af-5d312cca3b9c"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 48px 40px 64px 40px !important;
  }
  [data-pc-id="c869e864-1425-4cfb-8995-db2bff6027a3"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="ec40072e-df27-4d09-92ee-fa65b89eb6cc"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="994ab9d0-1fcc-48cf-b9f0-c4e840e05b35"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="908baa30-9b07-40f1-9413-e6c06eadf812"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id="31f3f78e-4fa6-479c-9547-cac8fafe96c1"] {
    min-height: max(3336px, 100dvh) !important;
  }
  [data-pc-id="78590c2c-a2bb-44f6-aa6e-c9ea9d07b7e7"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id="94d70a38-7796-42bb-997c-193827a88269"] {
    display: none !important;
  }
  [data-pc-id="c444f5a4-087b-4e8a-9130-7ab0715588bc"] {
    display: none !important;
  }
  [data-pc-id="ec5064dc-c951-4a1e-ac17-abe8f6a734b1"] {
    display: none !important;
  }
  [data-pc-id="7a224b8b-2633-459f-bfd8-f4e4fb4548ad"] {
    display: none !important;
  }
  [data-pc-id="756be76b-0eae-432e-81f2-81c03d487293"] {
    display: none !important;
  }
  [data-pc-id="cbeab31d-09db-4593-ac4e-0e4a95425d8e"] {
    padding: 32px 20px 24px 20px !important;
  }
  [data-pc-id="a5ce40fa-4e11-476d-9e3e-442844db7ae1"] {
    height: 221px !important;
  }
  [data-pc-id="5b67e0dd-45a3-44cb-8d68-a9b686624d70"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="9b34e4b9-da21-4b93-887a-1b4329f7f264"] {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id^="79bbafe8-90f3-4ff3-abdf-683310c0aee2~"] {
    height: 335px !important;
  }
  [data-pc-id^="42d79f40-6d9f-488b-a59b-6fddf171c9e3~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="fb877416-8021-4aac-bd71-8010843a44ac~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="79bbafe8-90f3-4ff3-abdf-683310c0aee2~"] {
    height: 335px !important;
  }
  [data-pc-id^="42d79f40-6d9f-488b-a59b-6fddf171c9e3~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="fb877416-8021-4aac-bd71-8010843a44ac~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="79bbafe8-90f3-4ff3-abdf-683310c0aee2~"] {
    height: 335px !important;
  }
  [data-pc-id^="42d79f40-6d9f-488b-a59b-6fddf171c9e3~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="fb877416-8021-4aac-bd71-8010843a44ac~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="02f47334-df4b-4162-9b4e-74938268de6c"] {
    padding: 56px 20px 56px 20px !important;
  }
  [data-pc-id="c983f3b4-980f-40a0-b982-4afdb4b8528e"] {
    height: 221px !important;
  }
  [data-pc-id="baeb1a38-384a-40ec-be68-efd9724e13e1"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id^="271f0be0-5890-4fb8-be7b-96d1694cdb5b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="8ca81874-189f-4199-8619-3da1babd202d~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="271f0be0-5890-4fb8-be7b-96d1694cdb5b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="8ca81874-189f-4199-8619-3da1babd202d~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="271f0be0-5890-4fb8-be7b-96d1694cdb5b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="8ca81874-189f-4199-8619-3da1babd202d~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="271f0be0-5890-4fb8-be7b-96d1694cdb5b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="8ca81874-189f-4199-8619-3da1babd202d~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="271f0be0-5890-4fb8-be7b-96d1694cdb5b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="8ca81874-189f-4199-8619-3da1babd202d~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="271f0be0-5890-4fb8-be7b-96d1694cdb5b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="8ca81874-189f-4199-8619-3da1babd202d~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="271f0be0-5890-4fb8-be7b-96d1694cdb5b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="8ca81874-189f-4199-8619-3da1babd202d~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="271f0be0-5890-4fb8-be7b-96d1694cdb5b~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="8ca81874-189f-4199-8619-3da1babd202d~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="3a2e015b-08b8-496a-ba25-cbe6a9e432a0"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id^="a389db05-9cb2-40cc-9108-435a890e7324~"] {
    height: 159px !important;
  }
  [data-pc-id^="4b6f8b55-01ed-4ffc-b551-b9fcf9b146d2~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="a491e0ce-81ac-43b1-ab2b-f7f0fcb3f369~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="a389db05-9cb2-40cc-9108-435a890e7324~"] {
    height: 159px !important;
  }
  [data-pc-id^="4b6f8b55-01ed-4ffc-b551-b9fcf9b146d2~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="a491e0ce-81ac-43b1-ab2b-f7f0fcb3f369~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="a389db05-9cb2-40cc-9108-435a890e7324~"] {
    height: 159px !important;
  }
  [data-pc-id^="4b6f8b55-01ed-4ffc-b551-b9fcf9b146d2~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="a491e0ce-81ac-43b1-ab2b-f7f0fcb3f369~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id^="a389db05-9cb2-40cc-9108-435a890e7324~"] {
    height: 159px !important;
  }
  [data-pc-id^="4b6f8b55-01ed-4ffc-b551-b9fcf9b146d2~"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id^="a491e0ce-81ac-43b1-ab2b-f7f0fcb3f369~"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="315a1257-62c4-47a0-b6af-5d312cca3b9c"] {
    padding: 48px 20px 64px 20px !important;
  }
  [data-pc-id="ec40072e-df27-4d09-92ee-fa65b89eb6cc"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-fe96c1-0 {
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
@keyframes timeline-fe96c1-1 {
  0% { transform: translate(0px, 24px); opacity: 0; }
  2.222% { transform: translate(0px, 24px); opacity: 0; }
  2.778% { transform: translate(0px, 19.8px); opacity: 0.175; }
  3.333% { transform: translate(0px, 13.47px); opacity: 0.439; }
  3.889% { transform: translate(0px, 9.16px); opacity: 0.618; }
  4.444% { transform: translate(0px, 6.24px); opacity: 0.74; }
  5% { transform: translate(0px, 4.24px); opacity: 0.823; }
  5.556% { transform: translate(0px, 2.89px); opacity: 0.88; }
  6.111% { transform: translate(0px, 1.96px); opacity: 0.918; }
  6.667% { transform: translate(0px, 1.34px); opacity: 0.944; }
  7.222% { transform: translate(0px, 0.91px); opacity: 0.962; }
  7.778% { transform: translate(0px, 0.62px); opacity: 0.974; }
  9.444% { transform: translate(0px, 0.19px); opacity: 0.992; }
  12.222% { transform: translate(0px, 0.03px); opacity: 0.999; animation-timing-function: step-end; }
  12.778% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}
@keyframes timeline-fe96c1-2 {
  0% { transform: translate(0px, 102px); opacity: 0; }
  5% { transform: translate(0px, 102px); opacity: 0; animation-timing-function: step-end; }
  5.556% { transform: translate(0px, 73.33px); opacity: 0.281; }
  6.111% { transform: translate(0px, 52.71px); opacity: 0.483; }
  6.667% { transform: translate(0px, 37.89px); opacity: 0.629; }
  7.222% { transform: translate(0px, 27.24px); opacity: 0.733; }
  7.778% { transform: translate(0px, 19.58px); opacity: 0.808; }
  8.333% { transform: translate(0px, 14.08px); opacity: 0.862; }
  8.889% { transform: translate(0px, 10.12px); opacity: 0.901; }
  9.444% { transform: translate(0px, 7.27px); opacity: 0.929; }
  10% { transform: translate(0px, 5.23px); opacity: 0.949; }
  11.111% { transform: translate(0px, 2.7px); opacity: 0.974; }
  12.778% { transform: translate(0px, 1px); opacity: 0.99; }
  16.111% { transform: translate(0px, 0.14px); opacity: 0.999; animation-timing-function: step-end; }
  16.667% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}
@keyframes timeline-fe96c1-3 {
  0% { transform: translate(0px, 40.5px); opacity: 0; }
  7.222% { transform: translate(0px, 40.5px); opacity: 0; }
  7.778% { transform: translate(0px, 33.41px); opacity: 0.175; }
  8.333% { transform: translate(0px, 22.73px); opacity: 0.439; }
  8.889% { transform: translate(0px, 15.47px); opacity: 0.618; }
  9.444% { transform: translate(0px, 10.52px); opacity: 0.74; }
  10% { transform: translate(0px, 7.16px); opacity: 0.823; }
  10.556% { transform: translate(0px, 4.87px); opacity: 0.88; }
  11.111% { transform: translate(0px, 3.31px); opacity: 0.918; }
  11.667% { transform: translate(0px, 2.26px); opacity: 0.944; }
  12.222% { transform: translate(0px, 1.53px); opacity: 0.962; }
  12.778% { transform: translate(0px, 1.04px); opacity: 0.974; }
  14.444% { transform: translate(0px, 0.33px); opacity: 0.992; }
  17.222% { transform: translate(0px, 0.05px); opacity: 0.999; animation-timing-function: step-end; }
  17.778% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}
@keyframes timeline-fe96c1-4 {
  0% { transform: translate(0px, 27px); opacity: 0; }
  10% { transform: translate(0px, 27px); opacity: 0; animation-timing-function: step-end; }
  10.556% { transform: translate(0px, 18.37px); opacity: 0.32; }
  11.111% { transform: translate(0px, 12.5px); opacity: 0.537; }
  11.667% { transform: translate(0px, 8.5px); opacity: 0.685; }
  12.222% { transform: translate(0px, 5.79px); opacity: 0.786; }
  12.778% { transform: translate(0px, 3.94px); opacity: 0.854; }
  13.333% { transform: translate(0px, 2.68px); opacity: 0.901; }
  13.889% { transform: translate(0px, 1.82px); opacity: 0.932; }
  14.444% { transform: translate(0px, 1.24px); opacity: 0.954; }
  15.556% { transform: translate(0px, 0.57px); opacity: 0.979; }
  17.222% { transform: translate(0px, 0.18px); opacity: 0.993; }
  19.444% { transform: translate(0px, 0.04px); opacity: 0.999; animation-timing-function: step-end; }
  20% { transform: none; opacity: 1; }
  53.333% { transform: none; opacity: 1; animation-timing-function: step-end; }
  53.889% { transform: scale(1, 1); opacity: 1; }
  54.444% { transform: scale(1.01, 1.01); opacity: 1; }
  55.556% { transform: scale(1.05, 1.05); opacity: 1; }
  56.111% { transform: scale(1.06, 1.06); opacity: 1; }
  57.222% { transform: scale(1.06, 1.06); opacity: 1; }
  57.778% { transform: scale(1.05, 1.05); opacity: 1; }
  58.889% { transform: scale(1.01, 1.01); opacity: 1; }
  59.444% { transform: scale(1, 1); opacity: 1; }
  60% { transform: none; opacity: 1; }
  60.556% { transform: scale(1, 1); opacity: 1; }
  61.111% { transform: scale(1.01, 1.01); opacity: 1; }
  62.222% { transform: scale(1.05, 1.05); opacity: 1; }
  62.778% { transform: scale(1.06, 1.06); opacity: 1; }
  63.889% { transform: scale(1.06, 1.06); opacity: 1; }
  64.444% { transform: scale(1.05, 1.05); opacity: 1; }
  65.556% { transform: scale(1.01, 1.01); opacity: 1; }
  66.111% { transform: scale(1, 1); opacity: 1; }
  66.667% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}
@keyframes timeline-fe96c1-5 {
  0% { opacity: 0; }
  3.889% { opacity: 0; }
  4.444% { opacity: 0.055; }
  5% { opacity: 0.158; }
  5.556% { opacity: 0.253; }
  6.111% { opacity: 0.341; }
  7.222% { opacity: 0.495; }
  7.778% { opacity: 0.562; }
  8.333% { opacity: 0.623; }
  9.444% { opacity: 0.728; }
  10% { opacity: 0.772; }
  11.111% { opacity: 0.845; }
  11.667% { opacity: 0.875; }
  12.778% { opacity: 0.923; }
  14.444% { opacity: 0.969; }
  16.111% { opacity: 0.992; }
  18.333% { opacity: 1; }
  100% { opacity: 1; }
}
@keyframes timeline-fe96c1-6 {
  0% { transform: translate(0px, 298px); opacity: 0; }
  15% { transform: translate(0px, 298px); opacity: 0; animation-timing-function: step-end; }
  15.556% { transform: translate(0px, 214.22px); opacity: 0.281; }
  16.111% { transform: translate(0px, 154px); opacity: 0.483; }
  16.667% { transform: translate(0px, 110.71px); opacity: 0.629; }
  17.222% { transform: translate(0px, 79.58px); opacity: 0.733; }
  17.778% { transform: translate(0px, 57.21px); opacity: 0.808; }
  18.333% { transform: translate(0px, 41.13px); opacity: 0.862; }
  18.889% { transform: translate(0px, 29.57px); opacity: 0.901; }
  19.444% { transform: translate(0px, 21.25px); opacity: 0.929; }
  20% { transform: translate(0px, 15.28px); opacity: 0.949; }
  21.111% { transform: translate(0px, 7.9px); opacity: 0.974; }
  22.778% { transform: translate(0px, 2.93px); opacity: 0.99; }
  26.111% { transform: translate(0px, 0.4px); opacity: 0.999; animation-timing-function: step-end; }
  26.667% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}
@keyframes timeline-fe96c1-7 {
  0% { transform: translate(-180px, 0px); }
  2.222% { transform: translate(-178.25px, 0px); }
  5% { transform: translate(-171.19px, 0px); }
  7.778% { transform: translate(-158.93px, 0px); }
  10.556% { transform: translate(-141.84px, 0px); }
  13.333% { transform: translate(-120.44px, 0px); }
  16.667% { transform: translate(-90px, 0px); }
  20% { transform: translate(-55.62px, 0px); }
  24.444% { transform: translate(-6.28px, 0px); }
  25% { transform: none; }
  25.556% { transform: translate(6.28px, 0px); }
  30% { transform: translate(55.62px, 0px); }
  33.333% { transform: translate(90px, 0px); }
  36.667% { transform: translate(120.44px, 0px); }
  39.444% { transform: translate(141.84px, 0px); }
  42.222% { transform: translate(158.93px, 0px); }
  45% { transform: translate(171.19px, 0px); }
  47.778% { transform: translate(178.25px, 0px); }
  50% { transform: translate(180px, 0px); }
  52.222% { transform: translate(178.25px, 0px); }
  55% { transform: translate(171.19px, 0px); }
  57.778% { transform: translate(158.93px, 0px); }
  60.556% { transform: translate(141.84px, 0px); }
  63.333% { transform: translate(120.44px, 0px); }
  66.667% { transform: translate(90px, 0px); }
  70% { transform: translate(55.62px, 0px); }
  74.444% { transform: translate(6.28px, 0px); }
  75% { transform: none; }
  75.556% { transform: translate(-6.28px, 0px); }
  80% { transform: translate(-55.62px, 0px); }
  83.333% { transform: translate(-90px, 0px); }
  86.667% { transform: translate(-120.44px, 0px); }
  89.444% { transform: translate(-141.84px, 0px); }
  92.222% { transform: translate(-158.93px, 0px); }
  95% { transform: translate(-171.19px, 0px); }
  97.778% { transform: translate(-178.25px, 0px); }
  100% { transform: translate(-180px, 0px); }
}`
export function HomePage({ cart, products, menu }: HomePageProps = {}) {
  return (
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(3134px, 100dvh)' }} data-pc-id="31f3f78e-4fa6-479c-9547-cac8fafe96c1">
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-fe96c1-0 6000ms linear 0ms infinite normal both' }} data-pc-id="78590c2c-a2bb-44f6-aa6e-c9ea9d07b7e7" data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id="87aeebd5-162d-4939-a78a-41678bc9cd31">
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="94d70a38-7796-42bb-997c-193827a88269">
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="c444f5a4-087b-4e8a-9130-7ab0715588bc">
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="ec5064dc-c951-4a1e-ac17-abe8f6a734b1">
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="7a224b8b-2633-459f-bfd8-f4e4fb4548ad">
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="756be76b-0eae-432e-81f2-81c03d487293">
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="4907f057-9199-4c58-bccd-f90f28eed3ce">
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"d4c7bc1e-936e-4ec7-8a53-e00765c532c0~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"59001da4-a7a4-481f-b931-f58412d8d024~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"3f1860af-731e-441c-8dd5-1c396e064e39~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"08118dd2-1511-4a87-8967-3270c64001a0~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="4c11fa85-a01f-4826-bf00-8068ccc85d58">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '64px', padding: '32px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="cbeab31d-09db-4593-ac4e-0e4a95425d8e">
          <div style={{ width: '540px', display: 'flex', flexDirection: 'column', gap: '22px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="d6441c59-d277-44c9-9ca1-04dd8900b480">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%', animation: 'timeline-fe96c1-1 6000ms linear 0ms infinite normal both' }} data-pc-id="a26e350e-11e7-441b-ac4c-e4a99357a9f4" data-motion-child="">
              {'Autumn workwear · made in Britain'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '64px', fontWeight: '800', lineHeight: '68px', letterSpacing: '-2.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%', animation: 'timeline-fe96c1-2 6000ms linear 0ms infinite normal both' }} data-pc-id="df06466c-7342-4a3d-a410-5b43eb177380" data-motion-child="">
              {'Clothes cut for work, worn for years.'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%', animation: 'timeline-fe96c1-3 6000ms linear 0ms infinite normal both' }} data-pc-id="f29fa37c-944e-412e-bc64-9b4922962e92" data-motion-child="">
              {'Linen, canvas and wool from mills we visit, sewn in small runs in Leicester and Northampton — and mended free for as long as you own them.'}
            </p>
            <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', height: '54px', background: 'var(--brand-primary)', borderRadius: '4px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '15px 26px 15px 26px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', animation: 'timeline-fe96c1-4 6000ms linear 0ms infinite normal both' }} href="/search" data-pc-id="41f286b3-5856-4ab3-b364-8b5cc0ad66de" data-motion-child="">
              <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onprimary)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id="41f286b3-5856-4ab3-b364-8b5cc0ad66de::e1dba261-45c9-4cde-abe8-2513adf4d7ef">
                {'Shop the season'}
              </p>
            </a>
          </div>
          <div style={{ width: '692px', height: '498px', background: 'url(\'/popcraft/media/49dedd0e57d2f2b17b0819e64d62033a.jpg\') center / cover no-repeat', borderRadius: '4px', maxWidth: '100%', flexShrink: '0', animation: 'timeline-fe96c1-5 6000ms linear 0ms infinite normal both' }} data-pc-id="a5ce40fa-4e11-476d-9e3e-442844db7ae1" data-motion-child="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-fe96c1-6 6000ms linear 0ms infinite normal both' }} data-pc-id="5b67e0dd-45a3-44cb-8d68-a9b686624d70" data-motion-child="">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="83a4c555-4816-4d5f-b573-180f4aec7534">
            {'Featured this week'}
          </p>
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '24px', padding: '0px 0px 0px 0px' }} data-pc-id="9b34e4b9-da21-4b93-887a-1b4329f7f264">
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).slice(0, 3).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"ebedcc9d-58ce-402c-af59-5e9f8483bdec~" + item.id}>
                  <div style={{ height: '416px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"79bbafe8-90f3-4ff3-abdf-683310c0aee2~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"42d79f40-6d9f-488b-a59b-6fddf171c9e3~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"fb877416-8021-4aac-bd71-8010843a44ac~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"338da458-d09b-4498-b886-ce2d46216ce0~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '64px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="02f47334-df4b-4162-9b4e-74938268de6c">
          <div style={{ width: '648px', height: '441px', background: 'url(\'/popcraft/media/2b1c632a915848e9c42e1e7b03cf8946.jpg\') center / cover no-repeat', borderRadius: '4px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="c983f3b4-980f-40a0-b982-4afdb4b8528e" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '0px 0px 0px 0px', flex: '1 1 0', minWidth: '0' }} data-pc-id="9f72910c-78d3-4c5d-bdad-bf942ee24bb1">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="425a645a-be86-46b5-b746-312f8aaf82e5">
              {'Mended, not replaced'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="09e67100-ac4d-41f3-9d66-2e93dfd503d0">
              {'Every Fieldwork piece comes with free repairs for life. Send it back with a note and our workshop will patch, resole or re-wax it, then post it home with the bill marked nil.'}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="baeb1a38-384a-40ec-be68-efd9724e13e1">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="816f85f5-051d-42e2-b794-f1aede1f02b0">
            {'The whole workshop'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="964c1b50-3513-4155-bc29-49fa66f7d069">
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start', animation: 'timeline-fe96c1-7 6000ms linear 0ms infinite normal both' }} data-pc-id="541efc67-5444-464a-9e54-96d0833bbc04" data-motion-child="">
              {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).map(item => (
                <Fragment key={item.id}>
                  <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', width: '280px', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"13dace4e-2f78-40e4-8fe5-fdbb266fc489~" + item.id}>
                    <div style={{ height: '280px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"cd8f214f-897b-45a6-99d2-694d08a06673~" + item.id} />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"271f0be0-5890-4fb8-be7b-96d1694cdb5b~" + item.id}>
                      <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"8ca81874-189f-4199-8619-3da1babd202d~" + item.id}>
                        {commerceWords(item, "title")}
                      </p>
                      <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"9ec6be62-3a20-4a9c-8020-c90f58656196~" + item.id}>
                        {commerceWords(item, "price")}
                      </p>
                    </div>
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="3a2e015b-08b8-496a-ba25-cbe6a9e432a0">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="dccb1ed1-a947-437b-b6f1-f763f7218081">
            {'New in'}
          </p>
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '20px', padding: '0px 0px 0px 0px' }} data-pc-id="9deee492-01ec-4082-89bd-5f8460585f45">
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).slice(3, 7).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"bea52de6-8b99-496c-8e05-9fd78fcd9449~" + item.id}>
                  <div style={{ height: '309px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"a389db05-9cb2-40cc-9108-435a890e7324~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"4b6f8b55-01ed-4ffc-b551-b9fcf9b146d2~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"a491e0ce-81ac-43b1-ab2b-f7f0fcb3f369~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"ae3b5ad3-e8de-4baa-b808-69297cb0b7e4~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '32px', padding: '48px 72px 64px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="315a1257-62c4-47a0-b6af-5d312cca3b9c">
          <div style={{ width: '640px', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="c869e864-1425-4cfb-8995-db2bff6027a3">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="c7d7647e-4064-4f6c-bc18-03c20bd1ad8e">
              {'Letters from the workshop'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="b9d31208-78e4-49e8-9f5b-e7af23d35a37">
              {'One email a month: new runs before they sell out, and what the repairs bench is mending.'}
            </p>
          </div>
          <div style={{ height: '54px', borderRadius: '4px', border: '1.5px solid var(--brand-text)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '15px 26px 15px 26px', boxSizing: 'border-box', flexShrink: '0' }} data-pc-id="ecf004f0-0fe7-4bad-ba35-90b86e3d0c15">
            <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id="ecf004f0-0fe7-4bad-ba35-90b86e3d0c15::6dc3434d-5640-4d25-ace9-82377f438e02">
              {'Join the list'}
            </p>
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="ec40072e-df27-4d09-92ee-fa65b89eb6cc">
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="994ab9d0-1fcc-48cf-b9f0-c4e840e05b35">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="71f53222-3b1e-41f5-bfae-36418fbc83c6">
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="ec432324-8d92-4808-b079-d9fd28418453">
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="908baa30-9b07-40f1-9413-e6c06eadf812">
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"8aef4cf2-fb23-4fff-850b-83b5c606280f~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
