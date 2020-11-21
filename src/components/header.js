import React from "react";
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <header className="flex flex-wrap md:m-12 m-6">
    <div className="w-1/2 text-left">
      <Link to="/">
        <img src="tisg-logo.png" alt="TISG logo" width="50" height="50" />
      </Link>
    </div>
    <div className="w-1/2 text-right">
      <Link to="/nav/" state={{ modal: true, noScroll: true }}>
        <FontAwesomeIcon icon={['fa', 'bars']} size="2x" className="cursor-pointer" />
      </Link>
    </div>
  </header>
);

export default Header;
