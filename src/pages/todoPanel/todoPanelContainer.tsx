import { selectFilteredTodos } from '../../reducer/todoReducer/todoSelector'
import { AppDispatch, RootState } from '../../app/store'
import { FilterTodoEnum } from '../../constant/todo'
import { fetchTodoList } from '../../reducer/todoReducer/todoCommonReducer'

export const mapStateToProps = (state: RootState) => {
  return {
    todos: selectFilteredTodos(state.todo)
  }
}

export const mapDispatchToPros = (dispatch: AppDispatch) => {
  return {
    fetchTodoList: () => {
      fetchTodoList(dispatch)
    },
    setCompletionType: (type: FilterTodoEnum) => {
      dispatch({ type: 'filterByCompletion', payload: type })
    },
    setPriorityType: (type: FilterTodoEnum) => {
      dispatch({ type: 'filterByPriority', payload: type })
    },
    setTodoItemMark: (index: number) => {
      dispatch({ type: 'mark', payload: index })
    },
    setTodoItemPriority: (value: string, index: number) => {
      dispatch({
        type: 'selectPriority',
        payload: {
          index,
          value
        }
      })
    }
  }
}
