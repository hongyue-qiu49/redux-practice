import { rest } from 'msw'
import { initialState } from '../constant/todo'

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    const todoPage = req.url.searchParams.getAll('page')
    const pageSize = 6
    const initTodoItemIndex = (Number(todoPage[0]) - 1) * pageSize

    const result = todoPage.length === 0
      ? initialState.todos
      : initialState.todos.slice(initTodoItemIndex, initTodoItemIndex + pageSize)

    return res(
      ctx.status(200),
      ctx.json(result)
    )
  })
]
