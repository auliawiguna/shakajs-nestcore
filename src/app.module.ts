import { Module } from '@nestjs/common';
import { CategoriesModule } from './api/v1/categories/categories.module';
import { NumberHelper } from './helpers/number';
import { ProductsModule } from './api/v1/products/products.module';
import { AuthModule } from './api/v1/auth/auth.module';
import { UsersModule } from './api/v1/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './api/v1/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import app from './config/app';

@Module({
  imports: [CategoriesModule, ProductsModule, AuthModule, UsersModule, PassportModule, ConfigModule.forRoot({isGlobal: true, load: [app]})],
  controllers: [],
  providers: [NumberHelper, AuthService],
})
export class AppModule {}
