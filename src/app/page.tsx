import Banner from "@/components/home/Banner";
import Collections from "@/components/home/Collections";
import { getAllCollectionsByLimitApi } from "@/services/collection";
import { Suspense } from "react";

export default async function Home() {
  const collections = await getAllCollectionsByLimitApi(3);

  return (
    <div className="w-full bg-white">
      <Banner />
      <Collections collections={collections} />
    </div>
  );
}
