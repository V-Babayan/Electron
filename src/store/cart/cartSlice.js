import { createSlice } from "@reduxjs/toolkit";
// import { indexOfCart } from "helpers";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { cart: [] },
  reducers: {
    emptyCart(state) {
      state.cart = [];
    },

    deleteElement(state, action) {
      state.cart = state.cart.filter((elem) => elem.id !== action.payload);
    },

    addProduct({ cart }, { payload }) {
      // const index = indexOfCart(cart, payload.product.id);

      // if (typeof index === "number") cart[index].count += payload.quanity;
      // else cart.push({ product: payload.product, count: payload.quanity, id: cart.length + 1 });

      let haveInCart = false;

      cart.forEach((cartItem) => {
        if (cartItem.product.id === payload.product.id) {
          cartItem.count += payload.quanity;
          haveInCart = true;
        }
      });

      if (!haveInCart)
        cart.push({
          product: payload.product,
          count: payload.quanity,
          id: cart.length + 1,
        });
    },
  },
});

export const {
  reducer: cartReducer,
  actions: { emptyCart, deleteElement, addProduct },
} = cartSlice;
