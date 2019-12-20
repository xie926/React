import * as CONSTANTS from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false
})
export default (state = defaultState, actions) => {
  switch(actions.type) {
    case  CONSTANTS.SEATCH_FOCUS: return state.set('focus', actions.focus)
    default: return state
  }
}