import React from "react";
import styled from "styled-components/primitives";

import Section from "../Section";

const StyledSection = styled(Section)`
  flex-grow: 1;
  flex-shrink: 1;
`;

const Main = ({ style, ...rest }) =>
  <StyledSection {...rest} style={style} accessibilityRole="main" />;

export default Main;
