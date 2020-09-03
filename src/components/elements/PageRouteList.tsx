import React from "react";
import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";
import { handleFlex } from "../../utils/helpers";
import { HoverLink } from "../styled/Links";
import FlexList from "./lists/FlexList";

interface PageRouteListProps {
  className: string;
  onPageRoutes: PageRoutes[];
}

const PageRouteList: React.FC<PageRouteListProps> = ({
  className,
  onPageRoutes,
}) => {
  const width = useWindowWidth();
  console.log(width);
  // return width >= 960 ?  <FlexList/> :  ;
};

export default styled(PageRouteList)`
  /* flex: 1;
  border: 2px solid red;
  ${handleFlex(
    "row",
    "space-between",
    "center"
  )};
  padding: 1.5em 0.5em; */
`;
