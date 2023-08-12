import React, { ReactNode } from 'react';

export type RatingProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Rating({ children }: RatingProps) {
  return (
    <div>
      {children}
    </div>
  );
}
