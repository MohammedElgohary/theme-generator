export const baseTheme = {
  colors: {
    primary: {
      "100": "hsl(0,43%,11%)",
      "200": "hsl(0,43%,22%)",
      "300": "hsl(0,43%,33%)",
      "400": "hsl(0,43%,44%)",
      "500": "hsl(0,43%,56%)",
      "600": "hsl(0,43%,67%)",
      "700": "hsl(0,43%,78%)",
      "800": "hsl(0,43%,89%)",
      "900": "hsl(0,43%,99%)",
      main: "#a04040",
    },
    secondary: {
      "100": "hsl(308,30%,12%)",
      "200": "hsl(308,30%,24%)",
      "300": "hsl(308,30%,36%)",
      "400": "hsl(308,30%,48%)",
      "500": "hsl(308,30%,60%)",
      "600": "hsl(308,30%,72%)",
      "700": "hsl(308,30%,84%)",
      "800": "hsl(308,30%,96%)",
      "900": "hsl(308,30%,99%)",
      main: "#502b4b",
    },
    tertiary: {
      "100": "hsl(209,30%,12%)",
      "200": "hsl(209,30%,24%)",
      "300": "hsl(209,30%,36%)",
      "400": "hsl(209,30%,48%)",
      "500": "hsl(209,30%,60%)",
      "600": "hsl(209,30%,72%)",
      "700": "hsl(209,30%,84%)",
      "800": "hsl(209,30%,96%)",
      "900": "hsl(209,30%,99%)",
      main: "#2b3e50",
    },
    quaternary: {
      "100": "hsl(136,31%,11%)",
      "200": "hsl(136,31%,22%)",
      "300": "hsl(136,31%,34%)",
      "400": "hsl(136,31%,45%)",
      "500": "hsl(136,31%,57%)",
      "600": "hsl(136,31%,68%)",
      "700": "hsl(136,31%,80%)",
      "800": "hsl(136,31%,91%)",
      "900": "hsl(136,31%,99%)",
      main: "#274930",
    },
    quinary: {
      "100": "hsl(50,31%,11%)",
      "200": "hsl(50,31%,22%)",
      "300": "hsl(50,31%,34%)",
      "400": "hsl(50,31%,45%)",
      "500": "hsl(50,31%,57%)",
      "600": "hsl(50,31%,68%)",
      "700": "hsl(50,31%,80%)",
      "800": "hsl(50,31%,91%)",
      "900": "hsl(50,31%,99%)",
      main: "#494427",
    },
  },
  fonts: {
    rtl: "Roboto, sans-serif",
    ltr: "Roboto, sans-serif",
  },
  sizes: {
    xxs: "0.6rem",
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.75rem",
    xxl: "2rem",
  },
  spacing: {
    xxs: "0.5rem",
    xs: "0.5rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.75rem",
    xxl: "2rem",
  },
};

export const OnRTL = `html[dir='rtl'] &,
                      body[dir='rtl'] &`;

export const OnLTR = `html[dir='ltr'] &,
                      body[dir='ltr'] &`;
