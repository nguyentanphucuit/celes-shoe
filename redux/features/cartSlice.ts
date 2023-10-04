import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "@/types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as ProductProps[],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload as ProductProps; // specify the type of newItem
      const existingItem = state.cart.find(
        (item: ProductProps) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cart.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      return state;
    },
    removeCart: (state, action) => {
      const id = action.payload as string;
      state.cart = state.cart.filter((item) => item.id !== id);

      return state;
    },
    changeQuantity: (state, action) => {
      const { id, newQuantity } = action.payload as {
        id: string;
        newQuantity: number;
      };

      const existingItem = state.cart.find(
        (item: ProductProps) => item.id === id
      );
      if (existingItem) {
        existingItem.quantity = newQuantity;
      }
      return state;
    },
  },
});

export const { addToCart, removeCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
