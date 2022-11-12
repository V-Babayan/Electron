import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "./types";

const initialState: ProductsState = { products: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const {
  reducer: productsReducer,
  actions: { setProducts },
} = productsSlice;
