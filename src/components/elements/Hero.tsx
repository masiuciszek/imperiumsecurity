import React from "react";
import styled from "styled-components";
import BackgroundImage, { IFluidObject } from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import { handleFlex } from "../../utils/helpers";
interface HeroProps {
  className: string;
  large?: boolean;
  image?: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}
interface HeroQueryType {
  Hero: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

const Hero: React.FC<HeroProps> = ({ className, image, children, large }) => {
  const {
    Hero: {
      childImageSharp: { fluid: DefaultImage },
    },
  } = useStaticQuery<HeroQueryType>(HERO_QUERY);

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={image?.childImageSharp.fluid || DefaultImage}
    >
      {children}
    </BackgroundImage>
  );
};

const HERO_QUERY = graphql`
  {
    Hero: file(relativePath: { eq: "bron.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default styled(Hero)`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: ${({ large }) => (large ? `calc(100vh - 205px)` : `50vh`)};
  background-image: linear-gradient(
    to top right,
    rgba(0, 0, 0, 0.86),
    rgba(241, 213, 162, 0.2),
    rgba(0, 0, 0, 0.8)
  );
  position: relative;
  opacity: 1 !important;
  ${handleFlex("column", "center", "center")};
`;
