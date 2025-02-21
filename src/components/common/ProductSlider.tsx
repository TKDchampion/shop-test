"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FC, useEffect, useRef, useState } from "react";
import { ProductCardInfo } from "./model";
import { ProductInfo } from "@/types/product";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Product from "./Product";

interface Props {
  productList: ProductInfo[];
}

const ProductSlider: FC<Props> = ({ productList }) => {
  const [products, setProducts] = useState<ProductCardInfo[]>([]);
  const swiperRef = useRef<SwiperClass | null>(null);

  const onActiveIndex = (productIndex: number, colorIndex: number) => {
    const newProductList = products.map((product, index) => {
      return {
        ...product,
        activeIndex: index === productIndex ? colorIndex : product.activeIndex,
      };
    });
    setProducts(newProductList);
  };

  useEffect(() => {
    if (productList?.length > 0) {
      setProducts(productList);
    }
  }, [productList]);

  return (
    <div className="w-full p-5">
      <div className="relative flex items-center">
        <div
          className="cursor-pointer absolute h-10 w-10 z-10 bg-white/70 shadow-lg left-[-15px] transform -translate-y-1/2"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft size={32} className="mt-1 ml-1" />
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, type: "fraction" }}
          spaceBetween={40}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
          className="w-full text-black"
          style={{ paddingBottom: 32 }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {products.map((product, productIndex) => (
            <SwiperSlide key={productIndex} className="w-full">
              <Product
                product={product}
                handleClick={(colorIndex: number) =>
                  onActiveIndex(productIndex, colorIndex)
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="cursor-pointer absolute h-10 w-10 z-10 bg-white/70 shadow-lg right-[-15px] transform -translate-y-1/2"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight size={32} className="mt-1 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
