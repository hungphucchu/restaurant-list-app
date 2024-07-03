import React from 'react';
import './../css/App.css';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import RestaurantList from './RestaurantList';
import NavigationBar from './NavigationBar';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <SearchBar />
      <CategoryFilter />
      <RestaurantList />
      <NavigationBar />
    </div>
  );
};

export default App;
