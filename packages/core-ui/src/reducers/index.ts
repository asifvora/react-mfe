import { combineReducers } from 'redux';
import counter from './counter';
import { reducerMap } from '@mfe/feature-01/dist/bundle';

const rootReducer = combineReducers({
  counter,
  ...reducerMap
});

export default rootReducer;
