# Theme Generator

## Installation and run

### Installation

```bash
    yarn install
```

### Run

```bash
    yarn start
```

## Features

- Allows you to control the theme colors.
- Gives you all theme colors in the root variables which you can use to style in `scss` or `css`.

```css
:root {
  --color-primary-main: #000000; /* Main primary color which all colors depends on */
  --color-primary-100: #111111; /* Darkest primary color */
  ...
  --color-primary-900: #999999;  /* Lightest primary color */


  --color-secondary-main: #000000;
  ...
}
```

- Gives you a theme object which we can use in `styled-components`:

```typescript
const theme: ThemeInterface = store.getState().theme;

export const BaseButton = styled("button")({
  backgroundColor: theme.colors.primary.main,
});
```

- When you reload the window you will mange to see all changes.

## Used Libs

- `redux`
- `react-redux`
- `redux-thunk`
- `styled-components`
- `sass`
