import { Route, Switch } from 'react-router-dom';
import Order from '../components/Order';
import WishList from '../components/WishList';

export const RoutesList = [
	{
		path: () => '/feature-one/order',
		exact: true,
		component: Order,
	},
	{
		path: () => '/feature-one/wish-list',
		exact: true,
		component: WishList,
	},
];

export const Routes = () => {
	return (
		<Switch>
			{RoutesList.map((values, key) => {
				const { exact, path, component: Component } = values;
				return <Route key={key} exact={exact} path={path()} render={Component} />;
			})}
		</Switch>
	);
};

export default Routes;
