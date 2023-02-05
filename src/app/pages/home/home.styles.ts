import { Flex } from "./../../design/components/Grid/Flex";
import styled from "styled-components";
import { store } from "../../store";
import { ThemeInterface } from "../../../utils/utils.types";

const theme: ThemeInterface = store.getState().theme;

export const HomeContainer = styled(Flex)({
  flexDirection: "column",

  h1: {
    color: theme.colors.primary.main,
  },

  button: {
    backgroundColor: theme.colors.primary[300],
    color: "#fff",
    padding: "20px",
    borderRadius: "3px",
    border: "unset",
    fontSize: "1.5rem",
  },
});
