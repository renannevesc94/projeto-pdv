import { Product } from '../products.entity';
import { CreateProductDto } from '../dto/CreateProduct.dto';
import { UUID } from 'crypto';
import { UpdateProductDto } from '../dto/UpdateProductDto';
import { ProductDto } from 'src/common/dtos/product.dto';

export abstract class IProductRepository {
  abstract create(productDate: CreateProductDto): Promise<Product>;
  abstract findAllProducts(): Promise<Product[]>;
  abstract delete(productId: UUID): Promise<Product>;

  abstract update(
    productId: UUID,
    updateProductDto: UpdateProductDto,
  ): Promise<Product>;
  abstract getProductById(id: string): Promise<ProductDto>;
}
