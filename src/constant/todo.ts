export enum FilterTodoEnum {
    Complete = "complete",
    NotComplete = "not complete",
    All = "all"
}

export const filterCompletionOptions = [
    {text: FilterTodoEnum.Complete},
    {text: FilterTodoEnum.NotComplete},
]
