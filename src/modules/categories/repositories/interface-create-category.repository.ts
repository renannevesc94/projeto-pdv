import { Category } from '../category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';

export abstract class ICreateCategoryRepository {
  abstract create(createCategoryDto: CreateCategoryDto): Promise<Category>;

  abstract findByDescription(description: string): Promise<Category | null>;
}
