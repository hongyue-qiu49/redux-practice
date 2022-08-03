import React, { ChangeEvent } from "react";
import "./todoPanel.css"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTodos, markEvent, selectPriority, filterByCompletion, filterByPriority } from "../../reducer/todoSlice";
import TodoItem from "./todoItem/todoItem";
import TodoControlItem from "./todoControlItem/todoControlItem";
import { filterCompletionOptions, filterPriorityOptions, FilterTodoEnum } from "../../constant/todo";

const TodoPanel = () => {

    const dispatch = useAppDispatch()

    const todos = useAppSelector(selectTodos)
    const handleTodoItemCheckboxClicked = (index: number) => {
        dispatch(markEvent(index))
    }

    const handleTodoItemPrioritySelected = (e: ChangeEvent<HTMLSelectElement>,index: number) => {
        dispatch(selectPriority({index, value: e.target.value}))
    }

    const handleCompletionOptionClick = (type: FilterTodoEnum) => {
        dispatch(filterByCompletion(type))
    }

    const handlePriorityOptionClick = (type: FilterTodoEnum) => {
        dispatch(filterByPriority(type))
    }

    return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            {todos.map((item,index) =>
                    <TodoItem
                        key={index}
                        index={index}
                        isChecked={item.completed}
                        description={item.text}
                        onCheckboxClicked={() => handleTodoItemCheckboxClicked(item.index ?? 0)}
                        onPrioritySelect={(e) => handleTodoItemPrioritySelected(e, item.index ?? 0)}
                        priority={item.priority}
                    />
                )
            }
        </section>
        <section className="todo-control">
            <TodoControlItem
                title="filter by completion: "
                type="completion"
                options={filterCompletionOptions}
                onOptionClick={handleCompletionOptionClick}
            />
        {/*    filterPriorityOptions*/}
            <TodoControlItem
                title="filter by priority: "
                type="priority"
                options={filterPriorityOptions}
                onOptionClick={handlePriorityOptionClick}
            />
        </section>
    </div>
}

export default TodoPanel
