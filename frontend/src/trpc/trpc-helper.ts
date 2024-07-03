import { trpcClient } from "./trpc-client";

class TrpcHelper {
  async getRestaurant(): Promise<any> {
    try {
      const restaurants = await trpcClient.getRestaurants.query();
      return restaurants;
    } catch (error) {
      console.error(error);
    }
  }

  async addFavorite(id: string, isFavorite: boolean): Promise<any> {
    try {
      const restaurants = await trpcClient.addFavorite.mutate({
        id,
        isFavorite,
      });
      return restaurants;
    } catch (error) {
      console.error(error);
    }
  }
}

export const trpcHelper = new TrpcHelper();
