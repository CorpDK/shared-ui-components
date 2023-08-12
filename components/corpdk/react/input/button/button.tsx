import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.scss";

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  variant?: "filled" | "outlined" | "text" | "elevated" | "tonal";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "filled",
  ...props
}: ButtonProps) {
  switch (variant) {
    case "filled":
      return <FilledButton {...props}>{children}</FilledButton>;
    case "elevated":
      return <ElevatedButton {...props}>{children}</ElevatedButton>;
    case "outlined":
      return <OutlinedButton {...props}>{children}</OutlinedButton>;
    case "text":
      return <TextButton {...props}>{children}</TextButton>;
    case "tonal":
      return <TonalButton {...props}>{children}</TonalButton>;
  }
}

function FilledButton({ children, className, ...props }: ButtonProps) {
  return (
    <>
      <button className={classNames("filledButton", className)} {...props}>
        {children}
      </button>
    </>
  );
}

function OutlinedButton({ children, className, ...props }: ButtonProps) {
  return (
    <>
      <button className={classNames("outlinedButton", className)} {...props}>
        {children}
      </button>
    </>
  );
}

function TextButton({ children, className, ...props }: ButtonProps) {
  return (
    <>
      <button className={classNames("textButton", className)} {...props}>
        {children}
      </button>
    </>
  );
}

function ElevatedButton({ children, className, ...props }: ButtonProps) {
  return (
    <>
      <button className={classNames("elevatedButton", className)} {...props}>
        {children}
      </button>
    </>
  );
}

function TonalButton({ children, className, ...props }: ButtonProps) {
  return (
    <>
      <button className={classNames("tonalButton", className)} {...props}>
        {children}
      </button>
    </>
  );
}
