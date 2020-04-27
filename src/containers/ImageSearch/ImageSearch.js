import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Search, ImageGrid } from '../../components';
import './styles.css';

const ImageSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [currPage, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [result, setResult] = useState([]);

  const fetchData = useCallback(
    async () => {
      const { data } = await axios({
        method: 'get',
        url: `https://api.flickr.com/services/rest/`,
        params: {
          method: 'flickr.photos.search',
          api_key: '3e7cc266ae2b0e0d78e279ce8e361736',
          format: 'json',
          nojsoncallback: 1,
          safe_search: 1,
          text: keyword,
          page: currPage,
        }
      });

      const { page, pages, photo } = data.photos;

      setPage(page);
      setTotalPages(pages);
      setResult(photo);
    }, [keyword, currPage]
  );

  const onChange = (searchWord) => {
    setKeyword(searchWord);
  };

  const onSubmit = () => fetchData();

  return (
    <div className='container'>
      <Search onSubmit={onSubmit} onChange={onChange} />
      <ImageGrid
        images={result}
      />
      {currPage < totalPages ? <input type='button' onClick={fetchData} /> : null}
    </div>
  );
};

export default ImageSearch;