import { makeRequest } from "../makeRequest";

export const getProducts = () => {
  return makeRequest({ url: "products/", method: "GET" });
};

export const getProduct = (id) => {
  return makeRequest({ url: `products/${id}`, method: "GET" });
};
