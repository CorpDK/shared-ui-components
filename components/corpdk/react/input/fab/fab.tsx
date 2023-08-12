import React, { ReactNode } from 'react';

export type FabProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Fab({ children }: FabProps) {
  return (
    <div>
      {children}
    </div>
  );
}
