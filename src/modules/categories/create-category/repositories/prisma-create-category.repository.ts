import { PrismaService } from 'src/common/prisma/prisma.service';
import { CategoryDto } from '../dto/category.dto';
import { ICreateCategoryRepository } from './interface-create-category.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCreateCategoryRepository
  implements ICreateCategoryRepository
{
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CategoryDto): Promise<CategoryDto> {
    return await this.prisma.category.create({
      data: createCategoryDto,
    });
  }
}
