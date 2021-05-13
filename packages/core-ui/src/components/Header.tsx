import { NavLink } from 'react-router-dom';
import { routes } from '../config/routes_config';

const style = { fontSize: 20 };

function Header() {
  return (
    <div style={{ padding: 15, display: 'flex' }}>
      <div style={{ padding: '0px 15px' }}>
        <NavLink style={{ ...style }} to={routes.index.path_string()}>
          Home
        </NavLink>
      </div>
      <div style={{ padding: '0px 15px' }}>
        <NavLink style={{ ...style }} to={routes.about.path_string()}>
          About
        </NavLink>
      </div>
      <div style={{ padding: '0px 15px' }}>
        <NavLink style={{ ...style }} to={routes.contact.path_string()}>
          Contact
        </NavLink>
      </div>
      <div style={{ padding: '0px 15px' }}>
        <NavLink
          style={{ ...style }}
          to={`${routes.featureOneApp.path_string()}/order`}
        >
          Feature-one app order page
        </NavLink>
      </div>
      <div style={{ padding: '0px 15px' }}>
        <NavLink
          style={{ ...style }}
          to={`${routes.featureOneApp.path_string()}/wish-list`}
        >
          Feature-one app wish-list page
        </NavLink>
      </div>
      <div style={{ padding: '0px 15px' }}>
        <NavLink
          style={{ ...style }}
          to={`${routes.featureOneApp.path_string()}/alerts`}
        >
          Feature-one app alerts page
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
