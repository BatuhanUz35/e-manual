import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    toggle: true,
    open_submenu: "",
    open_subsubmenu: "",
    selected_item_id: 3,
    
  },
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
    select_item: (state, action) => {
      state.selected_item_id = action.payload;
    },
    open_submenu: (state, action) => {
      state.open_submenu = action.payload;
    },
    open_subsubmenu: (state, action) => {
      state.open_subsubmenu = action.payload;
    },
    increment_id: (state) => {
      state.selected_item_id += 1;
    },
    decrement_id: (state) => {
      state.selected_item_id -= 1;
    },
  }
})

export const {toggle, select_item, open_submenu, open_subsubmenu, increment_id, decrement_id} = menuSlice.actions

export default menuSlice.reducer