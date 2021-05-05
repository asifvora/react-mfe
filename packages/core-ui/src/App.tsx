import { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import { createBrowserHistory } from 'history';
import './App.css';

const OrderApp = lazy(() => import('order/dist/exports'));

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<div className="App">
				<Header />
			</div>
			<Suspense fallback={<span>Loading...</span>}>
				<Switch>
					<Route exact path="/home" component={Home} />r
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/order" component={OrderApp} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
