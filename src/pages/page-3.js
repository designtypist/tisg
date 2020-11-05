import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageLinks from "../components/page_links";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ThirdPage = () => (
  <Layout>
    <Container>
      <SEO title="Page Three" />
      <h1>Hi from the third page</h1>
      <p>Welcome to page 3</p>
      <p>I&apos;m a styled component :D</p>
      <PageLinks />
    </Container>
  </Layout>
);

export default ThirdPage;
