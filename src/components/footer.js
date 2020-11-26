import React from "react";

import SocialMedia from './social-media';

const Footer = () => (
  <footer className="flex flex-wrap m-12">
    <div className="md:w-1/3 w-full md:text-left text-center">
      <SocialMedia />
    </div>
    <div className="md:w-1/3 w-full text-center">
      <p>© Copyright TISG {new Date().getFullYear()}</p>
    </div>
    <div className="md:w-1/3 w-full md:text-right text-center">
      <p>Designed and developed by <a className="text-copy-secondary" href="https://www.designtypist.com" rel="noreferrer" target="_blank">DesignTypist</a></p>
    </div>
  </footer>
);

export default Footer;
