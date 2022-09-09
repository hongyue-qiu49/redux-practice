import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { todoReducer } from '../reducer/todoReducer/todoCommonReducer'
import { counterReducer } from '../reducer/counterReducer/counterCommonReducer'
import { initialCounterState } from '../type/counter'
import { initialTodoState } from '../type/todo'
import { logger } from 'redux-logger'

const rootReducer = combineReducers({ todo: todoReducer, counter: counterReducer })

export const store = createStore(
  rootReducer,
  {
    counter: initialCounterState,
    todo: initialTodoState
  },
  applyMiddleware(thunkMiddleware, logger)
)
