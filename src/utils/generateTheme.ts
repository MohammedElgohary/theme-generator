import { Hex2HSLA } from "./Hex2HSLA";
import { printHSLA } from "./printHSLA";
import { ColorInterface } from "./utils.types";

export function generateTheme(
  hexColor: string,
  colorsCount: number = 5
): ColorInterface {
  const { h, s, l, a } = Hex2HSLA(hexColor),
    range = Math.floor(l / colorsCount) || 1;

  let colors: any = {
    main: hexColor,
  };

  for (let index = 1; index < colorsCount + 1; index++) {
    colors[index * 100] = printHSLA({
      h,
      s,
      l:
        (l / range) * index > 100
          ? 90 + Math.random() * 10
          : (l / range) * index,
      a,
    });
  }

  return colors;
}
