import React from 'react';
import { connect } from 'react-redux'
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    inputText: ''
  }
  handleChage = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  render() {
    // console.log(this.props)
    const { todolist } = this.props;
    return (
      <div>
        {
          todolist.map((item, i) => {
            return (
              <li key={i}>
                {item.content}
              </li>
            )
          })
        }
        <div>
          <input value={this.state.inputText} onChange={this.handleChage}/>
          <button onClick={()=>{
            console.log(this.state.inputText);
            this.props.addTodo(this.state.inputText)
          }}>提交</button>
        </div>
      </div>
    )
  }
}
// state
const mapStatetoProps = (state) =>{
  console.log(state);
  return {
    todolist: state
  }
}
// payload 载荷 负载
const mapDispatchToProps = (dispatch) =>{
  return {
    addTodo(content) {
      dispatch({
        type: 'ADD_TODO',
        content
      })
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
