import { Product } from '../products.entity';

export abstract class IFindAllProductsRepository {
  abstract findAllProducts(): Promise<Product[]>;
}
