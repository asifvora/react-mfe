import { Router } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import { StyleProvider } from './StyleProvider';
import { createBrowserHistory } from 'history';
import './scss/index.scss';

const defaultHistory = createBrowserHistory();

export type IProps = {
  history?: any;
  scope?: string;
};

export const App: React.FC<IProps> = (props) => {
  const { history, scope } = props;

  return (
    <StyleProvider scope={scope}>
      <Router history={history || defaultHistory}>
        <Routes />
      </Router>
    </StyleProvider>
  );
};

export default App;
