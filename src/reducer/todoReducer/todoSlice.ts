import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { FilterTodoEnum } from '../../constant/todo'
import { initialTodoState, Todo } from '../../type/todo'

interface PrioritySelect {
  index: number
  value: string
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    init: (state, action: PayloadAction<Todo[]>) => {
      return {
        ...state,
        todos: [...action.payload]
      }
    },
    markEvent: (state, action: PayloadAction<number>) => {
      const todos = state.todos.map(i => i.index === action.payload
        ? {
            ...i,
            completed: !i.completed
          }
        : i
      )

      return { ...state, todos }
    },
    selectPriority: (state, action: PayloadAction<PrioritySelect>) => {
      const todos = state.todos.map(i => i.index === action.payload.index
        ? {
            ...i,
            priority: action.payload.value
          }
        : i
      )
      return { ...state, todos }
    },
    filterByCompletion: (state, action: PayloadAction<string>) => (
      { ...state, filterByCompletion: action.payload }
    ),
    filterByPriority: (state, action: PayloadAction<string>) => (
      { ...state, filterByPriority: action.payload }
    )
  }
})

export const { init, markEvent, selectPriority, filterByCompletion, filterByPriority } = todoSlice.actions

export const selectTodos = (state: RootState) => {
  const filterByCompletion = state.todo.filterByCompletion
  const filterByPriority = state.todo.filterByPriority
  const todos = state.todo.todos.filter(todo => {
    if (filterByCompletion === FilterTodoEnum.Complete) {
      return todo.completed
    } else if (filterByCompletion === FilterTodoEnum.NotComplete) {
      return !todo.completed
    }
    return true
  })
  return todos.filter(todo => todo.priority === filterByPriority || filterByPriority === 'all')
}

export default todoSlice.reducer
