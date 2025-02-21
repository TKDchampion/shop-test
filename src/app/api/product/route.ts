import { NextResponse } from "next/server";
import { readProductsJSON } from "@/utils/readProductsJSON";
import { ProductInfo } from "@/types/product";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const productName = searchParams.get("name");

    if (!productName) {
      return NextResponse.json(
        { error: "Missing product name" },
        { status: 400 }
      );
    }

    const products: ProductInfo[] = readProductsJSON();

    const product = products.find(
      (p) => p.name.toLowerCase() === productName.toLowerCase()
    );

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}
