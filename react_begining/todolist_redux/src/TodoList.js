import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state  = store.getState()
    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
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
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input 
            placeholder= "Todo List"
            value={this.state.inputValue} 
            style={{ width: '300px', marginRight: '10px' }} 
            onChange={this.handleChangeValue}  
          />
          <Button type="primary" onClick={this.handleClick}>提交</Button>
          <List
            style={{marginTop: '10px', width: '300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (
              <List.Item onClick={this.handleItemClick.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

export default TodoList