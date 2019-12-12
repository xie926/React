import React, { Component, useState } from 'react'
import './App.css'
import Drag from './Drag1'
import WithDragAble from './WithDragAble'
import useDrag from './useDragable'

class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Drag />
        <DragH3 />
        <Footer />
      </div>
    )
  }
}

const DragH3 = WithDragAble(Header)

// hooks
// react15 function 组件没有state this lifeCycle
// 只负责单纯接受props 渲染

// react16
// hooks 作用： 组件之间逻辑复用，相比hoc 解决那些问题
// 让逻辑扁平化
function Header() {
  return (
    <h3>hello world!</h3>
  )
}

function Footer () {
  // state hooks
  let [count, setCount] = useState(0) // state { 0 }
  let { style, handleDown } = useDrag()
  let [n, setN] = useState('s')
  return (
    <div 
      style={ style }
      onMouseDown = { handleDown }
      className="drag"
    >
      foot: { count }
      <button
        onClick={() => {
          let count1 = ++count
          setCount(count1)
        }}>+</button>
      <p 
        onClick={
          () => {
            let n1 = n + 'sdf'
            setN(n1)
          }
        }>
        {n}
      </p>
    </div>
  )
}

export default App
