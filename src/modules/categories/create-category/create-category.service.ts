import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { ICreateCategoryRepository } from './repositories/interface-create-category.repository';

@Injectable()
export class CreateCategoriesService {
  constructor(readonly createCategoryRepository: ICreateCategoryRepository) {}
  async create(createCategoryDto: CategoryDto) {
    return await this.createCategoryRepository.create(createCategoryDto);
  }
}
