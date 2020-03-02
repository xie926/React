import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import {getInitTodoListAction} from './actionCreators'
import store from '.'

function* getInitList() {
  const res = yield axios.get('http://localhost.charlesproxy.com:3000/data.json')
  console.log(res.data)
  const action = getInitTodoListAction(res.data)
  yield put(action)
  // axios.get('http://localhost.charlesproxy.com:3000/data.json').then((res) => {
  //   const data = res.data
  //   const action = getInitTodoListAction(data)
  //   store.dispatch(action)
  // })
}

function* TodoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default TodoSagas;