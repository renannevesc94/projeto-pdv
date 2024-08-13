import { Injectable } from '@nestjs/common';
import { IDeleteCategoryRepository } from './repositories/interface-delete-category.repository';

@Injectable()
export class DeleteCategoryService {
  constructor(
    private readonly deleteCategoryRepository: IDeleteCategoryRepository,
  ) {}

  async delete(id: number) {
    return await this.deleteCategoryRepository.delete(id);
  }
}
