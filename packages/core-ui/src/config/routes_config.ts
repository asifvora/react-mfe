import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type IRoutesConfig = {
  [key: string]: {
    id: string;
    name: string;
    description?: string;
    path: string;
    path_string: (params?: any) => string;
    exact: boolean;
    isPrivate: boolean;
    component?:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>;
  };
};
/**
 * @description the aim to create this config is to have
 *  a single source of truth for the routes defination.
 *  the reason we are not importing the components here
 *  for the property `component` is to avoid circular
 *  import dependencies error.
 *  components will be assigned in config/routes.ts
 */
export const routes: IRoutesConfig = {
  index: {
    id: 'index',
    name: 'Home',
    description: 'Home',
    path: '/',
    path_string: () => {
      return `/`;
    },
    exact: true,
    isPrivate: false,
    component: undefined
  },
  about: {
    id: 'about',
    name: 'About',
    description: 'About',
    path: '/about',
    path_string: () => {
      return `/about`;
    },
    exact: true,
    isPrivate: false,
    component: undefined
  },
  contact: {
    id: 'contact',
    name: 'Contact',
    description: 'Contact',
    path: '/contact',
    path_string: () => {
      return `/contact`;
    },
    exact: true,
    isPrivate: false,
    component: undefined
  },
  featureOneApp: {
    id: 'featureOneApp',
    name: 'Feature One App',
    description: 'Feature One App',
    path: '/feature-one',
    path_string: () => {
      return `/feature-one`;
    },
    exact: false,
    isPrivate: false,
    component: undefined
  }
};
