import { DefaultTheme } from "styled-components";

export const mainTheme: DefaultTheme = {
  appSize: "100%",
  colors: {
    background: "#131313",
    text: "#fffffe",
    button: "#f1d5a2",
    secondary: "#fde24f",
    rgbaDark: "rgba(0,0,0,0.7)",
    rgbaLight: "rgba(255,255,255,0.6)",
  },
  size: {
    navigationSize: "12em",
    h1: "3.052em",
    h2: "2.441em",
    h3: "1.953em",
    h4: "1.563em",
    h5: "1.25em",
    p: "1.15em",
    a: "1em",
    maxWidth: "970px",
  },
  shadow: {
    elevations: [
      "0 0 0 1px rgba(0, 0, 0, 0.05)",
      "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      "0 0 0 3px rgba(66, 153, 225, 0.5)",
    ],
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
};

export const secondaryTheme: DefaultTheme = {
  appSize: "100%",
  colors: {
    background: "#fffffe",
    text: "#131313",
    button: "#f1d5a2",
    secondary: "#fde24f",
    rgbaDark: "rgba(0,0,0,0.7)",
    rgbaLight: "rgba(255,255,255,0.6)",
  },
  size: {
    navigationSize: "12em",
    h1: "3.052em",
    h2: "2.441em",
    h3: "1.953em",
    h4: "1.563em",
    h5: "1.25em",
    p: "1.15em",
    a: "1em",
    maxWidth: "970px",
  },
  shadow: {
    elevations: [
      "0 0 0 1px rgba(0, 0, 0, 0.05)",
      "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      "0 0 0 3px rgba(66, 153, 225, 0.5)",
    ],
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
};
