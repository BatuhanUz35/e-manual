import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    toggle: true,
    active_l1_subcategory: null,
    active_l2_subcategory: null,
    selected_item_id: 0,
    focused_item: 0,
    scroll_position: 0,
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
    focus_item: (state, action) => {
      state.focused_item = action.payload;
    },
    set_scroll_position: (state, action) => {
      state.scroll_position = action.payload;
    }
    
  }
})

export const {toggle, select_item, activate_l1_subcategory, activate_l2_subcategory, focus_item, set_scroll_position} = menuSlice.actions

export default menuSlice.reducer