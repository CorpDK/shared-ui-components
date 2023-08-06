import React from 'react';
import { render } from '@testing-library/react';
import { BasicSurface } from './surface.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSurface />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
