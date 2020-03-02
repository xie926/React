import React, { Component } from 'react';
import store from './store'
import { /*getTodoListAction,*/getInitAction, getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state  = store.getState()
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount(){
    // const action = getTodoListAction()
    // store.dispatch(action)
    const action = getInitAction()
    store.dispatch(action)
    // axios.get('http://localhost.charlesproxy.com:3000/data.json').then((res) => {
    //   const data = res.data
    //   const action = getInitTodoListAction(data)
    //   console.log(action)
    //   store.dispatch(action)
    // })
  }
  handleChangeValue(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(store.getState())
  }
  handleClick(){
    const action = getAddTodoItemAction()
    store.dispatch(action)
  }
  handleItemClick(index){
    const action = getDeleteTodoItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue} 
        handleChangeValue={this.handleChangeValue}
        handleClick={this.handleClick}
        list={this.state.list}
        handleItemClick={this.handleItemClick}
      />
    )
  }
}

export default TodoList