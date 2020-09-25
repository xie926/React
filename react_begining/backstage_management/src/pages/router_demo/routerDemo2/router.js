import React, { Component } from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Main from './Main'
import About from '../routerDemo1/About'
import Topic from '../routerDemo1/Topic'
import Home from './Home'
export default class IRouter extends Component {
  render() {
    return (
      <Router>
        <Home>
          <Route path="/main" render={() => 
            <Main>
              <Route path="/main/a" component={About}></Route>
            </Main>
          }></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topic" component={Topic}></Route>
        </Home>
      </Router>
    )
  }
}