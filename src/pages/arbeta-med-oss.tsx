import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

interface WorkWithUsPageProps {}

const WorkWithUsPage: React.FC<WorkWithUsPageProps> = ({}) => {
  return (
    <Layout>
      <SEO title="work with us" />
      <h1>Work with us</h1>
    </Layout>
  );
};
export default WorkWithUsPage;
