import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from '../Products/ProductSlice'

export const store = configureStore({
  reducer: {ProductSlice},
})


export default store