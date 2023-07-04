import React from 'react';
import { Theme } from './theme-provider';
import { Button } from './button.example';

export const BasicThemeProviderLight = () => {
  return (
    <Theme.ThemeProvider>
      <Button/>
    </Theme.ThemeProvider>
  );
}

export const BasicThemeProviderDark = () => {
  return (
    <Theme.ThemeProvider dark>
      <Button/>
    </Theme.ThemeProvider>
  );
}
