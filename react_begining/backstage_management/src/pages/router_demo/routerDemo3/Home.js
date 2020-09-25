import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/main">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>
          <li>
            <Link to="/imooc">imooc</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default Home