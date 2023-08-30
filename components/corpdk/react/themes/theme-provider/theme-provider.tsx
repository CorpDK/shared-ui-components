import { defaultColorTokenValues } from "@corpdk/react.themes.color-provider";
import { defaultFontTokenValues } from "@corpdk/react.themes.font-provider";
import React, { createContext, useContext, useMemo } from "react";
import { globalStyleDark, globalStyleLight } from "./common-style";
import "./common.scss";
import { defaultDesignTokenValues } from "./design-tokens";

const defaultThemeTokens = {
  ...defaultDesignTokenValues,
  ...defaultColorTokenValues,
  ...defaultFontTokenValues,
};

export type ThemeSchema = typeof defaultThemeTokens;

const ThemeContext = createContext(defaultThemeTokens);

const useTheme = () => useContext(ThemeContext);

export type ThemeProviderProps = {
  overrides?: Partial<ThemeSchema>;
  dark?: boolean;
  children?: React.ReactNode;
};

const computeCssVars = (theme): React.CSSProperties => {
  return Object.entries(theme)
    .map(([key, val]: [string, any]): [string, any] => {
      const varName = key.replace(/[A-Z]/g, "-$&").toLowerCase();
      const varKey = `--${varName}`;
      return [varKey, val];
    })
    .reduce((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
}

const ThemeProvider = ({
  children,
  overrides,
  dark = false,
}: ThemeProviderProps) => {
  const theme = useMemo(
    () => ({
      ...defaultThemeTokens,
      ...overrides,
    }),
    [defaultThemeTokens, overrides]
  );

  const cssVars = computeCssVars(theme);

  const globalStyle = dark ? globalStyleDark : globalStyleLight;

  let style = "";
  const styleObj = { ...cssVars, ...globalStyle };
  Object.entries(styleObj).forEach(([k, v]: [string, any]) => {
    style = `${style}${style !== "" ? " " : ""}${k}: ${v};`;
  });
  document.querySelector(":root")?.setAttribute("style", style);

  return (
    <>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </>
  );
};

export const Theme = { ThemeProvider, useTheme };
