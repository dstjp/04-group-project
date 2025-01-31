import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};