import React from "react";
import styled from "styled-components";
import { handleFlex } from "../../utils/helpers";
import { HoverLink } from "../styled/Links";

interface PageRouteListProps {
  className: string;
  onPageRoutes: PageRoutes[];
}

const PageRouteList: React.FC<PageRouteListProps> = ({
  className,
  onPageRoutes,
}) => {
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

export default styled(PageRouteList)`
  flex: 1;
  border: 2px solid red;
  ${handleFlex("row", "space-between", "center")};
  padding: 1.5em 0.5em;
`;
