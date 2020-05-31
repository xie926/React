import React from 'react';
import logo from './logo.svg';
import './App.css';
import connect from './react-redux/connect'

function App(props) {
  return (
    <div className="App">
      <p>count: {props.count}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
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

const mapStateToProps = state => {
  return {
    count: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch({ type: 'INCREMENT' })
    },
    decrement() {
      dispatch({ type: 'DECREMENT' })
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App) ;
