import React, { Component } from 'react'
import { HashRouter, Link, Switch, Route } from 'react-router-dom'
import Main from './Main'
import Topic from './Topic'
import About from './About'
class Home extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topic">Topic</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact={true} path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default Home