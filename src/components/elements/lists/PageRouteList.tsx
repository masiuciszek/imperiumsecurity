import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { below, handleFlex } from "../../../utils/helpers";
import { HoverLink } from "../../styled/Links";

interface FlexListProps {
  onPageRoutes: PageRoutes[];
  on: boolean;
  pageWidth: number;
}

const FlexListStyles = styled(motion.ul)`
  flex: 1;
  ${handleFlex("row", "space-between", "center")};
  padding: 1.5em 0.5em;
  max-width: 40em;
  a {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ColumnListStyles = styled(motion.ul)`
  position: fixed;
  top: -1rem;
  right: 0;
  left: 0;
  ${handleFlex("column", "center", "center")};
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.rgbaDark};
  border: 1px solid ${({ theme }) => theme.colors.text};
  z-index: 2;
  li {
    padding: 1em 0;
    width: 100%;
    margin-bottom: 0.5em;
    margin-right: 2rem;
    display: block;
    text-align: center;
  }
  a {
    display: inline;
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.text};
  }
  ${below.small`
      width: 100%;
  `}
`;

const FlexList: React.FC<FlexListProps> = ({ onPageRoutes, pageWidth, on }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  return pageWidth >= 960 ? (
    <FlexListStyles>
      {onPageRoutes.map(({ name, path }) => (
        <li key={path}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </FlexListStyles>
  ) : (
    <ColumnListStyles animate={on ? "open" : "closed"} variants={variants}>
      {onPageRoutes.map(({ name, path }) => (
        <li key={path}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </ColumnListStyles>
  );
};

export default FlexList;
