import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store';
import { reducerMap } from './bundle';

const store = configureStore();

declare global {
  interface Window {
    renderFeatureOne: any;
    unmountFeatureOne: any;
  }
}

interface IProps  {
  history?: object;
  registerStore?: (reducers: any) => void;
};

const FeatureOneApp  : React.FC<IProps> = (props) => {
  const { history, registerStore } = props;

  useEffect(() => {
    registerStore(reducerMap);
  }, [registerStore]);

  return <App history={history} />
}

// render micro frontend
window.renderFeatureOne = (containerId, history, registerStore) => {
  ReactDOM.render(
    <FeatureOneApp history={history} registerStore={registerStore}/>,
    document.getElementById(containerId)
  );
};

// unmount micro frontend
window.unmountFeatureOne = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('FeatureOne-container')) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
