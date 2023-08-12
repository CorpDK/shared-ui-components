import React, { ReactNode } from 'react';

export type TableProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Table({ children }: TableProps) {
  return (
    <div>
      {children}
    </div>
  );
}
