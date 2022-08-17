import axios from 'axios'

interface Params {
  pageParam?: number
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
