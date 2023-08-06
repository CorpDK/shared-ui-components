import React, { ReactNode } from 'react';

export type BadgeProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <div>
      {children}
    </div>
  );
}
