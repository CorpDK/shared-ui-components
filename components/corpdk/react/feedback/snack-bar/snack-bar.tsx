import React, { ReactNode } from 'react';

export type SnackBarProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function SnackBar({ children }: SnackBarProps) {
  return (
    <div>
      {children}
    </div>
  );
}
