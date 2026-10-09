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

const SAMPLE_CARTLINES: CommerceItem[] = [
  {
    "id": "58ef6796-6a8d-482b-98ea-a21cdd0586ce",
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
    "id": "cdf0bbd2-0b45-474d-9fbc-ee76f66b190a",
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
  [data-pc-id="aa129fcd-01fe-4a12-bb29-3e13c651a4c2"] {
    padding: 22px 40px 22px 40px !important;
  }
  [data-pc-id="88a089fc-ae2f-42ac-92e6-dda3498bd541"] {
    padding: 56px 40px 24px 40px !important;
  }
  [data-pc-id="76be76a2-8870-4703-a4d3-435e19b52a5d"] {
    flex-direction: column !important;
    padding: 0px 40px 48px 40px !important;
  }
  [data-pc-id="d2c9e921-842f-408b-8d45-36f0e64bb75c"] {
    flex: revert !important;
    min-width: revert !important;
    flex-shrink: 0 !important;
    align-self: stretch !important;
  }
  [data-pc-id="4398ceb0-7ce0-4bc5-a367-175e3d873e2a"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="befb2454-57d3-4ca6-9aad-fa9a937dfb91"] {
    justify-content: revert !important;
    flex-direction: column !important;
    padding: 56px 40px 56px 40px !important;
  }
  [data-pc-id="1bd84ad4-c174-4385-b5d8-194405476678"] {
    width: revert !important;
    max-width: revert !important;
    align-self: stretch !important;
  }
  [data-pc-id="e7fa26bf-15c6-4607-be5b-e9f37439f128"] {
    align-self: stretch !important;
  }
}
@media (max-width: 640px) {
  [data-pc-id="2927bac6-d9b9-49ac-abc4-248dc370782b"] {
    min-height: max(982px, 100dvh) !important;
  }
  [data-pc-id="aa129fcd-01fe-4a12-bb29-3e13c651a4c2"] {
    padding: 22px 20px 22px 20px !important;
  }
  [data-pc-id="ed6864c2-add8-4bef-a9db-cbcd36e468b5"] {
    display: none !important;
  }
  [data-pc-id="638fa79d-ab86-4616-9dfd-28d1f57b8b96"] {
    display: none !important;
  }
  [data-pc-id="8e4f8d71-a787-484b-bb08-ab64f9656155"] {
    display: none !important;
  }
  [data-pc-id="5a2539af-5f8a-4bc6-9b97-97c50320aeb9"] {
    display: none !important;
  }
  [data-pc-id="0a671a21-505e-40ea-8d9c-ad468dbb1576"] {
    display: none !important;
  }
  [data-pc-id="88a089fc-ae2f-42ac-92e6-dda3498bd541"] {
    padding: 56px 20px 24px 20px !important;
  }
  [data-pc-id="76be76a2-8870-4703-a4d3-435e19b52a5d"] {
    padding: 0px 20px 48px 20px !important;
  }
  [data-pc-id="db547b6d-7ca4-4eea-b195-5ab8cb9fed3b~58ef6796-6a8d-482b-98ea-a21cdd0586ce"] {
    width: 80px !important;
    height: 80px !important;
  }
  [data-pc-id="db547b6d-7ca4-4eea-b195-5ab8cb9fed3b~cdf0bbd2-0b45-474d-9fbc-ee76f66b190a"] {
    width: 80px !important;
    height: 80px !important;
  }
  [data-pc-id="befb2454-57d3-4ca6-9aad-fa9a937dfb91"] {
    padding: 56px 20px 56px 20px !important;
  }
}
@keyframes timeline-70782b-0 {
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
@keyframes timeline-70782b-1 {
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
@keyframes timeline-70782b-2 {
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
    <div style={{ position: 'relative', width: '100%', background: 'var(--brand-paper)', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', overflow: 'hidden', minHeight: 'max(1024px, 100dvh)' }} data-pc-id="2927bac6-d9b9-49ac-abc4-248dc370782b">
      <style>{KEYFRAMES}</style>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0px', padding: '22px 72px 22px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-70782b-0 6000ms linear 0ms 1 normal both' }} data-pc-id="aa129fcd-01fe-4a12-bb29-3e13c651a4c2" data-motion-child="">
        <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/" data-pc-id="5196b909-c0ea-4a12-b1af-88eba294281f">
          {'Fieldwork'}
        </a>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="ed6864c2-add8-4bef-a9db-cbcd36e468b5">
          <a style={{ display: 'block', color: 'var(--brand-text)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="638fa79d-ab86-4616-9dfd-28d1f57b8b96">
            {'Shop all'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="8e4f8d71-a787-484b-bb08-ab64f9656155">
            {'Shirts'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="5a2539af-5f8a-4bc6-9b97-97c50320aeb9">
            {'Jackets'}
          </a>
          <a style={{ display: 'block', color: 'var(--brand-onpaper)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} href="/search" data-pc-id="0a671a21-505e-40ea-8d9c-ad468dbb1576">
            {'Knitwear'}
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id="9f14b61c-0065-411c-a3ea-746dc5825b94">
          {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'flex', color: 'inherit', textDecoration: 'none', borderRadius: '999px', border: '1.5px solid var(--brand-text)', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 16px', boxSizing: 'border-box', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start' }} href="/cart" data-pc-id={"59c59f64-33e4-4fdc-8b28-4790508adbfb~" + item.id}>
                <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', fontWeight: '500', lineHeight: '22px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"d529d262-bf1b-4081-9bb6-5ee51ed18333~" + item.id}>
                  {'Cart'}
                </p>
                <div style={{ width: '26px', height: '26px', background: 'var(--brand-primary)', borderRadius: '13px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"13b6e27f-8fe7-45df-b892-0022f56c4058~" + item.id}>
                  <p style={{ width: '26px', margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'center', color: 'var(--brand-onprimary)', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"6f6213eb-6e72-45b7-bce8-fe5b71205628~" + item.id}>
                    {commerceWords(item, "count")}
                  </p>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', minHeight: '640px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="f9d52d26-4445-42ed-9370-3423ea5d0f02">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', padding: '56px 72px 24px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-70782b-1 6000ms linear 0ms 1 normal both' }} data-pc-id="88a089fc-ae2f-42ac-92e6-dda3498bd541" data-motion-child="">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '800', lineHeight: '46px', letterSpacing: '-1.2px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="1afc6e26-4831-45f5-90e7-031c47641dbe">
            {'Your cart'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', padding: '0px 72px 48px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch', animation: 'timeline-70782b-2 6000ms linear 0ms 1 normal both' }} data-pc-id="76be76a2-8870-4703-a4d3-435e19b52a5d" data-motion-child="">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start' }} data-pc-id="d2c9e921-842f-408b-8d45-36f0e64bb75c">
            {(cartLines ? cartLines.map(v => commerceItem("commerce.cartLine", v)) : SAMPLE_CARTLINES).map(item => (
              <Fragment key={item.id}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"6923eccf-c61e-40dc-9e68-f71aa4fecacf~" + item.id}>
                  <div style={{ height: '1px', background: 'var(--brand-line)', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"26eae680-3e54-4ce9-ae3f-499df55e2dd1~" + item.id} />
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', padding: '20px 0px 20px 0px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"d572d8b9-fc98-4deb-9716-9b075b63406d~" + item.id}>
                    <div style={{ width: '120px', height: '120px', background: "url('" + commerceWords(item, "image") + "') center / cover no-repeat", borderRadius: '4px', maxWidth: '100%', flexShrink: '0' }} data-pc-id={"db547b6d-7ca4-4eea-b195-5ab8cb9fed3b~" + item.id} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '0px 0px 0px 0px', flex: '1 1 0', minWidth: '0' }} data-pc-id={"69e90707-db07-4031-a6a5-92aee02c84af~" + item.id}>
                      <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"be79bcd3-e6c3-4734-a8fa-afe3fa2d9453~" + item.id}>
                        {commerceWords(item, "title")}
                      </p>
                      <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"5d26f4e0-1101-46ab-8f42-085449b42678~" + item.id}>
                        {commerceWords(item, "variant")}
                      </p>
                      <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-onpaper)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"3e247a9c-b8df-4b90-b893-2353b915986f~" + item.id}>
                        {"Qty " + commerceWords(item, "quantity")}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"3af9ad48-158b-4579-aa79-8495fe4922a1~" + item.id}>
                      <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-text)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"fd152a93-773c-413a-b8cd-9349bf92906d~" + item.id}>
                        {commerceWords(item, "price")}
                      </p>
                      <form style={{ margin: '0', position: 'relative', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0' }} data-pc-id={"841be6e6-37c1-4e41-a214-fc82a14ceae4~" + item.id} action={onRemoveCartLine}>
                        <input style={{ display: 'block', border: '0', padding: '0', margin: '0', background: 'none', outline: 'none', font: 'inherit', color: 'var(--brand-text)', minWidth: '0', position: 'absolute', left: '0px', top: '0px', width: '1px', height: 'auto', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '40px', fontWeight: '400', lineHeight: 'normal', textAlign: 'left', maxWidth: '100%' }} type="hidden" name="merchandiseId" defaultValue={commerceWords(item, "merchandise_id")} aria-label="merchandiseId" data-pc-id={"4bb7f42c-12d6-49fb-ad82-f4596c90b720~" + item.id} />
                        <button style={{ display: 'block', border: '0', padding: '0', background: 'none', font: 'inherit', color: 'var(--brand-onpaper)', textAlign: 'left', cursor: 'pointer', position: 'relative', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} type="submit" data-pc-id={"3ef484b4-824b-4db1-8396-04b8f86d9e1b~" + item.id}>
                          {'Remove'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="4398ceb0-7ce0-4bc5-a367-175e3d873e2a">
            {(cart ? [commerceItem("commerce.cart", cart)] : SAMPLE_CART).slice(0, 1).map(item => (
              <Fragment key={item.id}>
                <div style={{ background: 'var(--brand-card)', borderRadius: '4px', border: '1px solid var(--brand-line)', display: 'flex', flexDirection: 'column', gap: '14px', padding: '28px 28px 28px 28px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"3b7b26cd-2bde-43a0-8895-185de5b416e5~" + item.id}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"8a97f7d2-ef19-413a-a0e8-970ab798259f~" + item.id}>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-cardmuted)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"ad01dcb9-825b-4a5c-9fde-8e07a9de5886~" + item.id}>
                      {'Subtotal'}
                    </p>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'right', color: 'var(--brand-oncard)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"a5f99f29-b639-40c8-ac21-cc6e05f6b1ee~" + item.id}>
                      {commerceWords(item, "subtotal")}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"318a8ac1-6181-4411-ae2f-ae7ba5d0077a~" + item.id}>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-cardmuted)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"1181c4a7-c64e-46dd-a454-aed0da28d610~" + item.id}>
                      {'Taxes'}
                    </p>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'right', color: 'var(--brand-oncard)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"c185dd0b-e3e6-491e-a5ea-084af2e07443~" + item.id}>
                      {commerceWords(item, "taxes")}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"0773f6c5-6640-4536-a81c-504cee78ab57~" + item.id}>
                    <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-oncard)', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"494de58e-fe4b-4ee3-bbd6-49a045ab374a~" + item.id}>
                      {'Total'}
                    </p>
                    <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: '600', lineHeight: '24px', textAlign: 'right', color: 'var(--brand-oncard)', flex: '1 1 0', minWidth: '0', alignSelf: 'flex-start', maxWidth: '100%' }} data-pc-id={"742c001d-1c9a-459b-b051-66c53771c762~" + item.id}>
                      {commerceWords(item, "total")}
                    </p>
                  </div>
                  <form style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id={"f46fa7bb-064b-463a-9b3c-ba66ad56a5ea~" + item.id} action={onCheckout}>
                    <button style={{ display: 'flex', border: '0', padding: '15px 26px 15px 26px', background: 'var(--brand-primary)', font: 'inherit', color: 'inherit', textAlign: 'inherit', cursor: 'pointer', borderRadius: '4px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} type="submit" data-pc-id={"eb2d55a6-b1a8-4549-a20b-90b0c00d2d05~" + item.id}>
                      <p style={{ margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: '600', lineHeight: '24px', textAlign: 'left', color: 'var(--brand-onprimary)', flexShrink: '0', width: 'fit-content', maxWidth: '100%' }} data-pc-id={"57625752-ce28-4c42-bd79-ed737cf617ce~" + item.id}>
                        {'Check out'}
                      </p>
                    </button>
                  </form>
                  <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-cardmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id={"78104931-9c42-4c7d-ba5c-11f88db2d717~" + item.id}>
                    {'Free UK delivery over £75 · dispatched in 1–2 working days'}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: 'var(--brand-tint)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '48px', padding: '56px 72px 56px 72px', boxSizing: 'border-box', flexShrink: '0', alignSelf: 'stretch' }} data-pc-id="befb2454-57d3-4ca6-9aad-fa9a937dfb91">
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '0px 0px 0px 0px', maxWidth: '100%', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="1bd84ad4-c174-4385-b5d8-194405476678">
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '22px', fontWeight: '800', lineHeight: '28px', letterSpacing: '-0.6px', textAlign: 'left', color: 'var(--brand-ontint)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="b8ca32bd-7065-46be-9cb1-7b56e6613174">
            {'Fieldwork'}
          </p>
          <p style={{ margin: '0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', color: 'var(--brand-tintmuted)', flexShrink: '0', alignSelf: 'stretch', maxWidth: '100%' }} data-pc-id="ed9b2b52-4c2d-456f-96eb-ded85e852b56">
            {'© 2026 Fieldwork. Prices include VAT; delivery calculated at checkout.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '0px 0px 0px 0px', flexShrink: '0', alignSelf: 'flex-start' }} data-pc-id="e7fa26bf-15c6-4607-be5b-e9f37439f128">
          {(menu ? menu.map(v => commerceItem("commerce.menu", v)) : SAMPLE_MENU).map(item => (
            <Fragment key={item.id}>
              <a style={{ display: 'block', color: 'var(--brand-ontint)', textDecoration: 'none', margin: '0', whiteSpace: 'pre-wrap', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: '500', lineHeight: '20px', textAlign: 'left', cursor: 'pointer', flexShrink: '0', alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }} href={commerceWords(item, "url")} data-pc-id={"6b4f7aea-96f9-422c-ad72-ed20e39af0ce~" + item.id}>
                {commerceWords(item, "title")}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
