import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { reducerMap } from './reducers';
import configureStore from './store';

const store = configureStore();

declare global {
  interface Window {
    renderFeatureOne: any;
    unmountFeatureOne: any;
  }
}

interface IProps {
  containerId?: string;
  history?: any;
  store?: any;
}

const FeatureOneApp: React.FC<IProps> = (props) => {
  const { history, store } = props;
  const [renderApp, setRenderApp] = useState(false);

  useEffect(() => {
    store['injectReducer'](reducerMap);
    setRenderApp(true);
  }, [store]);

  return renderApp ? <Provider store={store || {}}><App history={history} /></Provider> : null;
};

// render micro frontend
window.renderFeatureOne = ({ containerId, history, store }) => {
  ReactDOM.render(
    <FeatureOneApp history={history} store={store}/>,
    document.getElementById(containerId)
  );
};

// unmount micro frontend
window.unmountFeatureOne = (containerId) => {
  const element = document.getElementById(containerId)
  element && ReactDOM.unmountComponentAtNode(element);
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
