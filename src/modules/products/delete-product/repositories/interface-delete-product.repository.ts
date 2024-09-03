import { UUID } from 'crypto';
import { Product } from '../../products.entity';

export abstract class IDeleteProductRepository {
  abstract delete(productId: UUID): Promise<Product>;
}
