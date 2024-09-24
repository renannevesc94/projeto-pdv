import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { PrismaCreateCategoryRepository } from './repositories/prisma-create-category.repository';
import { ICreateCategoryRepository } from './repositories/interface-create-category.repository';
import { PrismaFindAllCategoriesRepository } from './repositories/prisma-find-all-categories.repository';
import { IFindAllCategoriesRepository } from './repositories/interface-find-all-categories.repository';
import { IUpdateCategoryRepository } from './repositories/interface-update-category.repository';
import { PrismaUpdateCategoryRepository } from './repositories/prisma-update-category.repository';
import { IDeleteCategoryRepository } from './repositories/interface-delete-category.repository';
import { PrismaDeleteCategoryRepository } from './repositories/prisma-delete-category.repository';
import { CreateCategoriesService } from './services/create-category.service';
import { FindAllCategoriesService } from './services/get-all-categories.service';
import { UpdateCategoryService } from './services/update-category.service';
import { DeleteCategoryService } from './services/delete-category.service';

@Module({
  controllers: [CategoriesController],
  providers: [
    CreateCategoriesService,
    FindAllCategoriesService,
    UpdateCategoryService,
    DeleteCategoryService,

    {
      provide: ICreateCategoryRepository,
      useClass: PrismaCreateCategoryRepository,
    },
    {
      provide: IFindAllCategoriesRepository,
      useClass: PrismaFindAllCategoriesRepository,
    },

    {
      provide: IUpdateCategoryRepository,
      useClass: PrismaUpdateCategoryRepository,
    },

    {
      provide: IDeleteCategoryRepository,
      useClass: PrismaDeleteCategoryRepository,
    },
  ],
})
export class CategoriesModule {}
