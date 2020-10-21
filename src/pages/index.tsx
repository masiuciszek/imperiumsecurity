/* eslint-disable no-unused-vars */
import { graphql, PageProps } from "gatsby";
import { IFixedObject } from "gatsby-background-image";
import * as React from "react";
import CaptureText from "../components/CaptureText";
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Layout from "../components/layout";
import RowItem from "../components/RowItem";
import SEO from "../components/seo";
import { HomeGrid } from "../components/styled/Page";

interface HomePageQueryType {
  imperiumSmallLogo: {
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
  homeData: {
    siteMetadata: {
      title: string;
      homeContent: HomeContent[];
      homeCapture: HomeCapture;
    };
  };
}

const IndexPage: React.FC<PageProps<HomePageQueryType>> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero className="home-page-hero-background" large>
      <Title
        className="homepage-title"
        title={data.homeData.siteMetadata.title}
        isCta
        ctaPath="Kontakt"
      />
    </Hero>
    <CaptureText
      captureTitle={data.homeData.siteMetadata.homeCapture.title}
      captureText={data.homeData.siteMetadata.homeCapture.text}
    />
    <HomeGrid>
      {data.homeData.siteMetadata.homeContent.map((content) => (
        <RowItem
          key={content.name}
          className="home-row-content"
          content={content}
          logo={data.imperiumSmallLogo}
        />
      ))}
    </HomeGrid>
  </Layout>
);

export const HOMEPAGE_QUERY = graphql`
  {
    imperiumSmallLogo: file(relativePath: { eq: "imperium-small.png" }) {
      childImageSharp {
        fixed(width: 200, height: 200, quality: 90) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    homeData: site {
      siteMetadata {
        title
        homeContent {
          name
          text
        }
        homeCapture {
          title
          text
        }
      }
    }
  }
`;

export default IndexPage;
