import React from "react";
import styled from "styled-components";
import { below, handleFlex } from "../../../utils/helpers";
import { HoverLink } from "../../styled/Links";

interface FooterListProps {
  className: string;
  footerList: PageRoutes[];
}

const FooterList: React.FC<FooterListProps> = ({ className, footerList }) => {
  return (
    <ul className={className}>
      {footerList.map(({ name, path }) => (
        <li key={name}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </ul>
  );
};

export default styled(FooterList)`
  width: 60%;
  ${handleFlex("row", "space-between", "center")};
  padding: 1em;
  li {
    margin: 0;
    padding: 0;
    flex: 1;
    text-align: center;
  }
  a {
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  ${below.medium`
      width: 90%;
    `}
  ${below.small`
      width: 100%;
      a{
        font-size: .8em;
      };
    `}
`;
