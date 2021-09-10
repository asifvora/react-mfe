import { combineReducers } from 'redux';
import counter from './counter';
import app from './app';

const staticReducer = {
  counter,
  app
};

const createReducer = (asyncReducers = {}) =>
  combineReducers({
    ...staticReducer,
    ...asyncReducers,
  });

export default createReducer;
