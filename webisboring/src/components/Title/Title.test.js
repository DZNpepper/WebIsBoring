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

  test('applies "title" class when center is true', () => {
    const text = 'Centered Title';
    const { getByText } = render(<Title text={text} center={true} />);
    const titleElement = getByText(text);
    expect(titleElement).toHaveClass('title');
    // Checks if the title class is applied
  });

  test('does not apply "title" class when center is false', () => {
    const text = 'Not Centered Title';
    const { getByText } = render(<Title text={text} center={false} />);
    const titleElement = getByText(text);
    expect(titleElement).not.toHaveClass('title');
    // Checks if the title class is not applied
  });
});
