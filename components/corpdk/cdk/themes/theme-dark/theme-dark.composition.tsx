import { Theme } from '@corpdk/themes.theme-provider';
import React from 'react';
import { Button } from './button.example';
import { darkThemeOverrides } from './theme-dark';

export const BasicThemeDark = () => {
  return (
    <Theme.ThemeProvider overrides={darkThemeOverrides}>
      <Button/>
    </Theme.ThemeProvider>
  );
}
