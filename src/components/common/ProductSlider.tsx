"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FC, useState } from "react";
import Image from "next/image";
import { ProductCardInfo, ProductInfo } from "./model";

interface Props {
  productList: ProductInfo[];
}

const ProductSlider: FC<Props> = ({ productList }) => {
  const [products, setProducts] = useState<ProductCardInfo[]>(productList);

  const onActiveIndex = (productIndex: number, colorIndex: number) => {
    const newProductList = products.map((product, index) => {
      return {
        ...product,
        activeIndex: index === productIndex ? colorIndex : product.activeIndex,
      };
    });
    setProducts(newProductList);
  };

  return (
    <div className="w-full p-5">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
        className="w-full"
        style={{ paddingBottom: 32 }}
      >
        {products.map((product, productIndex) => (
          <SwiperSlide key={productIndex} className="w-full">
            <div className="relative w-full aspect-[16/9]">
              <Image
                // src={`/images/${product.image}`}
                src={`https://picsum.photos/1920/1080?random=${productIndex}`}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div className="flex justify-start mt-1">
              {product.color.map((color, colorIndex) => (
                <button
                  key={colorIndex}
                  onClick={() => onActiveIndex(productIndex, colorIndex)}
                  className="w-5 h-5 flex items-center justify-center border-2 rounded-full transition"
                  style={{
                    borderColor:
                      product.activeIndex === colorIndex
                        ? color
                        : "transparent",
                  }}
                >
                  <span
                    className="w-3 h-3 rounded-full transition"
                    style={{ backgroundColor: color }}
                  />
                </button>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
