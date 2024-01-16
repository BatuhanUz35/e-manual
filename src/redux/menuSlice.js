import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    toggle: true,
    active_l1_subcategory: null,
    active_l2_subcategory: null,
    selected_item_id: 3,
    
  },
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
    select_item: (state, action) => {
      state.selected_item_id = action.payload;
      state.active_l1_subcategory = null
      state.active_l2_subcategory = null
    },
    activate_l1_subcategory: (state, action) => {
      state.active_l1_subcategory = action.payload;
    },
    activate_l2_subcategory: (state, action) => {
      state.active_l2_subcategory = action.payload;
    },
    increment_id: (state) => {
      state.selected_item_id += 1;
    },
    decrement_id: (state) => {
      state.selected_item_id -= 1;
    },
    set_id: (state, action) => {
      state.selected_item_id = action.payload
    }
  }
})

export const {toggle, select_item, activate_l1_subcategory, activate_l2_subcategory, increment_id, decrement_id, set_id} = menuSlice.actions

export default menuSlice.reducer