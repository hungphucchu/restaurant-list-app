import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { RouteType, TrpcService } from './trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const trpcService = app.get(TrpcService);

  // Create TRPC HTTP server
  const trpcServer = createHTTPServer({
    router: trpcService.router,
  });

  // // Listen on port 3000 for TRPC server
  await trpcServer.listen(3000);

  // Start NestJS application server on port 3001
  await app.listen(3001);


  const trpcClient = createTRPCProxyClient<RouteType>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
    transformer: undefined
  });

  // Example usage of TRPC client
  const restaurants = await trpcClient.getRestaurants.query();
  console.log(restaurants)
  
}

bootstrap();
