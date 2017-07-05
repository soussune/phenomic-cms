import styled from "styled-components/primitives";

import rem from "../../../../utilities/rem";

const Container = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  max-width: ${rem(900)};
  margin-left: auto;
  margin-right: auto;
`;

export default Container;
