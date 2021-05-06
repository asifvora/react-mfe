import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

type ITypes = {
  title: string;
};

const welcome: ITypes = {
  title: 'Welcome',
};

export default welcome;

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
  name: 'to Storybook',
};
