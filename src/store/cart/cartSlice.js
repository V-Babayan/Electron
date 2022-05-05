import { createSlice } from "@reduxjs/toolkit";
import { indexOfCart } from "helpers";

const initialState = { cart: [], quanity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    emptyCart(state) {
      state.cart = initialState.cart;
      state.quanity = initialState.quanity;
      state.totalAmount = initialState.totalAmount;
    },

    deleteElement(state, { payload }) {
      state.cart = state.cart.filter(({ id, count, product }) => {
        if (id !== payload) {
          return true;
        }

        state.quanity -= count;
        state.totalAmount -= product.price * count;
        return false;
      });
    },

    addProduct(state, { payload }) {
      const index = indexOfCart(state.cart, payload.product.id);

      if (typeof index === "number") state.cart[index].count += payload.quanity;
      else
        state.cart.push({
          product: payload.product,
          count: payload.quanity,
          id: state.cart.length + 1,
        });

      state.quanity += payload.quanity;
      state.totalAmount += payload.product.price * payload.quanity;
    },
  },
});

export const {
  reducer: cartReducer,
  actions: { emptyCart, deleteElement, addProduct },
} = cartSlice;
