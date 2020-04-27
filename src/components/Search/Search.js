import React, { useState, useCallback } from 'react';
import './styles.css';

const Search = ({ onSubmit, onChange }) => {
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
        onChange={({ target }) => setSearchWord(target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default Search;