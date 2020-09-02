import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { IFixedObject } from "gatsby-background-image";

const NAV_QUERY = graphql`
  {
    logoImg: file(
      relativePath: { eq: "logo.png" }
      childImageSharp: { fixed: {} }
    ) {
      childImageSharp {
        fixed(width: 200, quality: 90) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

interface NavQueryType {
  logoImg: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

interface NavProps {
  className?: string;
}

const NavTitle = styled(Link)``;

const Nav: React.FC<NavProps> = ({ className = "main-navigation" }) => {
  const {
    logoImg: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery<NavQueryType>(NAV_QUERY);

  return (
    <nav className={className}>
      <NavTitle to="/">
        <Img fixed={fixed} />
      </NavTitle>
    </nav>
  );
};

export default styled(Nav)`
  padding: 1em;
  border: 2px solid red;
`;
