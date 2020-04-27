import React from 'react';
import './styles.css';

const ImageGrid = ({ images }) => (
  <div className='image-grid'>
    {
      images.map(({id, farm, server, secret}) => (
        <div key={id}>
          <img
            src={`http://farm${farm}.static.flickr.com/${server}/${id}_${secret}.jpg`}
            alt='Not Found'
          />
        </div>
      ))
    }
  </div>
);

export default ImageGrid;