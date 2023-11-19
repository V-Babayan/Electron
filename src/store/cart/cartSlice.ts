import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { generateId } from "~/helpers";

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

    deleteElement(state, { payload }: PayloadAction<{ id: number }>) {
      state.cart = state.cart.filter(({ id, count, product }) => {
        if (id !== payload.id) {
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
      const cartItem = state.cart.find(
        cartItem => cartItem.product.id === payload.product.id
      );

      if (!cartItem) {
        state.cart.push({
          product: payload.product,
          count: payload.quantity,
          id: generateId(),
        });
      } else {
        cartItem.count += payload.quantity;
      }

      state.quantity += payload.quantity;
      state.totalAmount += payload.product.price * payload.quantity;
    },
  },
});

export const {
  reducer: cartReducer,
  actions: { emptyCart, deleteElement, addProduct },
} = cartSlice;
