// A mock function to mimic making an async request for data
import axios from "axios";

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const fetchTodos = async () => {
  const response = await axios({
    method: 'get',
    url: '/todos',
  })

  return response.data
}
