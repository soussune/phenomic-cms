import React from "react";
import Head from "react-helmet";
import styled, { ThemeProvider } from "styled-components/primitives";

import defaultTheme from "../../../../styles/theme";
import GoogleAnalyticsTracker from "../../../widgets/GoogleAnalyticsTracker";

const StyledPageView = styled.View`
  position: relative;
  width: 100%;
`;

const Page = ({ theme, style, children, ...rest }) =>
  <ThemeProvider theme={theme || defaultTheme}>
    <StyledPageView style={style}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleAnalyticsTracker {...rest}>
        {children}
      </GoogleAnalyticsTracker>
    </StyledPageView>
  </ThemeProvider>;

export default Page;
