import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { Roles } from 'src/decorators/role.decorator';
import { Public } from 'src/decorators/route.decorator';
import { CategoryDto } from 'src/dto/category.dto';
import { Role } from 'src/enums/role.enum';
import { CategoryService } from "./services/category.service"

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoryService) {

  }

  // @Public()
  @Roles(Role.Admin)
  @Get()
  index(): any {
    return this.categoryService.getAll()
  }

  @Get(':id')
  detail(@Param('id') id: number): any {
    return this.categoryService.find(id)
  }

  @Post()
  store(@Body() data: CategoryDto): any {
    return this.categoryService.insertOne(data.title, data.description)
  }

  @Put(':id')
  update(@Body() data: CategoryDto, @Param('id') id: number): any {
    return this.categoryService.update(id, data)
  }
}
