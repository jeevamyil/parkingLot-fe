import { takeEvery, call, put, fork, take } from "redux-saga/effects";
import { actions } from "../Reducer/ActionConstants";
import * as API from './api';

function* checkinWorkerSaga(action) {

    try {
        let response = yield call(API.checkinAPI, { data: action.value });
        let result = yield response.json();
        yield put({ type: actions.SET_CHKIN, value: result });
    } catch (e) {
        console.log(e);
    }
}

function* checkinWatcherSaga() {
    yield takeEvery(actions.CHECKIN, checkinWorkerSaga);
}

function* clearcheckinWorkerSaga(action) {

    try {
        yield put({ type: actions.RESET_CHKIN });
        yield put({ type: actions.RESET_FIND });
        yield put({ type: actions.RESET_CHKOUT });
        yield put({ type: actions.RESET_LOTS });
    } catch (e) {
        console.log(e);
    }
}

function* clearcheckinWatcherSaga() {
    console.log('reset called')
    yield takeEvery(actions.RESET, clearcheckinWorkerSaga);
}

const checkinSaga = [
    fork(checkinWatcherSaga),
    fork(clearcheckinWatcherSaga)

];

export default checkinSaga;