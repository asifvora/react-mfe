import { Route, Switch } from 'react-router-dom';
import Order from './Order';

export const RoutesList = [
	{
		path: () => '/order',
		exact: true,
		component: Order,
	},
];

export const Routes = () => {
	return (
		<Switch>
			{RoutesList.map((values, key) => {
				const { exact, path, component: Component } = values;
				return <Route key={key} exact={exact} path={path()} component={Component} />;
			})}
		</Switch>
	);
};

export default Routes;
