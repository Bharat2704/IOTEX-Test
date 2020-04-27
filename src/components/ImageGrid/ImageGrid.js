import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './styles.css';

const ImageGrid = ({ images }) => (
  <div className='image-grid'>
    {
      images.length ? images.map(({id, farm, server, secret, title}) => (
        <ImageCard
          key={id}
          url={`http://farm${farm}.static.flickr.com/${server}/${id}_${secret}.jpg`}
          title={title}
        />
      )) : null
    }
  </div>
);

export default ImageGrid;