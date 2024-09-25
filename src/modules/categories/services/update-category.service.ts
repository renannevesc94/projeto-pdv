import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { ICategoryRepository } from '../repositories/interface-category.repository';

@Injectable()
export class UpdateCategoryService {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const { description } = updateCategoryDto;
    const categoryExist = await this.categoryRepository.findById(id);

    if (!categoryExist) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
    return await this.categoryRepository.update(id, description);
  }
}
