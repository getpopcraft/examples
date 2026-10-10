import { CategoryPage } from "components/popcraft";
import { defaultSort, sorting } from "lib/constants";
import { storeCategories, storeFrame } from "lib/popcraft";
import { getCollection, getCollectionProducts } from "lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);
  if (!collection) return notFound();
  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

export default async function Category(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const [collection, products, categories, frame] = await Promise.all([
    getCollection(params.collection),
    getCollectionProducts({ collection: params.collection, sortKey, reverse }),
    storeCategories(),
    storeFrame(),
  ]);
  if (!collection) return notFound();
  return (
    <CategoryPage
      collection={collection}
      products={products}
      categories={categories}
      {...frame}
    />
  );
}
