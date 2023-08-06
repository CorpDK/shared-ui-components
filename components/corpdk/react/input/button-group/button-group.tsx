import React, { ReactNode } from 'react';

export type ButtonGroupProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ButtonGroup({ children }: ButtonGroupProps) {
  return (
    <div>
      {children}
    </div>
  );
}
