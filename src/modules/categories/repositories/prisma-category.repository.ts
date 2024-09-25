import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { ICategoryRepository } from './interface-category.repository';
import { Injectable } from '@nestjs/common';
import { Category } from '../category.entity';

@Injectable()
export class PrismaCategoryRepository implements ICategoryRepository {
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

  async findById(id: number): Promise<Category | null> {
    return await this.prisma.categories.findFirst({
      where: { id },
    });
  }

  async update(id: number, description: string): Promise<Category> {
    return await this.prisma.categories.update({
      where: {
        id,
      },
      data: {
        description,
      },
    });
  }

  async findAll(): Promise<Category[]> {
    return await this.prisma.categories.findMany();
  }

  async delete(id: number): Promise<Category> {
    return await this.prisma.categories.delete({ where: { id } });
  }
}
