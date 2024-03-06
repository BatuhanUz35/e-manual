import { createSlice } from "@reduxjs/toolkit";

export const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState: {
    searchTerm: "",
    searchInput: "",
  },
  reducers: {
    set_search_term: (state, action) => {
      state.searchTerm = action.payload;
    },
    set_search_input: (state, action) => {
      state.searchInput = action.payload;
    },
  }
})

export const { set_search_term, set_search_input, set_search_results} = searchbarSlice.actions

export default searchbarSlice.reducer