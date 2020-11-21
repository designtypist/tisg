import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Item = ({ title, description, image, flex_row }) => (
  <figure className={"flex flex-wrap py-6 " + flex_row}>
    <Img className="lg:w-8/12 w-full" fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <div className="lg:w-1/12"></div>
    <figcaption className="lg:w-3/12 w-full">
      <h3 className="lg:text-2xl text-lg font-bold lg:my-0 my-4 uppercase">{title}</h3>
      <hr className="my-3" />
      <p>{description}</p>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  flex_row: PropTypes.string.isRequired
};

export default Item;
