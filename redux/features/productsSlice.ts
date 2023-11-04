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
    addProduct: (state, action) => {
      state.items.push(action.payload);
      return state;
    },
    updateProduct: (state, action) => {
      const { product, id } = action.payload as any;
      const index = state.items.findIndex(
        (item: ProductProps) => item.id === id
      );
      state.items[index] = product;
      return state;
    },
  },
});

export const { getProducts, addProduct, updateProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
