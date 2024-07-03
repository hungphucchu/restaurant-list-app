import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantRepository } from '../prisma/repository/restaurant.repository';
import { PostgreSqlClient } from '../prisma/client/postgresql.client';

@Module({
  providers: [RestaurantService, RestaurantRepository, PostgreSqlClient],
  exports: [RestaurantService, RestaurantRepository, PostgreSqlClient],
})
export class RestaurantModule {}
