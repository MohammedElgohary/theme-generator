import { ThemeInterface } from "../../../utils/utils.types";
import { baseTheme } from "../../design/theme";
import { types } from "../types/types";

const initialState: ThemeInterface =
  JSON.parse(localStorage.getItem("theme")!) || baseTheme;

export const themeReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case types.theme.CHANGE_THEME:
      return {
        ...state,
        ...payload,
      };
    case types.theme.CHANGE_THEME_COLORS:
      const { colors, role } = payload;

      const newTheme = {
        ...state,
        colors: {
          ...state.colors,
          [role]: colors,
        },
      };

      localStorage.setItem("theme", JSON.stringify(newTheme));

      return {
        ...state,
        ...newTheme,
      };

    default:
      return state;
  }
};
