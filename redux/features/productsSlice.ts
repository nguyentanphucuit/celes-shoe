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
      state.items.unshift(action.payload);
      return state;
    },
    updateProduct: (state, action) => {
      const { product, id } = action.payload as any;
      console.log(product, id);
      const index = state.items.findIndex(
        (item: ProductProps) => item.id === id
      );
      state.items[index] = product;
      return state;
    },
    updateAllProducts: (state, action) => {
      const { products } = action.payload as any;
      state.items = products;
      return state;
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload as any;
      state.items = state.items.filter((item: ProductProps) => item.id !== id);
      return state;
    },
  },
});

export const {
  getProducts,
  addProduct,
  updateProduct,
  updateAllProducts,
  deleteProduct,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;
