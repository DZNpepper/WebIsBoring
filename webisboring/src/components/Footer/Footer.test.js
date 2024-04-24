import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with correct text', () => {
  const { getByText } = render(<Footer />);
  const footerText = getByText(/Tobias Deane - The Web is boring/i);
  expect(footerText).toBeInTheDocument();
});
