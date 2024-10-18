import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { Product } from '../products.entity';
import { IProductRepository } from '../repositories/interface-product.repository';

@Injectable()
export class DeleteProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async deleteProduct(productId: UUID): Promise<Product> {
    return await this.productRepository.delete(productId);
  }
}
