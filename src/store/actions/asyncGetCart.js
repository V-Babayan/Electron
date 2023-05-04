import { getCart } from "api";
import { setCart } from "../cartSlice";

export const asyncGetCart = () => (dispatch) => {
  getCart().then((data) => dispatch(setCart(data)));
};
