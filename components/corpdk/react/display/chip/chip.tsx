import React, { ReactNode } from 'react';

export type ChipProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <div>
      {children}
    </div>
  );
}
