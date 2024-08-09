import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CategoryDto } from './create-category/dto/category.dto';
import { CreateCategoriesService } from './create-category/create-category.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly createCategoriesService: CreateCategoriesService,
  ) {}

  @Post()
  create(@Body() createCategoryDto: CategoryDto) {
    return this.createCategoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.createCategoriesService.findAll();
  }

  /* 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: CategoryDto) {
    return this.createCategoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.createCategoriesService.remove(+id);
  } */
}
