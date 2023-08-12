import React, { ReactNode } from 'react';

export type CardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div>
      {children}
    </div>
  );
}
