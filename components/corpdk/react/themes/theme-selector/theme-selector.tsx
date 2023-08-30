import { createContext, useContext } from "react";
import Cookies from "universal-cookie";

const defaultThemeSelectorValues = {
  dark: false,
  theme: "default",
  availableThemes: ["default"],
  setDark: (value: boolean) => {}, // eslint-disable-line @typescript-eslint/no-unused-vars
  setTheme: (value: string) => {}, // eslint-disable-line @typescript-eslint/no-unused-vars
};

const ThemeSelectorContext = createContext(defaultThemeSelectorValues);

export const ThemeSelectorProvider = ThemeSelectorContext.Provider;

export const useThemeSelector = () => useContext(ThemeSelectorContext);

const getIfUserPreferrsDarkMode = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const getInitialThemeSchemeOptions = () => {
  const cookie = new Cookies();
  const dark: boolean = cookie.get("dark-mode");
  const theme: string = cookie.get("theme-name");
  return {
    dark: dark || getIfUserPreferrsDarkMode(),
    theme: theme || "default",
  };
};

export const setThemeScheme = (
  context: typeof defaultThemeSelectorValues,
  params: {
    dark?: boolean;
    theme?: string;
  }
) => {
  const cookie = new Cookies();
  if (params.dark !== undefined) {
    if (params.dark === getIfUserPreferrsDarkMode()) {
      cookie.remove("dark-mode");
    } else {
      cookie.set("dark-mode", params.dark);
    }
    context.setDark(params.dark);
  }
  if (params.theme) {
    if (params.theme === "default") {
      cookie.remove("theme-name");
    } else {
      cookie.set("theme-name", params.theme);
    }
    context.setTheme(params.theme);
  }
};
