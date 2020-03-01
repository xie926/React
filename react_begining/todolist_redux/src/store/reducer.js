import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE){
    const newValue = JSON.parse(JSON.stringify(state))
    newValue.inputValue = action.value
    return newValue
  }
  if(action.type === ADD_TODO_ITEM){
    const newValue = JSON.parse(JSON.stringify(state))
    newValue.list.push(newValue.inputValue)
    newValue.inputValue = ''
    return newValue
  }
  if(action.type === DELETE_TODO_ITEM){
    const newValue = JSON.parse(JSON.stringify(state))
    newValue.list.splice(action.index,1)
    return newValue
  }
  return state
}