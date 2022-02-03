import React from 'react';
import '../styles/SearchBar.css';

function SearchBar(props) {

  return (
  <div className='search-bar'>
      <input type='text' placeholder='Search' className='search-input' onChange={props.onChange}/>
  </div>
  );
}

export default SearchBar;
