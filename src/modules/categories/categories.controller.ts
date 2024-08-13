import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CategoryDto } from './create-category/dto/category.dto';
import { CreateCategoriesService } from './create-category/create-category.service';
import { FindAllCategoriesService } from './find-all/get-all-categories.service';
import { TrimBodyPipe } from 'src/common/utils/trim-body.pipe';
import { UpdateCategoryService } from './update-category/update-category.service';
import { DeleteCategorService } from './delete-category/delete-category.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly createCategoriesService: CreateCategoriesService,
    private readonly findAllCategoriesService: FindAllCategoriesService,
    private readonly updateCategoriesService: UpdateCategoryService,
    private readonly deleteCategoryService: DeleteCategorService,
  ) {}

  @Post()
  @UsePipes(new TrimBodyPipe())
  create(@Body() createCategoryDto: CategoryDto) {
    return this.createCategoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.findAllCategoriesService.findAll();
  }

  @Patch(':id')
  @UsePipes(new TrimBodyPipe())
  update(@Param('id') id: string, @Body() desciption: string) {
    return this.updateCategoriesService.update(+id, desciption);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteCategoryService.delete(+id);
  }
}
