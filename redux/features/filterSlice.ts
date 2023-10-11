import { listFilters } from "@/constants";
import { FiltersProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialFilters = { ...listFilters };

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
