
import { takeEvery, call, put, fork } from "redux-saga/effects";
import { actions } from "../Reducer/ActionConstants";
import * as API from './api';

function* findWorkerSaga(action) {

    try {
        const response = yield call(API.findAPI, { data: action.value });
        const result = yield response.json();
        yield put({ type: actions.SET_FIND, value: result });
    } catch (e) {
        console.log(e);
    }
}

function* findWatcherSaga() {
    yield takeEvery(actions.FIND, findWorkerSaga);
}

const findSaga = [
    fork(findWatcherSaga)
];

export default findSaga;