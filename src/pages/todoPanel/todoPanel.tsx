import React from "react";
import "./todoPanel.css"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTodos, markEvent, filterByCompletion } from "../../reducer/todoSlice";
import TodoItem from "./todoItem/todoItem";
import TodoControlItem from "./todoControlItem/todoControlItem";
import { filterCompletionOptions, FilterTodoEnum } from "../../constant/todo";

const TodoPanel = () => {

    const dispatch = useAppDispatch()

    const todos = useAppSelector(selectTodos)
    const handleTodoItemCheckboxClicked = (index: number) => {
        dispatch(markEvent(index))
    }

    const handleOptionClick = (type: FilterTodoEnum) => {
        dispatch(filterByCompletion(type))
    }

    return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            {todos.map((item,index) =>
                    <TodoItem
                        key={index}
                        isChecked={item.completed}
                        description={item.text}
                        onCheckboxClicked={() => handleTodoItemCheckboxClicked(item.index ?? 0)}
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
                onOptionClick={handleOptionClick}
            />
        </section>
    </div>
}

export default TodoPanel
