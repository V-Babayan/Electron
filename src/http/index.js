import { setCart } from "../redux/cartClicer";
import { setProducts } from "../redux/productsClicer";
import { BASE_URL } from "../helpers/consts";

export const fetchDevices = () => (dispatch) => {
  fetch(`${BASE_URL}products`)
    .then((res) => res.json())
    .then((json) => dispatch(setProducts(json)));
};

export const fetchDevice = (id) => fetch(`${BASE_URL}products/${id}`).then((res) => res.json());

export const fetchCart = () => {
  return (dispatch) => {
    fetch(`${BASE_URL}cart`)
      .then((res) => res.json())
      .then((json) => dispatch(setCart(json)));
  };
};

export const deleteCartItem = async (deleteId) =>
  await fetch(`${BASE_URL}cart/${deleteId}`, {
    method: "DELETE",
  });

export const addItemToCart = (item) =>
  fetch(`${BASE_URL}cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(item),
  });
