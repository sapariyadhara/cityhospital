
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionTypes'
import { signupApi } from '../../common/apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
  try {
    const user = yield call(signupApi, action.payload)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* signupSaga() {
  yield takeEvery(ActionType.SINGUP_REQUEST, signupUser)
}



export function* authSaga() {
    yield all([
        signupSaga()
    ])
}