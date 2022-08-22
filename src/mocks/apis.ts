import { rest } from 'msw'
import { initialState } from '../constant/todo'

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    const todoPage = req.url.searchParams.getAll('page')
    const pageSize = 6
    const initTodoItemIndex = (Number(todoPage[0]) - 1) * pageSize

    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify(initialState.todos))
    }

    const todoList = JSON.parse(localStorage.getItem('todos') ?? '')

    const result = todoPage.length === 0
      ? todoList
      : todoList.slice(initTodoItemIndex, initTodoItemIndex + pageSize)

    return res(
      ctx.status(200),
      ctx.json(result),
      ctx.delay(500)
    )
  }),
  rest.post('/todos/:id', async (req, res, ctx) => {
    const { id } = req.params
    const requestBody = await req.text()
    const reqBodyObj = JSON.parse(requestBody)

    const todoList = JSON.parse(localStorage.getItem('todos') ?? '')

    const result = todoList.map((item: { index: number, priority: string, completed: boolean }) => {
      if (item.index === Number(id)) {
        return {
          ...item,
          priority: reqBodyObj.priority ?? item.priority,
          completed: reqBodyObj.completedChange ? !item.completed : item.completed
        }
      }
      return item
    })

    localStorage.setItem('todos', JSON.stringify(result))

    return await res(
      ctx.status(200),
      ctx.json('success'),
      ctx.delay(50)
    )
  })
]
