import React from 'react';
import { Search, ImageGrid } from '../../components';
import './styles.css';

const ImageSearch = () => {
  const onSubmit = (searchWord) => {
    console.log('Form submitted with value: ', searchWord);
  }
  return (
    <div className='container'>
      <Search onSubmit={onSubmit} />
      <ImageGrid
        images={[
          {id: 1, value: 1},
          {id: 2, value: 2},
          {id: 3, value: 3},
          {id: 4, value: 4},
          {id: 5, value: 5},
          {id: 6, value: 6},
          {id: 7, value: 7},
          {id: 8, value: 8},
          {id: 9, value: 9},
        ]}
      />
    </div>
  );
};

export default ImageSearch;