import React, { useState } from 'react';
import './../css/RestaurantCard.css';

interface RestaurantCardProps {
  title: string;
  description: string;
  rating: number;
  images: string[];
  isFavorite: boolean;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ title, description, rating, images, isFavorite }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  console.log("currentImageIndex = " + currentImageIndex);
  console.log("rating = " + rating);

  return (
    <div className="card">
      <div className="image-container">
        <img className="image" src={images[currentImageIndex]} alt={title} />
        <button className="favorite-button">{isFavorite ? '❤️' : '♡'}</button>
        <button className="prev-button" onClick={handlePrevImage}>‹</button>
        <button className="next-button" onClick={handleNextImage}>›</button>
      </div>
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <span className="rating">⭐{rating}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
