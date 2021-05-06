import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../config/routes';

export const Routes: React.FC = () => {
  return (
    <Switch>
      {Object.keys(routes).map((key) => {
        const { component: Component, exact, path, id } = routes[key];
        return (
          <Route exact={exact} path={path} key={id} component={Component} />
        );
      })}
    </Switch>
  );
};

export default Routes;
