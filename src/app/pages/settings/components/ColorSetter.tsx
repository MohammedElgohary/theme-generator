import { SyntheticEvent, useState } from "react";
import { Flex } from "../../../design/components/Grid/Flex";
import { colorKeys } from "../../../../utils/utils.types";
import { generateTheme } from "../../../../utils/generateTheme";
import { HSLA2Hex } from "../../../../utils/HSLA2Hex";
import { ColorSetterInterface } from "../../../design/components/components.types";
import { useDispatch } from "react-redux";
import { UpdateThemeColors } from "../../../store/actions/theme.actions";
import { store } from "../../../store";

export default function ColorSetter({ type }: ColorSetterInterface) {
  /**
   * useDispatch
   */
  const dispatch = useDispatch();

  /**
   * Gets the current theme
   */
  const theme = store.getState().theme;

  /**
   * Component state
   */
  const [colors, setColors] = useState<any>(theme.colors?.[type]);

  /**
   * OnChange handler
   * @param e {SyntheticEvent}
   * @param key {string}
   */
  const onChangeColor = (
    e: SyntheticEvent<HTMLInputElement>,
    key?: colorKeys
  ) => {
    const target = e.target as HTMLInputElement,
      value = target.value;

    let newColors = key ? { ...colors, [key]: value } : generateTheme(value, 9);

    setColors(newColors);

    dispatch(
      UpdateThemeColors({
        colors: newColors,
        role: type,
      }) as any
    );
  };

  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <h5
          style={{
            color: HSLA2Hex(colors["main"]),
            textTransform: "capitalize",
          }}
        >
          {type}
        </h5>

        <Flex
          flexDirection="column"
          gap="0"
          fullWidth
          style={{ minWidth: "230px", marginBottom: "150px" }}
        >
          {["main", ...Object.keys(colors).splice(0, 8)].map((key) => (
            <Flex alignItems="center">
              <input
                type="color"
                value={HSLA2Hex(colors[key])}
                onChange={(e) =>
                  onChangeColor(
                    e,
                    key === "main" ? undefined : (key as colorKeys)
                  )
                }
              />

              <span
                style={{
                  color: HSLA2Hex(colors[key]),
                  textTransform: "capitalize",
                }}
              >
                {key}
              </span>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
