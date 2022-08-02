import React from "react";
import "./todoPanel.css"
import {useAppSelector} from "../../app/hooks";
import {selectTodos} from "../../reducer/todoSlice";
import TodoItem from "./todoItem/todoItem";

const TodoPanel = () => {

    const todos = useAppSelector(selectTodos)

    return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            {todos.todos.map(item =>
                <TodoItem isChecked={item.completed} description={item.text} priority={item.priority} />
                )
            }
        </section>
    </div>
}

export default TodoPanel
