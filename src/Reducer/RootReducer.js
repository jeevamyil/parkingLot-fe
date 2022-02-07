
import {CheckinReducer} from './CheckinReducer';
import {LotReducer} from './LotReducer';
import {combineReducers} from 'redux';
import { initReducer } from './InitReducer';
import { CheckoutReducer } from './CheckoutReducer';
import { FindReducer } from './FindReducer';

export const RootReducer = combineReducers({init:initReducer,lots:LotReducer,checkin: CheckinReducer,checkout:CheckoutReducer,find:FindReducer });