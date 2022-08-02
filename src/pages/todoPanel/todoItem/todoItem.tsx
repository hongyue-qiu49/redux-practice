import React from "react";
import "./todoItem.css"

interface TodoItemProps {
    isChecked: boolean,
    description: string,
    priority: 'normal' | 'emergency' | 'important'
}

const TodoItem = ({isChecked, description, priority}:TodoItemProps) => {

    return <div className="todo-item">
        <div className="todo-item-content">
            <input type="checkbox" id="index" className="todo-item-content-checkbox" checked={isChecked} />
            <label className="todo-item-content-description">{description}</label>
        </div>
        <select className="todo-item-priority" value={priority}>
            <option>normal</option>
            <option>emergency</option>
            <option>important</option>
        </select>
    </div>
}

export default TodoItem
