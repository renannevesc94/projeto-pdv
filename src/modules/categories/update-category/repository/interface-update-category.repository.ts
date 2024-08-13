import { Category } from '../../category.entity';

export abstract class IUpdateCategoryRepository {
  abstract update(id: number, description: string): Promise<Category>;
}
