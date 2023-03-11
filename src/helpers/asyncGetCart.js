import { getCart } from "../http";
import { setCart } from "../redux/cartClicer";

export const asyncGetCart = () => (dispatch) => {
  getCart().then((data) => dispatch(setCart(data)));
};
