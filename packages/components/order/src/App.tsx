import { Router } from 'react-router-dom';
import { Routes } from './Routes';
import { createBrowserHistory } from 'history';
import './App.css';

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<Routes />
		</Router>
	);
}

export default App;
