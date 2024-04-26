import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Landing from './Landing';

describe('Landing Component', () => {
  test('renders text, image, and a button', () => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    // Check for main title
    expect(screen.getByText("The Web is Boring")).toBeInTheDocument();
    
    // Check for description text
    expect(screen.getByText("Discover the components of computers. Select the first component to learn how to build a PC.")).toBeInTheDocument();
    
    // Check for image
    expect(screen.getByAltText("Computer Case")).toBeInTheDocument();
    
    // Check for button and simulate button click
    const button = screen.getByRole('button', { name: 'Explore' });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});
