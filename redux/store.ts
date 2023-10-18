import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productDetailSlice from "./features/productDetailSlice";
import productsSlice from "./features/productsSlice";
import filterSlice from "./features/filterSlice";
import blogSlice from "./features/blogSlice";
import colorSlice from "./features/colorSlice";

export const store = configureStore({
  reducer: {
    cartReducer: cartSlice,
    productDetailReducer: productDetailSlice,
    productsReducer: productsSlice,
    filterReducer: filterSlice,
    blogReducer: blogSlice,
    colorReducer: colorSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
