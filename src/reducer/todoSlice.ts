import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {FilterTodoEnum} from "../constant/todo";

export interface TodosState {
  todos: Todo[];
  filterByCompletion: string,
  filterByPriority: string,
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

export const initialState: TodosState = {
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
    {
      index: 5,
      text: 'Cut bangs',
      completed: false,
      priority: "emergency",
    },
    {
      index: 6,
      text: 'Go to sleep',
      completed: false,
      priority: "normal",
    },
    {
      index: 7,
      text: 'Walk around',
      completed: false,
      priority: "normal",
    },
  ],
  filterByCompletion: "all",
  filterByPriority: "all",
}

export const initEmptyState: TodosState = {
  todos: [
    {
      index: 1,
      text: '',
      completed: true,
      priority: "normal",
    },
  ],
  filterByCompletion: "all",
  filterByPriority: "all",
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initEmptyState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    init: (state, action: PayloadAction<Todo[]>) => {
      return {
        ...state,
        todos: [...action.payload]
      }
    },
    markEvent: (state, action: PayloadAction<number>) => {
      const todos = state.todos.map(i => i.index === action.payload? {
            ...i,
            completed:!i.completed
          } : i
      )

      return {...state, todos}
    },
    selectPriority: (state, action: PayloadAction<PrioritySelect>) => {
      const todos = state.todos.map(i => i.index === action.payload.index? {
            ...i,
            priority: action.payload.value
          } : i
      )
      return {...state, todos}
    },
    filterByCompletion: (state, action: PayloadAction<string>) => (
        {...state, filterByCompletion: action.payload}
    ),
    filterByPriority: (state, action: PayloadAction<string>) => (
        {...state, filterByPriority: action.payload}
    ),
  },
});

export const { init, markEvent, selectPriority, filterByCompletion, filterByPriority } = todoSlice.actions;


export const selectTodos = (state: RootState) => {
  const filterByCompletion = state.todo.filterByCompletion
  const filterByPriority = state.todo.filterByPriority
  let todos =  state.todo.todos.filter(todo => {
    if (filterByCompletion === FilterTodoEnum.Complete) {
      return todo.completed
    } else if (filterByCompletion === FilterTodoEnum.NotComplete) {
      return !todo.completed
    }
    return true
  })
  return todos.filter(todo => todo.priority === filterByPriority || filterByPriority === "all")
}



export default todoSlice.reducer;
