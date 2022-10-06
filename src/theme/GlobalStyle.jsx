import { createGlobalStyle } from "styled-components";

import { ResetCSS } from "./reset.css";

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}
  #root {
    min-height: 100%;
    display: flex;
  }
`;
