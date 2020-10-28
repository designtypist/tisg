import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div class="sass-activated">
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <p>SASS has been activated!</p>
      <Link to="/page-3">Go back to page 3</Link><br />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
