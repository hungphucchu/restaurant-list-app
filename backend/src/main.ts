import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { TrpcService } from './trpc/trpc.router';
import cors from 'cors';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  const trpcService = app.get(TrpcService);

  const expressApp = app.getHttpAdapter().getInstance() as express.Express;

  expressApp.use(
    '/trpc',
    createExpressMiddleware({
      router: trpcService.router,
    }),
  );

  const port = process.env.PORT || 3001;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
