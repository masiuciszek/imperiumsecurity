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
        <strong>{content.name}</strong>
        <p>{content.text}</p>
      </div>
    </article>
  );
};

export default styled(RowItem)`
  ${handleFlex("column", "center", "center")};
  flex: 1;
  height: 100%;
  padding: 1em;
  margin: 0.5em;
  .content {
    strong {
      font-size: 1.1em;
      text-transform: capitalize;
    }
    p {
      font-size: 0.9em;
    }
  }
`;
