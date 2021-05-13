import { lazy } from 'react';
import { createBrowserHistory } from 'history';
import { routes as routes_config, IRoutesConfig } from './routes_config';

export const history = createBrowserHistory();

// const FeatureOneApp = lazy(() => import('@mfe/feature-01/dist/exports'));

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
  [routes_config.contact.id]: {
    ...routes_config.contact,
    component: lazy(() => import('../pages/Contact'))
  },  
};
