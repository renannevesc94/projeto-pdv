import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { ICreateCategoryRepository } from './interface-create-category.repository';
import { Injectable } from '@nestjs/common';
import { Category } from '../category.entity';

@Injectable()
export class PrismaCreateCategoryRepository
  implements ICreateCategoryRepository
{
  constructor(private prisma: PrismaService) {}

  async findByDescription(description: string): Promise<Category | null> {
    return await this.prisma.categories.findFirst({
      where: { description },
    });
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.prisma.categories.create({
      data: createCategoryDto,
    });
  }
}
