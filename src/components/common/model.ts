import { ProductInfo } from "@/types/product";

export type CollectionsInfo = ProductInfo[];

export interface ProductCardInfo extends ProductInfo {
  activeIndex?: number;
}
