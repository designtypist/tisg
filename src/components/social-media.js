import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => (
  <ul>
    <li className="inline-block mr-2">
      <a className="text-black" href="https://www.youtube.com/channel/UCe8ITsUVfC-galh58gxlNog" rel="noreferrer" target="_blank">
      <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
      </a>
    </li>
    <li className="inline-block mr-2">
      <a className="text-black" href="https://www.instagram.com/tisg" rel="noreferrer" target="_blank">
      <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
      </a>
    </li>
    <li className="inline-block mr-2">
      <a className="text-black" href="https://www.facebook.com/tisg" rel="noreferrer" target="_blank">
      <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
      </a>
    </li>
  </ul>
);

export default SocialMedia;
