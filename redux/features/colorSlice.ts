import { listColors } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [...listColors];

const colorSlice = createSlice({
  name: "color",
  initialState: { items: [...initialState] },
  reducers: {
    addColor: (state, action) => {
      state.items.push(action.payload);
    },
    updateAllColor: (state, action) => {
      state.items = action.payload;
      return state;
    },
    removeColor: (state, action) => {
      state.items = state.items.filter(
        (color) => color.name !== action.payload.name
      );
      return state;
    },
  },
});

export const { addColor, removeColor, updateAllColor } = colorSlice.actions;
export default colorSlice.reducer;
