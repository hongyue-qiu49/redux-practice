import React, {ChangeEvent, useEffect, useState} from "react";
import "../todoPanel/todoPanel.css"
import { Todo } from "../../reducer/todoSlice";
import TodoItem from "../todoPanel/todoItem/todoItem";
import TodoControlItem from "../todoPanel/todoControlItem/todoControlItem";
import { filterCompletionOptions, filterPriorityOptions, FilterTodoEnum } from "../../constant/todo";
import { useQuery } from "react-query";
import { fetchTodos } from "../../api/todoAPI";
import TodoControlCommon from "../todoPanel/todoControlCommon/todoControlCommon";

const TodoPanelQuery = () => {
    const [isPaging, setIsPaging] = useState(false)
    const [filterByCompletionType, setFilterByCompletionType] = useState(FilterTodoEnum.All)
    const [filterByPriorityType, setFilterByPriorityType] = useState(FilterTodoEnum.All)
    const todos = useQuery("todos", () => fetchTodos(0))
    const [currentTodos, setCurrentTodos] = useState<Todo[]>()

    const handleTodoItemCheckboxClicked = (index: number) => {
        //    todo: post to change check
    }

    const handleTodoItemPrioritySelected = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
        //    todo: post to change select
    }

    const handlePagingSelect = (isPagingSelect: boolean) => {
        setIsPaging(isPagingSelect)
    }

    const handleCompletionOptionClick = (type: FilterTodoEnum) => {
        setFilterByCompletionType(type)
    }

    const handlePriorityOptionClick = (type: FilterTodoEnum) => {
        setFilterByPriorityType(type)
    }

    useEffect(() => {
        if (todos.isSuccess) {
            let tempTodos = todos.data;
            if (filterByCompletionType !== FilterTodoEnum.All) {
                tempTodos = tempTodos.filter((todo: { completed: boolean; }) => {
                    if (filterByCompletionType === FilterTodoEnum.Complete) {
                        return todo.completed
                    } else {
                        return !todo.completed
                    }
                })
            }

            tempTodos = tempTodos.filter((todo: { priority: FilterTodoEnum; }) =>
                todo.priority === filterByPriorityType || filterByPriorityType === "all")

            setCurrentTodos(tempTodos)
        }
    }, [todos.isSuccess, filterByCompletionType, filterByPriorityType])

    return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            <div className="todo-list-content">
                {currentTodos?.map((item, index) =>
                    <TodoItem
                        key={index}
                        index={index}
                        isChecked={item.completed}
                        description={item.text}
                        onCheckboxClicked={() => handleTodoItemCheckboxClicked(item.index ?? 0)}
                        onPrioritySelect={(e) => handleTodoItemPrioritySelected(e, item.index ?? 0)}
                        priority={item.priority}
                    />
                )}
            </div>

        </section>
        <section className="todo-control">
            <TodoControlCommon
                handlePagingSelect={handlePagingSelect}
                isPaging={isPaging}
            />
            <div className="todo-control-options">
                <TodoControlItem
                    title="filter by completion: "
                    type="completion"
                    options={filterCompletionOptions}
                    onOptionClick={handleCompletionOptionClick}
                />
                <TodoControlItem
                    title="filter by priority: "
                    type="priority"
                    options={filterPriorityOptions}
                    onOptionClick={handlePriorityOptionClick}
                />
            </div>
        </section>
    </div>
}

export default TodoPanelQuery
