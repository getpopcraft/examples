import { HomePage } from "components/popcraft";
import { getProducts } from "lib/shopify";
import { storeFrame } from "lib/popcraft";

export const metadata = {
  description: "Workwear cut for work and worn for years.",
  openGraph: {
    type: "website",
  },
};

export default async function Home() {
  const [products, frame] = await Promise.all([
    getProducts({ sortKey: "CREATED_AT", reverse: true }),
    storeFrame(),
  ]);
  return <HomePage products={products} {...frame} />;
}
