import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //For security reason, remove x-powered-by header
  app.getHttpAdapter().getInstance().disable('x-powered-by')
  app.useGlobalPipes(new ValidationPipe())
  app.use(compression())
  await app.listen(3000);
}
bootstrap();
