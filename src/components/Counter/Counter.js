import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/slices/counterSlice'
import './Counter.scss'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const themes = {
    theme: useSelector((state) => state.theme.theme),
    oppositeTheme: useSelector((state) => state.theme.oppositeTheme)
  }
  const dispatch = useDispatch()

  return (
    <section className={`${themes.theme}`}>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        className={`${themes.oppositeTheme}`}
      >
        Decrement
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        className={`${themes.oppositeTheme}`}
      >
        Increment
      </button>
    </section>
  )
}