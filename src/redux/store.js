import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import themeReducer from './slices/themeSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  },
})