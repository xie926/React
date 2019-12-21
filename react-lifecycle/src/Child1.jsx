import React, { Component } from 'react'

class Child1 extends Component {
  state = {
    data:1
  }
  componentWillMount() {
    const {list} = this.props
    console.log('componentWillMount')
    this.setState({
      list
    })
  }
  componentDidMount(){
    console.log('componentDidMount');
    this.interval =  setInterval(() => {
      console.log(123456);
      let list = this.state.list.slice(0);
      list.push(10)
      this.setState({
        list: list
      })
    }, 1000);
  }
  updata = () => {
    this.setState({
      data: this.state.data + 1
    })
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    // console.log(this.props)
    let list = this.state.list.slice(0);
    list.splice(0, 3, ...(nextProps.list));
    this.setState({
      list
    })
  }
  // 性能优化
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    // console.log(this.state, this.props)
    // if (this.state.data < 3){
    //   return false
    // }
    return true
  }
  // 清理操作
  // 定时器 全局绑定的方法
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    return (
      <div onClick={this.updata}>Child1--{this.state.data}
      <ul>
        {
          this.state.list.map(el => {
            return (
              <li>{el}</li>
            )
          })
        }
      </ul>
      </div>
    )
  }
}
export default Child1