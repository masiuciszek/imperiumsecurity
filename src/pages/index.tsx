/* eslint-disable no-unused-vars */
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people and TypeScript!</h1>
  </Layout>
);

export default IndexPage;
