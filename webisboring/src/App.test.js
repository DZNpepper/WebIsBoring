import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header text correctly', () => {
  render(<App />);
  const headerElement = screen.getByText(/The Web is Boring/i);
  expect(headerElement).toBeInTheDocument();
});
