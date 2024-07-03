import React from "react";
import "./../css/SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-container">
      <input className="search-input" placeholder="맛집 이름을 검색해보세요" />
    </div>
  );
};

export default SearchBar;
