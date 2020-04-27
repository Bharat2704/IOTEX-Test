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
    <div className='navbar-parent'>
      <nav className="navbar">
        <form className="searchbar" onSubmit={handleSubmit}>
          <label>
            <input 
              type='text'
              placeholder='Search pics...'
              autoFocus
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
    </div>
  );
};

export default Search;