import React from "react";
import Img from "gatsby-image";
import { IFixedObject } from "gatsby-background-image";
import styled from "styled-components";
import { above } from "../../utils/helpers";

interface FixedIconProps {
  className: string;
  toggleOn?: VoidFn;
  icon: {
    name: string;
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

const FixedIcon: React.FC<FixedIconProps> = ({ icon, className, toggleOn }) => {
  return (
    <span className={className} onClick={toggleOn && toggleOn}>
      <Img fixed={icon.childImageSharp.fixed} alt={`icon-fixed-icon`} />
    </span>
  );
};

export default styled(FixedIcon)`
  position: fixed;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
  z-index: 3;
  ${above.medium`
    display: none;
  `}
`;
