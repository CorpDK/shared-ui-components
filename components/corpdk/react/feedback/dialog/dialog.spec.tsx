import React from 'react';
import { render } from '@testing-library/react';
import { BasicDialog } from './dialog.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDialog />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
