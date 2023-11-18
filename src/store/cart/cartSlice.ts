import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { generateId, indexOfCart } from "~/helpers";

import { CartState, Product } from "../types";

const initialState: CartState = { cart: [], quantity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    emptyCart(state) {
      state.cart = initialState.cart;
      state.quantity = initialState.quantity;
      state.totalAmount = initialState.totalAmount;
    },

    deleteElement(state, { payload }: PayloadAction<number>) {
      state.cart = state.cart.filter(({ id, count, product }) => {
        if (id !== payload) {
          return true;
        }

        state.quantity -= count;
        state.totalAmount -= product.price * count;
        return false;
      });
    },

    addProduct(
      state,
      { payload }: PayloadAction<{ product: Product; quantity: number }>
    ) {
      const index = indexOfCart(state.cart, payload.product.id);

      if (typeof index === "number")
        state.cart[index].count += payload.quantity;
      else
        state.cart.push({
          product: payload.product,
          count: payload.quantity,
          id: generateId(),
        });

      state.quantity += payload.quantity;
      state.totalAmount += payload.product.price * payload.quantity;
    },
  },
});

export const {
  reducer: cartReducer,
  actions: { emptyCart, deleteElement, addProduct },
} = cartSlice;
