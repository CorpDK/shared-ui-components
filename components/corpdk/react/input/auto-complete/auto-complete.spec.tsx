import React from 'react';
import { render } from '@testing-library/react';
import { BasicAutoComplete } from './auto-complete.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAutoComplete />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
