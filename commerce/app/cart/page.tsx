import { checkout, removeCartLine } from "app/actions";
import { CartPage } from "components/popcraft";
import { storeFrame } from "lib/popcraft";

export const metadata = { title: "Your cart" };

export default async function Cart() {
  const frame = await storeFrame();
  return (
    <CartPage
      cartLines={frame.cart.lines}
      onRemoveCartLine={removeCartLine}
      onCheckout={checkout}
      {...frame}
    />
  );
}
