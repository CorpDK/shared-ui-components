import React, { ReactNode } from 'react';

export type AvatarProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Avatar({ children }: AvatarProps) {
  return (
    <div>
      {children}
    </div>
  );
}
