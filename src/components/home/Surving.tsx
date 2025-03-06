"use client";
import { FC } from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

const Surving: FC = () => {
  return (
    <div className="relative w-full h-[200px] min-[440px]:h-[300px] overflow-hidden">
      <div className="relative mx-4 h-full p-6 sm:p-12">
        <Image
          src="/surving.jpg"
          layout="fill"
          objectFit="cover"
          alt="surving"
        />
        <div className="absolute">
          <h2 className="text-white text-3xl w-full min-[440px]:text-5xl min-[440px]:max-w-[600px]">
            Get ready! Our biggest sale ever starts in...
          </h2>
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Surving;
