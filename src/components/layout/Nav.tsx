/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { IFixedObject } from "gatsby-background-image";
import { handleFlex } from "../../utils/helpers";
import PageRouteList from "../elements/PageRouteList";

const NAV_QUERY = graphql`
  {
    logoImg: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 200, quality: 90) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    pageRoutes: site {
      siteMetadata {
        pageRoutes {
          name
          path
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
  pageRoutes: {
    siteMetadata: {
      pageRoutes: PageRoutes[];
    };
  };
}

interface NavProps {
  className?: string;
}

const NavTitle = styled(Link)`
  /* TODO: Delete */
  border: 2px solid #fff;
  flex: 1;
`;

const Nav: React.FC<NavProps> = ({ className = "main-navigation" }) => {
  const {
    logoImg: {
      childImageSharp: { fixed },
    },
    pageRoutes,
  } = useStaticQuery<NavQueryType>(NAV_QUERY);
  return (
    <nav className={className}>
      <NavTitle to="/">
        <Img fixed={fixed} />
      </NavTitle>
      <PageRouteList
        className="layout-navigation-list"
        onPageRoutes={pageRoutes.siteMetadata.pageRoutes}
      />
    </nav>
  );
};

export default styled(Nav)`
  padding: 1em;
  border: 2px solid red;
  height: ${(props) => props.theme.size.navigationSize};
  ${handleFlex("row", "space-between", "center")};
`;
