import { Module } from '@nestjs/common';
import { CreateCategoriesService } from './create-category/create-category.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { PrismaCreateCategoryRepository } from './create-category/repositories/prisma-create-category.repository';
import { ICreateCategoryRepository } from './create-category/repositories/interface-create-category.repository';

@Module({
  controllers: [CategoriesController],
  providers: [
    CreateCategoriesService,
    PrismaService,
    {
      provide: ICreateCategoryRepository,
      useClass: PrismaCreateCategoryRepository,
    },
  ],
})
export class CategoriesModule {}
