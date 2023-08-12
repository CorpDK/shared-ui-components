import React from 'react';
import { render } from '@testing-library/react';
import { BasicSnackBar } from './snack-bar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSnackBar />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
