import { getProducts } from "../http";
import { setProducts } from "../redux/productsClicer";

export const asyncGetProducts = () => (dispatch) => {
  getProducts().then((data) => dispatch(setProducts(data)));
};
