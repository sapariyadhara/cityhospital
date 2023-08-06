import { put, takeEvery, delay } from 'redux-saga/effects';
import { INCREMENT_ASYNC, INCREMENT_COUNTER } from '../ActionTypes';


export function* incrementAsync() {
	yield delay(1000);
	yield put({ type: INCREMENT_COUNTER });
}

export default function* rootSaga() {
	yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}