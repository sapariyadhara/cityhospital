
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionTypes'
import { forgotPassApi, logOutApi, loginApi, signinWithGoogleApi, signupApi } from '../../common/apis/auth.api'
import { setAlert } from '../slice/alertSlice';
import { authError, emailVarification, forgotPassRequest, loggedIn, loggedOut, signinWithGoogle } from '../action/auth.action';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
  try {
    const user = yield call(signupApi, action.payload)
    console.log(user);
    yield put(emailVarification())
    yield put(setAlert({text : user.message , color : 'success'}))
  } catch (e) {
    console.log(e)
    yield put(authError(e.message))
    yield put(setAlert({text : e.message , color : 'error'}))
  }
}

function* loginUser(action) {
  console.log(action);
  try {
    const user = yield call(loginApi, action.payload.data)
    action.payload.callback("/")
    console.log(user);
    yield put(loggedIn(user.user))
    yield put(setAlert({text : user.message , color : 'success'}))
  } catch (e) {
    console.log(e)
    yield put(authError(e.message))
    yield put(setAlert({text : e.message , color : 'error'}))
  }
}

function* forgotUser(action) {
  try {
    const user = yield call(forgotPassApi, action.payload)
    console.log(user);
    yield put(forgotPassRequest(user.user))
    yield put(setAlert({text : user.message , color : 'success'}))
  } catch (e) { 
    console.log(e)
    yield put(authError(e.message))
    yield put(setAlert({text : e.message , color : 'error'}))
  }
}

function* logOutUser(action){
  try {
    const user = yield call(logOutApi)
    console.log(user);
    yield put(loggedOut())
    yield put(setAlert({text : user.message , color : 'success'}))
  } catch (e) {
    console.log(e)
    yield put(authError(e.message))
    yield put(setAlert({text : e.message , color : 'error'}))
  }
}

function* signinWithGUser(action){
  try {
    const user = yield call(signinWithGoogleApi)
    console.log(user);
    yield put(signinWithGoogle())
    yield put(setAlert({text : user.message , color : 'success'}))
  } catch (e) {
    console.log(e)
    yield put(authError(e.message))
    yield put(setAlert({text : e.message , color : 'error'}))
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

function* logOutSaga() {
  yield takeEvery(ActionType.LOGOUT_REQUEST, logOutUser)
}

function* signinwithGSaga() {
  yield takeEvery(ActionType.SIGNIN_WITH_GOOGLE_REQUEST, signinWithGUser)
}

export function* authSaga() {
    yield all([
        signupSaga(),
        loginSaga(),
        forgotSaga(),
        logOutSaga(),
        signinwithGSaga()
    ])
}