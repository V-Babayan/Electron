import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProducts } from "api";

export const fetchProducts = createAsyncThunk(
  "products/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProducts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  status: "init",
  errorMessage: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
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
