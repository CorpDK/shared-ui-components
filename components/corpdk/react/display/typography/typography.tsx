import React, { ReactNode } from 'react';

export type TypographyProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Typography({ children }: TypographyProps) {
  return (
    <div>
      {children}
    </div>
  );
}
