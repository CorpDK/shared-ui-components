import React, { ReactNode } from 'react';

export type SkeletonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Skeleton({ children }: SkeletonProps) {
  return (
    <div>
      {children}
    </div>
  );
}
