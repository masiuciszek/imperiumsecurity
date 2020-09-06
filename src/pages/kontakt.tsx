/* eslint-disable no-unused-vars */
import { graphql, PageProps } from "gatsby";
import { IFluidObject } from "gatsby-background-image";
import { string } from "prop-types";
import * as React from "react";
import Hero from "../components/elements/Hero";
import RequirementWrapper from "../components/elements/RequirementWrapper";
import Title from "../components/elements/Title";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Page } from "../components/styled/Page";

interface ContactPageData {
  ContactHero: {
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

const ContactPage: React.FC<PageProps<ContactPageData>> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Kontakta oss" />
      <Hero className="contactpage-hero" image={data.ContactHero}>
        <Title
          className="contact-us-title"
          title="kontakta oss"
          isCta
          ctaPath="arbeta-med-oss"
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
    ContactHero: file(relativePath: { eq: "contact-banner.jpg" }) {
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

export default ContactPage;
