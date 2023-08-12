import React from 'react';
import { render } from '@testing-library/react';
import { BasicFab } from './fab.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFab />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
