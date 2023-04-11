import { getProducts } from "http";
import { setProducts } from "../productsSlice";

export const asyncGetProducts = () => (dispatch) => {
  getProducts().then((data) => dispatch(setProducts(data)));
};
