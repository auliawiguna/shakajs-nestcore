import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { NumberHelper } from 'src/helpers/number';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, NumberHelper]
})
export class ProductsModule {}
