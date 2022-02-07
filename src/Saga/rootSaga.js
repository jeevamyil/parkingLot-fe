import checkinSaga from './checkinSaga';
import { all } from 'redux-saga/effects';
import showLotsSaga from './showLotsSaga';
import checkoutSaga from './checkoutSaga';
import findSaga from './findSaga';
import initSaga from './initSaga';

export default function* rootSaga(){
    yield all ([...checkinSaga,...showLotsSaga,...checkoutSaga,...findSaga,...initSaga]);
}