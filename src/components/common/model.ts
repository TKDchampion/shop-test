import { ProductInfo } from "@/app/api/model";

export type CollectionsInfo = ProductInfo[];

export interface ProductCardInfo extends ProductInfo {
  activeIndex?: number;
}
