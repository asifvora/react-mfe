import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders Button text', () => {
  render(<Button>Click on me</Button>);
  const linkElement = screen.getByText(/Click on me/i);
  expect(linkElement).toBeInTheDocument();
});
