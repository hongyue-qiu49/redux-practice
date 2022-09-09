export interface TodosState {
  todos: Todo[]
  filterByCompletion: string
  filterByPriority: string
}

export interface Todo {
  index?: number
  text: string
  completed: boolean
  priority: string
}

export const initialTodoState: TodosState = {
  todos: [
    {
      index: 1,
      text: '',
      completed: true,
      priority: 'normal'
    }
  ],
  filterByCompletion: 'all',
  filterByPriority: 'all'
}
