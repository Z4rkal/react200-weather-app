import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import rootReducer from './rootReducer';
import axios from 'axios';

const promise = createPromise({ types: { fulfilled: 'success' } });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(promise))
);

export default rootStore;