import { Route, Switch } from 'react-router-dom';
import Order from '../components/Order';
import WishList from '../components/WishList';
import Alerts from '../components/Alerts';
import { RecipeDetails } from '../components/RecipeDetails';

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
	{
		path: () => '/feature-one/alerts',
		exact: true,
		component: Alerts,
	},
	{
		path: () => '/feature-one/recipe-details/:slug',
		exact: true,
		component: RecipeDetails,
	},
];

export const Routes : React.FC = () => {
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
