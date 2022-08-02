import React from "react";
import "./todoPanel.css"

const TodoPanel = () => {

    return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            <div className="todo-item">
                <div className="todo-item-content">
                    <input type="checkbox" id="index"  className="todo-item-content-checkbox" />
                    <label className="todo-item-content-description">learn redux</label>
                </div>
                <select className="todo-item-priority">
                    <option>normal</option>
                    <option>emergency</option>
                    <option>important</option>
                </select>
            </div>
        </section>
    </div>
}

export default TodoPanel
