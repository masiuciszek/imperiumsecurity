/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { IFixedObject } from "gatsby-background-image";
import { handleFlex } from "../../utils/helpers";
import useWindowWidth from "../../hooks/useWindowWidth";
import FixedIcon from "../elements/FixedIcon";
import useToggle from "../../hooks/useToggle";
import { ContactInfo } from "../styled/Links";
import LargeScreen from "../elements/lists/LargeScreen";
import MobileList from "../elements/lists/MobileList";

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
        title
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
      title: string;
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

      <LargeScreen onPageRoutes={pageRoutes.siteMetadata.pageRoutes} />
      <MobileList
        onPageRoutes={pageRoutes.siteMetadata.pageRoutes}
        on={isMenuOpen}
      />

      <FixedIcon
        toggleOn={toggleMenuOpen}
        className="layout-navigation-list-Icon"
        icon={lightIcon.node}
      />

      <ContactInfo href={`mailto: ${pageRoutes.siteMetadata.contact}`}>
        <span className="large"> {pageRoutes.siteMetadata.contact} ✉️ </span>
        <span className="small">{pageRoutes.siteMetadata.contact} ✉️ </span>
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
