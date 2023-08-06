import React, { ReactNode } from 'react';

export type BackdropProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Backdrop({ children }: BackdropProps) {
  return (
    <div>
      {children}
    </div>
  );
}
