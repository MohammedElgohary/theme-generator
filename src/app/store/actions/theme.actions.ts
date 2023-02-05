import {
  ThemeInterface,
  updateColorInterface,
} from "../../../utils/utils.types";
import { DispatchType } from "../store";
import { types } from "../types/types";

export const UpdateTheme = (theme: any) => (dispatch: DispatchType) =>
  dispatch({
    type: types.theme.CHANGE_THEME,
    payload: theme,
  });

export const UpdateThemeColors =
  ({ colors, role }: updateColorInterface) =>
  (dispatch: DispatchType) =>
    dispatch({
      type: types.theme.CHANGE_THEME_COLORS,
      payload: {
        colors,
        role,
      },
    });
