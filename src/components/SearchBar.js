import React, { useState } from 'react';
import retreatStore from '../store/RetreateStore';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    retreatStore.searchRetreats(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search retreats..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
