"use client";
import { FC, useEffect, useState } from "react";
import ProductSlider from "../common/ProductSlider";
import { CollectionResponse } from "@/types/product";

interface Props {
  collections: CollectionResponse[];
}

const Collections: FC<Props> = ({ collections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [tabList, setTabList] = useState<CollectionResponse[]>([]);

  const onChangeTab = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (collections?.length > 0) {
      setTabList(collections);
    }
  }, [collections]);

  return (
    <div className="pt-16 pb-8">
      <div className="w-[390px] m-auto text-center">
        <h2 className="text-black">Collections</h2>
        <div className="border-b-2 border-primary w-9 h-1 m-auto mt-2" />
      </div>
      <div className="text-center mt-3">
        {tabList.map((tab, index) => {
          return (
            <button
              key={index}
              role="tab"
              className={`mx-2 ${
                activeIndex === index
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600"
              } hover:text-black hover:border-b-2 hover:border-black`}
              onClick={() => onChangeTab(index)}
            >
              {tab.collection}
            </button>
          );
        })}
      </div>
      <ProductSlider productList={tabList[activeIndex]?.products} />
    </div>
  );
};

export default Collections;
