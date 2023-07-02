import React from "react";
import { setThemeScheme, useThemeSelector } from "./theme-selector";
import Cookies from "universal-cookie";

export const ExampleComponent = () => {
  const context = useThemeSelector();
  const toggle = () => {
    setThemeScheme(context, { dark: !context.dark });
  };

  const selector = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeScheme(context, { theme: event.target.value });
  };

  const options: React.JSX.IntrinsicElements["option"][] = [];
  context.availableThemes.forEach((element) => {
    options.push(
      <option key={element} value={element}>
        {element}
      </option>
    );
  });
  const cookie = new Cookies();
  return (
    <>
      Current Scheme: {context.dark ? "Dark" : "Light"}
      <br />
      Current Theme: {context.theme}
      <br />
      Current Cookie Value: dark-mode: {cookie.get("dark-mode")}
      {" | "}
      theme-name: {cookie.get("theme-name")}
      <br />
      <button onClick={toggle}>Toggle Theme</button>
      <select onChange={selector}>{options}</select>
    </>
  );
};
