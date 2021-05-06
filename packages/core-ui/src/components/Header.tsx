import { Link } from 'react-router-dom';
import { routes } from '../config/routes_config';

function Header() {
	return (
		<header className="App-header">
			<Link to={routes.index.path_string()}>Home</Link>
			<Link to={routes.about.path_string()}>About</Link>
			<Link to={routes.contact.path_string()}>Contact</Link>
			<Link to={routes.featureOneApp.path_string()}>Feature-01</Link>
		</header>
	);
}

export default Header;
