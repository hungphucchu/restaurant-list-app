import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from './trpc';
import { RestaurantService } from '../service/restaurant.service';

@Injectable()
export class TrpcService {
  constructor(private readonly restaurantService: RestaurantService) {}

  public readonly router = router({
    getRestaurants: publicProcedure.query(async () => {
      return this.restaurantService.getAllRestaurant();
    }),
    addFavorite: publicProcedure
      .input(z.object({ id: z.string(), isFavorite: z.boolean() }))
      .mutation(async ({ input }) => {
        const { id, isFavorite } = input;
        return this.restaurantService.updateRestaurant({
          where: { id },
          data: { isFavorite },
        });
      }),
  });
}

export type RouteType = typeof TrpcService.prototype.router;
