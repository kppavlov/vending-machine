import { Product } from "../types.ts";
import { VEGETABLES } from "../constants.ts";

export const getProducts = async () => {
  const products = Array.from({ length: 15 }).map((_, i) => ({
    id: i + "",
    name: VEGETABLES[i],
    quantity: 12,
    price: !i ? 1.25 : i * 1.25,
  }));

  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
