"use client";
import { FC, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../common/Button";
import clsx from "clsx";
import { Bannerlist } from "./model";

const Banner: FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Bannerlist.map((bannerItem, bannerIndex) => (
          <SwiperSlide key={bannerIndex} className="w-full">
            <div
              className={`relative w-full min-h-[calc(100vh-48px)] flex items-center ${bannerItem.position}`}
            >
              <Image
                src={bannerItem.img}
                alt="Random Fullscreen Image"
                layout="fill"
                objectFit="cover"
                priority
                className="z-0"
              />

              <div
                className={`absolute z-10 text-white ${bannerItem.textAlign} mx-8`}
              >
                <h2 className="text-xl font-bold text-white animate-fadeIn animate-delay-0">
                  {bannerItem.title}
                </h2>
                <div
                  className={clsx(
                    "border-b-2 border-primary w-9 h-1 mt-2 animate-fadeIn animate-delay-600",
                    {
                      "m-auto": bannerItem.textAlign === "text-center",
                      "ml-auto": bannerItem.textAlign === "text-right",
                    }
                  )}
                />
                <p className="mt-4 w-[400px] animate-fadeIn animate-delay-200">
                  {bannerItem.subTitle}
                </p>

                <div
                  className={`flex mt-4 ${bannerItem.position} animate-fadeIn animate-delay-400`}
                >
                  <Button
                    text="Shop all"
                    color="bg-transparent"
                    className="border border-white w-[120px] h-12 text-base"
                  />
                  <Button
                    text="Shop now"
                    className="ml-2 w-[120px] h-12 text-base"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute flex items-center right-4 bottom-4 text-white">
        <div
          className="cursor-pointer h-10 w-10 z-10 bg-primary shadow-lg"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft size={20} className="mt-[10px] ml-[10px]" />
        </div>
        <div
          className="cursor-pointer h-10 w-10 z-10 bg-primary shadow-lg ml-1"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight size={20} className="mt-[10px] ml-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
