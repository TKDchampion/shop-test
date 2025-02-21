export interface ProductInfo {
  name: string;
  price: number;
  color: string[];
  size: string[];
  image: string;
  collection: string;
}

export interface CollectionResponse {
  collection: string;
  products: ProductInfo[];
}
