import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { toast } from '@mfe/shared/dist/bundle';
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyles from './GlobalStyles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './scss/index.scss';

toast.configure({ hideProgressBar: true, autoClose: 3000 });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
      <GlobalStyles />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
