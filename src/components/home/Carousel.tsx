"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselText } from "./model";

const Carousel: FC = () => {
  return (
    <div className="p-8">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="w-full"
      >
        {CarouselText.map((CarouselItem, CarouselIndex) => (
          <SwiperSlide key={CarouselIndex} className="w-full mb-8">
            <div className="max-w-[600px] text-center m-auto">
              <div className="flex justify-center my-3">
                {CarouselItem.icon}
              </div>
              <h2 className="font-normal">{CarouselItem.title}</h2>
              <p className="mt-4 text-base">{CarouselItem.subTitle}</p>
              <span className="text-sm opacity-60">{CarouselItem.tag}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
