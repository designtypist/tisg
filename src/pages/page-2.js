import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageLinks from "../components/page_links";

const SecondPage = () => (
  <Layout>
    <div className="sass-activated">
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <p>SASS has been activated!</p>
      <PageLinks />
    </div>
  </Layout>
);

export default SecondPage;
