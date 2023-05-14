export { emptyCart, deleteElement, addProduct } from "./cart/cartSlice";
export { fetchProducts } from "./productsSlice";

export {
  selectRelatedProducts,
  selectCategories,
  selectCart,
  selectProducts,
  selectCartQuanity,
  selectCartTotalAmount,
} from "./selectors";

export { store } from "./store";
