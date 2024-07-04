import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RestaurantRepository } from '../prisma/repository/restaurant.repository';
import {
  BaseResponse,
  RestaurantIF,
  RestaurantsRespone,
} from '../common/common.interface';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  getErrorResponse(error: any): BaseResponse {
    const errorResponse: BaseResponse = {
      status: {
        code: 500,
        message: 'Internal server exception while processing the data',
      },
    };
    if (error instanceof BadRequestException) {
      errorResponse.status.code = 400;
      errorResponse.status.message = 'Invalid Request to process data';
    } else if (error instanceof NotFoundException) {
      errorResponse.status.code = 404;
      errorResponse.status.message = 'Data not found';
    }
    return errorResponse;
  }

  async getAllRestaurant(): Promise<RestaurantsRespone | BaseResponse> {
    try {
      const restaurants: RestaurantIF[] =
        await this.restaurantRepository.findMany();
      if (!restaurants) {
        return {
          status: {
            code: 422,
            message: 'Unable to retrieve the restaurants',
          },
        };
      }
      return {
        status: {
          code: 200,
          message: 'Successfully retrieve all the restaurants',
        },
        data: restaurants,
      };
    } catch (error) {
      return this.getErrorResponse(error);
    }
  }

  async markFavoriteRestaurant(
    markFavoriteRequest: any,
  ): Promise<BaseResponse> {
    try {
      const markFavoriteResponse =
        await this.restaurantRepository.update(markFavoriteRequest);
      if (!markFavoriteResponse) {
        return {
          status: {
            code: 422,
            message: `Unable to mark favorite for restaurant ${markFavoriteRequest.id}`,
          },
        };
      }
      return {
        status: {
          code: 200,
          message: `Successfully mark favorite for restaurant ${markFavoriteRequest.id}`,
        },
      };
    } catch (error) {
      return this.getErrorResponse(error);
    }
  }
}
