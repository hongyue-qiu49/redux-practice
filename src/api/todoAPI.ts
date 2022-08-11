import axios from "axios";

export const fetchTodos = async () => {
    const response = await axios({
        method: 'get',
        url: '/todos',
    })

    return response.data
}
