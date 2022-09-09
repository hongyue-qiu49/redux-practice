import { PayloadAction } from '@reduxjs/toolkit'
import { initialTodoState, TodosState } from '../../type/todo'
import { fetchTodos } from '../../api/todoAPI'
import { AppDispatch } from '../../app/store'

export const todoReducer = (state = initialTodoState, action: PayloadAction<any>): TodosState => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        todos: [...action.payload]
      }
    case 'mark': {
      const todos = state.todos.map(i => i.index === action.payload
        ? {
            ...i,
            completed: !i.completed
          }
        : i
      )

      return { ...state, todos }
    }
    case 'selectPriority': {
      const todos = state.todos.map(i => i.index === action.payload.index
        ? {
            ...i,
            priority: action.payload.value
          }
        : i
      )

      return {
        ...state,
        todos
      }
    }
    case 'filterByCompletion':
      return { ...state, filterByCompletion: action.payload }

    case 'filterByPriority':
      return { ...state, filterByPriority: action.payload }
    default: return state
  }
}

export const fetchTodoList = async (dispatch: AppDispatch) => {
  const response = await fetchTodos(0)
  dispatch({ type: 'init', payload: response })
}
