"use client";
import Image from "next/image";
import { FC } from "react";
import { ProductCardInfo } from "./model";
import { useRouter } from "next/navigation";

interface Props {
  product: ProductCardInfo;
  handleClick?: (index: number) => void;
}

const Product: FC<Props> = ({ product, handleClick }) => {
  const route = useRouter();

  return (
    <div
      className="w-full text-black cursor-pointer"
      onClick={() => route.push(`/product/${product.name}`)}
    >
      <div className="relative w-full aspect-[1/1] group transition-transform duration-300 hover:scale-95">
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
            onClick={() => handleClick && handleClick(colorIndex)}
            className="w-5 h-5 flex items-center justify-center border-2 rounded-full transition"
            style={{
              borderColor:
                product.activeIndex === colorIndex ? color : "transparent",
            }}
          >
            <span
              className="w-3 h-3 rounded-full transition"
              style={{ backgroundColor: color }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
