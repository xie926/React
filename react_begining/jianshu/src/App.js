import React, {Component} from 'react';
import {Provider} from 'react-redux'
import Header from './common/Header'
import Home from './page/home'
import Details from './page/details/loadable.js'
import store from './store'
import Login from './page/login'
import Write from './page/write'
import{BrowserRouter,Route} from 'react-router-dom'
class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/details/:id' exact component={Details}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
