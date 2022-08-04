import React, { ChangeEvent } from "react";
import "./todoItem.css"

interface TodoItemProps {
    index: number,
    isChecked: boolean,
    description: string,
    priority: string,
    onCheckboxClicked: () => void,
    onPrioritySelect: (event: ChangeEvent<HTMLSelectElement>) => void,
}

const TodoItem = ({index, isChecked, description, priority, onCheckboxClicked, onPrioritySelect}:TodoItemProps) => {

    return <div className="todo-item">
        <div className="todo-item-content">
            <input type="checkbox" id={description+index} className="todo-item-content-checkbox" checked={isChecked} onChange={onCheckboxClicked} />
            <label
                className={isChecked? "todo-item-content-description-checked" : "todo-item-content-description"}
                htmlFor={description+index}>
                {description}
            </label>
        </div>
        <select className="todo-item-priority" value={priority} onChange={e => onPrioritySelect(e)}>
            <option>normal</option>
            <option>emergency</option>
            <option>important</option>
        </select>
    </div>
}

export default TodoItem
