import React, { useState, useEffect } from 'react';
import axios from 'axios';
import appConfig from '../../config';
import { Search, ImageGrid } from '../../components';
import './styles.css';

const ImageSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [currPage, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!keyword) return;

      // Display loader while fetching data
      setLoading(true);

      const { data } = await axios({
        method: 'get',
        url: `https://api.flickr.com/services/rest/`,
        params: {
          method: 'flickr.photos.search',
          api_key: appConfig.flickrAPIKey,
          format: 'json',
          nojsoncallback: 1,
          safe_search: 1,
          text: keyword,
          page: currPage,
          per_page: 50,
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

      // Hide loader once date is fetched
      setLoading(false);
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
      {loading ?
        <div className='loader-text'>Loading ...</div> :
        (
          currPage < totalPages &&
          <button
            onClick={loadMore}
            className='btn btn-green btn-load-more'
          >
            Load more!
          </button>
        )
      }
    </div>
  );
};

export default ImageSearch;