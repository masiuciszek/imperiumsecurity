/* eslint-disable no-unused-vars */
import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Hero from "../components/elements/Hero";
import Title from "../components/elements/Title";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Page } from "../components/styled/Page";

interface HomePageQueryType {
  homeData: {
    siteMetadata: {
      title: string;
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
        ctaPath="kontakt"
      />
    </Hero>
    <Page>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis
        nam saepe mollitia quo neque! Minus id tenetur debitis quae. Et maxime
        dolor omnis accusamus laboriosam aliquam optio iste voluptatem eligendi
        ipsa molestiae non fugit quos explicabo soluta autem assumenda, nihil
        magnam labore voluptate. Quaerat rem molestias dolore ut. Recusandae
        eaque nemo libero aliquid ut. Accusantium vero aliquam repudiandae ad
        labore debitis nisi qui id, ex eveniet fugiat ratione necessitatibus
        culpa magnam ipsa neque totam a ducimus consequuntur hic repellendus
        esse. Dolor dolorem aut tenetur exercitationem ipsa minus consectetur
        repellendus beatae explicabo iure quod similique inventore, eum
        voluptatum quos doloremque? Earum, eum obcaecati. Numquam iusto ipsam
        voluptate repudiandae ea velit architecto. Voluptate distinctio,
        repellat sunt ea omnis consequatur voluptatum itaque nisi optio natus
        officia impedit aliquam culpa iste eligendi fugiat saepe, reiciendis
        velit ipsa qui! Illum voluptatum doloremque neque dolorem molestiae
        vitae nesciunt recusandae ratione natus sunt harum ullam eveniet
        temporibus qui maiores maxime, repellat beatae non nobis. Alias sapiente
        reiciendis, adipisci nulla magnam at iusto? Et hic maxime adipisci aut
        soluta vel, numquam consequatur perspiciatis vitae, repellat corporis.
        Labore molestias possimus non quasi voluptate, in facere deleniti
        tenetur odit voluptates quis voluptatem sint officia laudantium quo odio
        aliquam dolorum?
      </p>
    </Page>
  </Layout>
);

export const HOMEPAGE_QUERY = graphql`
  {
    homeData: site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
