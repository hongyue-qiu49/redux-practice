import React from "react";
import "./todoPanel.css"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTodos, markEvent } from "../../reducer/todoSlice";
import TodoItem from "./todoItem/todoItem";

const TodoPanel = () => {

    const dispatch = useAppDispatch()

    const todos = useAppSelector(selectTodos)
    const handleTodoItemCheckboxClicked = (index: number) => {
        dispatch(markEvent(index))
    }

    return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            {todos.todos
                .map(item =>
                    <TodoItem
                        isChecked={item.completed}
                        description={item.text}
                        onCheckboxClicked={() => handleTodoItemCheckboxClicked(item.index ?? 0)}
                        priority={item.priority}
                    />
                )
            }
        </section>
    </div>
}

export default TodoPanel
