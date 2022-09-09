import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../reducer/counterReducer/counterSlice'
import todoReducer from '../reducer/todoReducer/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
