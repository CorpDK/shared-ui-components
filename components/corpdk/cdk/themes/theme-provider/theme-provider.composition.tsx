import React from 'react';
import { Theme } from './theme-provider';
import { Button } from './button.example';

export const BasicThemeProvider = () => {
  return (
    <Theme.ThemeProvider>
      <Button/>
    </Theme.ThemeProvider>
  );
}
