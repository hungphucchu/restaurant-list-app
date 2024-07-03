import React, { useState, useEffect } from "react";
import "./../css/RestaurantList.css";
import RestaurantCard from "./RestaurantCard";
import { trpcHelper } from "../trpc/trpc-helper";
import { RestaurantIF } from "../../../backend/src/common/common.interface";

const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsUpdate, setRestaurantsUpdate] = useState(false);

  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantRespond = await trpcHelper.getRestaurant();
      setRestaurants(restaurantRespond);
    };
    getRestaurants();
  }, [restaurantsUpdate]);

  const markFavorite = async (id: string, isFavorite: boolean) => {
    try {
      await trpcHelper.addFavorite(id, isFavorite);
      setRestaurantsUpdate(!restaurantsUpdate);
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
