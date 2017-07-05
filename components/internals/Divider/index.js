import { StyleSheet } from "react-primitives";
import styled from "styled-components/primitives";

const Divider = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const LineDivider = Divider.extend`
  padding: 0;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-color: #eee;
`;

export default Divider;
