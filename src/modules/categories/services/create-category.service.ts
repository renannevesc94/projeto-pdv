import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICreateCategoryRepository } from '../repositories/interface-create-category.repository';
import { CreateCategoryDto } from '../dto/create-category.dto';

@Injectable()
export class CreateCategoriesService {
  constructor(readonly createCategoryRepository: ICreateCategoryRepository) {}

  async findByDescription(description: string) {
    return this.createCategoryRepository.findByDescription(description);
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const descriptionExist = await this.findByDescription(
      createCategoryDto.description,
    );
    if (!descriptionExist) {
      return await this.createCategoryRepository.create(createCategoryDto);
    }
    throw new HttpException('Category already exists', HttpStatus.CONFLICT);
  }
}
