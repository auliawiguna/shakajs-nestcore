import { Module } from '@nestjs/common';
import { NumberHelper } from 'src/helpers/number';
import { CategoriesController } from './categories.controller';
import { Category } from './models/category.model';
import { CategoryService } from './services/category.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoryService, NumberHelper, Category],
  exports: [Category]
})
export class CategoriesModule {}
