import React from "react";
import "./todoControlCommon.css"
import classNames from "classnames";

interface TodoControlCommonProps {
    handlePagingSelect: (isPagingSelect: boolean) => void,
    isPaging: boolean
}

const TodoControlCommon = ({ handlePagingSelect, isPaging}: TodoControlCommonProps) => {

    return <div className="todo-control-common">
        <div>
            <button className="todo-control-button">add todo</button>
            <button className="todo-control-button">delete completed</button>
        </div>
        <div>
            <div className="todo-control-buttons">
                <span
                    className={classNames("todo-control-button-slice",
                        !isPaging && "todo-control-button-slice-selected")}
                    onClick={() => handlePagingSelect(false)}
                >
                    all
                </span>
                    <span
                        className={classNames("todo-control-button-slice",
                            isPaging && "todo-control-button-slice-selected")}
                        onClick={() => handlePagingSelect(true)}
                    >
                    paging
                </span>
            </div>
            {isPaging &&
                <div className="todo-control-page-buttons">
                    <button className="todo-control-page-button">-</button>
                    1
                    <button className="todo-control-page-button">+</button>
                </div>
            }
        </div>
    </div>
}

export default TodoControlCommon
