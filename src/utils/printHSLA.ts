import { HSLAInterface } from "./utils.types";

/**
 * Prints a hsla color
 * @param param0  { object } - HSLA color in format of { h: number, s: number, l: number, a: number }
 * @returns { string } of hsla color
 */
export function printHSLA({ h, s, l, a = 1 }: HSLAInterface): string {
  /**
   * Converts args to be integer numbers
   */
  h = Math.floor(h);
  s = Math.floor(s);
  l = Math.floor(l);
  a = Math.floor(a);

  return a !== 1 ? `hsla(${h},${s}%,${l}%,${a})` : `hsl(${h},${s}%,${l}%)`;
}
