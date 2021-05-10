import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createReducer from '../reducers';

const configureStore = () => {
  const store = createStore(createReducer(), applyMiddleware(thunk));

  store['asyncReducers'] = {};

  store['injectReducer'] = (reducers : any) => {
    store['asyncReducers'] = {
        ...reducers
    };

    store.replaceReducer(createReducer(store['asyncReducers']));

    return store;
  };

  return store;
};

export default configureStore;
