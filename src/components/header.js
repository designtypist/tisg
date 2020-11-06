import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <header className="flex">
    <div className="w-1/2 text-left p-6">
      <img src="tisg-logo.png" alt="tisg-logo" width="50" height="50" className="" />
    </div>
    <div className="w-1/2 text-right p-6">
      <FontAwesomeIcon icon={['fa', 'bars']} size="2x" className="cursor-pointer" />
    </div>
  </header>
);

export default Header;
