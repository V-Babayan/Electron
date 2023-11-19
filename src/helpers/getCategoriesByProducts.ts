import { Product } from "~/store";

export const getCategoriesByProducts = (products: Product[]) => {
  const categories = new Set<string>();

  for (const item of products) categories.add(item.category);

  return [...categories];
};
