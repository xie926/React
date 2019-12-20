import { fromJS } from 'immutable'
import * as CONSTANTS from './constants'

const defaultState = fromJS({
  login: false
})
export default (state = defaultState, actions) => {
  console.log(actions.status)
  switch(actions.type) {
    case CONSTANTS.CHANGE_LOGIN_STATUS: return state.set('login', actions.status)
    default: return state
  }
}