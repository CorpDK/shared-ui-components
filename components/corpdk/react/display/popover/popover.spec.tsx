import React from 'react';
import { render } from '@testing-library/react';
import { BasicPopover } from './popover.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPopover />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
