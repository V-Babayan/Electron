import { getProducts } from "api";
import { setProducts } from "../productsSlice";

export const asyncGetProducts = () => (dispatch) => {
  getProducts().then((data) => dispatch(setProducts(data)));
};
