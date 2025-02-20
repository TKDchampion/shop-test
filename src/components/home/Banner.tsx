import { FC, useEffect, useState } from "react";
import Image from "next/image";

const Banner: FC = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(`https://picsum.photos/1920/1080`);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black">
      {/* 背景圖片 - Next.js Image */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Random Fullscreen Image"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      )}

      {/* 內容層 - 置中顯示文字 */}
      <div className="absolute z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Site</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Enjoy the beautiful random images
        </p>
      </div>
    </div>
  );
};

export default Banner;
