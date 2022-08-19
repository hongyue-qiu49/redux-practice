import axios from 'axios'

interface Params {
  pageParam?: number
}

interface changeTodoParams {
  id: number
  completedChange?: boolean
  priority?: string
}

export const fetchTodos = async (page?: number, signal?: AbortSignal): Promise<any> => {
  const response = await axios({
    method: 'get',
    signal,
    url: page ? '/todos?page=' + page : '/todos'
  })

  return response.data
}

export const fetchInfiniteTodos = async ({ pageParam }: Params): Promise<any> => {
  const pageIndex = ((pageParam ?? 0) + 1)
  const response = await axios({
    method: 'get',
    url: '/todos?page=' + pageIndex
  })

  return { data: response.data, nextCursor: pageParam === 2 ? undefined : pageIndex }
}

export const changeTodoById = async ({ id, completedChange, priority }: changeTodoParams): Promise<any> => {
  const response = await axios({
    method: 'post',
    url: `/todos/${id}`,
    data: {
      id,
      completedChange,
      priority
    }
  })

  return { data: response.data }
}
