import { Router } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import { createBrowserHistory } from 'history';
import styled from 'styled-components'
import './scss/index.scss';

styled['config']['SC_HASH_PREFIX'] = 'feature-01-';

const defaultHistory = createBrowserHistory();

export type IProps = {
  history?: any;
};

export const App: React.FC<IProps> = (props) => {
  const { history } = props;

  return (
    <Router history={history || defaultHistory}>
      <Routes />
    </Router>
  );
};

export default App;
