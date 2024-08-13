import { Injectable } from '@nestjs/common';
import { IUpdateCategoryRepository } from './repository/interface-update-category.repository';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class UpdateCategoryService {
  constructor(
    private readonly updateCategoryRepository: IUpdateCategoryRepository,
  ) {}

  async update(updateCategoryDto: UpdateCategoryDto) {
    const { id, description } = updateCategoryDto;
    return await this.updateCategoryRepository.update(id, description);
  }
}
