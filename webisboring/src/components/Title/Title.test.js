import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
  test('renders with correct text', () => {
    const text = 'The Web is Boring';
    const { getByText } = render(<Title text={text} />);
    const titleElement = getByText(text);
    expect(titleElement).toBeInTheDocument();
  });
});
