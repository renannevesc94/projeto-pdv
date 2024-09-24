import { Category } from '../category.entity';

export abstract class IFindAllCategoriesRepository {
  abstract findAll(): Promise<Category[]>;
}
