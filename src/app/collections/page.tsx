import { getAllCollectionsApi } from "@/services/collection";

export default async function Collections() {
  const collections = await getAllCollectionsApi();

  return (
    <div className="w-full bg-white py-32">
      <div className="w-[390px] m-auto text-center">
        <h2 className="text-black">Collections</h2>
        <div className="border-b-2 border-primary w-9 h-1 m-auto mt-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {collections.map((category, index) => (
          <a
            key={index}
            href={`/collections/${encodeURIComponent(category.collection)}`}
            className="relative group cursor-pointer overflow-hidden bg-slate-500/50 aspect-square flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg font-bold transition-opacity duration-300 group-hover:bg-black/50">
              {category.collection}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
