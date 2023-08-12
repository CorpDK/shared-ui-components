import React from 'react';
import { render } from '@testing-library/react';
import { BasicSkeleton } from './skeleton.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSkeleton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
