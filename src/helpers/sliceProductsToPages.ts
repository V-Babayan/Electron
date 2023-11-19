import { Product } from "~/store";

type ResProductsType = {
  id: number;
  products: Product[];
};

type SliceProductsToPagesType = (
  products: Product[],
  onePageCount: number
) => ResProductsType[];

export const sliceProductsToPages: SliceProductsToPagesType = (
  products,
  onePageCount
) => {
  const resProducts: ResProductsType[] = [];

  for (let i = 0; i < 3; i++)
    resProducts.push({
      id: i,
      products: products.slice(
        i * onePageCount + 4,
        (i + 1) * onePageCount + 4
      ),
    });

  return resProducts;
};
