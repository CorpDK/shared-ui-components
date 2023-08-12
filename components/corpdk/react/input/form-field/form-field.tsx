import React, { ReactNode } from 'react';

export type FormFieldProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function FormField({ children }: FormFieldProps) {
  return (
    <div>
      {children}
    </div>
  );
}
