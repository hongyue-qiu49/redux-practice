import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {FilterTodoEnum} from "../constant/todo";

export interface TodosState {
  todos: Todo[];
  filterByCompletion: string,
}

type Todo = {
  index?: number,
  text: string,
  completed: boolean,
  priority: string,
}

type PrioritySelect = {
  index: number,
  value: string,
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
  ],
  filterByCompletion: "all"
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    markEvent: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(i => i.index === action.payload? {
          ...i,
          completed:!i.completed
        } : i
      )
    },
    selectPriority: (state, action: PayloadAction<PrioritySelect>) => {
      state.todos = state.todos.map(i => i.index === action.payload.index? {
            ...i,
            priority: action.payload.value
          } : i
      )
    },
    filterByCompletion: (state, action: PayloadAction<string>) => {
      state.filterByCompletion = action.payload
    },
  },
});

export const { markEvent, selectPriority, filterByCompletion } = todoSlice.actions;


export const selectTodos = (state: RootState) => {
  const filterByCompletion = state.todo.filterByCompletion
  return state.todo.todos.filter(todo => {
    if (filterByCompletion === FilterTodoEnum.Complete) {
      return todo.completed
    } else if (filterByCompletion === FilterTodoEnum.NotComplete) {
      return !todo.completed
    }
    return true
  })
}



export default todoSlice.reducer;
