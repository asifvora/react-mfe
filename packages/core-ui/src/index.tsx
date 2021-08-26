import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { toast } from '@mfe/shared/dist/bundle';
import { Provider } from 'react-redux'
import store from './store'

import './scss/index.scss';

toast.configure({ hideProgressBar: true, autoClose: 3000 });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
