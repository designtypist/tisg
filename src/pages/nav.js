import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SocialMedia from '../components/social-media';

const Nav = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <nav>
          {modal ? (
            <header className="text-right">
              <Link to={closeTo}>
                <FontAwesomeIcon icon={['fa', 'times']} size="2x" className="cursor-pointer" />
              </Link>
            </header>
          ) : (
            <header>
              <h1>
                Navigation Menu
              </h1>
            </header>
          )}

        <ul>
          <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#media">Media</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
          <li>
            <SocialMedia />
          </li>
        </ul>
      </nav>
    )}
  </ModalRoutingContext.Consumer>
);

export default Nav;
