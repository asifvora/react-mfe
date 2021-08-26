import { combineReducers } from 'redux';
import alerts from './alerts';

export const reducerMap = {
  alerts,
};

const rootReducer = combineReducers({
  ...reducerMap,
});

export default rootReducer;
