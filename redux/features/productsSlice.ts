import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@/types";
import { listProducts } from "@/constants";

const initialState = [...listProducts];

const ProductsSlice = createSlice({
  name: "product",
  initialState: {
    items: initialState,
  },
  reducers: {
    getProducts: (state, action) => {
      return state;
    },
  },
});

export const { getProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
