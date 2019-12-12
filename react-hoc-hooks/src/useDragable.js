import React, { useState } from 'react'
// hooks
// 自定义 hooks 方法名 以use开头
function useDragable() {
  let [ left, setLeft ] = useState(0)
  let [ top, setTop ] = useState(0)
  let startX = 0, startY = 0
  const handleMouseMove = function(e) {
    let left = e.clientX
    let top = e.clientY
    setLeft(left) // left.value
    setTop(top) // top.value
  }
  const handleMouseUp = function() {
    document.removeEventListener('mousemove', handleMouseMove)
  }
  const handleDown = function() {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return { // 返回的值是响应式的 返回的值一变 应用到该值的地方也会变化 也会进行模板刷新
    style: {
      left,
      top
    },
    handleDown
  }
}

export default useDragable
