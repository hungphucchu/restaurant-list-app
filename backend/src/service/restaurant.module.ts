// src/module/restaurant.module.ts

import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantRepository } from '../prisma/repository/restaurant.repository'; // Adjust the path based on your project structure
import { PostgreSqlClient } from '../prisma/client/postgresql.client'; // Adjust the path based on your project structure

@Module({
  providers: [RestaurantService, RestaurantRepository, PostgreSqlClient],
  exports: [RestaurantService, RestaurantRepository, PostgreSqlClient], // Export the services here
})
export class RestaurantModule {}
