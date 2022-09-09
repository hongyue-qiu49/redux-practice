import { PayloadAction } from '@reduxjs/toolkit'
import { CounterState, initialCounterState } from '../../type/counter'

export const counterReducer = (state = initialCounterState, action: PayloadAction<any>): CounterState => {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 }
    case 'decrement':
      return { ...state, value: state.value - 1 }
    case 'incrementByAmount':
      return { ...state, value: state.value + action.payload }
    default: return state
  }
}
