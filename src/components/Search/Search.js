import React, { useCallback } from 'react';
import './styles.css';

const Search = ({ onSubmit, onChange }) => {
  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search...'
        onChange={({ target }) => onChange(target.value)}
      />
      <input type='submit' value='Search' />
    </form>
  );
};

export default Search;