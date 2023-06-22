import { createTheme } from "@teambit/base-react.themes.theme-provider";
/* import the default tokens from the file generated in the previous step */
import { defaultDesignTokenValues } from "./design-tokens";
import { defaultColorTokenValues } from "@corpdk/themes.color-provider";

const defaultThemeTokens = {...defaultDesignTokenValues, ...defaultColorTokenValues}

/* create a theme schema to standardize future theme extensions */
export type ThemeSchema = typeof defaultThemeTokens;

/* generate a theme using the design token default values */
export const Theme = createTheme<ThemeSchema>({
  theme: defaultThemeTokens,
  withoutCssVars: false,
});
