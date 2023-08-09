
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionTypes'
import { forgotPassApi, loginApi, signupApi } from '../../common/apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
  try {
    const user = yield call(signupApi, action.payload)
    console.log(user);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e)
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* loginUser(action) {
  try {
    const user = yield call(loginApi, action.payload)
    console.log(user);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e)
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* forgotUser(action) {
  try {
    const user = yield call(forgotPassApi, action.payload)
    console.log(user);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e)
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

// watcher Function 
function* signupSaga() {
  yield takeEvery(ActionType.SINGUP_REQUEST, signupUser)
}

function* loginSaga() {
  yield takeEvery(ActionType.LOGIN_REQUEST, loginUser)
}

function* forgotSaga() {
  yield takeEvery(ActionType.FORGOTPASS_REQUEST, forgotUser)
}



export function* authSaga() {
    yield all([
        signupSaga(),
        loginSaga(),
        forgotSaga()
    ])
}