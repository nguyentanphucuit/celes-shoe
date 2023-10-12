import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@/types";
import { listProducts } from "@/constants";

const initialState = [...listProducts] as ProductProps[];

const ProductsSlice = createSlice({
  name: "product",
  initialState: {
    items: initialState.map((item) => ({
      ...item,
      selectedColor: item.colors[0].name,
      selectedSize: item.sizes[0].name,
    })),
  },
  reducers: {
    getProducts: (state, action) => {
      return state;
    },
    changeColor: (state, action) => {
      const { productId, newColor } = action.payload as {
        productId: string;
        newColor: string;
      };
      const existingItem = state.items.find(
        (item: ProductProps) => item.id === productId
      );
      if (existingItem) {
        existingItem.selectedColor = newColor;
      }
      return state;
    },
    changeSize: (state, action) => {
      const { productId, newSize } = action.payload as {
        productId: string;
        newSize: string;
      };
      const existingItem = state.items.find(
        (item: ProductProps) => item.id === productId
      );
      if (existingItem) {
        existingItem.selectedSize = newSize;
      }
      return state;
    },
    changeImage: (state, action) => {
      const { productId, newImage } = action.payload as {
        productId: string;
        newImage: string;
      };
      const existingItem = state.items.find(
        (item: ProductProps) => item.id === productId
      );
      if (existingItem) {
        existingItem.imageUrl = newImage;
      }
      return state;
    },
  },
});

export const { getProducts, changeColor, changeSize, changeImage } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
