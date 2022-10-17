import { Injectable } from '@nestjs/common';
import { NumberHelper } from 'src/helpers/number';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  product: Product[] = []

  constructor(private numberHelper: NumberHelper) {

  }

  async create(createProductDto: CreateProductDto) {
    let id = this.numberHelper.randomIntFromInterval(1, 1000)
    let newItem = new Product(id, createProductDto.name, createProductDto.description, createProductDto.price)
    
    await this.product.push(newItem) 

    return newItem
  }

  findAll() {
    return this.product
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
