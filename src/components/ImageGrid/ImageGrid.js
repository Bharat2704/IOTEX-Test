import React from 'react';
import './styles.css';

const ImageGrid = ({ images }) => (
  <div className='image-grid'>
    {
      images.map(({id, value}) => (
        <div key={id}>{value}</div>
      ))
    }
  </div>
);

export default ImageGrid;