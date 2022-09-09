import { createSelector } from '@reduxjs/toolkit'
import { FilterTodoEnum } from '../../constant/todo'
import { TodosState } from '../../type/todo'

const selectTodos = (state: TodosState) => state.todos
const selectTodoFilterByCompletion = (state: TodosState) => state.filterByCompletion
const selectTodoFilterByPriority = (state: TodosState) => state.filterByPriority

const selectFilterByCompletionTodos = createSelector(
  [selectTodos, selectTodoFilterByCompletion],
  (todos, filterByCompletion) => {
    return todos.filter(todo => {
      if (filterByCompletion === FilterTodoEnum.Complete) {
        return todo.completed
      } else if (filterByCompletion === FilterTodoEnum.NotComplete) {
        return !todo.completed
      }
      return true
    })
  }
)

export const selectFilteredTodos = createSelector(
  [selectFilterByCompletionTodos, selectTodoFilterByPriority],
  (todos, filterByPriority) => {
    return todos.filter(todo => todo.priority === filterByPriority || filterByPriority === 'all')
  }
)
