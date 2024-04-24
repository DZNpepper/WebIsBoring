import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Achievement from './Achievement';

describe('Achievement Component', () => {
    test('transitions from visible to hidden', async () => {
        const { rerender, queryByText } = render(<Achievement show={true} message="Success!" />);
        expect(queryByText("Success!")).toBeInTheDocument();
      
        // Rerender with show set to false to simulate disappearance
        rerender(<Achievement show={false} message="Success!" />);
        await waitFor(() => {
          expect(queryByText("Success!")).not.toBeInTheDocument();
        }, { timeout: 700 });
      });
      
});
