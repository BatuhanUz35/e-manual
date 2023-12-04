import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    toggle: true,
    active: "Ana Sayfa",
  },
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
    activate: (state, action) => {
      state.active = action.payload;
    },
  }
})

export const {toggle, activate} = menuSlice.actions

export default menuSlice.reducer