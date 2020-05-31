import { combineReducers } from  'redux-immutable'   // immutable结构的对象
// import { combineReducers } from 'redux'    // js原生对象  { recommend: {}}
import { reducer as recommendReducer } from '../application/recommend/store/index'

export default combineReducers({
  recommend: recommendReducer
})
