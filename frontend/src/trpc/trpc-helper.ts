import {
  BaseResponse,
  RestaurantIF,
} from "../../../backend/src/common/common.interface";
import { trpcClient } from "./trpc-client";

class TrpcHelper {
  async getRestaurant(): Promise<RestaurantIF[]> {
    try {
      const restaurantsRespone: any = await trpcClient.getRestaurants.query();
      if (restaurantsRespone && restaurantsRespone.status.code === 200) {
        return restaurantsRespone.data;
      }
      return [];
    } catch (error: any) {
      console.error(`Error while getting restaurants due to ${error.message}`);
      return [];
    }
  }

  async addFavorite(id: string, isFavorite: boolean): Promise<BaseResponse> {
    try {
      const addFavoriteResponse: BaseResponse =
        await trpcClient.addFavorite.mutate({
          id,
          isFavorite,
        });
      return addFavoriteResponse;
    } catch (error: any) {
      return {
        status: {
          code: error?.status || 500,
          message: error.message || "Internal adding favorite restaurant",
        },
      };
    }
  }
}

export const trpcHelper = new TrpcHelper();
