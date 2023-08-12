import React, { ReactNode } from 'react';

export type DialogProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Dialog({ children }: DialogProps) {
  return (
    <div>
      {children}
    </div>
  );
}
