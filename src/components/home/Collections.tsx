"use client";
import { FC, useState } from "react";
import ProductSlider from "../common/ProductSlider";

const Collections: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [tabList] = useState([
    {
      name: "New season",
      active: true,
      content: [
        {
          name: "ebfhiihl",
          price: 57.71,
          color: ["#0d0fad", "#d2ec75"],
          size: ["S"],
          image: "00006-845072498.png",
          collection: "Bohemian",
        },
        {
          name: "yzcmg",
          price: 65.35,
          color: ["#efca21", "#298166"],
          size: ["L", "M", "XL"],
          image: "00195-845072687.png",
          collection: "Minimalist",
        },
        {
          name: "ngutizbwk",
          price: 36.42,
          color: ["#04a446", "#bca7dd"],
          size: ["XL", "S", "L"],
          image: "00111-845072603.png",
          collection: "Formal",
        },
        {
          name: "ohzbzg",
          price: 54.4,
          color: ["#448b8e"],
          size: ["L"],
          image: "00064-1631774947.png",
          collection: "Formal",
        },
        {
          name: "weexhel",
          price: 89.98,
          color: ["#eb7833", "#bc079a", "#4b85a4"],
          size: ["S", "XL", "M", "L"],
          image: "00445-3026690987.png",
          collection: "Formal",
        },
        {
          name: "hftnvkzuhn",
          price: 52.92,
          color: ["#f76655", "#742834", "#f98279"],
          size: ["M"],
          image: "00091-845072583.png",
          collection: "Streetwear",
        },
        {
          name: "uddhg",
          price: 63.79,
          color: ["#dfbc6f", "#cab6bf", "#3e5f67"],
          size: ["XL", "S", "L", "M"],
          image: "00427-845072919.png",
          collection: "Minimalist",
        },
        {
          name: "qpgmhcppw",
          price: 87.85,
          color: ["#59caaf", "#d4f343"],
          size: ["XL", "S"],
          image: "00113-845072605.png",
          collection: "Minimalist",
        },
        {
          name: "xidiocnebc",
          price: 54.69,
          color: ["#23edfa", "#363e57", "#27dc8d"],
          size: ["S"],
          image: "00196-845072688.png",
          collection: "Formal",
        },
      ],
    },
    {
      name: "Tees & Knits",
      active: false,
      content: [
        {
          name: "gfqvokqxg",
          price: 79.03,
          color: ["#d57d15", "#13dad0", "#98cafc"],
          size: ["XL", "L", "S", "M"],
          image: "00106-1631774989.png",
          collection: "Formal",
        },
        {
          name: "zafqec",
          price: 17.24,
          color: ["#58271f"],
          size: ["S", "XL"],
          image: "00037-1631774871.png",
          collection: "Casual",
        },
        {
          name: "qufpyfbjw",
          price: 15.72,
          color: ["#1c45f1"],
          size: ["M"],
          image: "00369-3026690911.png",
          collection: "Bohemian",
        },
        {
          name: "bnfheaasu",
          price: 50.96,
          color: ["#f16c21", "#0071f3"],
          size: ["L", "XL", "M", "S"],
          image: "00371-3026690913.png",
          collection: "Preppy",
        },
        {
          name: "cbzzqmsvio",
          price: 72.06,
          color: ["#9d62d8"],
          size: ["L", "S", "M"],
          image: "00068-1631774951.png",
          collection: "Athleisure",
        },
      ],
    },
    {
      name: "On sale",
      active: false,
      content: [
        {
          name: "kazqrujl",
          price: 12.32,
          color: ["#d303d6", "#1453ce", "#06975e"],
          size: ["M", "L", "XL", "S"],
          image: "00181-1631775064.png",
          collection: "Streetwear",
        },
        {
          name: "uuuaw",
          price: 33.12,
          color: ["#9b0409"],
          size: ["XL", "L", "S"],
          image: "00444-3026690986.png",
          collection: "Athleisure",
        },
        {
          name: "gitfflludv",
          price: 73.65,
          color: ["#744788", "#2633d7", "#e3916e"],
          size: ["M", "XL", "S", "L"],
          image: "00014-845072506.png",
          collection: "Urban",
        },
      ],
    },
  ]);

  const onChangeTab = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="pb-16">
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
              className={`mx-2 text-h2 ${
                activeIndex === index
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600"
              } hover:text-black hover:border-b-2 hover:border-black`}
              onClick={() => onChangeTab(index)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <ProductSlider productList={tabList[activeIndex].content} />
    </div>
  );
};

export default Collections;
