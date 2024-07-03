import { Injectable } from "@nestjs/common";
import { RestaurantRepository } from "../prisma/repository/restaurant.repository";


@Injectable()
export class RestaurantService {
    constructor(
        private readonly restaurantRepository: RestaurantRepository,
    ){}

    async getAllRestaurant(): Promise<any> {
        return await this.restaurantRepository.findMany();
    }


    async updateRestaurant(updateData: any): Promise<any> {
        return await this.restaurantRepository.update(updateData);
    }

}