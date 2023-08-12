import React from 'react';
import { render } from '@testing-library/react';
import { BasicProgress } from './progress.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProgress />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
