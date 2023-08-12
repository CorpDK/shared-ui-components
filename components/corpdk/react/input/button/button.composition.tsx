import React from "react";
import { Button } from "./button";

export const FilledButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Button>Filled Button</Button>
      <Button disabled>Filled Button</Button>
    </div>
  );
};

export const OutlinedButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="outlined" disabled>
        Outlined Button
      </Button>
    </div>
  );
};

export const TextButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Button variant="text">Text Button</Button>
      <Button variant="text" disabled>
        Text Button
      </Button>
    </div>
  );
};

export const ElevatedButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Button variant="elevated">Elevated Button</Button>
      <Button variant="elevated" disabled>
        Elevated Button
      </Button>
    </div>
  );
};

export const TonalButton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Button variant="tonal">Tonal Button</Button>
      <Button variant="tonal" disabled>
        Tonal Button
      </Button>
    </div>
  );
};
