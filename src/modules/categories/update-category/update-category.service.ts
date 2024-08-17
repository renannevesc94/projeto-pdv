import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUpdateCategoryRepository } from './repository/interface-update-category.repository';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class UpdateCategoryService {
  constructor(
    private readonly updateCategoryRepository: IUpdateCategoryRepository,
  ) {}

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const { description } = updateCategoryDto;
    const categoryExist =
      await this.updateCategoryRepository.findByDescription(id);

    if (!categoryExist) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
    return await this.updateCategoryRepository.update(id, description);
  }
}
