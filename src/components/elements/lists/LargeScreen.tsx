import React from "react";
import styled from "styled-components";
import { HoverLink } from "../../styled/Links";
import { above, handleFlex } from "../../../utils/helpers";

interface LargeScreenProps {
  onPageRoutes: PageRoutes[];
}

const FlexListStyles = styled.ul`
  flex: 1;
  display: none;
  padding: 1.5em 0.5em;
  max-width: 40em;
  a {
    color: ${({ theme }) => theme.colors.text};
  }
  ${above.medium`
    ${handleFlex("row", "space-between", "center")};
  `}
`;

const LargeScreen: React.FC<LargeScreenProps> = ({ onPageRoutes }) => {
  return (
    <FlexListStyles>
      {onPageRoutes.map(({ name, path }) => (
        <li key={path}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </FlexListStyles>
  );
};
export default LargeScreen;
