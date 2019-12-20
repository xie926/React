// import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import homeReducer from '../pages/home/store/reducer';
import headerReducer from '../common/header/store/reducer';
import loginReducer from '../pages/home/login/store/reducer'

// fromJS({ home: , detail: })
const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  login: loginReducer
})
const store = createStore(reducer, applyMiddleware(thunk));

// default export
// import .. from './index.js';
export default store;