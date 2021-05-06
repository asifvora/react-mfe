import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;