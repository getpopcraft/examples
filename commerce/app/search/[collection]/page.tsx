import { search } from "app/actions";
import { SearchPage } from "components/popcraft";
import { defaultSort, sorting } from "lib/constants";
import { storeFrame } from "lib/popcraft";
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
  const [products, frame] = await Promise.all([
    getCollectionProducts({ collection: params.collection, sortKey, reverse }),
    storeFrame(),
  ]);
  return <SearchPage products={products} onSearch={search} {...frame} />;
}
