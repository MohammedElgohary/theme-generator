/**
 * Interface for a theme
 */
export interface ThemeInterface {
  colors: {
    primary: ColorInterface;
    secondary: ColorInterface;
    tertiary: ColorInterface;
    quaternary: ColorInterface;
    quinary: ColorInterface;
  };
  fonts: {
    rtl: string;
    ltr: string;
  };
  sizes: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  spacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

/**
 * Interface for a color
 */
export interface ColorInterface {
  main: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export type colorType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinary";

export type colorKeys =
  | "main"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export interface updateColorInterface {
  colors: ColorInterface;
  role: colorType;
}

/**
 * HSLA color
 */
export interface HSLAInterface {
  h: number;
  l: number;
  s: number;
  a?: number;
}
