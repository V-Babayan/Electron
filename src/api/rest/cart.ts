import { CartProduct, Product } from "~/store/types";

import { makeRequest, RequestMethods } from "../makeRequest";

const getCart = () => {
  return makeRequest({ url: "cart/", method: RequestMethods.GET });
};

const addProductToCart = (item: CartProduct) => {
  return makeRequest({
    url: "cart",
    method: RequestMethods.POST,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
};

const changeCountInCart = (id: number, product: Product, count: number) => {
  return makeRequest({
    url: `cart/${id}`,
    method: RequestMethods.PUT,
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ product, count }),
  });
};

const deleteCartItem = async (deleteId: number) => {
  return await makeRequest({
    url: `cart/${deleteId}`,
    method: RequestMethods.DELETE,
  });
};

const deleteAllCartItems = async (cart: CartProduct[]) => {
  const response = [];

  for (const elem of cart) {
    response.push(await deleteCartItem(elem.id));
  }
  return response;
};

export {
  addProductToCart,
  changeCountInCart,
  deleteAllCartItems,
  deleteCartItem,
  getCart,
};
