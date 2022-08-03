import React from "react";
import "./todoControlItem.css"
import {FilterTodoEnum} from "../../../constant/todo";

interface TodoControlItemProps {
    title: string,
    options: Option[],
    type: string,
    onOptionClick: (text:FilterTodoEnum) => void
}

type Option = {
    text: FilterTodoEnum,
    checked?: boolean,
}

const TodoControlItem = ({title, options, onOptionClick, type}: TodoControlItemProps ) => {

    return <div className="todo-control-item">
        <h5 className="todo-control-item-title">{title}</h5>
        <div className="todo-control-item-option">
            <input id="todo-control-item-all" type="radio" name={type} className="todo-control-item-radio" defaultChecked={true}  onClick={()=>onOptionClick(FilterTodoEnum.All)} />
            <label htmlFor="todo-control-item-all">all</label>
        </div>
        {options.map((item,index) =>
            <div className="todo-control-item-option" key={index}>
                <input id={item.text+index} type="radio" name={type} className="todo-control-item-radio" onClick={()=>onOptionClick(item.text)} />
                <label htmlFor={item.text+index}>{item.text}</label>
            </div>
        )}
    </div>
}

export default TodoControlItem
