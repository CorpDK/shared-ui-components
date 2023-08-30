import React from "react";
import Cookies from "universal-cookie";
import { setThemeScheme, useThemeSelector } from "./theme-selector";

export const ExampleComponent = () => {
  const context = useThemeSelector();
  const toggle = () => {
    setThemeScheme(context, { dark: !context.dark });
  };

  const selector = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeScheme(context, { theme: event.target.value });
  };

  const options: React.ReactComponentElement<"option">[] = [];
  const { availableThemes, dark, theme } = context;
  availableThemes.forEach((element) => {
    options.push(
      <option key={element} value={element}>
        {element}
      </option>
    );
  });
  const cookie = new Cookies();
  return (
    <>
      Current Scheme: {dark ? "Dark" : "Light"}
      <br />
      Current Theme: {theme}
      <br />
      Current Cookie Value: dark-mode: {cookie.get("dark-mode")}
      {" | "}
      theme-name: {cookie.get("theme-name")}
      <br />
      <button type='button' onClick={toggle}>Toggle Theme</button>
      <select onChange={selector}>{options}</select>
    </>
  );
};
