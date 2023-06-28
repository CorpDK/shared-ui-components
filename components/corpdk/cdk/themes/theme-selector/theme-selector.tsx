import { createContext, useContext } from "react";
import Cookies from "universal-cookie";

const defaultThemeSelectorValues = {
  colorScheme: "light",
  theme: "default",
  availableThemes: ["default"],
  setColorScheme: (value) => {},
  setTheme: (value) => {},
};

const ThemeSelectorContext = createContext(defaultThemeSelectorValues);

export const ThemeSelectorProvider = ThemeSelectorContext.Provider;

export const useThemeSelector = () => useContext(ThemeSelectorContext);

const getPreferredColorScheme = () => {
  const preffersDarkMode: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return preffersDarkMode ? "dark" : "light";
};

export const getInitialThemeSchemeOptions = () => {
  const cookie = new Cookies();
  const scheme = cookie.get("color-scheme");
  const theme = cookie.get("theme-name");
  return {
    scheme: scheme ? scheme : getPreferredColorScheme(),
    theme: theme ? theme : "default",
  };
};

export const setThemeScheme = (
  context: typeof defaultThemeSelectorValues,
  params: {
    scheme?: "light" | "dark";
    theme?: string;
  }
) => {
  const cookie = new Cookies();
  if (params.scheme) {
    if (params.scheme === getPreferredColorScheme()) {
      cookie.remove("color-scheme");
    } else {
      cookie.set("color-scheme", params.scheme);
    }
    context.setColorScheme(params.scheme);
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
