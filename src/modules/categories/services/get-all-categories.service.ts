import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from '../repositories/interface-category.repository';

@Injectable()
export class FindAllCategoriesService {
  constructor(readonly categoryRepository: ICategoryRepository) {}

  async findAll() {
    return await this.categoryRepository.findAll();
  }
}
