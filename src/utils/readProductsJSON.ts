import { ProductInfo } from "@/types/product";
import fs from "fs";
import path from "path";

export function readProductsJSON(): ProductInfo[] {
  const filePath = path.join(process.cwd(), "assets", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
}
