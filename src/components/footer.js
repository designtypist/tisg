import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="flex flex-wrap">
    <div className="w-1/3 text-left">
      <ul>
        <li className="inline-block">
          <a className="text-black" href="https://www.youtube.com/channel/UCe8ITsUVfC-galh58gxlNog" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
          </a>
        </li>
        <li className="inline-block">
          <a className="text-black" href="https://www.instagram.com/tisg" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </li>
        <li className="inline-block">
          <a className="text-black" href="https://www.facebook.com/tisg" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
          </a>
        </li>
      </ul>
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
