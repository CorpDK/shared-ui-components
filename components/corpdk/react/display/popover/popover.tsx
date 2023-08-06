import React, { ReactNode } from 'react';

export type PopoverProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Popover({ children }: PopoverProps) {
  return (
    <div>
      {children}
    </div>
  );
}
