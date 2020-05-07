import React from 'react';
import './search-box.css';

const SearchBox = ({ placeholder, handleChange, searchField }) => {
  return (
    <div className="search-box">
      <input   
        className="search"      
        type="search" 
        placeholder="search monsters" 
        onChange={handleChange} 
        value={searchField} 
      />
      <span></span>
    </div>  
  );
};

export default SearchBox;