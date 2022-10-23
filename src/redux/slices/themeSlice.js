import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
    oppositeTheme: 'dark'
  },
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      state.oppositeTheme = state.oppositeTheme === 'light' ? 'dark' : 'light'
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer