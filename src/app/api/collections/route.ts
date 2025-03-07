import { NextResponse } from "next/server";
import { readProductsJSON } from "@/utils/readProductsJSON";
import { CollectionResponse, ProductInfo } from "@/types/product";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    const products: ProductInfo[] = readProductsJSON();

    const collectionsMap: Record<string, ProductInfo[]> = {};
    products.forEach((product) => {
      const { collection } = product;
      if (!collectionsMap[collection]) {
        collectionsMap[collection] = [];
      }
      collectionsMap[collection].push(product);
    });

    let result: CollectionResponse[] = Object.entries(collectionsMap).map(
      ([collection, products]) => ({
        collection,
        products,
      })
    );

    const limitNumber = limit ? parseInt(limit, 10) : null;
    result = result.map(({ collection, products }) => ({
      collection,
      products: products,
    }));

    if (limitNumber && !isNaN(limitNumber)) {
      result = result.slice(0, limitNumber);
    }

    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}
