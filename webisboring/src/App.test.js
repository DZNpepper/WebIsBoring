import React from 'react'; 
import { render } from '@testing-library/react'; 
import App from './App'; 

describe('App component', () => {
  // Test case: Check if the App component renders without crashing
  it('renders without crashing', () => {
    // Render the App component
    render(<App />);
  });
});
