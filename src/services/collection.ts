import BaseServices from "@/core/base-services";
import { ApiConfig } from "@/core/base-services/model";
import { CollectionResponse } from "@/types/product";

const baseServices = new BaseServices();

export const getAllCollectionsApi = (): Promise<CollectionResponse[]> => {
  const config: ApiConfig = {
    url: "collections",
  };

  return baseServices.get(config);
};

export const getAllCollectionsByLimitApi = (
  limit: number
): Promise<CollectionResponse[]> => {
  const config: ApiConfig = {
    url: `collections?limit=${limit}`,
    renderType: "SSR",
  };

  return baseServices.get(config);
};
