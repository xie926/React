import {GET_INIT_LIST, CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getInitTodoListAction = (data) => ({
  type: INIT_TODO_LIST,
  data
})

// export const getTodoListAction = () => {
//   return (dispatch) => {
//     axios.get('http://localhost.charlesproxy.com:3000/data.json').then((res) => {
//       const data = res.data
//       const action = getInitTodoListAction(data)
//       dispatch(action)
//     })
//   }
// }

export const getInitAction = () => ({
  type: GET_INIT_LIST
})