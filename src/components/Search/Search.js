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
    <nav class="navbar">
      <form className="searchbar" onSubmit={handleSubmit}>
        <label>
          <input 
            type='text'
            placeholder='Search pics...'
            onChange={({ target }) => setSearchWord(target.value)}
            className="searchbar-input" />
        </label>
        <button 
          type="submit" 
          className="btn btn-green btn-search"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Search;