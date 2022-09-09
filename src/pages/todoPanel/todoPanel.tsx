import React, { useEffect, useState } from 'react'
import './todoPanel.css'
import TodoItem from './todoItem/todoItem'
import TodoControlItem from './todoControlItem/todoControlItem'
import { filterCompletionOptions, filterPriorityOptions } from '../../constant/todo'
import TodoControlCommon from './todoControlCommon/todoControlCommon'
import { mapDispatchToPros, mapStateToProps } from './todoPanelContainer'
import { connect, ConnectedProps } from 'react-redux'

export const TodoPanelContainer = connect(mapStateToProps, mapDispatchToPros)
export type PropsFromRedux = ConnectedProps<typeof TodoPanelContainer>

const TodoPanel = ({
  fetchTodoList,
  todos: currentTodos,
  setCompletionType,
  setPriorityType,
  setTodoItemMark,
  setTodoItemPriority
}: PropsFromRedux) => {
  const [isPaging, setIsPaging] = useState(false)

  const handlePagingSelect = () => {
    setIsPaging(true)
  }

  const handleAllSelect = () => {
    setIsPaging(false)
  }

  useEffect(() => {
    fetchTodoList()
  }, [])

  return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            <div className="todo-list-content">
                {currentTodos.map((item, index) =>
                    <TodoItem
                        key={index}
                        index={index}
                        isChecked={item.completed}
                        description={item.text}
                        onCheckboxClicked={() => setTodoItemMark(item.index ?? 0)}
                        onPrioritySelect={(e) => setTodoItemPriority(e.target.value, item.index ?? 0)}
                        priority={item.priority}
                    />
                )}
            </div>

        </section>
        <section className="todo-control">
            <TodoControlCommon
                handlePagingSelect={handlePagingSelect}
                handleAllSelect={handleAllSelect}
                isPaging={isPaging}
            />
            <div className="todo-control-options">
                <TodoControlItem
                    title="filter by completion: "
                    type="completion"
                    options={filterCompletionOptions}
                    onOptionClick={setCompletionType}
                />
                <TodoControlItem
                    title="filter by priority: "
                    type="priority"
                    options={filterPriorityOptions}
                    onOptionClick={setPriorityType}
                />
            </div>
        </section>
    </div>
}

export default TodoPanelContainer(TodoPanel)
