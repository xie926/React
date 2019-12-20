import * as CONSTANT from './constants'
export const searchFocus =  (focus) => {
  return {
    type: CONSTANT.SEATCH_FOCUS,
    focus
  }
}