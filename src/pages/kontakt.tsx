import { graphql, PageProps } from "gatsby";
import { IFluidObject } from "gatsby-background-image";
import React from "react";
import ContactForm from "../components/elements/ContactForm";
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Page } from "../components/styled/Page";

interface WorkWithUsPageProps {
  WorkWithUsHero: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

const WorkWithUsPage: React.FC<PageProps<WorkWithUsPageProps>> = ({ data }) => {
  return (
    <Layout>
      <SEO title="kontakta oss" />
      <Hero className="kontakta-oss-hero" image={data.WorkWithUsHero}>
        <Title
          className="kontakta-oss-title"
          title="Kontakta oss"
          isCta
          ctaPath="jobba-hos-oss"
        />
      </Hero>
      <Page>
        <ContactForm className="contact-form-main" />
      </Page>
    </Layout>
  );
};

export const WORK_WITH_US_PAGE_QUERY = graphql`
  {
    WorkWithUsHero: file(relativePath: { eq: "gbg-bild.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default WorkWithUsPage;
