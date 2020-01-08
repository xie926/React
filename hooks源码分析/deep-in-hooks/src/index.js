import React, {useState, useEffect, useMemo, useCallback} from 'react';
import ReactDOM from 'react-dom';
import './older'

let _state
function myUseState(initialState) {
  _state = _state || initialState
  function setState(newState) {
    _state = newState
    // 重新渲染
    render();
  }
  return [_state, setState]
}

let _deps = {
  args: null
}
function myUseEffect(effect, args) {
  const hasChange = args &&
  args.some((arg, index) => {
    return _depsMemo.args && 
    arg !== _depsMemo.args[index];
  })
  if(hasChange || !_deps.args) {
    effect()
    _deps.args = args;
  }
}

let _depsMemo = {
  args: null,
  value: null
}

function myUseMemo(cb, args) {
  const hasChange = args &&
  args.some((arg, index) => {
    return _depsMemo.args && 
    arg !== _depsMemo.args[index];
  })
  if (hasChange || !_depsMemo.args) {
    _depsMemo.value = cb();
    _depsMemo.args = args;
    return _depsMemo.value
  }
  return _depsMemo.value
}

// useCallback 通过useMemo实现
function myUseCallback(cb, args) {
  return myUseMemo(() => cb(), args)
}

function Counter() {
  const [count, setCount] = myUseState(99);
  // count如何存起来呢？  闭包
  myUseEffect(() => {
    console.log('didMount');
  }, [])
  let res = myUseMemo(() => {
    return count + 1
  }, [count])
  if(true) {
    // const [test, setTest] = useState(99)
  }
  return (
    <div>
      count: {count}
      <p>res: {res}</p>
      <button onClick={()=>{
        setCount(~~(Math.random()*10000))
      }}>btn</button>
    </div>
  )
}

render()
function render() {
  ReactDOM.render(<Counter />, document.getElementById('root'));
}

// preact数组   react链表
// 第一次渲染：[{_state: 0}, {_deps: args}, {_depsMemo: {args, value}}]
// 第二次渲染：按照出现的次序一一取出来