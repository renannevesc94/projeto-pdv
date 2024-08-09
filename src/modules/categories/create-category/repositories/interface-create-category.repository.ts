import { CategoryDto } from '../dto/category.dto';

export abstract class ICreateCategoryRepository {
  abstract create(createCategoryDto: CategoryDto): Promise<CategoryDto>;
}
