import React, { ReactNode } from 'react';

export type RadioGroupProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function RadioGroup({ children }: RadioGroupProps) {
  return (
    <div>
      {children}
    </div>
  );
}
