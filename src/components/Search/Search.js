import React, { useState, useCallback } from 'react';
import './styles.css';

const Search = ({ onSubmit }) => {
  const [ searchWord, setSearchWord ] = useState('');
  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      onSubmit(searchWord);
    },
    [searchWord, onSubmit]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search...'
        value={searchWord}
        onChange={({ target }) => setSearchWord(target.value)}
      />
      <input type='submit' value='Search' />
    </form>
  );
};

export default Search;