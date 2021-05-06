import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders Button text', () => {
  render(<Button />);
  const linkElement = screen.getByText(/Shared App/i);
  expect(linkElement).toBeInTheDocument();
});
