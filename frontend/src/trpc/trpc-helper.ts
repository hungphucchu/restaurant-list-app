import { trpcClient } from "./trpc-client";

class TrpcHelper{
    async getRestaurant(): Promise<any>{
        try{
            const restaurants = await trpcClient.getRestaurants.query();
            return restaurants;
        }catch(error){
            console.error(error);
        }
    }
}

export const trpcHelper = new TrpcHelper();