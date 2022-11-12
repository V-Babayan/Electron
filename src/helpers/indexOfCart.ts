import { CartProduct } from "~/store/types";

export const indexOfCart = (cart: CartProduct[], id: string): number | null => {
  for (let [index, element] of cart.entries()) {
    if (element.product.id === id) return index;
  }

  return null;
};
