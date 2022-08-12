import { TodosState } from "../reducer/todoSlice";

export enum FilterTodoEnum {
    Complete = "complete",
    NotComplete = "not complete",
    Normal = "normal",
    Important = "important",
    Emergency = "emergency",
    All = "all"
}

export const filterCompletionOptions = [
    {text: FilterTodoEnum.Complete},
    {text: FilterTodoEnum.NotComplete},
]

export const filterPriorityOptions = [
    {text: FilterTodoEnum.Normal},
    {text: FilterTodoEnum.Important},
    {text: FilterTodoEnum.Emergency},
]

export const initialState: TodosState = {
    todos: [
        {
            index: 1,
            text: 'Eat food',
            completed: true,
            priority: "normal",
        },
        {
            index: 2,
            text: 'Exercise',
            completed: false,
            priority: "important",
        },
        {
            index: 3,
            text: 'Go to park',
            completed: false,
            priority: "important",
        },
        {
            index: 4,
            text: 'Go to office',
            completed: false,
            priority: "important",
        },
        {
            index: 5,
            text: 'Cut bangs',
            completed: false,
            priority: "emergency",
        },
        {
            index: 6,
            text: 'Go to sleep',
            completed: false,
            priority: "normal",
        },
        {
            index: 7,
            text: 'Walk around',
            completed: false,
            priority: "normal",
        },
    ],
    filterByCompletion: "all",
    filterByPriority: "all",
}
