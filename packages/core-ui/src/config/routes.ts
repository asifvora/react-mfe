import { lazy } from 'react';
import { createBrowserHistory } from 'history';
import { routes as routes_config, IRoutesConfig } from './routes_config';

export const history = createBrowserHistory();

export const routes: IRoutesConfig = {
  [routes_config.index.id]: {
    ...routes_config.index,
    component: lazy(() => import('../pages/Home'))
  },
  [routes_config.featureOneApp.id]: {
    ...routes_config.featureOneApp,
    component: lazy(() => import('../micro-frontend/FeatureOne'))
  },
  [routes_config.about.id]: {
    ...routes_config.about,
    component: lazy(() => import('../pages/About'))
  },
  [routes_config.recipes.id]: {
    ...routes_config.recipes,
    component: lazy(() => import('../pages/Recipes'))
  },  
  [routes_config.notFound.id]: {
    ...routes_config.notFound,
    component: lazy(() => import('../pages/NotFound'))
  },  
};
