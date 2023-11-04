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
    deleteProduct: (state, action) => {
      const { id } = action.payload as any;
      state.items = state.items.filter((item: ProductProps) => item.id !== id);
      return state;
    },
  },
});

export const { getProducts, addProduct, updateProduct, deleteProduct } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
