import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/*
  <Img className="w-2/3 mx-12" fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
  <figcaption className="w-1/3">
    <h3 className="font-bold text-2xl">{title}</h3>
    <hr className="my-3" />
    <p>{description}</p>
  </figcaption>
*/

const Item = ({ title, description, image, reverse }) => (
  <figure className={"flex py-6 flex-row-" + reverse}>
    <Img className="w-2/3 mx-12" fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption className="w-1/3">
      <h3 className="font-bold text-2xl">{title}</h3>
      <hr className="my-3" />
      <p>{description}</p>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  position: PropTypes.string
};

export default Item;
