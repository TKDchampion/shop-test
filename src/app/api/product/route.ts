import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ProductInfo } from "../model";
import { readProductsJSON } from "@/utils/readProductsJSON";

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
  } catch (error) {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}
