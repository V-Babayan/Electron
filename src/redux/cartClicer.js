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
    addElement(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { setCart, emptyCart, deleteElement, addElement } = cartSlice.actions;
export default cartSlice.reducer;
