import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SecondPage = () => (
  <Layout>
    <Container>
      <SEO title="Page Three" />
      <h1>Hi from the third page</h1>
      <p>Welcome to page 3</p>
      <p>I'm a styled component :D</p>
      <Link to="/page-2">Go back to page 2</Link>
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default SecondPage;
