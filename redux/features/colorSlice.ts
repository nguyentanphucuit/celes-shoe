import { listColors } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [...listColors];

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.push(action.payload);
    },
    removeColor: (state, action) => {
      return state.filter((color) => color.name !== action.payload.name);
    },
  },
});

export const { addColor, removeColor } = colorSlice.actions;
export default colorSlice.reducer;
