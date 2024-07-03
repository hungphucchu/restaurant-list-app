// trpc.service.ts

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
    addFavorite: publicProcedure.input(z.object({ id: z.string() })).mutation(async ({ input }) => {
      const { id } = input;
      return this.restaurantService.updateRestaurant({
        where: { id },
        data: { isFavorite: true },
      });
    }),
  });
}

export type RouteType = typeof TrpcService.prototype.router;
