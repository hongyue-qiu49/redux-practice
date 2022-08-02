import React from "react";
import "./todoPanel.css"

const TodoPanel = () => {

    return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            <div className="todo-item">
                <input type="checkbox" id="index"/>
                <label>learn redux</label>
            </div>
        </section>
    </div>
}

export default TodoPanel
