import React, { Component } from 'react'

function WithDragAble(Com) {
  return class WithDragAble extends Component {
    state = { 
      left: 0,
      top: 0
    }
    render() {
      const { left, top} = this.state
      return (
        <div
          onMouseDown={this.handleDown}
          onMouseUp={this.handleUp}
          className="drag"
          style={{left, top}}
        >
          <Com />
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
}

export default WithDragAble
