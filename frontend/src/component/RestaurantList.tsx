import React, { useState, useEffect } from "react";
import "./../css/RestaurantList.css";
import RestaurantCard from "./RestaurantCard";
import { trpcHelper } from "../trpc/trpc-helper";
import {
  BaseResponse,
  RestaurantIF,
} from "../../../backend/src/common/common.interface";

const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantIF[]>([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantRespond = await trpcHelper.getRestaurant();
      setRestaurants(restaurantRespond);
    };
    getRestaurants();
  }, []);

  const markFavorite = async (id: string, isFavorite: boolean) => {
    try {
      const addFavoriteResponse: BaseResponse = await trpcHelper.addFavorite(
        id,
        isFavorite,
      );
      if (addFavoriteResponse.status.code === 200) {
        const newRestaurants = restaurants.map((restaurant: RestaurantIF) => {
          if (restaurant.id === id) restaurant.isFavorite = isFavorite;
          return restaurant;
        });
        setRestaurants(newRestaurants);
      } else {
        alert(`Can't add favorite for restaurant ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="list-container">
      {restaurants.map((restaurant: RestaurantIF) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          markFavorite={markFavorite}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
