import { CreateCategoryDto } from '../dto/create-category.dto';

export abstract class ICreateCategoryRepository {
  abstract create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CreateCategoryDto>;
}
