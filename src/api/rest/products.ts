import { Product } from "~/store/types";

import { makeRequest, RequestMethods } from "../makeRequest";

const getProducts = async () => {
  return await makeRequest<Product[]>({
    url: "products/",
    method: RequestMethods.GET,
  });
};

const getProduct = async (id: number) => {
  return await makeRequest<Product>({
    url: `products/${id}`,
    method: RequestMethods.GET,
  });
};

export { getProduct, getProducts };
