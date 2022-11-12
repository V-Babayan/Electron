import { getProducts } from "~/api";
import { setProducts } from "../productsSlice";
import type { AppDispatch } from "../hooks";

export const asyncGetProducts = () => (dispatch: AppDispatch) => {
  getProducts().then((data) => dispatch(setProducts(data)));
};
