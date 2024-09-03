import { Product } from '../../products.entity';
import { CreateProductDto } from '../dto/CreateProduct.dto';

export abstract class IcreateProductRepository {
  abstract create(productDate: CreateProductDto): Promise<Product>;
}
