import React, { ReactNode } from 'react';

export type ToggleProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Toggle({ children }: ToggleProps) {
  return (
    <div>
      {children}
    </div>
  );
}
