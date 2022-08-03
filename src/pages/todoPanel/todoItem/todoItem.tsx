import React from "react";
import "./todoItem.css"

interface TodoItemProps {
    key?: number,
    isChecked: boolean,
    description: string,
    priority: 'normal' | 'emergency' | 'important',
    onCheckboxClicked: () => void,
}

const TodoItem = ({key, isChecked, description, priority, onCheckboxClicked}:TodoItemProps) => {

    const handleClicked = () => {
        onCheckboxClicked()
    }

    return <div className="todo-item">
        <div className="todo-item-content">
            <input type="checkbox" id={description+key} className="todo-item-content-checkbox" checked={isChecked} onChange={handleClicked} />
            <label className="todo-item-content-description" htmlFor={description+key}>{description}</label>
        </div>
        <select className="todo-item-priority" value={priority}>
            <option>normal</option>
            <option>emergency</option>
            <option>important</option>
        </select>
    </div>
}

export default TodoItem
