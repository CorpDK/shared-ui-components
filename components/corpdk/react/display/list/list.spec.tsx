import React from 'react';
import { render } from '@testing-library/react';
import { BasicList } from './list.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicList />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
