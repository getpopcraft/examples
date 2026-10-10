"use server";

// The design's storefront forms (add to cart, remove, checkout, search) as server actions. Each takes the form's own
// fields — the names the design gave them — and calls Next.js Commerce's cart actions.
import {
  addItem,
  createCartAndSetCookie,
  redirectToCheckout,
  removeItem,
  updateItemQuantity,
} from "components/cart/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const field = (form: FormData, name: string) => String(form.get(name) ?? "");

export async function addToCart(form: FormData) {
  if (!(await cookies()).get("cartId")) await createCartAndSetCookie();
  await addItem(null, field(form, "merchandiseId"));
}

export async function removeCartLine(form: FormData) {
  await removeItem(null, field(form, "merchandiseId"));
}

export async function updateCartLine(form: FormData) {
  await updateItemQuantity(null, {
    merchandiseId: field(form, "merchandiseId"),
    quantity: Number(field(form, "quantity")),
  });
}

export async function checkout() {
  await redirectToCheckout();
}

export async function search(form: FormData) {
  const q = field(form, "q").trim();
  redirect(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
}
