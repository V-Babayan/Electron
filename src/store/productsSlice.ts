import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProducts } from "~/api";

import { Product, ProductsState } from "./types";

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchTodos", async (_, { rejectWithValue }) => {
  try {
    return await getProducts();
  } catch (error) {
    const typedError = error as Error;

    return rejectWithValue(typedError.message);
  }
});

const initialState: ProductsState = {
  products: [],
  status: "init",
  errorMessage: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.products = payload;
    });
    builder.addCase(fetchProducts.rejected, (state, { payload }) => {
      state.status = "error";
      state.errorMessage = payload;
    });
  },
});

export const { reducer: productsReducer } = productsSlice;
