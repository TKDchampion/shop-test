export interface ProductInfo {
  name: string;
  price: number;
  color: string[];
  size: string[];
  image: string;
  collection: string;
}

export type CollectionsInfo = ProductInfo[];

export interface ProductCardInfo extends ProductInfo {
  activeIndex?: number;
}
