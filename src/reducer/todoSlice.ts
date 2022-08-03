import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface TodosState {
  todos: todo[];
}

type todo = {
  index?: number,
  text: string,
  completed: boolean,
  priority: 'normal' | 'important' | 'emergency',
}

const initialState: TodosState = {
  todos: [
    {
      index: 1,
      text: 'Eat food',
      completed: true,
      priority: "normal",
    },
    {
      index: 2,
      text: 'Exercise',
      completed: false,
      priority: "important",
    },
    {
      index: 3,
      text: 'Go to park',
      completed: false,
      priority: "important",
    },
    {
      index: 4,
      text: 'Go to office',
      completed: false,
      priority: "important",
    },
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    markEvent: (state, action: PayloadAction<number>) => {
      console.log(">>>>>>",state)
      state.todos = state.todos.map(i => i.index === action.payload? {
          ...i,
          completed:!i.completed
        } : i
      )
    },
  },
});

export const { markEvent } = todoSlice.actions;


export const selectTodos = (state: RootState) => state.todos;
export const selectedTodos = (state: RootState) =>
  state.todos.todos.filter((item: { completed: boolean; }) => item.completed);



export default todoSlice.reducer;
