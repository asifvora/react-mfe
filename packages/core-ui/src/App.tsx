import { Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import './App.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<div className="App">
				<Header />
			</div>
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
