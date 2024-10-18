import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoriesService } from './services/create-category.service';
import { FindAllCategoriesService } from './services/get-all-categories.service';
import { UpdateCategoryService } from './services/update-category.service';
import { DeleteCategoryService } from './services/delete-category.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly createCategoriesService: CreateCategoriesService,
    private readonly findAllCategoriesService: FindAllCategoriesService,
    private readonly updateCategoriesService: UpdateCategoryService,
    private readonly deleteCategoryService: DeleteCategoryService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe())
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.createCategoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.findAllCategoriesService.findAll();
  }

  @Patch(':id')
  @HttpCode(201)
  @UsePipes(new TrimBodyPipe())
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.updateCategoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.deleteCategoryService.delete(id);
  }
}
