// Cart, exported from PopCraft (Fieldwork storefront) as a component a Next.js Commerce store renders with its own data.
// Re-export it from PopCraft rather than editing it here: the design is the source.

import { Fragment } from 'react'
import { commerceItem, commerceWords, type CommerceItem, type Cart, type CartItem, type Menu } from '@popcraft/runtime/commerce'

export interface CartPageProps {
  /** Cart; none: the design's samples. */
  cart?: Cart
  /** Cart lines; none: the design's samples. */
  cartLines?: CartItem[]
  /** Menu; none: the design's samples. */
  menu?: Menu[]
  /** What sending its removeCartLine form does (a server action). */
  onRemoveCartLine?: (formData: FormData) => void | Promise<void>
  /** What sending its checkout form does (a server action). */
  onCheckout?: (formData: FormData) => void | Promise<void>
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

const SAMPLE_CARTLINES: CommerceItem[] = [
  {
    "id": "21bf5824-f6dd-4199-9575-bf9c20b78794",
    "values": {
      "title": "Linen overshirt",
      "variant": "M",
      "url": "/product/linen-overshirt",
      "image": "/popcraft/media/b300327e9b778f6cee485a5118f6fc54.jpg",
      "quantity": 1,
      "price": "£98.00",
      "merchandise_id": "gid://shopify/ProductVariant/1001"
    }
  },
  {
    "id": "fe16b8cf-df83-443b-a5b4-38a59dcd9396",
    "values": {
      "title": "Indigo chore jacket",
      "variant": "",
      "url": "/product/indigo-chore-jacket",
      "image": "/popcraft/media/2b1c632a915848e9c42e1e7b03cf8946.jpg",
      "quantity": 1,
      "price": "£145.00",
      "merchandise_id": "gid://shopify/ProductVariant/1002"
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
  [data-pc-id="d5e8cccd-0729-4e2c-8101-8e7f1449088f"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id="8d3e4a62-074d-4291-9d25-b05c2a7b0487"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="d648124e-3a65-4da2-988e-d44875bc0ae6"] {
    flex-direction: column !important;
    padding: 0px 40px 48px 40px !important;
  }
  [data-pc-id="9f4ec6db-d040-4167-834e-fc090737f127"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="721db5c0-0958-4d91-bce6-6a8fa58043a3"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="204b8703-f3a3-4f27-85f9-54594c6e7bba"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="ff9b206e-06d9-41a5-82f5-c9a8d1bf5446"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="da87a786-b9a4-4f19-b82d-867441aaa349"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id="9792cdbc-5f55-4c94-a43c-9e18803c3136"] {
    min-height: max(982px, 100dvh) !important;
  }
  [data-pc-id="d5e8cccd-0729-4e2c-8101-8e7f1449088f"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id="6f38234a-7653-48f4-a461-c9fff8a71eda"] {
    display: none !important;
  }
  [data-pc-id="7465e045-9d18-4a71-b2b6-d68e29d55865"] {
    display: none !important;
  }
  [data-pc-id="074b191f-e67c-49b9-b5a5-89542442ca73"] {
    display: none !important;
  }
  [data-pc-id="455507c8-5942-47a8-a3c3-e536ddd85e06"] {
    display: none !important;
  }
  [data-pc-id="5b44b584-5b6b-4dac-96e2-9693ffeb6ed9"] {
    display: none !important;
  }
  [data-pc-id="8d3e4a62-074d-4291-9d25-b05c2a7b0487"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="d648124e-3a65-4da2-988e-d44875bc0ae6"] {
    padding: 0px 20px 48px 20px !important;
  }
  [data-pc-id^="6dd1cad7-9cf2-4575-ba40-e0a6485a8a12~"] {
    width: 80px !important;
    height: 80px !important;
  }
  [data-pc-id^="6dd1cad7-9cf2-4575-ba40-e0a6485a8a12~"] {
    width: 80px !important;
    height: 80px !important;
  }
  [data-pc-id="204b8703-f3a3-4f27-85f9-54594c6e7bba"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-3c3136-0 {
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
@keyframes timeline-3c3136-1 {
  0% { transform: translate(0px, 63px); opacity: 0; }
  2.222% { transform: translate(0px, 63px); opacity: 0; }
  2.778% { transform: translate(0px, 51.97px); opacity: 0.175; }
  3.333% { transform: translate(0px, 35.36px); opacity: 0.439; }
  3.889% { transform: translate(0px, 24.06px); opacity: 0.618; }
  4.444% { transform: translate(0px, 16.37px); opacity: 0.74; }
  5% { transform: translate(0px, 11.14px); opacity: 0.823; }
  5.556% { transform: translate(0px, 7.58px); opacity: 0.88; }
  6.111% { transform: translate(0px, 5.16px); opacity: 0.918; }
  6.667% { transform: translate(0px, 3.51px); opacity: 0.944; }
  7.222% { transform: translate(0px, 2.39px); opacity: 0.962; }
  7.778% { transform: translate(0px, 1.62px); opacity: 0.974; }
  9.444% { transform: translate(0px, 0.51px); opacity: 0.992; }
  12.222% { transform: translate(0px, 0.07px); opacity: 0.999; animation-timing-function: step-end; }
  12.778% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}
@keyframes timeline-3c3136-2 {
  0% { transform: translate(0px, 159px); opacity: 0; }
  5.556% { transform: translate(0px, 159px); opacity: 0; }
  6.111% { transform: translate(0px, 131.15px); opacity: 0.175; }
  6.667% { transform: translate(0px, 89.24px); opacity: 0.439; }
  7.222% { transform: translate(0px, 60.72px); opacity: 0.618; }
  7.778% { transform: translate(0px, 41.31px); opacity: 0.74; }
  8.333% { transform: translate(0px, 28.11px); opacity: 0.823; }
  8.889% { transform: translate(0px, 19.12px); opacity: 0.88; }
  9.444% { transform: translate(0px, 13.01px); opacity: 0.918; }
  10% { transform: translate(0px, 8.85px); opacity: 0.944; }
  10.556% { transform: translate(0px, 6.02px); opacity: 0.962; }
  11.111% { transform: translate(0px, 4.1px); opacity: 0.974; }
  12.778% { transform: translate(0px, 1.29px); opacity: 0.992; }
  15.556% { transform: translate(0px, 0.19px); opacity: 0.999; animation-timing-function: step-end; }
  16.111% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 1; }
}`
export function CartPage({ cart, cartLines, menu, onRemoveCartLine, onCheckout }: CartPageProps = {}) {
  return (
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(1024px, 100dvh)' }} data-pc-id="9792cdbc-5f55-4c94-a43c-9e18803c3136">
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-3c3136-0 6000ms linear 0ms 1 normal both' }} data-pc-id="d5e8cccd-0729-4e2c-8101-8e7f1449088f" data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id="50435c1a-97ca-4bb3-8418-57f1b2dca469">
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="6f38234a-7653-48f4-a461-c9fff8a71eda">
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="7465e045-9d18-4a71-b2b6-d68e29d55865">
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="074b191f-e67c-49b9-b5a5-89542442ca73">
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="455507c8-5942-47a8-a3c3-e536ddd85e06">
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="5b44b584-5b6b-4dac-96e2-9693ffeb6ed9">
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="95713ea5-0596-4e93-9bdd-984139aceaba">
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"5e5f0818-97c4-4b31-9aca-4f1178756dd3~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"be5849e3-617b-4c18-a0d2-5fdbdc8fec40~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"d767605b-b357-402c-a8f4-1bb7a6b63a46~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"33abf256-6437-48bb-83e2-ca5a34966551~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="3ef87389-b97e-4c8e-a9c4-9f9fe9488399">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-3c3136-1 6000ms linear 0ms 1 normal both' }} data-pc-id="8d3e4a62-074d-4291-9d25-b05c2a7b0487" data-motion-child="">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="f7bf6832-e1d8-47d3-b520-baa0674d916e">
            {'Your cart'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', padding: '0px 72px 48px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-3c3136-2 6000ms linear 0ms 1 normal both' }} data-pc-id="d648124e-3a65-4da2-988e-d44875bc0ae6" data-motion-child="">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start' }} data-pc-id="9f4ec6db-d040-4167-834e-fc090737f127">
            {(cartLines ? cartLines.map(v => commerceItem("commerce.cartLine", v)) : SAMPLE_CARTLINES).map(item => (
              <Fragment key={item.id}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"ae9d53ec-4fab-4f9c-b602-db9c1bb6e6cc~" + item.id}>
                  <div style={{ height: '1px', background: 'var(--brand-line)', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"4d5d5762-5acf-423d-b937-014adbee77b5~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', padding: '20px 0px 20px 0px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"03a656c2-b896-4b7c-9a9b-343871e91984~" + item.id}>
                    <div style={{ width: '120px', height: '120px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"6dd1cad7-9cf2-4575-ba40-e0a6485a8a12~" + item.id} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '0px 0px 0px 0px', flex: '1 1 0', minWidth: '0' }} data-pc-id={"17e86f68-8c27-4615-9d4a-ebbbc3040cf0~" + item.id}>
                      <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"05284a94-cb75-4a59-bbad-b2097602c042~" + item.id}>
                        {commerceWords(item, "title")}
                      </p>
                      <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"e476693d-b797-4a10-a397-b93fbcda81ba~" + item.id}>
                        {commerceWords(item, "variant")}
                      </p>
                      <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"59e62646-1ce0-4fc5-9ecd-d59173e5522c~" + item.id}>
                        {"Qty " + commerceWords(item, "quantity")}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"78dda626-a2b2-406d-b2bb-2bfdf712c52b~" + item.id}>
                      <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"ee1cda81-e2f8-4172-8b78-fc605c3e80b5~" + item.id}>
                        {commerceWords(item, "price")}
                      </p>
                      <form style={{ margin: '0', position: 'relative', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"43878855-42bf-499f-94b3-d1450741f816~" + item.id} action={onRemoveCartLine}>
                        <input style={{ display: 'block', border: '0', padding: '0', margin: '0', background: 'none', outline: 'none', font: 'inherit', color: 'var(--brand-text)', minWidth: '0', position: 'absolute', left: '0px', top: '0px', width: '1px', height: 'auto', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '400', lineHeight: 'normal', textAlign: 'left', maxWidth: '100%' }} type="hidden" name="merchandiseId" defaultValue={commerceWords(item, "merchandise_id")} aria-label="merchandiseId" data-pc-id={"6cb3e489-5764-47ba-a3db-93eb23cb2da9~" + item.id} />
                        <button style={{ display: 'block', border: '0', padding: '0', background: 'none', font: 'inherit', color: 'var(--brand-onpaper)', textAlign: 'left', cursor: 'pointer', position: 'relative', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} type="submit" data-pc-id={"c7570dad-74df-4f8f-bc56-070076932bc9~" + item.id}>
                          {'Remove'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="721db5c0-0958-4d91-bce6-6a8fa58043a3">
            {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
              <Fragment key={item.id}>
                <div style={{ background: 'var(--brand-card)', borderRadius: '4px', border: '1px solid var(--brand-line)', display: 'flex', flexDirection: 'column', gap: '14px', padding: '28px 28px 28px 28px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"0dc4ecae-fc51-4f13-8035-42910c5841f1~" + item.id}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"7bc64b05-f723-4332-affe-75c88d0061ff~" + item.id}>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-cardmuted)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"d14696f4-72dd-409a-9e37-ee7d2a23317a~" + item.id}>
                      {'Subtotal'}
                    </p>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'right', color: 'var(--brand-oncard)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"dd77e808-2f98-4080-8135-a980bdf9fd0f~" + item.id}>
                      {commerceWords(item, "subtotal")}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"0acb070f-8c81-4be1-9a87-43b1a05fd3bc~" + item.id}>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-cardmuted)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"b22e52e9-893c-4ca8-ba77-a7c5b13337e9~" + item.id}>
                      {'Taxes'}
                    </p>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'right', color: 'var(--brand-oncard)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"0687b877-dda5-4c0d-b78f-8ec371780fc6~" + item.id}>
                      {commerceWords(item, "taxes")}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"c62a7eaf-e925-4f12-8aec-c933d8b03d25~" + item.id}>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-oncard)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"efd735e2-0c84-4827-928b-bcf0d304379d~" + item.id}>
                      {'Total'}
                    </p>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'right', color: 'var(--brand-oncard)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"5940b815-bba4-4f8d-8d9a-03608ab8d8ba~" + item.id}>
                      {commerceWords(item, "total")}
                    </p>
                  </div>
                  <form style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"1a88249d-fe0d-478e-b6ae-607b0a449e02~" + item.id} action={onCheckout}>
                    <button style={{ display: 'flex', border: '0', padding: '15px 26px 15px 26px', background: 'var(--brand-primary)', font: 'inherit', color: 'inherit', textAlign: 'inherit', cursor: 'pointer', borderRadius: '4px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} type="submit" data-pc-id={"32b953b9-77d8-401b-aa04-df8d4e73a607~" + item.id}>
                      <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onprimary)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"30721441-c510-46d9-9092-8879c7f16f4b~" + item.id}>
                        {'Check out'}
                      </p>
                    </button>
                  </form>
                  <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-cardmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"9de272c7-32f8-4469-9be2-dbeb34361bea~" + item.id}>
                    {'Free UK delivery over £75 · dispatched in 1–2 working days'}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="204b8703-f3a3-4f27-85f9-54594c6e7bba">
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="ff9b206e-06d9-41a5-82f5-c9a8d1bf5446">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="8d71ef54-1d08-4ca9-91d1-620709f24c21">
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="04ca5bd5-a739-413f-9722-1a2fac69b962">
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="da87a786-b9a4-4f19-b82d-867441aaa349">
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"0b92badc-3f31-4341-8400-57b24b6593a9~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
