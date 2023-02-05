import { printHSLA } from "./printHSLA";
import { HSLAInterface } from "./utils.types";

/**
 * Converts a hex color number to it's HSLA color.
 * @param hex - color in #rrggbbaa format
 * @returns { object } - HSLA color in format of { h: number, s: number, l: number, a: number, color: string }
 */
export function Hex2HSLA(hex: string): HSLAInterface & { color: string } {
  hex = hex.replace("#", "");

  // convert the color:
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // convert the alpha:
  var a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) : 1;

  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  // return the hsla color:
  return {
    h,
    l,
    s,
    a,
    color: printHSLA({
      h,
      s,
      l,
      a,
    }),
  };
}
