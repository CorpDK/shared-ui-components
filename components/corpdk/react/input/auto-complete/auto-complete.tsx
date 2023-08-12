import React, { ReactNode } from 'react';

export type AutoCompleteProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AutoComplete({ children }: AutoCompleteProps) {
  return (
    <div>
      {children}
    </div>
  );
}
