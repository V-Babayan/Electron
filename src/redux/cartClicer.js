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
    changeElementCount(state, action) {
      state.cart[action.payload.index].count = action.payload.count;
    },
  },
});

export const { setCart, emptyCart, deleteElement, addElement, changeElementCount } =
  cartSlice.actions;
export default cartSlice.reducer;
