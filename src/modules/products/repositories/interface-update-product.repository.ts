import { UUID } from 'crypto';
import { Product } from '../products.entity';
import { UpdateProductDto } from '../dto/UpdateProductDto';

export abstract class IUpdateProductRepository {
  abstract update(
    productId: UUID,
    updateProductDto: UpdateProductDto,
  ): Promise<Product>;
}
