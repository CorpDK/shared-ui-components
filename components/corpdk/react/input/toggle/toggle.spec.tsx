import React from 'react';
import { render } from '@testing-library/react';
import { BasicToggle } from './toggle.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicToggle />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
