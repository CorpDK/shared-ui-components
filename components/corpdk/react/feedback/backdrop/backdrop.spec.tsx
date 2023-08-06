import React from 'react';
import { render } from '@testing-library/react';
import { BasicBackdrop } from './backdrop.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBackdrop />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
