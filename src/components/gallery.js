import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './gallery-item';

const Gallery = ({ items, flex_row }) => (
  <div>
    {items.map((item, i) => (
      <GalleryItem {...item} key={i} flex_row={flex_row} />
    ))}
  </div>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  flex_row: PropTypes.string.isRequired
};

export default Gallery;
