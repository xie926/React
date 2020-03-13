import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/Header/store'
import {reducer as homeReducer} from '../page/home/store'
import {reducer as detailReducer} from '../page/details/store'
import {reducer as loginReducer} from '../page/login/store'
const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducer;