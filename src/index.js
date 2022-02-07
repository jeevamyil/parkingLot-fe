import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import rootSaga from './Saga/rootSaga';
import{ createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { RootReducer } from './Reducer/RootReducer';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(RootReducer,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Provider store ={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
