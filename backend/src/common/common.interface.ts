export interface RestaurantIF {
  id?: string;
  name: string;
  rating: number;
  ratingCount: number;
  category: string;
  city: string;
  desc: string;
  images: string[];
  priceRange: string;
  isFavorite: boolean;
  featuredText: string;
  featuredIcon: string;
}

export interface Status {
  code: number;
  message: string;
}

export interface BaseResponse {
  status: Status;
}

export interface RestaurantsRespone extends BaseResponse {
  data: RestaurantIF[];
}

export interface UpdateRestaurantsResponse extends BaseResponse {}
