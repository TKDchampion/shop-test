import Banner from "@/components/home/Banner";
import Collections from "@/components/home/Collections";
import Surving from "@/components/home/Surving";
import { getAllCollectionsByLimitApi } from "@/services/collection";

export default async function Home() {
  const collections = await getAllCollectionsByLimitApi(3);

  return (
    <div className="w-full bg-white">
      <Banner />
      <Collections collections={collections} />
      <Surving />
    </div>
  );
}
