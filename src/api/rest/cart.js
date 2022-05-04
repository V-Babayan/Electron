import { makeRequest } from "../makeRequest";

const getCart = () => {
  return makeRequest({ url: "cart/", method: "GET" });
};

const addProductToCart = (item) => {
  return makeRequest({
    url: "cart",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
};

const changeCountInCart = (id, product, count) => {
  return makeRequest({
    url: `cart/${id}`,
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ product, count }),
  });
};

const deleteCartItem = async (deleteId) => {
  return await makeRequest({ url: `cart/${deleteId}`, method: "DELETE" });
};

const deleteAllCartItems = async (cart) => {
  for (let elem of cart) {
    await deleteCartItem(elem.id);
  }
};

export { getCart, addProductToCart, changeCountInCart, deleteCartItem, deleteAllCartItems };
