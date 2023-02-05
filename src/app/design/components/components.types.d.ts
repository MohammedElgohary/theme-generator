import { CSSProperties } from "react";
import { colorType } from "../../../utils/utils.types";

/**
 * Flex values
 */
export type FlexOptions =
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "normal"
  | "revert"
  | "stretch"
  | "start"
  | "self-end"
  | "self-start"
  | "space-around"
  | "space-evenly"
  | "space-between"
  | "unset";

/**
 * Flex properties
 */
export interface FlexInterface {
  alignItems?: FlexOptions;
  alignContent?: FlexOptions;
  alignSelf?: FlexOptions;
  justifyContent?: FlexOptions;
  justifyItems?: FlexOptions;
  justifySelf?: FlexOptions;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flexGrow?: string;
  gap?: string;
  fullWidth?: boolean;
  maxWidth?: string;
  xs?: CSSProperties;
  sm?: CSSProperties;
  md?: CSSProperties;
  lg?: CSSProperties;
  xl?: CSSProperties;
  xxl?: CSSProperties;
  hd?: CSSProperties;
  onRTL?: CSSProperties;
  onLTR?: CSSProperties;
}

/**
 * Color Setter component
 */
interface ColorSetterInterface {
  type: colorType;
}
