import { Injectable, NotFoundException } from "@nestjs/common"
import { CategoryDto } from "src/dto/category.dto"
import { NumberHelper } from "src/helpers/number"
import { Category } from "../models/category.model"

@Injectable()
export class CategoryService {
  category: Category[] = []

  constructor(private numberHelper: NumberHelper) {
      
  }

  async getAll() {
    return this.category
  }

  async find(id: number) {
    let data = this.category.find(c => c.id == id)
    if (!data) {
      throw new NotFoundException('Not Found')
    }
    return {...data}
  }

  async insertOne(title: string, description: string) {
    let id: number = this.numberHelper.randomIntFromInterval(1, 1000)
    let newItem = new Category(id, title, description)

    await this.category.push(newItem)

    return newItem
  }

  async update(id: number, data: CategoryDto) {
    let record = this.category.find(c => c.id == id)
    if (!record) {
      throw new NotFoundException('Not Found')
    }
    Object.keys(data).map((key, index) => {
      record[key] = data[key]
    })
    return {...record}     
  }
}