import { search } from "app/actions";
import { SearchPage } from "components/popcraft";
import { defaultSort, sorting } from "lib/constants";
import { storeCategories, storeFrame } from "lib/popcraft";
import { getProducts } from "lib/shopify";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function Search(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: query } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const [products, categories, frame] = await Promise.all([
    getProducts({ sortKey, reverse, query }),
    storeCategories(),
    storeFrame(),
  ]);
  return (
    <SearchPage
      products={products}
      categories={categories}
      onSearch={search}
      {...frame}
    />
  );
}
