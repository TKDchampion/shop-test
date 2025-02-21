"use client";
import { FC, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeaderSwiper: FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <main className="bg-black w-full">
      <div className="relative max-w-[416px] h-12 flex text-white m-auto items-center">
        <div
          className="cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft size={24} />
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="h-full text-center leading-[48px]"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <span>Free shipping on orders over $200</span>
          </SwiperSlide>

          <SwiperSlide>
            <span>Planet friendly packaging - always!</span>
          </SwiperSlide>
        </Swiper>
        <div
          className="cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight size={24} />
        </div>
      </div>
    </main>
  );
};

export default HeaderSwiper;
