import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProps, ProductProps } from "@/types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as CartProps[],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, option, quantity } = action.payload as any;
      const existingItem = state.cart.find(
        (item: CartProps) =>
          item.product.id === product.id &&
          item.option.color === option.color &&
          item.option.sizes[0].size === option.sizes[0].size
      );
      if (!existingItem) {
        state.cart.push({ product, option, quantity: quantity ?? 1 });
      } else {
        existingItem.quantity = quantity ?? existingItem.quantity + 1;
      }
      return state;
    },
    removeCart: (state, action) => {
      const { id, option } = action.payload as any;
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.product.id === id &&
            item.option.color === option.color &&
            item.option.sizes[0].size === option.sizes[0].size
          )
      );
      return state;
    },
    changeQuantity: (state, action) => {
      const { id, option, quantity } = action.payload as any;
      const existingItem = state.cart.find(
        (item: CartProps) =>
          item.product.id === id &&
          item.option.color === option.color &&
          item.option.sizes[0].size === option.sizes[0].size
      );
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      return state;
    },
  },
});

export const { addToCart, removeCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
