import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
	return (
		<header className="App-header">
			<Link to="home">Home</Link>
			<Link to="about">About</Link>
			<Link to="contact">Contact</Link>
			<img src={logo} className="App-logo" alt="logo" />
		</header>
	);
}

export default Header;
