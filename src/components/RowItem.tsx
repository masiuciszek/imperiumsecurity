import { IFixedObject } from "gatsby-background-image";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { handleFlex } from "../utils/helpers";

interface RowContentProps {
  className: string;
  content: HomeContent;
  logo: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

const RowItem: React.FC<RowContentProps> = ({ className, content, logo }) => {
  return (
    <article className={className}>
      <div className="logo-img">
        <Img fixed={logo.childImageSharp.fixed} />
      </div>
      <div className="content">
        <h3>{content.name}</h3>
        <p>{content.text}</p>
      </div>
    </article>
  );
};

export default styled(RowItem)`
  ${handleFlex("column", "center", "center")};
  flex-basis: 100%;
  flex: 1;
  padding: 1em;
  .logo-img {
    height: 30%;
  }
  .content {
    h3 {
      text-align: center;
      text-transform: capitalize;
    }
    height: 70%;
  }
`;
