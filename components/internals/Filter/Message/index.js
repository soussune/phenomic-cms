import React from "react";
import styled from "styled-components/primitives";

import rem from "../../../../utilities/rem";
import Row from "../../Row";
import { LinkButton } from "../../Button";

const StyledRow = styled(Row)`
  flex-grow: 0;
`;

const Text = styled.Text`
  font-size: ${rem(16)};
  font-weight: 300;
  color: ${props => props.theme.colors.dimgray};
`;

const FilterMessage = ({ path, paramName, items, style }) =>
  <StyledRow style={style}>
    <Text>
      {"You are currently viewing articles that match"}
    </Text>
    <Text>
      <strong>{` ${items} `}</strong>
    </Text>
    <Text>{`${paramName}. `}</Text>
    <LinkButton to={`${path}`}>
      {"View all".toUpperCase()}
    </LinkButton>
  </StyledRow>;

export default FilterMessage;
