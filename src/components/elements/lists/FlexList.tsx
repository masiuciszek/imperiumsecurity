import React from "react";
import styled from "styled-components";
import { handleFlex } from "../../../utils/helpers";
import { HoverLink } from "../../styled/Links";

interface FlexListProps {
  className: string;
  onPageRoutes: PageRoutes[];
}

const FlexList: React.FC<FlexListProps> = ({ className, onPageRoutes }) => {
  return (
    <ul className={className}>
      {onPageRoutes.map(({ name, path }) => (
        <li key={path}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </ul>
  );
};

export default styled(FlexList)`
  flex: 1;
  border: 2px solid red;
  ${handleFlex("row", "space-between", "center")};
  padding: 1.5em 0.5em;
`;
