import { PrismaService } from 'src/common/prisma/prisma.service';
import { IDeleteCategoryRepository } from './interface-delete-category.repository';
import { Category } from '../../category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaDeleteCategoryRepository
  implements IDeleteCategoryRepository
{
  constructor(private prisma: PrismaService) {}
  async delete(id: number): Promise<Category> {
    return await this.prisma.categories.delete({ where: { id } });
  }
}
