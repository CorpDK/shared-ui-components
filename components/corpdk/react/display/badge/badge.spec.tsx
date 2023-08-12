import React from 'react';
import { render } from '@testing-library/react';
import { BasicBadge } from './badge.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBadge />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
