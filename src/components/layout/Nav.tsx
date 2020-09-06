/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { IFixedObject } from "gatsby-background-image";
import { above, below, handleFlex } from "../../utils/helpers";
import PageRouteList from "../elements/lists/PageRouteList";
import useWindowWidth from "../../hooks/useWindowWidth";
import FixedIcon from "../elements/FixedIcon";
import useToggle from "../../hooks/useToggle";
import { ContactInfo } from "../styled/Links";

const NAV_QUERY = graphql`
  {
    logoImg: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 200, quality: 90) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    menuIcons: allFile(
      filter: { relativeDirectory: { eq: "menu" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fixed(quality: 90, width: 45) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    pageRoutes: site {
      siteMetadata {
        contact
        pageRoutes {
          name
          path
        }
      }
    }
  }
`;

interface Node {
  node: {
    name: string;
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}

interface NavQueryType {
  logoImg: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
  menuIcons: {
    edges: Node[];
  };
  pageRoutes: {
    siteMetadata: {
      contact: string;
      pageRoutes: PageRoutes[];
    };
  };
}

interface NavProps {
  className?: string;
}

const NavTitle = styled(Link)`
  flex: 1;
`;

const Nav: React.FC<NavProps> = ({ className = "main-navigation" }) => {
  const {
    logoImg: {
      childImageSharp: { fixed },
    },
    pageRoutes,
    menuIcons,
  } = useStaticQuery<NavQueryType>(NAV_QUERY);
  const width = useWindowWidth();
  const [darkIcon, lightIcon] = menuIcons.edges;
  const [isMenuOpen, toggleMenuOpen] = useToggle();

  return (
    <nav className={className}>
      <NavTitle to="/">
        <Img fixed={fixed} />
      </NavTitle>

      <PageRouteList
        pageWidth={width}
        onPageRoutes={pageRoutes.siteMetadata.pageRoutes}
        on={isMenuOpen}
      />

      {width < 960 && (
        <FixedIcon
          toggleOn={toggleMenuOpen}
          className="layout-navigation-list-Icon"
          icon={lightIcon.node}
        />
      )}
      <ContactInfo href={`mailto: ${pageRoutes.siteMetadata.contact}`}>
        {width > 500 ? (
          <span className="large">✉️{pageRoutes.siteMetadata.contact}</span>
        ) : (
          <span className="small">email ✉️ </span>
        )}
      </ContactInfo>
    </nav>
  );
};

export default styled(Nav)`
  padding: 1em;
  height: ${(props) => props.theme.size.navigationSize};
  ${handleFlex("row", "space-between", "center")};
  position: relative;
`;
