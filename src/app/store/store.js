
import { configureStore } from '@reduxjs/toolkit'
import { tvShowSlice } from './slices/tvShowSlice'

export const store = configureStore({
  reducer: {
    tvShow: tvShowSlice.reducer
  },
})