import React, { ReactNode } from 'react';

export type SliderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Slider({ children }: SliderProps) {
  return (
    <div>
      {children}
    </div>
  );
}
