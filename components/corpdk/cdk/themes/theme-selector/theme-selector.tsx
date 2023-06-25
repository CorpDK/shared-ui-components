import React, { ReactNode } from 'react';

export type ThemeSelectorProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ThemeSelector({ children }: ThemeSelectorProps) {
  return (
    <div>
      {children}
    </div>
  );
}
