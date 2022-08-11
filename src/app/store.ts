import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../reducer/counterSlice';
import todoReducer from '../reducer/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
