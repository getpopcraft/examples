// Search, exported from PopCraft (Fieldwork storefront) as a component a Next.js Commerce store renders with its own data.
// Re-export it from PopCraft rather than editing it here: the design is the source.

import { Fragment } from 'react'
import { commerceItem, commerceWords, type CommerceItem, type Cart, type Collection, type Menu, type Product } from '@popcraft/runtime/commerce'

export interface SearchPageProps {
  /** Cart; none: the design's samples. */
  cart?: Cart
  /** Categories; none: the design's samples. */
  categories?: Collection[]
  /** Products; none: the design's samples. */
  products?: Product[]
  /** Menu; none: the design's samples. */
  menu?: Menu[]
  /** What sending its search form does (a server action). */
  onSearch?: (formData: FormData) => void | Promise<void>
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

const SAMPLE_CATEGORIES: CommerceItem[] = [
  {
    "id": "86a70b69-bd7f-473b-99fe-6ab3544186f6",
    "values": {
      "title": "Shirts",
      "handle": "shirts",
      "url": "/search/shirts",
      "description": "Linen and cotton shirts cut roomy through the shoulder, with pockets you will actually use."
    }
  },
  {
    "id": "ea3a8fce-52c7-4714-a802-a5813c87f459",
    "values": {
      "title": "Jackets",
      "handle": "jackets",
      "url": "/search/jackets",
      "description": "Chore coats and field jackets in rope-dyed twill and waxed cotton, made to fade where you wear them."
    }
  },
  {
    "id": "9b8b96b9-59c5-47f3-a81e-f0f7ce866d71",
    "values": {
      "title": "Knitwear",
      "handle": "knitwear",
      "url": "/search/knitwear",
      "description": "Undyed British wool, knitted in Leicestershire: warm, hard-wearing and mended free."
    }
  },
  {
    "id": "109c84cb-ccbd-4311-ab3b-3b5c6a76c53c",
    "values": {
      "title": "Trousers",
      "handle": "trousers",
      "url": "/search/trousers",
      "description": "Canvas and twill work trousers with double knees and a gusset that lets you crouch."
    }
  },
  {
    "id": "d0511d7f-6b51-4dd0-9e76-cd8558a6f6ea",
    "values": {
      "title": "Accessories",
      "handle": "accessories",
      "url": "/search/accessories",
      "description": "Caps, totes and boots: the things that go everywhere the clothes do."
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

const KEYFRAMES = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');
@media (max-width: 1024px) {
  [data-pc-id="3726d6ac-4a41-4e65-ad24-e2d2075b2c37"] {
    min-height: max(1073px, 100dvh) !important;
  }
  [data-pc-id="b657c255-c8db-4aef-af0d-adbecce289a7"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id="55d1c7a7-4074-48fb-afa4-70f1b54a7d54"] {
    justify-content: revert !important;
    align-items: revert !important;
    flex-direction: column !important;
    padding: 40px 40px 8px 40px !important;
  }
  [data-pc-id="646abf25-c023-4632-9ce2-e44b18ad30df"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="eaf7befa-b9b0-4293-a6e6-2b124d3d3eda"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="30331ea6-9067-46aa-be4b-ad5a01f236c6"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="407a0910-f179-461f-9666-a4ecbfd06eec"] {
    grid-template-columns: 1fr 1fr !important;
    gap: 24px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~56ed2e63-c3de-4050-a6d2-981fea395b59"] {
    height: 332px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~5e515d30-897c-4c19-b099-5870d6f5656e"] {
    height: 332px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~07d57f26-345c-46ce-959a-7fb64f2a946e"] {
    height: 332px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~3ee6b33b-5941-497c-a77a-c5de61dddf0a"] {
    height: 332px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~086c362f-12f8-40d8-abb3-41c8a13286f7"] {
    height: 332px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~ac41a306-731d-47d1-888d-93a181a62cfb"] {
    height: 332px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~7df713f5-172b-4512-ad11-b50b46df4000"] {
    height: 332px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~6a05e218-627d-4049-b0e8-ace81dd7df1e"] {
    height: 332px !important;
  }
  [data-pc-id="af9d8370-87fd-4063-bcab-f94e808ba6e2"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="3a811901-50e7-4ccb-bc30-e90dd12f29b1"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="4c694601-40ac-4f6e-b22e-80dda6622b1a"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id="3726d6ac-4a41-4e65-ad24-e2d2075b2c37"] {
    min-height: max(1102px, 100dvh) !important;
  }
  [data-pc-id="b657c255-c8db-4aef-af0d-adbecce289a7"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id="d6d17705-dfe8-48a7-9c7f-f6dce6e7b8ce"] {
    display: none !important;
  }
  [data-pc-id="1b9bbd03-08c9-4bd4-930d-0ab77d70e763"] {
    display: none !important;
  }
  [data-pc-id="49c12604-243b-429d-8789-aaf1809db5ca"] {
    display: none !important;
  }
  [data-pc-id="88f6a40d-7909-4d5f-a8a6-cb7a9af6c058"] {
    display: none !important;
  }
  [data-pc-id="27ad7c0a-b9a4-40cc-88aa-276d6b29f073"] {
    display: none !important;
  }
  [data-pc-id="55d1c7a7-4074-48fb-afa4-70f1b54a7d54"] {
    padding: 40px 20px 8px 20px !important;
  }
  [data-pc-id="30331ea6-9067-46aa-be4b-ad5a01f236c6"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="407a0910-f179-461f-9666-a4ecbfd06eec"] {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~56ed2e63-c3de-4050-a6d2-981fea395b59"] {
    height: 335px !important;
  }
  [data-pc-id="dc0b992d-9675-4dc2-b76e-62c962596812~56ed2e63-c3de-4050-a6d2-981fea395b59"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="d1584ec6-dbd5-4c1e-91f4-9613f69044ca~56ed2e63-c3de-4050-a6d2-981fea395b59"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~5e515d30-897c-4c19-b099-5870d6f5656e"] {
    height: 335px !important;
  }
  [data-pc-id="dc0b992d-9675-4dc2-b76e-62c962596812~5e515d30-897c-4c19-b099-5870d6f5656e"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="d1584ec6-dbd5-4c1e-91f4-9613f69044ca~5e515d30-897c-4c19-b099-5870d6f5656e"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~07d57f26-345c-46ce-959a-7fb64f2a946e"] {
    height: 335px !important;
  }
  [data-pc-id="dc0b992d-9675-4dc2-b76e-62c962596812~07d57f26-345c-46ce-959a-7fb64f2a946e"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="d1584ec6-dbd5-4c1e-91f4-9613f69044ca~07d57f26-345c-46ce-959a-7fb64f2a946e"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~3ee6b33b-5941-497c-a77a-c5de61dddf0a"] {
    height: 335px !important;
  }
  [data-pc-id="dc0b992d-9675-4dc2-b76e-62c962596812~3ee6b33b-5941-497c-a77a-c5de61dddf0a"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="d1584ec6-dbd5-4c1e-91f4-9613f69044ca~3ee6b33b-5941-497c-a77a-c5de61dddf0a"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~086c362f-12f8-40d8-abb3-41c8a13286f7"] {
    height: 335px !important;
  }
  [data-pc-id="dc0b992d-9675-4dc2-b76e-62c962596812~086c362f-12f8-40d8-abb3-41c8a13286f7"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="d1584ec6-dbd5-4c1e-91f4-9613f69044ca~086c362f-12f8-40d8-abb3-41c8a13286f7"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~ac41a306-731d-47d1-888d-93a181a62cfb"] {
    height: 335px !important;
  }
  [data-pc-id="dc0b992d-9675-4dc2-b76e-62c962596812~ac41a306-731d-47d1-888d-93a181a62cfb"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="d1584ec6-dbd5-4c1e-91f4-9613f69044ca~ac41a306-731d-47d1-888d-93a181a62cfb"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~7df713f5-172b-4512-ad11-b50b46df4000"] {
    height: 335px !important;
  }
  [data-pc-id="dc0b992d-9675-4dc2-b76e-62c962596812~7df713f5-172b-4512-ad11-b50b46df4000"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="d1584ec6-dbd5-4c1e-91f4-9613f69044ca~7df713f5-172b-4512-ad11-b50b46df4000"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="6c73b215-fa50-48b6-85b4-ad912280fc9e~6a05e218-627d-4049-b0e8-ace81dd7df1e"] {
    height: 335px !important;
  }
  [data-pc-id="dc0b992d-9675-4dc2-b76e-62c962596812~6a05e218-627d-4049-b0e8-ace81dd7df1e"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="d1584ec6-dbd5-4c1e-91f4-9613f69044ca~6a05e218-627d-4049-b0e8-ace81dd7df1e"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="af9d8370-87fd-4063-bcab-f94e808ba6e2"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-5b2c37-0 {
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
@keyframes timeline-5b2c37-1 {
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
@keyframes timeline-5b2c37-2 {
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
export function SearchPage({ cart, categories, products, menu, onSearch }: SearchPageProps = {}) {
  return (
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(1024px, 100dvh)' }} data-pc-id="3726d6ac-4a41-4e65-ad24-e2d2075b2c37">
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-5b2c37-0 6000ms linear 0ms 1 normal both' }} data-pc-id="b657c255-c8db-4aef-af0d-adbecce289a7" data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id="372d1842-677f-41c2-b82e-cc30a856f76c">
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="d6d17705-dfe8-48a7-9c7f-f6dce6e7b8ce">
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="1b9bbd03-08c9-4bd4-930d-0ab77d70e763">
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="49c12604-243b-429d-8789-aaf1809db5ca">
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="88f6a40d-7909-4d5f-a8a6-cb7a9af6c058">
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="27ad7c0a-b9a4-40cc-88aa-276d6b29f073">
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="5ed3472d-28ac-43a4-83d6-c6a637638b64">
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"84679179-3a34-433f-a55e-50f767628407~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"40d79d87-e1b9-4c94-9394-3af8803204fe~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"c824b796-4dbf-49bd-9886-e251cd7a2e2f~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"3e1e2dfa-dd32-420b-bbec-b85c9b2b64ee~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="95b085f3-652f-46f3-ad64-8f8c4b498023">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px', padding: '40px 72px 8px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-5b2c37-1 6000ms linear 0ms 1 normal both' }} data-pc-id="55d1c7a7-4074-48fb-afa4-70f1b54a7d54" data-motion-child="">
          <div style={{ width: '560px', display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="646abf25-c023-4632-9ce2-e44b18ad30df">
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="bf20d678-95c9-4e28-a5cb-0af58320143e">
              {'Shop all'}
            </p>
            <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="25fb475a-c794-4e5d-93f3-fbd948077456">
              {'8 pieces, made to be used every day.'}
            </p>
          </div>
          <form style={{ margin: '0', width: '440px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id="eaf7befa-b9b0-4293-a6e6-2b124d3d3eda" action={onSearch}>
            <div style={{ height: '50px', background: 'var(--brand-card)', borderRadius: '4px', border: '1px solid var(--brand-line)', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0px', padding: '0px 16px 0px 16px', boxSizing: 'border-box', flex: '1 1 0', minWidth: '0' }} data-pc-id="ddfc15b6-101f-4046-b3d6-73fb7f8c180a">
              <input style={{ display: 'block', border: '0', padding: '0', margin: '0', background: 'none', outline: 'none', font: 'inherit', color: 'var(--brand-cardmuted)', minWidth: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', flex: '1 1 0', maxWidth: '100%' }} type="search" name="q" placeholder="Search the shop" aria-label="Search the shop" data-pc-id="f52ab69f-ba26-4052-988a-f31f710c5191" />
            </div>
            <button style={{ display: 'flex', border: '1.5px solid var(--brand-text)', padding: '15px 26px 15px 26px', background: 'none', font: 'inherit', color: 'inherit', textAlign: 'inherit', cursor: 'pointer', height: '54px', borderRadius: '4px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', boxSizing: 'border-box', flexShrink: '0' }} type="submit" data-pc-id="7e7b8a9f-ae58-478d-9380-a8b962cab7a4">
              <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id="7e7b8a9f-ae58-478d-9380-a8b962cab7a4::6dc3434d-5640-4d25-ace9-82377f438e02">
                {'Search'}
              </p>
            </button>
          </form>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-5b2c37-2 6000ms linear 0ms 1 normal both' }} data-pc-id="30331ea6-9067-46aa-be4b-ad5a01f236c6" data-motion-child="">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch', flexWrap: 'wrap', alignContent: 'flex-start' }} data-pc-id="b4aa3e62-3ffc-4a10-8aea-987515a2b823">
            {(categories ? categories.map(v => commerceItem("commerce.collection", v)) : SAMPLE_CATEGORIES).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1px solid var(--brand-line)', flexDirection: 'row', gap: '0px', padding: '8px 16px 8px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href={"/search/" + commerceWords(item, "handle")} data-pc-id={"a36238ef-e6e8-465f-abcc-5dd6dad57962~" + item.id}>
                  <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"59b1a159-e419-411c-8c9a-7bca7a67aed1~" + item.id}>
                    {commerceWords(item, "title")}
                  </p>
                </a>
              </Fragment>
            ))}
          </div>
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '20px', padding: '0px 0px 0px 0px' }} data-pc-id="407a0910-f179-461f-9666-a4ecbfd06eec">
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"52b56573-f440-4d43-9872-1bd5048b386f~" + item.id}>
                  <div style={{ height: '309px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"6c73b215-fa50-48b6-85b4-ad912280fc9e~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"dc0b992d-9675-4dc2-b76e-62c962596812~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"d1584ec6-dbd5-4c1e-91f4-9613f69044ca~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"4d038ae1-c6e7-4754-9fd5-ef162004b063~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="af9d8370-87fd-4063-bcab-f94e808ba6e2">
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="3a811901-50e7-4ccb-bc30-e90dd12f29b1">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="00aae90e-162f-4c09-a2aa-88ea28fc8ff6">
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="4505227f-a08f-4df2-8e52-fd7842fc1030">
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="4c694601-40ac-4f6e-b22e-80dda6622b1a">
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"dd1ba01b-6cf3-45b9-a38d-c3b0dbd190f4~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
