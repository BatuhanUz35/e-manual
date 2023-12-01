import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    value: true
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    }
  }
})

export const {toggle} = menuSlice.actions

export default menuSlice.reducer