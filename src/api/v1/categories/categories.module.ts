import { Module, SetMetadata } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { NumberHelper } from 'src/helpers/number';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CategoriesController } from './categories.controller';
import { Category } from './models/category.model';
import { CategoryService } from './services/category.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoryService, NumberHelper, Category, {provide: APP_GUARD, useClass: JwtAuthGuard}],
  exports: [Category]
})
export class CategoriesModule {}
