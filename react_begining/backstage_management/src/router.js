import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Admin from './admin'
import Home from './pages/home';
import Bar from './pages/echarts/bar/index'
import Pie from './pages/echarts/pie/index'
import Line from './pages/echarts/line/index'
import User from './pages/user/index'
import Order from './pages/order/index'

export default class ERouter extends React.Component {
  test = () => {
    if(sessionStorage.getItem('username')){
      console.log(111)
      return (
        <Route path="/" render={() =>
          <Admin>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path="/user" component={User} />
              <Route path="/order" component={Order} />
              <Route path="/charts/bar" component={Bar} />
              <Route path="/charts/pie" component={Pie} />
              <Route path="/charts/line" component={Line} />
              <Redirect to="/home" />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Admin>
        } />
      )
    }else{
      return <Redirect to="/login" />
    }
  }
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            {this.test()}
          </Switch>
        </App>
      </HashRouter>
    );
  }
}