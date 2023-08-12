import React from 'react';
import { render } from '@testing-library/react';
import { BasicRating } from './rating.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRating />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
