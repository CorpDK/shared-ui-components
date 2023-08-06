import React, { ReactNode } from 'react';

export type SurfaceProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Surface({ children }: SurfaceProps) {
  return (
    <div>
      {children}
    </div>
  );
}
