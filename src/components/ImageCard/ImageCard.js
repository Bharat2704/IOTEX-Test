import React from 'react';
import './styles.css';

const ImageCard = ({ url, title }) => (
  <li className="image-card">
    <img className="image-card-image" src={url} alt={title} />
    <div className="image-card-body">
      <p className="image-title">{title || 'No Title Found'}</p>
    </div>
  </li>
);

export default ImageCard;