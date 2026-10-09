// What every page hands its PopCraft component: the visitor's cart and the store's menu. A component given nothing
// for a list draws the design's sample records, so an empty cart is passed as one, never left out.
import { getCart, getCollections, getMenu } from "lib/shopify";
import type { Cart } from "lib/shopify/types";

export const EMPTY_CART: Cart = {
  id: undefined,
  checkoutUrl: "",
  totalQuantity: 0,
  lines: [],
  cost: {
    subtotalAmount: { amount: "0", currencyCode: "USD" },
    totalAmount: { amount: "0", currencyCode: "USD" },
    totalTaxAmount: { amount: "0", currencyCode: "USD" },
  },
};

export async function storeFrame() {
  const [cart, menu] = await Promise.all([
    getCart(),
    getMenu("next-js-frontend-footer-menu"),
  ]);
  return { cart: cart ?? EMPTY_CART, menu };
}

/** The store's categories, as the search and category pages list them ("All" is Next.js Commerce's own, left out). */
export async function storeCategories() {
  return (await getCollections()).filter((c) => c.handle !== "");
}
