import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../../redux/slices/themeSlice'
import './ThemeToggler.scss'

export default function ThemeToggler() {
  const themes = {
    theme: useSelector((state) => state.theme.theme),
    oppositeTheme: useSelector((state) => state.theme.oppositeTheme)
  }
  const dispatch = useDispatch()

  return (
    <section className={`${themes.theme}`}>
      <button
        aria-label="Set theme"
        onClick={() => dispatch(setTheme())}
        className={`${themes.oppositeTheme}`}
      >
        {themes.theme}
      </button>
    </section>
  )
}