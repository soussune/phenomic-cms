import styled from "styled-components";

import Link from "../Link";

const Button = styled.button`
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 3px;
  text-decoration: none;
  background: ${props => props.theme.colors.paper};
  color: ${props => props.theme.colors.primary};
`;

export const LinkButton = Button.withComponent(Link);

export default Button;
