import React from "react";
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "icons/tisg-logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className="flex flex-wrap md:m-12 m-6">
      <div className="w-1/2 text-left">
        <Link to="/">
          <Img fixed={data.logo.childImageSharp.fixed} />
        </Link>
      </div>
      <div className="w-1/2 text-right">
        <Link to="/nav/" state={{ modal: true, noScroll: true }}>
          <FontAwesomeIcon icon={['fa', 'bars']} size="2x" className="cursor-pointer" />
        </Link>
      </div>
    </header>
  )
}

export default Header;
