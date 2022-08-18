import React, { ChangeEvent, useEffect, useState } from 'react'
import '../todoPanel/todoPanel.css'
import { Todo } from '../../reducer/todoSlice'
import TodoItem from '../todoPanel/todoItem/todoItem'
import TodoControlItem from '../todoPanel/todoControlItem/todoControlItem'
import { filterCompletionOptions, filterPriorityOptions, FilterTodoEnum } from '../../constant/todo'
import { useInfiniteQuery, useQuery } from 'react-query'
import { fetchInfiniteTodos, fetchTodos } from '../../api/todoAPI'
import TodoControlCommon from '../todoPanel/todoControlCommon/todoControlCommon'

const TodoPanelQuery = () => {
  const [isPaging, setIsPaging] = useState(false)
  const [filterByCompletionType, setFilterByCompletionType] = useState(FilterTodoEnum.All)
  const [filterByPriorityType, setFilterByPriorityType] = useState(FilterTodoEnum.All)
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [currentTodos, setCurrentTodos] = useState<Todo[]>()

  const todos = useInfiniteQuery(
    ['todos', currentPageIndex],
    fetchInfiniteTodos,
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
      getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor
    }
  )

  const pagingTodos = useQuery(
    ['todos', currentPageIndex],
    async () => await fetchTodos(currentPageIndex),
    {
      keepPreviousData: true
    }
  )

  const handleTodoItemCheckboxClicked = (index: number) => {
    //    todo: post to change check
  }

  const handleTodoItemPrioritySelected = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
    //    todo: post to change select
  }

  const handlePagingSelect = () => {
    setIsPaging(true)
    setCurrentPageIndex(1)
  }

  const handleNextPageClicked = () => {
    //  todo: api need return value to justice last page
    setCurrentPageIndex(currentPageIndex + 1)
  }

  const handlePrePageClicked = () => {
    const preIndex = currentPageIndex - 1
    const index = preIndex > 0 ? preIndex : 1
    setCurrentPageIndex(index)
  }

  const handleAllSelect = () => {
    setIsPaging(false)
  }

  const handleCompletionOptionClick = (type: FilterTodoEnum) => {
    setFilterByCompletionType(type)
  }

  const handlePriorityOptionClick = (type: FilterTodoEnum) => {
    setFilterByPriorityType(type)
  }

  const getTodosFromGroup = (tempTodos: Array<{ data: any }>) => {
    const tempTodosGroup = tempTodos?.map((item: { data: any }) => item.data)
    return [].concat(...tempTodosGroup)
  }

  const filterTodoItems = (Todos: Todo[]) => {
    const test = Todos?.filter((todo: { completed: boolean }) => {
      if (filterByCompletionType === FilterTodoEnum.Complete) {
        return todo.completed
      } else {
        return !todo.completed
      }
    })
    return test?.filter((todo: Todo) =>
      todo.priority === filterByPriorityType || filterByPriorityType === 'all')
  }

  useEffect(() => {
    let tempTodos

    if (isPaging && pagingTodos.isSuccess) {
      tempTodos = getTodosFromGroup(pagingTodos.data.pages)
    }
    if (!isPaging && todos.isSuccess) {
      tempTodos = getTodosFromGroup(todos.data.pages)
    }

    if (filterByPriorityType !== FilterTodoEnum.All && tempTodos && tempTodos.length > 0) {
      tempTodos = filterTodoItems(tempTodos)
    }

    setCurrentTodos(tempTodos)
  }, [todos.data, pagingTodos.data, filterByCompletionType, filterByPriorityType])

  return <div className="todo-panel">
        <section className="todo-list">
            <h3>todo list</h3>
            <div className="todo-list-content">
                {currentTodos?.map((item, index) =>
                    <TodoItem
                        key={index}
                        index={index}
                        isChecked={item.completed}
                        description={item.text}
                        onCheckboxClicked={() => handleTodoItemCheckboxClicked(item.index ?? 0)}
                        onPrioritySelect={(e) => handleTodoItemPrioritySelected(e, item.index ?? 0)}
                        priority={item.priority}
                    />
                )}
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                {!isPaging && todos.hasNextPage && <div onClick={async () => await todos.fetchNextPage()}>load more...</div>}
            </div>
        </section>
        <section className="todo-control">
            <TodoControlCommon
                handlePagingSelect={handlePagingSelect}
                handleAllSelect={handleAllSelect}
                onNextPageClicked={handleNextPageClicked}
                onPrePageClicked={handlePrePageClicked}
                isPaging={isPaging}
                pageIndex={currentPageIndex}
            />
            <div className="todo-control-options">
                <TodoControlItem
                    title="filter by completion: "
                    type="completion"
                    options={filterCompletionOptions}
                    onOptionClick={handleCompletionOptionClick}
                />
                <TodoControlItem
                    title="filter by priority: "
                    type="priority"
                    options={filterPriorityOptions}
                    onOptionClick={handlePriorityOptionClick}
                />
            </div>
        </section>
    </div>
}

export default TodoPanelQuery
