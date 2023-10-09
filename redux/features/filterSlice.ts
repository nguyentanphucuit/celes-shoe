import { FiltersProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  categories: [],
  colors: [],
  minPrice: 0,
  maxPrice: 0,
  sizes: [],
  text: "",
};

const FilterSlice = createSlice({
  name: "filter",
  initialState: initialFilters as FiltersProps,
  reducers: {
    updateFilter: (state: any, action) => {
      const filter = action.payload;
      state = { ...state, ...filter };
      return state;
    },
  },
});

export const { updateFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
