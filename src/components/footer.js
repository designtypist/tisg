import React from "react";

import SocialMedia from './social-media';

const Footer = () => (
  <footer className="flex flex-wrap">
    <div className="w-1/3 text-left">
      <SocialMedia />
    </div>
    <div className="w-1/3 text-center">
      <p>© Copyright {new Date().getFullYear()} TISG</p>
    </div>
    <div className="w-1/3 text-right pr-6">
      <p>Created by <a tw="text-black" href="https://www.designtypist.com" rel="noreferrer" target="_blank">DesignTypist</a></p>
    </div>
  </footer>
);

export default Footer;
