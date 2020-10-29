import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageLinks from "../components/page_links";

const ForthPage = () => (
  <Layout>
    <SEO title="Page Four" />
    <h1>Hi from the forth page</h1>
    <p>Welcome to page 4</p>
    <p>May the forth be with you!</p>
    <PageLinks />
  </Layout>
);

export default ForthPage;
