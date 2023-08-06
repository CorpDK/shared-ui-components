import React from 'react';
import { render } from '@testing-library/react';
import { BasicRadioGroup } from './radio-group.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRadioGroup />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
