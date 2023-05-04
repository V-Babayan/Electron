import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { cart: [] },
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    emptyCart(state) {
      state.cart = [];
    },
    deleteElement(state, action) {
      state.cart = state.cart.filter((elem) => elem.id !== action.payload);
    },
    addProduct(state, { payload }) {
      state.cart.push(payload);
    },
  },
});

export const { setCart, emptyCart, deleteElement, addProduct } = cartSlice.actions;
export default cartSlice.reducer;
