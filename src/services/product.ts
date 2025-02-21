import BaseServices from "@/core/base-services";
import { ApiConfig } from "@/core/base-services/model";
import { ProductInfo } from "@/types/product";

const baseServices = new BaseServices();

export const getProductByNameApi = (name: string): Promise<ProductInfo> => {
  const config: ApiConfig = {
    url: `product?name=${name}`,
    renderType: "SSR",
  };

  return baseServices.get(config);
};
