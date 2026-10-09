// Category, exported from PopCraft (Fieldwork storefront) as a component a Next.js Commerce store renders with its own data.
// Re-export it from PopCraft rather than editing it here: the design is the source.

import { Fragment } from 'react'
import { commerceItem, commerceWords, type CommerceItem, type Cart, type Collection, type Menu, type Product } from '@popcraft/runtime/commerce'

export interface CategoryPageProps {
  /** The category this page is about; none: the design's first sample. */
  collection?: Collection
  /** Cart; none: the design's samples. */
  cart?: Cart
  /** Categories; none: the design's samples. */
  categories?: Collection[]
  /** Products; none: the design's samples. */
  products?: Product[]
  /** Menu; none: the design's samples. */
  menu?: Menu[]
}

const SAMPLE_COLLECTION: CommerceItem = {
  "id": "86a70b69-bd7f-473b-99fe-6ab3544186f6",
  "values": {
    "title": "Shirts",
    "handle": "shirts",
    "url": "/search/shirts",
    "description": "Linen and cotton shirts cut roomy through the shoulder, with pockets you will actually use."
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
  [data-pc-id="40c877f3-aa3f-4a05-bb33-68ca1860f45d~__pcitem__"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id="7ffb20f2-f9da-4799-861c-15c2ea345048~__pcitem__"] {
    padding: 40px 40px 8px 40px !important;
  }
  [data-pc-id="723faecd-2298-46d5-947b-dc5f2893d0ed~__pcitem__"] {
    width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="579eff27-480d-43b2-8c35-0b5ffbd39c8d~__pcitem__"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="a2e525de-8aee-4b88-b6c6-3b8173bf4200~__pcitem__"] {
    grid-template-columns: 1fr 1fr !important;
    gap: 24px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~56ed2e63-c3de-4050-a6d2-981fea395b59"] {
    height: 332px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~5e515d30-897c-4c19-b099-5870d6f5656e"] {
    height: 332px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~07d57f26-345c-46ce-959a-7fb64f2a946e"] {
    height: 332px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~3ee6b33b-5941-497c-a77a-c5de61dddf0a"] {
    height: 332px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~086c362f-12f8-40d8-abb3-41c8a13286f7"] {
    height: 332px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~ac41a306-731d-47d1-888d-93a181a62cfb"] {
    height: 332px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~7df713f5-172b-4512-ad11-b50b46df4000"] {
    height: 332px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~6a05e218-627d-4049-b0e8-ace81dd7df1e"] {
    height: 332px !important;
  }
  [data-pc-id="b9cd0977-a23b-4691-b3d0-3f6bdfaaf78e~__pcitem__"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="4e719a8d-bb6e-4393-9937-26727e6c5ee2~__pcitem__"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="ba6c78f1-5a1d-476a-b330-be487509d2fa~__pcitem__"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id="27c24a96-ce60-46b3-b198-e37bdeb280b1~__pcitem__"] {
    min-height: max(1043px, 100dvh) !important;
  }
  [data-pc-id="40c877f3-aa3f-4a05-bb33-68ca1860f45d~__pcitem__"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id="ce7b08f5-4e78-421a-8a42-159bce41177a~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="6d3682ec-4f0f-422d-be2f-4c6143f29464~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="0f78ccff-cadd-4662-8e14-f7494383c877~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="11f9a079-519d-43fe-bc15-c51360a74533~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="1381195f-2ec2-4a4b-b1c8-3524ade06bd8~__pcitem__"] {
    display: none !important;
  }
  [data-pc-id="7ffb20f2-f9da-4799-861c-15c2ea345048~__pcitem__"] {
    padding: 40px 20px 8px 20px !important;
  }
  [data-pc-id="579eff27-480d-43b2-8c35-0b5ffbd39c8d~__pcitem__"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="a2e525de-8aee-4b88-b6c6-3b8173bf4200~__pcitem__"] {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~56ed2e63-c3de-4050-a6d2-981fea395b59"] {
    height: 335px !important;
  }
  [data-pc-id="daa0fd4d-bbff-4982-852b-ede97f6d6113~__pcitem__~56ed2e63-c3de-4050-a6d2-981fea395b59"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="50e71976-1b75-426e-b3b2-521d159b6b06~__pcitem__~56ed2e63-c3de-4050-a6d2-981fea395b59"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~5e515d30-897c-4c19-b099-5870d6f5656e"] {
    height: 335px !important;
  }
  [data-pc-id="daa0fd4d-bbff-4982-852b-ede97f6d6113~__pcitem__~5e515d30-897c-4c19-b099-5870d6f5656e"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="50e71976-1b75-426e-b3b2-521d159b6b06~__pcitem__~5e515d30-897c-4c19-b099-5870d6f5656e"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~07d57f26-345c-46ce-959a-7fb64f2a946e"] {
    height: 335px !important;
  }
  [data-pc-id="daa0fd4d-bbff-4982-852b-ede97f6d6113~__pcitem__~07d57f26-345c-46ce-959a-7fb64f2a946e"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="50e71976-1b75-426e-b3b2-521d159b6b06~__pcitem__~07d57f26-345c-46ce-959a-7fb64f2a946e"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~3ee6b33b-5941-497c-a77a-c5de61dddf0a"] {
    height: 335px !important;
  }
  [data-pc-id="daa0fd4d-bbff-4982-852b-ede97f6d6113~__pcitem__~3ee6b33b-5941-497c-a77a-c5de61dddf0a"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="50e71976-1b75-426e-b3b2-521d159b6b06~__pcitem__~3ee6b33b-5941-497c-a77a-c5de61dddf0a"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~086c362f-12f8-40d8-abb3-41c8a13286f7"] {
    height: 335px !important;
  }
  [data-pc-id="daa0fd4d-bbff-4982-852b-ede97f6d6113~__pcitem__~086c362f-12f8-40d8-abb3-41c8a13286f7"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="50e71976-1b75-426e-b3b2-521d159b6b06~__pcitem__~086c362f-12f8-40d8-abb3-41c8a13286f7"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~ac41a306-731d-47d1-888d-93a181a62cfb"] {
    height: 335px !important;
  }
  [data-pc-id="daa0fd4d-bbff-4982-852b-ede97f6d6113~__pcitem__~ac41a306-731d-47d1-888d-93a181a62cfb"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="50e71976-1b75-426e-b3b2-521d159b6b06~__pcitem__~ac41a306-731d-47d1-888d-93a181a62cfb"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~7df713f5-172b-4512-ad11-b50b46df4000"] {
    height: 335px !important;
  }
  [data-pc-id="daa0fd4d-bbff-4982-852b-ede97f6d6113~__pcitem__~7df713f5-172b-4512-ad11-b50b46df4000"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="50e71976-1b75-426e-b3b2-521d159b6b06~__pcitem__~7df713f5-172b-4512-ad11-b50b46df4000"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4c63a839-0ad0-4267-9e4f-62862ef70042~__pcitem__~6a05e218-627d-4049-b0e8-ace81dd7df1e"] {
    height: 335px !important;
  }
  [data-pc-id="daa0fd4d-bbff-4982-852b-ede97f6d6113~__pcitem__~6a05e218-627d-4049-b0e8-ace81dd7df1e"] {
    flex-direction: column !important;
    gap: 2px !important;
  }
  [data-pc-id="50e71976-1b75-426e-b3b2-521d159b6b06~__pcitem__~6a05e218-627d-4049-b0e8-ace81dd7df1e"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="b9cd0977-a23b-4691-b3d0-3f6bdfaaf78e~__pcitem__"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-b280b1-0 {
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
@keyframes timeline-b280b1-1 {
  0% { transform: translate(0px, 79px); opacity: 0; }
  2.222% { transform: translate(0px, 79px); opacity: 0; }
  2.778% { transform: translate(0px, 65.16px); opacity: 0.175; }
  3.333% { transform: translate(0px, 44.34px); opacity: 0.439; }
  3.889% { transform: translate(0px, 30.17px); opacity: 0.618; }
  4.444% { transform: translate(0px, 20.53px); opacity: 0.74; }
  5% { transform: translate(0px, 13.97px); opacity: 0.823; }
  5.556% { transform: translate(0px, 9.5px); opacity: 0.88; }
  6.111% { transform: translate(0px, 6.47px); opacity: 0.918; }
  6.667% { transform: translate(0px, 4.4px); opacity: 0.944; }
  7.222% { transform: translate(0px, 2.99px); opacity: 0.962; }
  7.778% { transform: translate(0px, 2.04px); opacity: 0.974; }
  9.444% { transform: translate(0px, 0.64px); opacity: 0.992; }
  12.222% { transform: translate(0px, 0.09px); opacity: 0.999; animation-timing-function: step-end; }
  12.778% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}
@keyframes timeline-b280b1-2 {
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
export function CategoryPage({ collection, cart, categories, products, menu }: CategoryPageProps = {}) {
  const item = collection ? commerceItem("commerce.collection", collection) : SAMPLE_COLLECTION
  return (
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(1024px, 100dvh)' }} data-pc-id={"27c24a96-ce60-46b3-b198-e37bdeb280b1~" + item.id}>
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-b280b1-0 6000ms linear 0ms 1 normal both' }} data-pc-id={"40c877f3-aa3f-4a05-bb33-68ca1860f45d~" + item.id} data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id={"7a39a1d0-94ad-46aa-8313-cba1594aa1ab~" + item.id}>
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"ce7b08f5-4e78-421a-8a42-159bce41177a~" + item.id}>
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"6d3682ec-4f0f-422d-be2f-4c6143f29464~" + item.id}>
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"0f78ccff-cadd-4662-8e14-f7494383c877~" + item.id}>
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"11f9a079-519d-43fe-bc15-c51360a74533~" + item.id}>
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id={"1381195f-2ec2-4a4b-b1c8-3524ade06bd8~" + item.id}>
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"096652f1-0f85-4b02-b5d5-28cfb00c9a7e~" + item.id}>
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"8bdc22f0-b10d-44dd-9352-4527d9f716bb~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"f2bf2ca7-4f22-48fd-8936-07c890ee2717~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"0b946474-2a49-4c70-bb1c-2ab5d03596ea~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"a63c42b9-f93a-4a49-a957-b79009c0345e~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"277c7cdf-2faf-493f-bb3e-96a8a3f37e00~" + item.id}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '40px 72px 8px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-b280b1-1 6000ms linear 0ms 1 normal both' }} data-pc-id={"7ffb20f2-f9da-4799-861c-15c2ea345048~" + item.id} data-motion-child="">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"5756d756-9d60-4066-b971-0b6aa95dce03~" + item.id}>
            {commerceWords(item, "title")}
          </p>
          <p style={{ width: '720px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '27px', textAlign: 'left', color: 'var(--brand-onpaper)', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id={"723faecd-2298-46d5-947b-dc5f2893d0ed~" + item.id}>
            {commerceWords(item, "description")}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-b280b1-2 6000ms linear 0ms 1 normal both' }} data-pc-id={"579eff27-480d-43b2-8c35-0b5ffbd39c8d~" + item.id} data-motion-child="">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch', flexWrap: 'wrap', alignContent: 'flex-start' }} data-pc-id={"4d825ba9-398e-4ca5-9572-a18d7dc7047e~" + item.id}>
            {(categories ? categories.map(v => commerceItem("commerce.collection", v)) : SAMPLE_CATEGORIES).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1px solid var(--brand-line)', flexDirection: 'row', gap: '0px', padding: '8px 16px 8px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href={"/search/" + commerceWords(item, "handle")} data-pc-id={"7653eb35-85a3-46a3-a783-d15e8a525cfd~" + item.id}>
                  <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"f7b341bf-4499-4b77-a5f9-f7cc9bae2dbc~" + item.id}>
                    {commerceWords(item, "title")}
                  </p>
                </a>
              </Fragment>
            ))}
          </div>
          <div style={{ flexShrink: '0', alignSelf: 'stretch', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridAutoRows: 'minmax(100px, auto)', gap: '20px', padding: '0px 0px 0px 0px' }} data-pc-id={"a2e525de-8aee-4b88-b6c6-3b8173bf4200~" + item.id}>
            {(products ? products.map(v => commerceItem("commerce.product", v)) : SAMPLE_PRODUCTS).map(item => (
              <Fragment key={item.id}>
                <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', flexDirection: 'column', gap: '14px', padding: '0px 0px 0px 0px', cursor: 'pointer' }} href={"/product/" + commerceWords(item, "handle")} data-pc-id={"bbf0c4ff-4fd7-44af-8888-17eda5bff480~" + item.id}>
                  <div style={{ height: '309px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"4c63a839-0ad0-4267-9e4f-62862ef70042~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"daa0fd4d-bbff-4982-852b-ede97f6d6113~" + item.id}>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"50e71976-1b75-426e-b3b2-521d159b6b06~" + item.id}>
                      {commerceWords(item, "title")}
                    </p>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"288469ec-7997-4e4f-8050-6dbd514aae39~" + item.id}>
                      {commerceWords(item, "price")}
                    </p>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"b9cd0977-a23b-4691-b3d0-3f6bdfaaf78e~" + item.id}>
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id={"4e719a8d-bb6e-4393-9937-26727e6c5ee2~" + item.id}>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"f71a3f32-7cac-46a2-9cb1-ab594154be8a~" + item.id}>
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"5739cfd9-b1f2-4274-82d1-6c25f8f08edd~" + item.id}>
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id={"ba6c78f1-5a1d-476a-b330-be487509d2fa~" + item.id}>
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"c63c40a6-3b5b-470c-90bf-4a0a0da01c24~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
