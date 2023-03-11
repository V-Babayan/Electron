import { makeRequest } from "../makeRequest";

export const getCart = () => {
  return makeRequest({ url: "cart/", method: "GET" });
};

export const addProductToCart = (item) => {
  return makeRequest({
    url: "cart",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
};

export const changeCountInCart = (id, product, count) => {
  return makeRequest({
    url: `cart/${id}`,
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ product, count }),
  });
};

export const deleteCartItem = async (deleteId) => {
  return await makeRequest({ url: `cart/${deleteId}`, method: "DELETE" });
};
