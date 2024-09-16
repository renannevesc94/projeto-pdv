import { PrismaService } from 'src/common/prisma/prisma.service';
import { IFindAllCategoriesRepository } from './interface-find-all-categories.repository';
import { Category } from '../../category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaFindAllCategoriesRepository
  implements IFindAllCategoriesRepository
{
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return await this.prisma.categories.findMany();
  }
}
