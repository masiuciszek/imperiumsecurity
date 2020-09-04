import React from "react";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import { handleFlex } from "../../../utils/helpers";
import { HoverLink } from "../../styled/Links";

interface FlexListProps {
  onPageRoutes: PageRoutes[];
  pageWidth: number;
  on: boolean;
}

const FlexListStyles = styled(animated.ul)`
  flex: 1;
  border: 2px solid red;
  ${handleFlex("row", "space-between", "center")};
  padding: 1.5em 0.5em;
  max-width: 40em;
`;

const ColumnListStyles = styled(animated.ul)`
  position: fixed;
  top: -18px;
  right: 0;
  ${handleFlex("column", "center", "center")};
  height: 40%;
  width: 80%;
  background: ${(props) => props.theme.colors.rgbaDark};
  border: 1px solid ${({ theme }) => theme.colors.text};
  z-index: 2;
  li {
    padding: 1em;
  }
  a {
    font-size: 2em;
  }
`;

const FlexList: React.FC<FlexListProps> = ({ onPageRoutes, pageWidth, on }) => {
  const { opacity, x } = useSpring({
    opacity: on ? 1 : 0,
    x: on ? 0 : 100,
  });

  return pageWidth >= 960 ? (
    <FlexListStyles>
      {onPageRoutes.map(({ name, path }) => (
        <li key={path}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </FlexListStyles>
  ) : (
    <ColumnListStyles
      style={{
        opacity,
        transform: x.interpolate((x) => `translate3d(${x * 1}%,0 ,0)`),
      }}
    >
      {onPageRoutes.map(({ name, path }) => (
        <li key={path}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </ColumnListStyles>
  );
};

export default FlexList;
