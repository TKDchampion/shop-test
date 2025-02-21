import Button from "@/components/common/Button";
import { getProductByNameApi } from "@/services/product";
import Image from "next/image";

type Props = {
  params: {
    name: string;
  };
};

export default async function Product({ params }: Props) {
  const name = decodeURIComponent(params.name);
  const product = await getProductByNameApi(name);

  return (
    <div className="w-full bg-white py-32">
      <div className="w-[390px] m-auto text-center">
        <h2 className="text-black">{product.name}</h2>
        <div className="border-b-2 border-primary w-9 h-1 m-auto mt-2" />
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full">
            <Image
              src={`/images/${product.image}`}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-start">
            <div className="w-full">
              <p className="text-gray-500">Iron & Resin</p>
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <div className="border-b-2 border-primary w-9 h-1 mt-1 mb-4" />
              <p className="text-xl text-black">${product.price}</p>
              <p className="text-gray-500 text-sm italic">Tax included</p>
              <div className="mt-6">
                <p className="text-black font-semibold">Color:</p>
                <div className="flex gap-2 mt-1">
                  {product.color.map((color, index) => (
                    <span
                      key={index}
                      className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <p className="flex items-center text-red-600 text-sm mt-6">
                <div className="relative flex items-center justify-center mr-2 ml-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <div className="absolute w-3 h-3 border border-red-600 rounded-full animate-pulse-border"></div>
                </div>
                Only 3 in stock
              </p>

              <div className="mt-6 space-y-1">
                <p className="flex items-center text-sm text-black">
                  🚚 Spend <span className="font-bold ml-1">$100</span>&nbsp; to
                  get free shipping
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-black rounded-full"
                    style={{
                      width: `${Math.min((product.price / 100) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button text="Add to cart" outline className="mb-4" />
              <Button text="Buy it now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
