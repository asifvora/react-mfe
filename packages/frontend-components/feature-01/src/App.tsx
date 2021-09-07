import { Router } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import { createBrowserHistory } from 'history';
import './scss/index.scss';
import { StyleSheetManager } from 'styled-components';
import extraScopePlugin from 'stylis-plugin-extra-scope';

const defaultHistory = createBrowserHistory();

Object.defineProperty(extraScopePlugin, 'name', {
  value: 'asif',
});

export type IProps = {
  history?: any;
  scope?: string;
};

export const App: React.FC<IProps> = (props) => {
  const { history, scope } = props;
  const stylisPlugins = scope ? [extraScopePlugin(`${scope}`)] : [];

  return (
    <StyleSheetManager stylisPlugins={stylisPlugins}>
      <Router history={history || defaultHistory}>
        <Routes />
      </Router>
    </StyleSheetManager>
  );
};

export default App;
