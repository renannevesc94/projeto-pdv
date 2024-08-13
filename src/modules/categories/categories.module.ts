import { Module } from '@nestjs/common';
import { CreateCategoriesService } from './create-category/create-category.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { PrismaCreateCategoryRepository } from './create-category/repositories/prisma-create-category.repository';
import { ICreateCategoryRepository } from './create-category/repositories/interface-create-category.repository';
import { PrismaFindAllCategoriesRepository } from './find-all/repositories/prisma-find-all-categories.repository';
import { FindAllCategoriesService } from './find-all/get-all-categories.service';
import { IFindAllCategoriesRepository } from './find-all/repositories/interface-find-all-categories.repository';
import { UpdateCategoryService } from './update-category/update-category.service';
import { IUpdateCategoryRepository } from './update-category/repository/interface-update-category.repository';
import { PrismaUpdateCategoryRepository } from './update-category/repository/prisma-update-category.repository';
import { DeleteCategoryService } from './delete-category/delete-category.service';
import { IDeleteCategoryRepository } from './delete-category/repositories/interface-delete-category.repository';
import { PrismaDeleteCategoryRepository } from './delete-category/repositories/prisma-delete-category.repository';

@Module({
  controllers: [CategoriesController],
  providers: [
    PrismaService,
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
