import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a plant..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
