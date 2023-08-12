import React, { ReactNode } from 'react';

export type AppBarProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AppBar({ children }: AppBarProps) {
  return (
    <div>
      {children}
    </div>
  );
}
