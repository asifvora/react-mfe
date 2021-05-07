import { Router } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import { createBrowserHistory } from 'history';
import './scss/index.scss';

const defaultHistory = createBrowserHistory();

export type IProps = {
  history?: any;
};

export const App: React.FC<IProps> = (props) => {
  const { history } = props;

  return (
    <Router history={history || defaultHistory}>
      <span className="title">Hello 007</span>
      <Routes />
    </Router>
  );
};

export default App;
