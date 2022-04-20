import React from 'react';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  waitFor,
  cleanup,
  within,
  fireEvent,
} from '@testing-library/react';

import * as stories from './Button.stories';

describe('Default', () => {
  afterEach(() => {
    cleanup();
  });

  const { Default } = stories;

  it('should have a custom label', async () => {
    const { queryByText, getByRole } = render(<Default label="Custom Label" />);

    await waitFor(() => {
      expect(queryByText('Custom Label')).toBeInTheDocument();
    });
  });
})
