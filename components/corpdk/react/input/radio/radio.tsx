import React, { ReactNode } from 'react';

export type RadioProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Radio({ children }: RadioProps) {
  return (
    <div>
      {children}
    </div>
  );
}
