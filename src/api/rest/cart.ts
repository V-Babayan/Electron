import { CartProduct, Product } from "~/store/types";
import { RequestMetonds, makeRequest } from "../makeRequest";

const getCart = () => {
  return makeRequest({ url: "cart/", method: RequestMetonds.GET });
};

const addProductToCart = (item: CartProduct) => {
  return makeRequest({
    url: "cart",
    method: RequestMetonds.POST,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
};

const changeCountInCart = (id: number, product: Product, count: number) => {
  return makeRequest({
    url: `cart/${id}`,
    method: RequestMetonds.PUT,
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ product, count }),
  });
};

const deleteCartItem = async (deleteId: number) => {
  return await makeRequest({
    url: `cart/${deleteId}`,
    method: RequestMetonds.DELETE,
  });
};

const deleteAllCartItems = async (cart: CartProduct[]) => {
  const response = [];

  for (let elem of cart) {
    response.push(await deleteCartItem(elem.id));
  }
  return response;
};

export {
  getCart,
  addProductToCart,
  changeCountInCart,
  deleteCartItem,
  deleteAllCartItems,
};
