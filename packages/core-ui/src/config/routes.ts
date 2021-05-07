// import { lazy } from 'react';
import { createBrowserHistory } from 'history';
import { routes as routes_config, IRoutesConfig } from './routes_config';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import FeatureOne from '../micro-frontend/FeatureOne';

export const history = createBrowserHistory();

// const FeatureOneApp = lazy(() => import('@mfe/feature-01/dist/exports'));

export const routes: IRoutesConfig = {
  [routes_config.index.id]: {
    ...routes_config.index,
    component: Home
  },
  [routes_config.featureOneApp.id]: {
    ...routes_config.featureOneApp,
    component: FeatureOne
  },
  [routes_config.about.id]: {
    ...routes_config.about,
    component: About
  },
  [routes_config.contact.id]: {
    ...routes_config.contact,
    component: Contact
  },  
};
