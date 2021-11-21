import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    searchQuery: (state, { payload }) => {
      state.query = payload;
    },
    emptyQuery: (state, action) => {
      state.query = "";
    },
  },
});

export const { searchQuery, emptyQuery } = searchSlice.actions;

export default searchSlice.reducer;
