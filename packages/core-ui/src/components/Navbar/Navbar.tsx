import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiMenu, BiX } from 'react-icons/bi';
import { routes } from '../../config/routes_config';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
} from './Styled';

export const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to={routes.index.path_string()}>
              <NavIcon />
              Food Wood
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>
            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to={routes.index.path_string()}>
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to={routes.about.path_string()}>
                  About
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to={routes.recipes.path_string()}>
                  Recipes
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  onClick={closeMenu}
                  to={`${routes.featureOneApp.path_string()}/order`}
                >
                  Order
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  onClick={closeMenu}
                  to={`${routes.featureOneApp.path_string()}/wish-list`}
                >
                  Wishlist
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  onClick={closeMenu}
                  to={`${routes.featureOneApp.path_string()}/alerts`}
                >
                  Alerts
                </MenuLink>
              </MenuItem>
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
