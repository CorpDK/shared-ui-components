import React from 'react';
import { render } from '@testing-library/react';
import { BasicButtonGroup } from './button-group.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicButtonGroup />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
