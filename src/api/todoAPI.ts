import axios from 'axios'

export const fetchTodos = async (page?: number): Promise<any> => {
  const response = await axios({
    method: 'get',
    url: page ? '/todos?page=' + page : '/todos'
  })

  return response.data
}
