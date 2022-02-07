import { takeEvery, call, put, fork } from "redux-saga/effects";
import { actions } from "../Reducer/ActionConstants";
import * as API from './api';

function* showlotsWorkerSaga(action) {

    try {
        const response = yield call(API.showLotsAPI);
        const result = yield response.json();
        yield put({ type: actions.SET_LOTS, value: result });
    } catch (e) {
        console.log(e);
    }
}

function* showlotsWatcherSaga() {
    yield takeEvery(actions.SHOWLOTS, showlotsWorkerSaga);
}

const showLotsSaga = [
    fork(showlotsWatcherSaga)
];

export default showLotsSaga;