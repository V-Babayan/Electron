import { createSelector } from "@reduxjs/toolkit";
import { getCategoriesByProducts } from "../helpers";

export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.cart.cart;

export const selectCategories = createSelector(selectProducts, (products) =>
  getCategoriesByProducts(products)
);

export const selectRelatedProducts = createSelector(selectProducts, (products) => {
  if (products.length) {
    return [...products].sort((a, b) => b.rating - a.rating);
  }

  return products;
});
