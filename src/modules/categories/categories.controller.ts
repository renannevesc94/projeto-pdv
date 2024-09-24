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

import { CreateCategoryDto } from './create-category/dto/create-category.dto';
import { CreateCategoriesService } from './create-category/create-category.service';
import { FindAllCategoriesService } from './find-all/get-all-categories.service';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { UpdateCategoryService } from './update-category/update-category.service';
import { DeleteCategoryService } from './delete-category/delete-category.service';
import { UpdateCategoryDto } from './update-category/dto/update-category.dto';

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
