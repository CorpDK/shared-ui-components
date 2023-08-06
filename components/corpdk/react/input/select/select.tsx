import React, { ReactNode } from 'react';

export type SelectProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Select({ children }: SelectProps) {
  return (
    <div>
      {children}
    </div>
  );
}
