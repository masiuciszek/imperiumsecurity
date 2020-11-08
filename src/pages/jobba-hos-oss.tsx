/* eslint-disable no-unused-vars */
import { graphql, PageProps } from "gatsby";
import { IFluidObject } from "gatsby-background-image";
import * as React from "react";
import Hero from "../components/elements/Hero";
import RequirementWrapper from "../components/elements/RequirementWrapper";
import Title from "../components/elements/Title";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Page } from "../components/styled/Page";

interface ContactPageData {
  WorkWithUsHero: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
  site: {
    siteMetadata: {
      contact: string;
    };
  };
}

const WorkWithUsPage: React.FC<PageProps<ContactPageData>> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Arbeta med oss" />
      <Hero className="contactpage-hero" image={data.WorkWithUsHero}>
        <Title
          className="contact-us-title"
          title="Jobba hos oss"
          isCta
          ctaPath="kontakta oss"
        />
      </Hero>
      <Page>
        <RequirementWrapper
          className="contact-page-requirement-wrapper"
          onContactEmail={data.site.siteMetadata.contact}
        />
      </Page>
    </Layout>
  );
};
export const CONTACT_PAGE_QUERY = graphql`
  {
    WorkWithUsHero: file(relativePath: { eq: "together.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`;

export default WorkWithUsPage;
