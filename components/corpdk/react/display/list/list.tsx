import React, { ReactNode } from 'react';

export type ListProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function List({ children }: ListProps) {
  return (
    <div>
      {children}
    </div>
  );
}
