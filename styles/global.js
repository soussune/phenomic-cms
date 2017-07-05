import { injectGlobal } from "styled-components";

import theme from "./theme";

injectGlobal`
  html, body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #PhenomicRoot {
    display: flex;
    min-height: 100%;
  }

body {
  font-family: ${theme.fonts.base}
}
`;
