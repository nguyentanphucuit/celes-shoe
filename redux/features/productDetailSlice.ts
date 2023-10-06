import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@/types";

const ProductDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    isOpen: false as boolean,
    item: {
      colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      ],
      sizes: [{ name: "XXS", inStock: true }],
    } as ProductProps,
  },
  reducers: {
    isOpenModal: (state, action) => {
      const isOpen = action.payload.isOpen as boolean;
      const newItem = action.payload.item as ProductProps;
      state = { ...state, isOpen: isOpen, item: newItem };
      return state;
    },
  },
});

export const { isOpenModal } = ProductDetailSlice.actions;
export default ProductDetailSlice.reducer;
