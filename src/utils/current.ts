import { ThemeInterface } from "./utils.types";

export function currentMeasurements(theme: ThemeInterface) {
  var result = {
    space: theme.spacing[getCurrentWidthCode()],
    size: theme.sizes[getCurrentWidthCode()],
  };

  function getCurrentWidthCode() {
    if (window.innerWidth >= 1400) return "xxl";
    if (window.innerWidth >= 1200) return "xl";
    if (window.innerWidth >= 992) return "lg";
    if (window.innerWidth >= 768) return "md";
    if (window.innerWidth >= 576) return "sm";
    if (window.innerWidth >= 320) return "xs";
    return "xxs";
  }

  return result;
}
