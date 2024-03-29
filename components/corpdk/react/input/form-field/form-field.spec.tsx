import React from 'react';
import { render } from '@testing-library/react';
import { BasicFormField } from './form-field.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFormField />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
