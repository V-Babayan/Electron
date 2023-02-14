import { setCart } from "../redux/cartClicer";
import { setProducts } from "../redux/productsClicer";

export const fetchDevices = () => async (dispatch) => {
  const res = await fetch("https://63d254dc1780fd6ab9c1f850.mockapi.io/products");
  const json = await res.json();
  dispatch(setProducts(json));
};

export const fetchDevice = async (id) =>
  await fetch(`https://63d254dc1780fd6ab9c1f850.mockapi.io/products/${id}`).then((res) =>
    res.json()
  );

export const fetchCart = () => {
  return async (dispatch) => {
    const res = await fetch("https://63d254dc1780fd6ab9c1f850.mockapi.io/cart");
    const json = await res.json();
    dispatch(setCart(json));
  };
};

export const deleteCartItem = (deleteId) =>
  fetch(`https://63d254dc1780fd6ab9c1f850.mockapi.io/cart/${deleteId}`, {
    method: "DELETE",
  });

export const addItemToCart = async (item, count) =>
  await fetch("https://63d254dc1780fd6ab9c1f850.mockapi.io/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ product: item, count }),
  });
