import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from '../repositories/interface-category.repository';

@Injectable()
export class DeleteCategoryService {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async delete(id: number) {
    return await this.categoryRepository.delete(id);
  }
}
