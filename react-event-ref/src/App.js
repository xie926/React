import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      red: true
    }
    // this.handleClick = this.handleClick.bind(this)  但仍推荐使用箭头函数
  }
  handleClick =() => {
    console.log(this)
  }
  render() {
    // 高频触发
    const { abc } = this.props;
    const { red } = this.state;
    return (
      <>
      <button style={{color: red?'red':'blue'}} onClick={this.handleClick}>
        { this.props.children }{abc}
      </button>
      <p>{this.abc}</p>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Button abc="123">登录</Button>
      <Button abc="023">注册</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
