import React, { ReactNode } from 'react';

export type AlertProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Alert({ children }: AlertProps) {
  return (
    <div>
      {children}
    </div>
  );
}
