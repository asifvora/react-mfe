import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducer from '../reducers';

const configureStore = () => {
  const store = createStore(
    createReducer(),
    composeWithDevTools(applyMiddleware(thunk, createLogger()))
  );

  store['asyncReducers'] = {};

  store['injectReducer'] = (reducers: any) => {
    store['asyncReducers'] = {
      ...reducers,
    };
	console.log(store['asyncReducers']);
	
    store.replaceReducer(createReducer(store['asyncReducers']));

    return store;
  };

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
};

export default configureStore;
