import React from "react";

import SocialMedia from './social-media';

const Footer = () => (
  <footer className="flex flex-wrap m-12">
    <div className="md:w-1/3 w-full md:text-left text-center">
      <SocialMedia />
    </div>
    <div className="md:w-1/3 w-full text-center">
      <p>© Copyright {new Date().getFullYear()} TISG</p>
    </div>
    <div className="md:w-1/3 w-full md:text-right text-center">
      <p>Created by <a tw="text-black" href="https://www.designtypist.com" rel="noreferrer" target="_blank">DesignTypist</a></p>
    </div>
  </footer>
);

export default Footer;
