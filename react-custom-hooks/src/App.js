import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input1 from './input1.jsx'
import WithWidth from './WidthHoc'
function Width({windowWidth}) {
  return (
    <h2>{windowWidth}</h2>
  )
}
const WithWindowWidth = WithWidth(Width)

// hooks
function useWidth() {
  const [width,setWidth] = useState(window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight)
  // 相当于didMount
  const handleSize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',handleSize)
    return () => {
      // 卸载 unMount
      window.removeEventListener('resize',handleSize)
    }
  })
  return width;
}
function Width2() {
  const width = useWidth()
  // width
  return (
    <h3>{ width }</h3>
  )
}
function App() {
  return (
    <div>
      <Input1></Input1>
      <WithWindowWidth/>
      <Width2 />
    </div>
  );
}

export default App;
