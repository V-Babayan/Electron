import { createSlice } from "@reduxjs/toolkit";

const productsSlicer = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productsSlicer.reducer;

export const { setProducts } = productsSlicer.actions;
