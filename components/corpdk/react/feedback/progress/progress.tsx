import React, { ReactNode } from 'react';

export type ProgressProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Progress({ children }: ProgressProps) {
  return (
    <div>
      {children}
    </div>
  );
}
