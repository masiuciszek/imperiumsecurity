import { graphql, Link, useStaticQuery } from "gatsby";
import { IFixedObject } from "gatsby-background-image";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { handleFlex } from "../../utils/helpers";
import FooterList from "../elements/lists/FooterList";

interface FooterProps {
  className: string;
}

interface FooterQueryType {
  logoImg: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
  footerData: {
    siteMetadata: {
      title: string;
      pageRoutes: PageRoutes[];
    };
  };
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { logoImg, footerData } = useStaticQuery<FooterQueryType>(FOOTER_QUERY);
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className={className}>
      <Link className="logo" to="/">
        <Img fixed={logoImg.childImageSharp.fixed} alt="imperium-logo" />
      </Link>

      <FooterList
        className="main-footer-footer-list"
        footerList={footerData.siteMetadata.pageRoutes}
      />

      <small>
        &copy; <span>{year}</span> {footerData.siteMetadata.title}
      </small>
    </footer>
  );
};

const FOOTER_QUERY = graphql`
  {
    logoImg: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 200, quality: 90) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    footerData: site {
      siteMetadata {
        title
        pageRoutes {
          name
          path
        }
      }
    }
  }
`;

export default styled(Footer)`
  padding: 2em 1em;
  ${handleFlex("column", "center", "center")};
  .logo {
  }
  small {
    color: ${(props) => props.theme.colors.text};
    span {
      color: ${(props) => props.theme.colors.button};
    }
  }
`;
