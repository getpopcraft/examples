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
  [data-pc-id="b38c689c-4574-4581-8825-9b31a8cb90a5"] {
    min-height: max(3438px, 100dvh) !important;
  }
  [data-pc-id="6da316e3-2d85-4463-ae34-75737d2a60f9"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id="5a73a646-2113-4f13-a6a4-031e3ad51e61"] {
    flex-direction: column !important;
    padding: 32px 40px 24px 40px !important;
  }
  [data-pc-id="cc94fb42-5e87-40c8-8abc-22c409c75a36"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="69e81743-82a0-4697-a57f-b8f03dc1139a"] {
    font-size: 40px !important;
    line-height: 46px !important;
    letter-spacing: -1.2px !important;
  }
  [data-pc-id="3266bebf-e204-449b-8f31-a91328f2099a"] {
    width: revert !important;
    max-width: revert !important;
    height: 454px !important;
    align-self: stretch !important;
  }
  [data-pc-id="2dba7158-bd1a-4724-a44e-e538e4b8f703"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="30d11f55-cd22-4b02-a7fe-a629f214c1fc"] {
    grid-template-columns: 1fr 1fr !important;
  }
  [data-pc-id="f47f15a9-dd36-4354-82ea-bada391d97d3~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    height: 332px !important;
  }
  [data-pc-id="f47f15a9-dd36-4354-82ea-bada391d97d3~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    height: 332px !important;
  }
  [data-pc-id="f47f15a9-dd36-4354-82ea-bada391d97d3~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    height: 332px !important;
  }
  [data-pc-id="f92b830c-2731-43ab-a0bb-24d187dcffee"] {
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="988188c0-3339-476a-894d-f98c4bf1d044"] {
    width: revert !important;
    max-width: revert !important;
    height: 454px !important;
    align-self: stretch !important;
  }
  [data-pc-id="ce6c067c-5c53-40e8-a4c3-d7231c6cf022"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="16164f01-845e-45d8-a556-09431fddc422"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="9d4d6766-d992-48d3-af2e-f3dcb98eda43"] {
    grid-template-columns: 1fr 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id="7167b021-ab2a-421f-8202-122291b266dd~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    height: 336px !important;
  }
  [data-pc-id="7167b021-ab2a-421f-8202-122291b266dd~4288312a-573f-42f4-986a-df670f4d7966"] {
    height: 336px !important;
  }
  [data-pc-id="7167b021-ab2a-421f-8202-122291b266dd~213cc024-6be3-4df4-ae01-e392398e14ee"] {
    height: 336px !important;
  }
  [data-pc-id="7167b021-ab2a-421f-8202-122291b266dd~93eee42e-e7d4-4db0-ac8c-ad4c69ee757d"] {
    height: 336px !important;
  }
  [data-pc-id="b81f8fb7-845c-4d1a-9845-bc605e7cc85f"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 48px 40px 64px 40px !important;
  }
  [data-pc-id="9f9071c6-9a52-4dbc-9673-3e53764524bf"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="7d865b7b-76c6-4cb0-a2fb-71c32765b5f8"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="b9e122ef-b7c7-4551-a046-be73efbed729"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="5aedd3e2-2ef9-4764-a16b-60d5f3cc0586"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id="b38c689c-4574-4581-8825-9b31a8cb90a5"] {
    min-height: max(2850px, 100dvh) !important;
  }
  [data-pc-id="6da316e3-2d85-4463-ae34-75737d2a60f9"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id="2829fbff-dbdd-406a-99cd-be055a305fde"] {
    display: none !important;
  }
  [data-pc-id="caae8fdc-699d-4a90-8084-342ac38f1bb0"] {
    display: none !important;
  }
  [data-pc-id="8654bfab-a46a-4846-a056-c2a69595d67a"] {
    display: none !important;
  }
  [data-pc-id="576e643d-4e7d-404d-84b1-ad2f9b468012"] {
    display: none !important;
  }
  [data-pc-id="c2ff35bc-435e-4a34-a920-4d5a00baea6f"] {
    display: none !important;
  }
  [data-pc-id="5a73a646-2113-4f13-a6a4-031e3ad51e61"] {
    padding: 32px 20px 24px 20px !important;
  }
  [data-pc-id="3266bebf-e204-449b-8f31-a91328f2099a"] {
    height: 221px !important;
  }
  [data-pc-id="2dba7158-bd1a-4724-a44e-e538e4b8f703"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="30d11f55-cd22-4b02-a7fe-a629f214c1fc"] {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id="f47f15a9-dd36-4354-82ea-bada391d97d3~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    height: 335px !important;
  }
  [data-pc-id="51b2e591-1a7e-4f4b-9ae9-3283e9851a7a~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="52303d10-eef9-4eda-8123-96d1ba9257bc~dd8d0342-bf2a-4e4c-ace3-6394cb8c28c3"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="f47f15a9-dd36-4354-82ea-bada391d97d3~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    height: 335px !important;
  }
  [data-pc-id="51b2e591-1a7e-4f4b-9ae9-3283e9851a7a~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="52303d10-eef9-4eda-8123-96d1ba9257bc~c157b9a2-a6d9-48d2-bcfe-7a090e4d42ca"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="f47f15a9-dd36-4354-82ea-bada391d97d3~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    height: 335px !important;
  }
  [data-pc-id="51b2e591-1a7e-4f4b-9ae9-3283e9851a7a~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="52303d10-eef9-4eda-8123-96d1ba9257bc~e0a793a5-c70c-46b2-b6c0-d8cffb21639f"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="f92b830c-2731-43ab-a0bb-24d187dcffee"] {
    padding: 56px 20px 56px 20px !important;
  }
  [data-pc-id="988188c0-3339-476a-894d-f98c4bf1d044"] {
    height: 221px !important;
  }
  [data-pc-id="16164f01-845e-45d8-a556-09431fddc422"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="7167b021-ab2a-421f-8202-122291b266dd~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    height: 159px !important;
  }
  [data-pc-id="770cd980-c0e1-4738-bcc0-e77a7feff098~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="8c66829a-e71c-4da6-862f-1b79f88867d0~b89d93a3-3f0c-4234-a3f5-0a3f1d59338f"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="7167b021-ab2a-421f-8202-122291b266dd~4288312a-573f-42f4-986a-df670f4d7966"] {
    height: 159px !important;
  }
  [data-pc-id="770cd980-c0e1-4738-bcc0-e77a7feff098~4288312a-573f-42f4-986a-df670f4d7966"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="8c66829a-e71c-4da6-862f-1b79f88867d0~4288312a-573f-42f4-986a-df670f4d7966"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="7167b021-ab2a-421f-8202-122291b266dd~213cc024-6be3-4df4-ae01-e392398e14ee"] {
    height: 159px !important;
  }
  [data-pc-id="770cd980-c0e1-4738-bcc0-e77a7feff098~213cc024-6be3-4df4-ae01-e392398e14ee"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="8c66829a-e71c-4da6-862f-1b79f88867d0~213cc024-6be3-4df4-ae01-e392398e14ee"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="7167b021-ab2a-421f-8202-122291b266dd~93eee42e-e7d4-4db0-ac8c-ad4c69ee757d"] {
    height: 159px !important;
  }
  [data-pc-id="770cd980-c0e1-4738-bcc0-e77a7feff098~93eee42e-e7d4-4db0-ac8c-ad4c69ee757d"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="8c66829a-e71c-4da6-862f-1b79f88867d0~93eee42e-e7d4-4db0-ac8c-ad4c69ee757d"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="b81f8fb7-845c-4d1a-9845-bc605e7cc85f"] {
    padding: 48px 20px 64px 20px !important;
  }
  [data-pc-id="7d865b7b-76c6-4cb0-a2fb-71c32765b5f8"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-cb90a5-0 {
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
@keyframes timeline-cb90a5-1 {
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
@keyframes timeline-cb90a5-2 {
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
@keyframes timeline-cb90a5-3 {
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
@keyframes timeline-cb90a5-4 {
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
@keyframes timeline-cb90a5-5 {
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
@keyframes timeline-cb90a5-6 {
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
}`
export function HomePage({ cart, products, menu }: HomePageProps = {}) {
  return (
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(2674px, 100dvh)' }} data-pc-id="b38c689c-4574-4581-8825-9b31a8cb90a5">
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-cb90a5-0 6000ms linear 0ms 1 normal both' }} data-pc-id="6da316e3-2d85-4463-ae34-75737d2a60f9" data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id="87192525-686c-4bed-9544-171d678f18b3">
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="2829fbff-dbdd-406a-99cd-be055a305fde">
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="caae8fdc-699d-4a90-8084-342ac38f1bb0">
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="8654bfab-a46a-4846-a056-c2a69595d67a">
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="576e643d-4e7d-404d-84b1-ad2f9b468012">
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="c2ff35bc-435e-4a34-a920-4d5a00baea6f">
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="e118fcdc-de75-4fce-82c8-516516743ea8">
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"7ad78fd1-a8ff-4856-b047-196c7a1a216f~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"17c88739-60c7-4f57-be57-240a3eae14f3~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"a7eaef72-f455-43b3-9b29-3c9261651d2b~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"3ab64060-b2da-4cc4-ab81-3be610b28a03~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="8ff2f401-4a76-4e32-9744-47a9dfd3ce07">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '64px', padding: '32px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="5a73a646-2113-4f13-a6a4-031e3ad51e61">
          <div style={{ width: '540px', display: 'flex', flexDirection: 'column', gap: '22px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="cc94fb42-5e87-40c8-8abc-22c409c75a36">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%', animation: 'timeline-cb90a5-1 6000ms linear 0ms 1 normal both' }} data-pc-id="6d0aac10-5e6d-436e-aa1f-3c9190c44e9b" data-motion-child="">
              {'Autumn workwear · made in Britain'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '64px', fontWeight: '800', lineHeight: '68px', letterSpacing: '-2.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%', animation: 'timeline-cb90a5-2 6000ms linear 0ms 1 normal both' }} data-pc-id="69e81743-82a0-4697-a57f-b8f03dc1139a" data-motion-child="">
              {'Clothes cut for work, worn for years.'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%', animation: 'timeline-cb90a5-3 6000ms linear 0ms 1 normal both' }} data-pc-id="e17689f1-1290-4508-bbe9-925daa861031" data-motion-child="">
              {'Linen, canvas and wool from mills we visit, sewn in small runs in Leicester and Northampton — and mended free for as long as you own them.'}
            </p>
            <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', height: '54px', background: 'var(--brand-primary)', borderRadius: '4px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '15px 26px 15px 26px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', animation: 'timeline-cb90a5-4 6000ms linear 0ms 1 normal both' }} href="/search" data-pc-id="0665b816-8e14-4f10-b163-bab899320fa0" data-motion-child="">
              <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onprimary)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id="0665b816-8e14-4f10-b163-bab899320fa0::de03c0b8-5b29-4732-8f67-9e913878635c">
                {'Shop the season'}
              </p>
            </a>
          </div>
          <div style={{ width: '692px', height: '498px', background: 'url(\'/popcraft/media/49dedd0e57d2f2b17b0819e64d62033a.jpg\') center / cover no-repeat', borderRadius: '4px', maxWidth: '100%', flexShrink: '0', animation: 'timeline-cb90a5-5 6000ms linear 0ms 1 normal both' }} data-pc-id="3266bebf-e204-449b-8f31-a91328f2099a" data-motion-child="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-cb90a5-6 6000ms linear 0ms 1 normal both' }} data-pc-id="2dba7158-bd1a-4724-a44e-e538e4b8f703" data-motion-child="">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="bac1a65d-4c1b-402b-b032-dc1a95ade75c">
            {'Featured this week'}
          </p>
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '24px', padding: '0px 0px 0px 0px' }} data-pc-id="30d11f55-cd22-4b02-a7fe-a629f214c1fc">
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).slice(0, 3).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"6461b44e-3b90-4ce3-8385-7d14e230eb21~" + item.id}>
                  <div style={{ height: '416px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"f47f15a9-dd36-4354-82ea-bada391d97d3~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"51b2e591-1a7e-4f4b-9ae9-3283e9851a7a~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"52303d10-eef9-4eda-8123-96d1ba9257bc~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"30e54232-ea0c-469f-8194-278f31ef66bb~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '64px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="f92b830c-2731-43ab-a0bb-24d187dcffee">
          <div style={{ width: '648px', height: '441px', background: 'url(\'/popcraft/media/2b1c632a915848e9c42e1e7b03cf8946.jpg\') center / cover no-repeat', borderRadius: '4px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="988188c0-3339-476a-894d-f98c4bf1d044" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '0px 0px 0px 0px', flex: '1 1 0', minWidth: '0' }} data-pc-id="ce6c067c-5c53-40e8-a4c3-d7231c6cf022">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="97472695-c946-4369-9c42-c2bc6d9a8577">
              {'Mended, not replaced'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="ad5047c3-0e08-4182-ac2b-6a2e8982a9bf">
              {'Every Fieldwork piece comes with free repairs for life. Send it back with a note and our workshop will patch, resole or re-wax it, then post it home with the bill marked nil.'}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="16164f01-845e-45d8-a556-09431fddc422">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="d0522021-bc08-40ba-8bcf-25ac56c29caa">
            {'New in'}
          </p>
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '20px', padding: '0px 0px 0px 0px' }} data-pc-id="9d4d6766-d992-48d3-af2e-f3dcb98eda43">
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).slice(3, 7).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"b6ea184f-8132-46b3-9434-fc731a04cf4c~" + item.id}>
                  <div style={{ height: '309px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"7167b021-ab2a-421f-8202-122291b266dd~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"770cd980-c0e1-4738-bcc0-e77a7feff098~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"8c66829a-e71c-4da6-862f-1b79f88867d0~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"6b71f587-9e94-4809-a50a-1c6f84acfc6f~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '32px', padding: '48px 72px 64px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="b81f8fb7-845c-4d1a-9845-bc605e7cc85f">
          <div style={{ width: '640px', display: 'flex', flexDirection: 'column', gap: '8px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="9f9071c6-9a52-4dbc-9673-3e53764524bf">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: '700', lineHeight: '34px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="cac71872-1008-4a0e-9741-2f512fc14d17">
              {'Letters from the workshop'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="0dfee964-3ab7-454c-b7e7-5c37f7737448">
              {'One email a month: new runs before they sell out, and what the repairs bench is mending.'}
            </p>
          </div>
          <div style={{ height: '54px', borderRadius: '4px', border: '1.5px solid var(--brand-text)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '15px 26px 15px 26px', boxSizing: 'border-box', flexShrink: '0' }} data-pc-id="942f05e2-7ee2-4961-a285-5e38c6ba1f6b">
            <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id="942f05e2-7ee2-4961-a285-5e38c6ba1f6b::0224e633-fc2e-4380-860f-51a069103a8c">
              {'Join the list'}
            </p>
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="7d865b7b-76c6-4cb0-a2fb-71c32765b5f8">
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="b9e122ef-b7c7-4551-a046-be73efbed729">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="775f54a3-9ff7-47b7-9dd8-457af0ad1c6f">
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="dd160545-5244-4256-a0ab-c38a8058f572">
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="5aedd3e2-2ef9-4764-a16b-60d5f3cc0586">
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"44cbc9aa-8be5-4cb2-91fd-b1c73563ba29~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
