import { Injectable } from '@nestjs/common';
import { IDeleteCategoryRepository } from './repositories/interface-delete-category.repository';

@Injectable()
export class DeleteCategorService {
  constructor(
    private readonly deleteCategoryRepository: IDeleteCategoryRepository,
  ) {}

  async delete(id: number) {
    return await this.deleteCategoryRepository.delete(id);
  }
}
