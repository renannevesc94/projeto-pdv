import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { ICreateCategoryRepository } from './interface-create-category.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCreateCategoryRepository
  implements ICreateCategoryRepository
{
  constructor(private prisma: PrismaService) {}

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CreateCategoryDto> {
    return await this.prisma.category.create({
      data: createCategoryDto,
    });
  }
}
