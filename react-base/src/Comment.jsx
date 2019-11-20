import React, { Component } from 'react'

class Input extends Component {
  // 静态属性
  state = {
    value: ''
  }
  // 箭头函数 this
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value
    })
  }
  // 单项数据流
  // input 受控组件 完全受 state.value 的控制
  handleSumbit = () => {
    const {value} = this.state;
    const {onRecive} = this.props;
    // 很像回调函数
    onRecive(value)
    console.log(value)
  }
  render(){
    const { value } = this.state;
    return (
      <>
      <input type="text" value={value} onChange={this.handleChange}/>
      <button onClick={this.handleSumbit}>submit</button>
      </>
    )
  }
}
class CommonList extends Component{
  render() {
    const { clist } = this.props;
    return(
      <React.Fragment>
        {
          clist.map((list,index) => {
            return(
              <li key={index}>
                { list.content }
              </li>
            )
          })
        }
      </React.Fragment>
    )
  }
}
class Comment extends Component {
  state = {
    clist: [
      {content: '666'}
    ] // 评论列表
  }
  handleReceiveCommand = (value) => {
    console.log('父组件value', value)
    // 不可变数据
    // this.state.clist.push({ content: value })
    let clist = this.state.clist.slice(0);
    clist.push({ content: value })
    this.setState({
      clist
    })
  }
  render(){
    const { clist } = this.state
    return(
      <>
      <Input onRecive={this.handleReceiveCommand}></Input>
      <CommonList clist={clist}></CommonList>
      </>
    )
  }
}
export default Comment;