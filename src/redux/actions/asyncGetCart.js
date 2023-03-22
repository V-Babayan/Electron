import { getCart } from "../../http";
import { setCart } from "../cartSlice";

export const asyncGetCart = () => (dispatch) => {
  getCart().then((data) => dispatch(setCart(data)));
};
