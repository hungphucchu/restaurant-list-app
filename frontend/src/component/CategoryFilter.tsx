import React from 'react';
import './../css/CategoryFilter.css';

const categories = ['전체', '스시·해산물', '장어', '덴푸라', '돈카츠·쿠시카츠'];

const CategoryFilter: React.FC = () => {
  return (
    <div className="category-filter-container">
      {categories.map((category) => (
        <button className="category-button" key={category}>{category}</button>
      ))}
    </div>
  );
};

export default CategoryFilter;
