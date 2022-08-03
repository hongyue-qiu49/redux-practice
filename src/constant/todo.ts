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
