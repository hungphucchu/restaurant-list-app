import { Restaurant } from "@prisma/client";
import { BaseRepository } from "./base.repository";
import { Injectable } from "@nestjs/common";
import { PostgreSqlClient } from "../client/postgresql.client";

@Injectable()
export class RestaurantRepository extends BaseRepository<Restaurant> {
  constructor(private readonly postgreSqlClient: PostgreSqlClient) {
    super(postgreSqlClient.restaurant);
  }
}