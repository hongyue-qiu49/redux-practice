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
        <section className="todo-control">
            <div className="todo-control-item">
                <h5 className="todo-control-item-title">filter by completion: </h5>
                <div className="todo-control-item-option">
                    <input type="radio" name="complete" className="todo-control-item-radio" defaultChecked={true} />
                    <label>all</label>
                </div>
                <div className="todo-control-item-option">
                    <input type="radio" name="complete" className="todo-control-item-radio" />
                    <label>complete</label>
                </div>
                <div className="todo-control-item-option">
                    <input type="radio" name="complete" className="todo-control-item-radio" />
                    <label>not complete</label>
                </div>
            </div>
        </section>
    </div>
}

export default TodoPanel
