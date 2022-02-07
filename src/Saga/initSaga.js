

import { takeEvery, call, put,  fork } from "redux-saga/effects";
import { actions } from "../Reducer/ActionConstants";
import * as API from './api';

function* initWorkerSaga() {

    try {
       const response= yield call(API.InitAPI);
       const result = yield response.json();
       //console.log(result)
       yield put ({type: actions.SET_INIT, value: result});
    } catch (e) {
        console.log(e);
    }
}

function* initWatcherSaga() {
    yield takeEvery(actions.INIT, initWorkerSaga);
}

const initSaga = [
    fork(initWatcherSaga)
];

export default initSaga;