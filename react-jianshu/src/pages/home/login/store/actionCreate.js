import * as CONSTANTS from './constants'
export const changeLoginStatus = (status) => {
  // console.log(status)
  return{
    type: CONSTANTS.CHANGE_LOGIN_STATUS,
    status
  }
}