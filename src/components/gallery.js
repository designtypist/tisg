import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './gallery-item';

const Gallery = ({ items, reverse }) => (
  <div>
    {items.map((item, i) => (
      <GalleryItem {...item} key={i} reverse={reverse} />
    ))}
  </div>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  reverse: PropTypes.string.isRequired
};

export default Gallery;
