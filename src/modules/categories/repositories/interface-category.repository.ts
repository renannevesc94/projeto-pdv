import { Category } from '../category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';

export abstract class ICategoryRepository {
  abstract create(createCategoryDto: CreateCategoryDto): Promise<Category>;
  abstract findByDescription(description: string): Promise<Category | null>;
  abstract findById(id: number): Promise<Category | null>;
  abstract update(id: number, description: string): Promise<Category>;
  abstract findAll(): Promise<Category[]>;
  abstract delete(id: number): Promise<Category>;
}
