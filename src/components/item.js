import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Item = ({ title, description, image }) => (
  <figure className="flex">
    <Img className="w-2/3" fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption className="w-1/3">
      <h2>{title}</h2>
      <p>{description}</p>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
