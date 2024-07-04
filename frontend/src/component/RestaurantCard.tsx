import React, { useState } from "react";
import "./../css/RestaurantCard.css";
import { RestaurantIF } from "../../../backend/src/common/common.interface";

interface RestaurantCardProps {
  restaurant: RestaurantIF;
  markFavorite: (id: string, isFavorite: boolean) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  markFavorite,
}: RestaurantCardProps) => {
  const { id, name, desc, rating, images, isFavorite, ratingCount } =
    restaurant;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const addFav = async () => {
    if (id) await markFavorite(id, !isFavorite);
  };

  return (
    <div className="card">
      <div className="image-container">
        <img className="image" src={images[currentImageIndex]} alt={name} />
        <button onClick={addFav} className="favorite-button">
          {isFavorite ? "❤️" : "♡"}
        </button>
        <button className="prev-button" onClick={handlePrevImage}>
          ‹
        </button>
        <button className="next-button" onClick={handleNextImage}>
          ›
        </button>
      </div>
      <div className="info">
        <div className="text-container">
          <h3 className="title">{name}</h3>
          <p className="description">{desc}</p>
        </div>
        <div className="rating">
          <span className="star-icon">⭐</span>
          <span>{rating}</span>
          <span>({ratingCount})</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
