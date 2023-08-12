import React, { ReactNode } from 'react';

export type TooltipProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Tooltip({ children }: TooltipProps) {
  return (
    <div>
      {children}
    </div>
  );
}
