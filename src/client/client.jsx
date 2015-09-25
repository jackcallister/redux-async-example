import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from '../shared/reducers/index';
import User from '../shared/components/UserConnector';
import promiseMiddleware from './promiseMiddleware';

const combinedReducers = combineReducers(reducers);
const createFinalStore = compose(applyMiddleware(promiseMiddleware))(createStore);
const store = createFinalStore(combinedReducers);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <User />
    </Provider>,
    document.getElementById('app')
  );
});
