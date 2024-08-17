import { Category } from '../../category.entity';

export abstract class IUpdateCategoryRepository {
  abstract findByDescription(id: number): Promise<Category | null>;
  abstract update(id: number, description: string): Promise<Category>;
}
