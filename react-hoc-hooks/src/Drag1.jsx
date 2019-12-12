import React, { Component } from 'react'

class Drag1 extends Component {
  state = { 
    left: 0,
    top: 0
  }
  render() {
    const { left, top} = this.state
    return (
      // 数值自动加上px
      <div 
        onMouseDown={this.handleDown}
        onMouseUp={this.handleUp}
        className="drag"
        style={{left, top}}>
        h2
      </div>
    )
  }

  
  handleDown = (e) => {
    // let objClientRect = e.target.getBoundingClientRect()
    this.startX = 0 // e.clientX - objClientRect.x
    this.startY = 0 // e.clientY - objClientRect.y
    document.addEventListener('mousemove', this.handleMove)
    document.addEventListener('mouseup', this.handleUp)
  }
  
  handleMove = (e) => {
    let left = e.clientX - this.startX
    let top = e.clientY - this.startY
    this.setState({
      left,
      top
    })
  }

  handleUp = (e) => {
    document.removeEventListener('mousemove', this.handleMove)
  }
}

export default Drag1