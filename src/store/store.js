import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { productsReducer } from "./productsSlice";
import { persistMiddleware, persistedCartReducer } from "./cart/index";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: persistedCartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: persistMiddleware,
});

export const parsist = persistStore(store);
