import { Product } from "~/store/types";
import { RequestMetonds, makeRequest } from "../makeRequest";

const getProducts = () => {
  return makeRequest<Product[]>({
    url: "products/",
    method: RequestMetonds.GET,
  });
};

const getProduct = (id: number) => {
  return makeRequest({ url: `products/${id}`, method: RequestMetonds.GET });
};

export { getProducts, getProduct };
