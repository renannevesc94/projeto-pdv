import { PrismaService } from 'src/common/prisma/prisma.service';
import { IUpdateCategoryRepository } from './interface-update-category.repository';
import { Category } from '../../category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUpdateCategoryRepository
  implements IUpdateCategoryRepository
{
  constructor(private prisma: PrismaService) {}

  async update(id: number, description: string): Promise<Category> {
    return await this.prisma.category.update({
      where: {
        id,
      },
      data: {
        description,
      },
    });
  }
}
