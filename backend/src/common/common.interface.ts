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
