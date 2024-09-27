import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    resetFilter: (state) => {
      state.name = "";
    },
  },
});

export const { changeFilter, resetFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
