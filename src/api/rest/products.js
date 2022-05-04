import { makeRequest } from "../makeRequest";

const getProducts = () => {
  return makeRequest({ url: "products/", method: "GET" });
};

const getProduct = (id) => {
  return makeRequest({ url: `products/${id}`, method: "GET" });
};

export { getProducts, getProduct };
