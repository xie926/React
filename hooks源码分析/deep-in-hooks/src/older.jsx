import React from 'react';
import  ReactDom from "react-dom";

let cursor = 0;
let currentComponent = {
  _hook: []
}

const argsHasChanged = (oldArgs, args) => {
  return !oldArgs || args.some((arg, index) => {
    return oldArgs[index] !== arg
  })
}
function getHookstate(i) {
  const hooks = currentComponent._hook
  if(i >= hooks.length) {
    hooks.push({})
  }
  return hooks[i]
}
function myUseState(initialState) {
  const hooks = getHookstate(cursor++)
  hooks.value = [
    hooks.value ? hooks.value[0] : initialState,
    function setState(newState) {
      hooks.value[0] = newState
      render()
    }
  ]
  return hooks.value
}

function Counter() {
  const [c, setC] = myUseState(10)
  const [d, setD] = myUseState(20)
  return (
    <div>
    <p>d: {d}</p>
    <button onClick={() => {
      setD(~~(Math.random()*100000))
    }}>setD</button>
    </div>
  )
}

render()
function render() {
  console.log('cursor   ', cursor);
  
  cursor = 0;
  ReactDom.render(<Counter></Counter>, document.getElementById('count'))
}