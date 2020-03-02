import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import Test from './test'
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue: '',
      list: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deleteList = this.deleteList.bind(this)
    // this.getTodoItem = this.getTodoItem.bind(this)
  }
  handleInput(e){
    // console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick(e){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  deleteList(index){
    console.log(index)
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
  getTodoItem(){
    return this.state.list.map((item, index) => {
      return <TodoItem item={item} index={index} key={index} deleteList={this.deleteList}/>
    })
  }
  render(){
    return(
      <Fragment>
        <div>
          <label htmlFor="text" >TodoList</label>
          <input id="text" type="text" value={this.state.inputValue} onChange={this.handleInput}/>
          <button onClick={this.handleClick}>提交</button>
        </div>
        <div>
          <ul>
            {this.getTodoItem()}
          </ul>
          <Test content={this.state.inputValue}/>
        </div>
      </Fragment>
    )
  }
}

export default TodoList