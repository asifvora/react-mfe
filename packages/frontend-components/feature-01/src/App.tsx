import { Router } from 'react-router-dom';
import { Routes } from './Routes/Routes';
import { createBrowserHistory } from 'history';
import './scss/index.scss';

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<span className="title">Hello 007</span>
			<Routes />
		</Router>
	);
}

export default App;
