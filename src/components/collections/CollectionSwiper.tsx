"use client";
import { CollectionResponse } from "@/types/product";
import { FC } from "react";

interface Props {
  collections: CollectionResponse[];
}

const CollectionScroll: FC<Props> = ({ collections }) => {
  return (
    <div className="relative w-full max-w-screen-lg mx-auto p-4">
      <div className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4">
        {collections.map((category, index) => (
          <a
            key={index}
            href={`/collections/${encodeURIComponent(category.collection)}`}
            className="flex flex-col items-center cursor-pointer flex-shrink-0 w-[154px]"
          >
            <div className="relative bg-gray-300 aspect-square w-full overflow-hidden"></div>

            <div className="mt-2 text-center text-black group">
              <span className="relative group-hover:after:w-full after:w-0 after:h-[2px] after:bg-black after:block after:transition-all after:duration-300 after:mx-auto">
                {category.collection}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CollectionScroll;
