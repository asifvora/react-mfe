import { combineReducers } from 'redux';
import counter from './counter';

const staticReducer = {
  counter,
};

const createReducer = (asyncReducers = {}) =>
  combineReducers({
    ...staticReducer,
    ...asyncReducers,
  });

export default createReducer;
