import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { ICategoryRepository } from '../repositories/interface-category.repository';

@Injectable()
export class CreateCategoriesService {
  constructor(readonly categoryRepository: ICategoryRepository) {}

  async findByDescription(description: string) {
    return this.categoryRepository.findByDescription(description);
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const descriptionExist = await this.findByDescription(
      createCategoryDto.description,
    );
    if (!descriptionExist) {
      return await this.categoryRepository.create(createCategoryDto);
    }
    throw new HttpException('Category already exists', HttpStatus.CONFLICT);
  }
}
