import { configureStore } from "@reduxjs/toolkit"
import menuReducer from './menuSlice'
import searchbarReducer from './searchbarSlice'

export default configureStore({
  reducer: {
    menu: menuReducer,
    searchbar: searchbarReducer,
  },
})