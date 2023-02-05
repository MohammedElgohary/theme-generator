import styled from "styled-components";

export const AppContainer = styled("div")({
  maxWidth: "1920px",
  width: "90%",
  margin: "0 auto",

  "@media (max-width: 500)": {
    width: "100%",
  },
});
