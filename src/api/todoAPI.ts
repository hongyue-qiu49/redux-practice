import axios from "axios";

export const fetchTodos = async () => {
    const response = await axios({
        method: 'get',
        url: '/todos',
    })

    return response.data
}

export const fetchPageData = async (page: number) => {
    const response = await axios({
        method: 'get',
        url: '/todos?page=' + page,
    })

    return response.data
}
