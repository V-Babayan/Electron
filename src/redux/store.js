import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./productsClicer";
import cartReducer from "./cartClicer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
