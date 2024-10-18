import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CreateCategoriesService } from './services/create-category.service';
import { FindAllCategoriesService } from './services/get-all-categories.service';
import { UpdateCategoryService } from './services/update-category.service';
import { DeleteCategoryService } from './services/delete-category.service';
import { ICategoryRepository } from './repositories/interface-category.repository';
import { PrismaCategoryRepository } from './repositories/prisma-category.repository';

@Module({
  controllers: [CategoriesController],
  providers: [
    CreateCategoriesService,
    FindAllCategoriesService,
    UpdateCategoryService,
    DeleteCategoryService,

    {
      provide: ICategoryRepository,
      useClass: PrismaCategoryRepository,
    },
  ],
})
export class CategoriesModule {}
