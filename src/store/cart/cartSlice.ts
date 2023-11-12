import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { generateId, indexOfCart } from "~/helpers";
import { CartState, Product } from "../types";

const initialState: CartState = { cart: [], quanity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    emptyCart(state) {
      state.cart = initialState.cart;
      state.quanity = initialState.quanity;
      state.totalAmount = initialState.totalAmount;
    },

    deleteElement(state, { payload }: PayloadAction<number>) {
      state.cart = state.cart.filter(({ id, count, product }) => {
        if (id !== payload) {
          return true;
        }

        state.quanity -= count;
        state.totalAmount -= product.price * count;
        return false;
      });
    },

    addProduct(
      state,
      { payload }: PayloadAction<{ product: Product; quanity: number }>
    ) {
      const index = indexOfCart(state.cart, payload.product.id);

      if (typeof index === "number") state.cart[index].count += payload.quanity;
      else
        state.cart.push({
          product: payload.product,
          count: payload.quanity,
          id: generateId(),
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