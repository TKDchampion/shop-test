import CollectionScroll from "@/components/collections/CollectionScroll";
import Product from "@/components/common/Product";
import { getAllCollectionsApi } from "@/services/collection";

type Props = {
  params: {
    category: string;
  };
};

export default async function Collections({ params }: Props) {
  const category = decodeURIComponent(params.category);
  const collections = await getAllCollectionsApi();
  const categoryIndex = collections.findIndex(
    (collectionItem) => collectionItem.collection === category
  );

  return (
    <div className="w-full bg-white py-32">
      <div className="w-[390px] m-auto text-center mb-24">
        <h2 className="text-black">{category}</h2>
        <div className="border-b-2 border-primary w-9 h-1 m-auto mt-2" />
      </div>
      <CollectionScroll collections={collections} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-24">
        {collections[categoryIndex]?.products.map((product, index) => (
          <a
            key={index}
            href={`/product/${encodeURIComponent(product.name)}`}
            className="relative group cursor-pointer overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          >
            <Product product={product} />
          </a>
        ))}
      </div>
    </div>
  );
}
