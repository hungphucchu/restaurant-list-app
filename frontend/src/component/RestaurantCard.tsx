import React from 'react';
import './../css/RestaurantCard.css';

interface RestaurantCardProps {
  title: string;
  description: string;
  rating: number;
  image: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ title, description, rating, image }) => {
  return (
    <div className="card">
      <img className="image" src={image} alt={title} />
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <span className="rating">⭐{rating}</span>
        <button className="favorite-button">♡</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
