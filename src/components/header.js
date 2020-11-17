import React from "react";
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <header className="flex flex-wrap m-12">
    <div className="w-1/2 text-left">
      <Link to="/">
        <img src="tisg-logo.png" alt="tisg-logo" width="50" height="50" className="" />
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
