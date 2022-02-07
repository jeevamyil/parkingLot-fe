import { takeEvery, call, put, fork } from "redux-saga/effects";
import { actions } from "../Reducer/ActionConstants";
import * as API from './api';

function* checkoutWorkerSaga(action) {

    try {
       const response= yield call(API.checkoutAPI, { data: action.value });
       const result = yield response.json();
       yield put({type:actions.SET_CHKOUT,value:result});
    } catch (e) {
        console.log(e);
    }
}

function* checkoutWatcherSaga() {
    yield takeEvery(actions.CHECKOUT, checkoutWorkerSaga);
}


const checkoutSaga = [
    fork(checkoutWatcherSaga)
];

export default checkoutSaga;