import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@/types";
import { emptyProductDetail } from "@/constants";

const initialState = { ...emptyProductDetail };

const ProductDetailSlice = createSlice({
  name: "productDetail",
  initialState,
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
