import { CollectionResponse } from "@/app/api/model";
import BaseServices from "@/core/base-services";
import { ApiConfig } from "@/core/base-services/model";

const baseServices = new BaseServices();

export const getAllCollectionsApi = (): Promise<CollectionResponse> => {
  const config: ApiConfig = {
    url: "collections",
  };

  return baseServices.get(config);
};

export const getAllCollectionsByLimitApi = (
  limit: number
): Promise<CollectionResponse> => {
  const config: ApiConfig = {
    url: `collections?limit=${limit}`,
  };

  return baseServices.get(config);
};
