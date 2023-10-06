import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productDetailSlice from "./features/productDetailSlice";

export const store = configureStore({
  reducer: {
    cartReducer: cartSlice,
    productDetailReducer: productDetailSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
