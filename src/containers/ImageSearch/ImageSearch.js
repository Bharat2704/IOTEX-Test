import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, ImageGrid } from '../../components';
import './styles.css';

const ImageSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [currPage, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!keyword) return;

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
  
      setTotalPages(pages);
      if (page > 1) {
        setResult((result) => setResult([...result, ...photo]));
      } else {
        setPage(page);
        setResult(photo);
      }
    }

    fetchData();
  }, [currPage, keyword]);

  const loadMore = () => {
    setPage((currPage) => currPage + 1);
  };

  const onSubmit = (searchWord) => {
    setPage(1);
    setKeyword(searchWord);
  };

  return (
    <div className='container'>
      <Search onSubmit={onSubmit} />
      <ImageGrid
        images={result}
      />
      {currPage < totalPages ?
        <button onClick={loadMore}>Load more!</button>
        : null
      }
    </div>
  );
};

export default ImageSearch;