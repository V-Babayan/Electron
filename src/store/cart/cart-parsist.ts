import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cartSlice";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export { persistedCartReducer };
