import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ICreateCategoryRepository } from './repositories/interface-create-category.repository';

@Injectable()
export class CreateCategoriesService {
  constructor(readonly createCategoryRepository: ICreateCategoryRepository) {}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.createCategoryRepository.create(createCategoryDto);
  }
}
