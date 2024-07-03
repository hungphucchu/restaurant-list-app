import React, {useState, useEffect} from 'react';
import './../css/RestaurantList.css';
import RestaurantCard from './RestaurantCard';
import { trpcHelper } from '../trpc/trpc-helper';
import { RestaurantIF } from '../../../backend/src/common/common.interface';


const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantRespond = await trpcHelper.getRestaurant();
      setRestaurants(restaurantRespond);
    }
    getRestaurants();
  },[]);
  console.log(restaurants);
  
  return (
    <div className="list-container">
      {restaurants.map((restaurant: RestaurantIF) => (
        <RestaurantCard
          key={restaurant.id}
          title={restaurant.name}
          description={restaurant.desc}
          rating={restaurant.rating}
          images={restaurant.images}
          isFavorite={restaurant.isFavorite}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
