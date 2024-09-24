import { Category } from '../category.entity';
export abstract class IDeleteCategoryRepository {
  abstract delete(id: number): Promise<Category>;
}
