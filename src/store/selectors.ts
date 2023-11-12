import { createSelector } from "@reduxjs/toolkit";
import { getCategoriesByProducts } from "~/helpers";
import { RootState } from "./store";

const selectProducts = (state: RootState) => state.products.products;
const selectCart = (state: RootState) => state.cart.cart;
const selectCartQuanity = (state: RootState) => state.cart.quanity;
const selectCartTotalAmount = (state: RootState) => state.cart.totalAmount;

const selectCategories = createSelector(selectProducts, (products) =>
  getCategoriesByProducts(products)
);

const selectRelatedProducts = createSelector(selectProducts, (products) => {
  if (products.length) {
    return [...products].sort((a, b) => b.rating - a.rating);
  }

  return products;
});

export {
  selectRelatedProducts,
  selectCategories,
  selectCart,
  selectProducts,
  selectCartQuanity,
  selectCartTotalAmount,
};