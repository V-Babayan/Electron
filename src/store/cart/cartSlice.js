import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "helpers";

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
        if (id !== payload.id) {
          return true;
        }

        state.quanity -= count;
        state.totalAmount -= product.price * count;
        return false;
      });
    },

    addProduct(state, { payload }) {
      const cartItem = state.cart.find((cartItem) => cartItem.product.id === payload.product.id);

      if (!cartItem) {
        state.cart.push({
          product: payload.product,
          count: payload.quanity,
          id: generateId(),
        });
      } else cartItem.count += payload.quanity;

      state.quanity += payload.quanity;
      state.totalAmount += payload.product.price * payload.quanity;
    },
  },
});

export const {
  reducer: cartReducer,
  actions: { emptyCart, deleteElement, addProduct },
} = cartSlice;
