import { createSelector } from "@reduxjs/toolkit";
import { getCategoriesByProducts } from "helpers";

const selectProducts = (state) => state.products.products;
const selectCart = (state) => state.cart.cart;
const selectCartQuanity = (state) => state.cart.quanity;
const selectCartTotalAmount = (state) => state.cart.totalAmount;

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
