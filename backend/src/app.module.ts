import { Module } from '@nestjs/common';
import { TrpcService } from './trpc/trpc.router';
import { RestaurantModule } from './service/restaurant.module';

@Module({
  imports: [RestaurantModule],
  providers: [TrpcService],
  exports: [TrpcService],
})
export class AppModule {}
