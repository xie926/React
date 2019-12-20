import React from 'react';
// 1: h5:history api 2: hash change
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BaseComponent from './lib/BaseComponent';
import store from './store/index';
import Home from './pages/home/index';
import Header from './common/header/index';
import PrivateRoute from './lib/PrivateRoute'
import Login from './pages/home/login/index'
import './statics/iconfont/iconfont'
import { write } from 'fs';

function Write() {
  return (
    <div>
      写文章页面
    </div>
  )
}

class App extends BaseComponent {
  render() {
    return (
      <Provider store={store}>
        {/* BrowserRouter 保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            {/* <PrivateRoute path="/write" Com={Write}></PrivateRoute> */}
            <PrivateRoute path="/write">
              <Write />
            </PrivateRoute>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
