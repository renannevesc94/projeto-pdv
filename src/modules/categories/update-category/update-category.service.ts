import { Injectable } from '@nestjs/common';
import { IUpdateCategoryRepository } from './repository/interface-update-category.repository';

@Injectable()
export class UpdateCategoryService {
  constructor(
    private readonly updateCategoryRepository: IUpdateCategoryRepository,
  ) {}

  async update(id: number, description: string) {
    return await this.updateCategoryRepository.update(id, description);
  }
}
