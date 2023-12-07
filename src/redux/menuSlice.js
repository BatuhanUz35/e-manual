import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    toggle: true,
    selected_item: "Ana Sayfa",
    selected_subitem: "",
  },
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
    select_item: (state, action) => {
      state.selected_item = action.payload;
      state.selected_subitem = "";
    },
    select_subitem: (state, action) => {
      state.selected_subitem = action.payload;
    },
  }
})

export const {toggle, select_item, select_subitem} = menuSlice.actions

export default menuSlice.reducer