import React from "react";
import Img from "gatsby-image";
import { IFixedObject } from "gatsby-background-image";
import styled from "styled-components";

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
      <Img fixed={icon.childImageSharp.fixed} alt={`icon-${name}`} />
    </span>
  );
};

export default styled(FixedIcon)`
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
  z-index: 3;
`;
