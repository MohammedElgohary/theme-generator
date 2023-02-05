import { createGlobalStyle } from "styled-components";
import { currentMeasurements } from "../utils/current";
import { store } from "./store";

const theme = store.getState().theme;
const CurrentMeasurements = currentMeasurements(theme);

/**
 * Sets the root colors
 */
const rootKeys: any = {};

Object.keys(theme.colors).map((mainKey) => {
  Object.keys(theme.colors[mainKey]).map((key) => {
    rootKeys[`--color-${mainKey}-${key}`] = theme.colors[mainKey][key];
  });
});

/**
 * Configure global styles
 */
export const initializeStyle = (dir: "rtl" | "ltr") =>
  createGlobalStyle({
    ":root": rootKeys,
    body: {
      direction: dir,
      fontFamily: theme.fonts[dir],
      fontSize: CurrentMeasurements.size,
    },
    "input[type='color' i]": {
      flexGrow: "1 !important",
      height: "50px !important",
      border: "unset !important",
      padding: "0px !important",
      backgroundColor: "inherit !important",
      color: "inherit !important",
      cursor: "pointer !important",
      margin: "0px !important",
    },
  });
